"use client";

import Link from "next/link";

export function AuthShell({
  title,
  children,
  footerText,
  footerLink,
  href,
}: any) {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white flex items-center justify-center">
      <div className="w-full max-w-md bg-[#111] p-8 rounded-2xl border border-neutral-800">

        <h1 className="text-2xl font-semibold">{title}</h1>

        <div className="mt-6">{children}</div>

        <p className="text-sm text-neutral-400 mt-6">
          {footerText}{" "}
          <Link href={href} className="text-white">
            {footerLink}
          </Link>
        </p>
      </div>
    </div>
  );
}