"use client";
import React, { useEffect, useState } from "react";

function getPost() {
  return fetch("https://jsonplaceholder.typicode.com/posts")
    .then((res) => res.json())
    .catch((error) => {
      console.error("Error fetching posts:", error);
      return [];
    });
}

export default function Page() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getPost().then((data) => setPosts(data));
  }, []);
  const refreshPost = () => {
    getPost().then((data) => setPosts(data));
  };

  return (
    <div className="p-6">
      <button className="bg-gray-200 w-24 h-8" onClick={refreshPost}>
        Refresh
      </button>
      <h1 className="font-bold text-3xl">Bài tập 4 :</h1>
      <h2 className="font-bold text-2xl">Danh sách Bài viết với Refresh</h2>
      {posts.slice(0, 5).map((item: any) => (
        <div key={item.id}>
          <b>{item.title}</b>
          <p>{item.body.slice(0, 100)}...</p>
          <br />
          <hr />
        </div>
      ))}
    </div>
  );
}
