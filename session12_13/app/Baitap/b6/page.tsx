"use client";
import React, { useEffect, useState } from "react";

export default function Page() {
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);
  const postsPerPage = 5;

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then(setPosts);
  }, []);

  const totalPage = Math.ceil(posts.length / postsPerPage);
  const currentPost = posts.slice(
    (page - 1) * postsPerPage,
    page * postsPerPage
  );

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold">Phân Trang với CSR</h1>
      <br />
      <ul>
        {currentPost.map((post: any) => (
          <li key={post.id}>
            <b>{post.title}</b>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
      <br />
      <div className="flex w-96 h-8 items-center gap-10">
        <button
          className="border-2 border-solid border-gray-200 w-24 rounded-sm h-8"
          onClick={() => setPage(page - 1)}
          disabled={page === 1}
        >
          Quay lại
        </button>
        <button
          className="border-2 border-solid border-gray-200 w-24 rounded-sm h-8"
          onClick={() => setPage(page + 1)}
          disabled={page === totalPage}
        >
          Tiếp
        </button>
        <p>
          Trang {page}/{totalPage}
        </p>
      </div>
    </div>
  );
}
