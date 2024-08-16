import Link from "next/link";
import React from "react";

export default function page() {
  return (
    <div>
      Menu thanh điều hướng
      <Link href={"/navigation/news"}>News</Link>
    </div>
  );
}
