"use client";
import { useEffect, useState } from "react";

async function getPost() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();
  return data;
}

export default function Page() {
  // const posts = await getPost();
  const [post, setPosts] = useState([]);
  const [flag, setFlag] = useState<boolean>(false);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => {
        setPosts(data);
      })
      .catch((err) => console.log("Lỗi", err));
  }, [flag]);
  const handleClick = () => {
    setFlag(!flag);
  };
  return (
    <div className="p-6">
      <button className="bg-gray-200 w-24 h-8" onClick={handleClick}>
        Refresh
      </button>
      <br />
      <br />
      <h1 className="font-bold text-3xl">Bài tập 4 :</h1>
      <br />
      <h2 className="font-bold text-2xl">Danh sách Bài viết với Refresh</h2>
      {post.slice(0, 5).map((item: any) => (
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
