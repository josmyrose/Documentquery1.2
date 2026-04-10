"use client";

import { useRouter } from "next/navigation";
import { removeToken } from "@/lib/auth";

export default function Workspace() {
  const router = useRouter();

  const logout = () => {
    removeToken();
    router.push("/login");
  };

  return (
    <div>
      <h1>Workspace</h1>
      <button onClick={logout}>Logout</button>
    </div>
  );
}