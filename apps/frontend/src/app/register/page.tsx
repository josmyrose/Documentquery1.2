"use client";

import { useRouter } from "next/navigation";
import { AuthShell } from "@/components/auth/auth-shell";
import { setToken } from "@/lib/auth";

export default function RegisterPage() {
  const router = useRouter();

  function handleRegister(e: any) {
    e.preventDefault();
    setToken("demo-token");
    router.push("/");
  }

  return (
    <AuthShell
      title="Register"
      footerText="Already have account?"
      footerLink="Login"
      href="/login"
    >
      <form onSubmit={handleRegister} className="space-y-4">

        <input placeholder="Name" className="w-full p-3 bg-neutral-800 rounded" />
        <input placeholder="Email" className="w-full p-3 bg-neutral-800 rounded" />
        <input type="password" placeholder="Password" className="w-full p-3 bg-neutral-800 rounded" />

        <button className="w-full bg-white text-black p-3 rounded">
          Register
        </button>
      </form>
    </AuthShell>
  );
}