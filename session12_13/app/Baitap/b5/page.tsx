import React from "react";
async function fetchData() {
  try {
    const res = await fetch(
      "https://jsonplaceh1111older.typicode.com/nonexistent-url"
    );
    const data = await res.json();
    return data;
  } catch (error: any) {
    console.log("Lỗi", error);
    return "Xảy ra lỗi khi lấy dữ liệu";
  }
}
export default async function page() {
  const data = await fetchData();
  return (
    <div className="p-6">
      <h1 className="font-bold text-3xl">Xử lý Lỗi với SSR : {data}</h1>
    </div>
  );
}
