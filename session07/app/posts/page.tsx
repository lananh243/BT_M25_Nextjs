"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

export default function page() {
  const [value, setValue] = useState<any>();
  const router = useRouter();
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };
  const handleSearch = () => {
    router.push(`/posts?search=${value}`);
  };
  return (
    <div>
      <input type="text" value={value} onChange={handleChange} />
      <button onClick={handleSearch}>Tìm kiếm</button>
      {/* 
            1.Lấy giá trị người dùng nhập
            2.Tạo sự kiện khi nhấn button tìm kiếm
            3.1 sử dụng router.push
       */}
    </div>
  );
}
