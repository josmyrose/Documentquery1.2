"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { AuthShell } from "@/components/auth/auth-shell";
import { setToken } from "@/lib/auth";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleLogin(e: any) {
    e.preventDefault();

    // TEMP login (we connect backend later)
    if (email && password) {
      setToken("demo-token");
      router.push("/");
    }
  }

  return (
    <AuthShell
      title="Login"
      footerText="No account?"
      footerLink="Register"
      href="/register"
    >
      <form onSubmit={handleLogin} className="space-y-4">

        <input
          placeholder="Email"
          className="w-full p-3 bg-neutral-800 rounded"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full p-3 bg-neutral-800 rounded"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button className="w-full bg-white text-black p-3 rounded">
          Login
        </button>
      </form>
    </AuthShell>
  );
}