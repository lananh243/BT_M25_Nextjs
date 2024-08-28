import React from "react";
async function getPost(id: string) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const data = await res.json();
  return data;
}
export default async function page(props: any) {
  const { params } = props;
  const post = await getPost(params.id);
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold">Bài tập 2 : </h1>
      Chi tiết bài viết <br />
      <b>{post.title}</b>
      <p>{post.body}</p>
    </div>
  );
}
