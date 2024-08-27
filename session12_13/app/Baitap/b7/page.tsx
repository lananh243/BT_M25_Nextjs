import React from "react";
async function detailPost(id: number) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const data = await res.json();
  return data;
}
export default async function page() {
  const detail = await detailPost(13);
  return (
    <div className="p-6">
      <h1 className="font-bold text-3xl">Bài tập 7 :</h1>
      <h2 className="font-bold text-2xl">Chi tiết Bài viết</h2>
      <b>{detail.title}</b>
      <p>{detail.body}</p>
    </div>
  );
}
