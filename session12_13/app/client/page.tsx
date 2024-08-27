"use client";
import React, { useEffect, useState } from "react";

export default function page() {
  const [users, setUser] = useState([]);
  // Đi call api lấy dữ liệu để đi render
  useEffect(() => {
    // đi gọi api
    const getData = async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      const data = await res.json();
      setUser(data);
    };
    getData();
  }, []);
  return (
    <div className="p-6">
      render dữ liệu phía client
      {/*  đối vs client lần đầu tiên hiển thị ra ngoài trình duyệt*/}
      <h1 className="text-3xl font-bold">Bài tập 3 : </h1>
      {users.map((item: any) => {
        return <li key={item.id}>{item.username}</li>;
      })}
    </div>
  );
}
