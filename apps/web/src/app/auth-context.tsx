"use client";

import { createContext, useContext, useState, ReactNode } from "react";

type UserRole = "admin" | "advisor" | "customer" | null;

interface AuthContextType {
  userRole: UserRole;
  showLoginModal: boolean;
  loginData: {
    email: string;
    password: string;
    role: "admin" | "advisor" | "customer";
  };
  setLoginData: (data: {
    email: string;
    password: string;
    role: "admin" | "advisor" | "customer";
  }) => void;
  openLoginModal: () => void;
  closeLoginModal: () => void;
  handleLogin: () => void;
  handleLogout: () => void;
}

const AuthContext = createContext<AuthContextType | null>(null);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [userRole, setUserRole] = useState<UserRole>(null);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
    role: "customer" as "admin" | "advisor" | "customer",
  });

  const openLoginModal = () => setShowLoginModal(true);
  const closeLoginModal = () => setShowLoginModal(false);

  const handleLogin = () => {
    if (loginData.email && loginData.password) {
      setUserRole(loginData.role);
      setShowLoginModal(false);
      setLoginData({ email: "", password: "", role: "customer" });
    }
  };

  const handleLogout = () => {
    setUserRole(null);
  };

  return (
    <AuthContext.Provider
      value={{
        userRole,
        showLoginModal,
        loginData,
        setLoginData,
        openLoginModal,
        closeLoginModal,
        handleLogin,
        handleLogout,
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
