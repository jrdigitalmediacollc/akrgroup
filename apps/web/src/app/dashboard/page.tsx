"use client";

import { DashboardPage } from "@/app/components/DashboardPage";
import { useAuth } from "@/app/auth-context";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Page() {
  const { userRole, openLoginModal, isLoading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!isLoading && !userRole) {
      openLoginModal();
      router.push("/");
    }
  }, [userRole, openLoginModal, router, isLoading]);

  if (isLoading || !userRole) return null;

  return <DashboardPage userRole={userRole.toLowerCase() as "admin" | "advisor" | "customer"} />;
}
