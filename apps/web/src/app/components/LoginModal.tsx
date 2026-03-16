"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/app/components/ui/dialog";
import { Button } from "@/app/components/ui/button";
import { Input } from "@/app/components/ui/input";
import { Label } from "@/app/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/app/components/ui/select";
import { useAuth } from "@/app/auth-context";
import { useRouter } from "next/navigation";

export function LoginModal() {
  const {
    showLoginModal,
    closeLoginModal,
    loginData,
    setLoginData,
    handleLogin,
    userRole,
  } = useAuth();
  const router = useRouter();

  const onLogin = () => {
    handleLogin();
    router.push("/dashboard");
  };

  return (
    <Dialog open={showLoginModal} onOpenChange={(open: any) => !open && closeLoginModal()}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Login</DialogTitle>
          <DialogDescription>
            Enter your email and password to login to your account
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              className="col-span-3"
              value={loginData.email}
              onChange={(e) =>
                setLoginData({ ...loginData, email: e.target.value })
              }
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              type="password"
              className="col-span-3"
              value={loginData.password}
              onChange={(e) =>
                setLoginData({ ...loginData, password: e.target.value })
              }
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="role">Role</Label>
            <Select
              value={loginData.role}
              onValueChange={(value) =>
                setLoginData({
                  ...loginData,
                  role: value as "admin" | "advisor" | "customer",
                })
              }
            >
              <SelectTrigger className="col-span-3">
                <SelectValue placeholder="Select a role" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="customer">Customer</SelectItem>
                <SelectItem value="advisor">Advisor</SelectItem>
                <SelectItem value="admin">Admin</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        <Button onClick={onLogin} className="mt-4">
          Login
        </Button>
      </DialogContent>
    </Dialog>
  );
}
