"use client";

import { useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import { isAuthenticated } from "@/lib/auth";

export function AuthGuard({ children }: any) {
  const router = useRouter();
  const path = usePathname();

  useEffect(() => {
    if (!isAuthenticated() && path !== "/login" && path !== "/register") {
      router.push("/login");
    }
  }, [path]);

  return children;
}