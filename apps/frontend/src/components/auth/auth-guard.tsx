"use client";

import { useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import { isAuthenticated } from "@/lib/auth";

export function AuthGuard({ children }: any) {
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const auth = isAuthenticated();

    // ✅ Allow public routes
    const publicRoutes = ["/login", "/register"];

    // 🚫 If NOT logged in → block protected routes
    if (!auth && !publicRoutes.includes(pathname)) {
      router.push("/login");
    }

    // ✅ If logged in → prevent going back to login/register
    if (auth && publicRoutes.includes(pathname)) {
      router.push("/workspace");
    }
  }, [pathname]);

  return children;
}