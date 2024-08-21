"use client";
import { useSearchParams } from "next/navigation";
import React from "react";

export default function page() {
  const search = useSearchParams();
  const userName = search.get("name");
  console.log("name", userName);

  const address = search.get("address");
  console.log("address", address);

  return <div>Trang chi tiết sản phẩm</div>;
}
