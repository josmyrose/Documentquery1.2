"use client";

import { Card } from "@/components/ui/card";
import { useRouter } from "next/navigation";
import { removeToken } from "@/lib/auth";

type AppSidebarProps = {
  children: React.ReactNode;
};

export function AppSidebar({ children }: AppSidebarProps) {
  const router = useRouter();

  return (
    <div className="flex flex-col h-full space-y-6">

      {/* Top Card */}
      <Card className="overflow-hidden">
        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-900 text-sm font-bold text-white">
            DQ
          </div>
          <div>
            <h1 className="text-lg font-semibold text-slate-900">
              DocuQuery AI
            </h1>
            <p className="text-sm text-slate-500">
              Document intelligence workspace
            </p>
          </div>
        </div>
      </Card>

      {/* Existing content (Upload + Documents) */}
      {children}

      {/* 🔥 Logout Button (ADD HERE) */}
      <button
        onClick={() => {
          removeToken();
          router.push("/login");
        }}
        className="mt-auto w-full rounded-xl border border-slate-200 bg-white p-3 text-sm font-medium hover:bg-slate-100"
      >
        Logout
      </button>

    </div>
  );
}