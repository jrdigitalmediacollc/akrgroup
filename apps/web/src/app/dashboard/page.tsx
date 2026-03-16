"use client";

import { DashboardPage } from "@/app/components/DashboardPage";
import { useAuth } from "@/app/auth-context";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Page() {
  const { userRole, openLoginModal } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!userRole) {
      openLoginModal();
      router.push("/");
    }
  }, [userRole, openLoginModal, router]);

  if (!userRole) return null;

  return <DashboardPage userRole={userRole} />;
}
