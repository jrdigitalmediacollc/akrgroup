import axios, { AxiosError, InternalAxiosRequestConfig } from "axios";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3001";

const api = axios.create({
  baseURL: API_URL,
  headers: { "Content-Type": "application/json" },
});

api.interceptors.request.use((config: InternalAxiosRequestConfig) => {
  const token = typeof window !== "undefined" ? localStorage.getItem("accessToken") : null;
  if (token && config.headers) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

api.interceptors.response.use(
  (response) => response,
  async (error: AxiosError) => {
    const originalRequest = error.config as InternalAxiosRequestConfig & { _retry?: boolean };
    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      try {
        const refreshToken = localStorage.getItem("refreshToken");
        const { data } = await axios.post(`${API_URL}/auth/refresh`, { refreshToken });
        localStorage.setItem("accessToken", data.accessToken);
        localStorage.setItem("refreshToken", data.refreshToken);
        if (originalRequest.headers) {
          originalRequest.headers.Authorization = `Bearer ${data.accessToken}`;
        }
        return api(originalRequest);
      } catch {
        localStorage.removeItem("accessToken");
        localStorage.removeItem("refreshToken");
        localStorage.removeItem("user");
        window.location.href = "/";
      }
    }
    return Promise.reject(error);
  }
);

export interface AuthResponse {
  accessToken: string;
  refreshToken: string;
  user: { id: string; email: string; name: string; role: string };
}

export interface User {
  id: string;
  email: string;
  name: string;
  phone?: string;
  role: string;
  isActive: boolean;
}

export interface Lead {
  id: string;
  name: string;
  email: string;
  phone?: string;
  source: string;
  status: string;
  notes?: string;
  advisor?: { id: string; name: string; email: string };
  createdAt: string;
}

export interface CalculatorResult {
  id: string;
  type: string;
  investmentMode?: string;
  inputs: any;
  outputs: any;
  referenceId: string;
  pdfUrl?: string;
  createdAt: string;
}

export interface Listing {
  id: string;
  title: string;
  description: string;
  type: string;
  price: number;
  currency: string;
  location: string;
  propertyType: string;
  bedrooms?: number;
  bathrooms?: number;
  area: number;
  status: string;
  images: string[];
}

export interface PaymentRequest {
  id: string;
  leadId: string;
  amount: number;
  currency: string;
  bankDetails: any;
  status: string;
  invoiceId: string;
  notes?: string;
}

export const authApi = {
  login: (email: string, password: string) => api.post<AuthResponse>("/auth/login", { email, password }),
  register: (data: { email: string; password: string; name: string; role: string }) =>
    api.post<AuthResponse>("/auth/register", data),
  refresh: (refreshToken: string) => api.post<AuthResponse>("/auth/refresh", { refreshToken }),
  logout: (refreshToken: string) => api.post("/auth/logout", { refreshToken }),
  profile: () => api.get<User>("/auth/profile"),
};

export const usersApi = {
  getAll: () => api.get<User[]>("/users"),
  getById: (id: string) => api.get<User>(`/users/${id}`),
  getAdvisors: () => api.get<User[]>("/users/role/advisors"),
  update: (id: string, data: Partial<User>) => api.patch<User>(`/users/${id}`, data),
};

export const leadsApi = {
  create: (data: { name: string; email: string; phone?: string; source: string; advisorId?: string }) =>
    api.post<Lead>("/leads", data),
  getAll: (params?: { status?: string; advisorId?: string; source?: string; page?: number; limit?: number }) =>
    api.get<{ data: Lead[]; total: number; page: number; limit: number; totalPages: number }>("/leads", { params }),
  getById: (id: string) => api.get<Lead>(`/leads/${id}`),
  update: (id: string, data: Partial<Lead>) => api.patch<Lead>(`/leads/${id}`, data),
  assignAdvisor: (id: string, advisorId: string) => api.post(`/leads/${id}/assign`, { advisorId }),
  exportCsv: (params?: any) => api.get("/leads/export/csv", { params, responseType: "blob" }),
};

export const calculatorsApi = {
  mortgage: (data: {
    loanAmount: number;
    interestRate: number;
    tenureMonths: number;
    insuranceCost?: number;
    adminCharges?: number;
  }) => api.post<CalculatorResult>("/calculators/mortgage", data),
  roi: (data: {
    investmentMode: string;
    principal: number;
    monthlyAmount: number;
    tenureMonths: number;
    expectedReturn: number;
    rentalYield?: number;
  }) => api.post<CalculatorResult>("/calculators/roi", data),
  mutualFund: (data: {
    investmentMode: string;
    lumpSumAmount: number;
    sipAmount: number;
    tenureMonths: number;
    expectedReturn: number;
  }) => api.post<CalculatorResult>("/calculators/mutual-fund", data),
  getMyResults: () => api.get<CalculatorResult[]>("/calculators"),
  getById: (id: string) => api.get<CalculatorResult>(`/calculators/${id}`),
  getPdfUrl: (id: string) => `${API_URL}/calculators/${id}/pdf`,
};

export const listingsApi = {
  getPublic: (params?: { type?: string; page?: number; limit?: number }) =>
    api.get<{ data: Listing[]; total: number }>("/listings/public", { params }),
  getAll: (params?: any) =>
    api.get<{ data: Listing[]; total: number; page: number; limit: number; totalPages: number }>("/listings", { params }),
  create: (data: Omit<Listing, "id" | "status" | "createdAt" | "updatedAt">) =>
    api.post<Listing>("/listings", data),
  getById: (id: string) => api.get<Listing>(`/listings/${id}`),
  approve: (id: string) => api.patch<Listing>(`/listings/${id}/approve`),
  reject: (id: string) => api.patch<Listing>(`/listings/${id}/reject`),
};

export const paymentsApi = {
  create: (data: {
    leadId: string;
    amount: number;
    currency?: string;
    bankDetails: any;
    notes?: string;
  }) => api.post<PaymentRequest>("/payments", data),
  getAll: (params?: any) =>
    api.get<{ data: PaymentRequest[]; total: number }>("/payments", { params }),
  getById: (id: string) => api.get<PaymentRequest>(`/payments/${id}`),
  update: (id: string, data: Partial<PaymentRequest>) =>
    api.patch<PaymentRequest>(`/payments/${id}`, data),
  getInvoice: (id: string) => api.get(`/payments/${id}/invoice`),
};

export const disclaimersApi = {
  getAll: () => api.get<Record<string, any[]>>("/disclaimers"),
  getByPage: (page: string) => api.get<any[]>(`/disclaimers/${page}`),
};

export const auditApi = {
  getAll: (params?: any) => api.get("/audit", { params }),
};

export default api;
