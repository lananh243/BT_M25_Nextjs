"use client";
import React from "react";
import { useRouter } from "next/navigation";
export default function Hom() {
  const router = useRouter();
  const loginUser = () => {
    router.push("/auth/login");
  };
  const registerUser = () => {
    router.push("auth/register");
  };
  return (
    <div className="flex gap-6">
      Trang Home
      <button onClick={loginUser}>Login</button>
      <button onClick={registerUser}>Register</button>
    </div>
  );
}
