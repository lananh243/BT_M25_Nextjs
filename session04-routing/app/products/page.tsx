"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export default function Products() {
  const pathName = usePathname();
  return (
    <div>
      <Link
        className={pathName == "/products/ao" ? "active" : ""}
        href={"/products/ao"}
      >
        ban ao
      </Link>

      <Link
        className={pathName == "/products/giay" ? "active" : ""}
        href={"/products/giay"}
      >
        ban giay
      </Link>
    </div>
  );
}
