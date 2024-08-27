import React from "react";
// Hàm lấy dữ liệu
async function getUser() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  if (!response.ok) {
    throw new Error("Id không tồn tại");
  }
  const data = response.json();
  return data;
}

async function getPost() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();
  return data;
}

export default async function page() {
  const users = await getUser();
  const posts = await getPost();
  return (
    <div className="p-6">
      server component
      {users.map((item: any) => {
        return <li>{item.name}</li>;
      })}
      <h1 className="font-bold text-3xl">Bài tập 1 :</h1>
      <h2 className="font-bold text-2xl">Danh sách Bài viết (SSR)</h2>
      {posts.slice(0, 4).map((item: any) => {
        return (
          <div>
            <b>{item.title}</b>
            <p>{item.body}</p>
            <br />
            <hr />
          </div>
        );
      })}
    </div>
  );
}
