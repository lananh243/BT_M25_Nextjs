"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
const Breadcrumbs = () => {
  const pathname = usePathname();
  const pathParts = pathname.split("/").filter((part) => part);
  return (
    <nav aria-label="breadcrumbs" className="p-6">
      <Link href={"/"}>Home / </Link>
      {pathParts.map((part, index) => {
        const href = "/" + pathParts.slice(0, index + 1).join("/");
        return <Link href={href}>{part}</Link>;
      })}
    </nav>
  );
};
export default Breadcrumbs;
