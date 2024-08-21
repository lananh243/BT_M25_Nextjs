"use client";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useState } from "react";

export default function page() {
  const [value, setValue] = useState<any>();
  const router = useRouter();
  const searchValue = useSearchParams();
  const textValue = searchValue.get("search");
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };
  const handleSearch = () => {
    router.push(`/Baitap/b1/posts?search=${value}`);
  };
  return (
    <div>
      <h2>Bài tập 1 + 2 : </h2>
      <h3>Search Value : {textValue}</h3>
      <input
        type="text"
        value={value}
        onChange={handleChange}
        placeholder="Nhập nội dung tìm kiếm"
      />
      <button onClick={handleSearch}>Tìm kiếm</button>
    </div>
  );
}
