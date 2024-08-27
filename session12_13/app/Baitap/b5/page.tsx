import React from "react";
async function fetchData() {
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/nonexistent-url"
  );
  if (!res.ok) {
    throw new Error("Xảy ra lỗi khi lấy dữ liệu");
  }

  const data = await res.json();
  return data;
}
export default async function Page() {
  let data;

  try {
    data = await fetchData();
  } catch (error: any) {
    return (
      <div className="p-6">
        <h1 className="text-3xl">Xử lý Lỗi với SSR</h1>
        <br />
        <p className="text-3xl">{error.message}</p>
      </div>
    );
  }

  return (
    <div className="p-6">
      <h1 className="font-bold text-3xl">Xử lý Lỗi với SSR</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}
