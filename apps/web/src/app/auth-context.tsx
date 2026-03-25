"use client";

import { createContext, useContext, useState, useEffect, useCallback, ReactNode } from "react";
import axios from "axios";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3001";

type UserRole = "ADMIN" | "ADVISOR" | "CUSTOMER" | "LISTER" | null;

interface User {
  userId?: string;
  id?: string;
  email: string;
  name?: string;
  role: string;
}

interface AuthContextType {
  user: User | null;
  userRole: UserRole;
  accessToken: string | null;
  showLoginModal: boolean;
  loginData: { email: string; password: string; role: "ADMIN" | "ADVISOR" | "CUSTOMER" };
  setLoginData: (data: { email: string; password: string; role: "ADMIN" | "ADVISOR" | "CUSTOMER" }) => void;
  openLoginModal: () => void;
  closeLoginModal: () => void;
  handleLogin: () => Promise<void>;
  handleLogout: () => Promise<void>;
  isLoading: boolean;
}

const AuthContext = createContext<AuthContextType | null>(null);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [accessToken, setAccessToken] = useState<string | null>(null);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
    role: "CUSTOMER" as "ADMIN" | "ADVISOR" | "CUSTOMER",
  });
  const [isLoading, setIsLoading] = useState(true);

  const openLoginModal = () => setShowLoginModal(true);
  const closeLoginModal = () => setShowLoginModal(false);

  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    const savedUser = localStorage.getItem("user");
    if (token && savedUser) {
      setAccessToken(token);
      setUser(JSON.parse(savedUser));
    }
    setIsLoading(false);
  }, []);

  const handleLogin = useCallback(async () => {
    try {
      const response = await axios.post(`${API_URL}/auth/login`, {
        email: loginData.email,
        password: loginData.password,
      });
      const { accessToken: token, user: userData } = response.data;
      setAccessToken(token);
      setUser(userData);
      localStorage.setItem("accessToken", token);
      localStorage.setItem("refreshToken", response.data.refreshToken);
      localStorage.setItem("user", JSON.stringify(userData));
      setShowLoginModal(false);
      setLoginData({ email: "", password: "", role: "CUSTOMER" });
    } catch (error) {
      console.error("Login failed:", error);
      throw error;
    }
  }, [loginData]);

  const handleLogout = useCallback(async () => {
    try {
      const refreshToken = localStorage.getItem("refreshToken");
      if (refreshToken && accessToken) {
        await axios.post(
          `${API_URL}/auth/logout`,
          { refreshToken },
          { headers: { Authorization: `Bearer ${accessToken}` } }
        );
      }
    } catch (error) {
      console.error("Logout error:", error);
    } finally {
      setAccessToken(null);
      setUser(null);
      localStorage.removeItem("accessToken");
      localStorage.removeItem("refreshToken");
      localStorage.removeItem("user");
    }
  }, [accessToken]);

  return (
    <AuthContext.Provider
      value={{
        user,
        userRole: user?.role as UserRole ?? null,
        accessToken,
        showLoginModal,
        loginData,
        setLoginData,
        openLoginModal,
        closeLoginModal,
        handleLogin,
        handleLogout,
        isLoading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within AuthProvider");
  }
  return context;
}
