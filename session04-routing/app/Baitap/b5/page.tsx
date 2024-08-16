"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export default function Navbar() {
  const pathName = usePathname();
  return (
    <div className="flex gap-5">
      <Link
        className={pathName == "/Baitap/b5/home" ? "active" : ""}
        href={"/Baitap/b5/home"}
      >
        Home
      </Link>

      <Link
        className={pathName == "/Baitap/b5/about" ? "active" : ""}
        href={"/Baitap/b5/about"}
      >
        About
      </Link>

      <Link
        className={pathName == "/Baitap/b5/contact" ? "active" : ""}
        href={"/Baitap/b5/contact"}
      >
        Contact
      </Link>

      <Link
        className={pathName == "/Baitap/b5/login" ? "active" : ""}
        href={"/Baitap/b5/login"}
      >
        Login
      </Link>
    </div>
  );
}
