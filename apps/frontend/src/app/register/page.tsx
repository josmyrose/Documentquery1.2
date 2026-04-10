"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { AuthShell } from "@/components/auth/auth-shell";

export default function RegisterPage() {
  const router = useRouter();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleRegister(e: any) {
    e.preventDefault();

    const res = await fetch("http://127.0.0.1:8000/auth/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, password }),
      mode: "cors", 
    });

    if (res.ok) {
      alert("Registration successful!");
      router.push("/login"); // ✅ Correct flow
    } else {
      alert("Registration failed");
    }
  }

  return (
    <AuthShell
      title="Register"
      footerText="Already have account?"
      footerLink="Login"
      href="/login"
    >
      <form onSubmit={handleRegister} className="space-y-4">

        <input
          placeholder="Name"
          className="w-full p-3 bg-neutral-800 rounded"
          onChange={(e) => setName(e.target.value)}
        />

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
          Register
        </button>
      </form>
    </AuthShell>
  );
}