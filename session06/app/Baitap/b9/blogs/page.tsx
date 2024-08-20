"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import slug from "slug";

export default function Blog() {
  const blogs = [
    {
      id: 1,
      title: "Lập trình cơ bản C",
      image:
        "https://topdev.vn/blog/wp-content/uploads/2019/04/ung-dung-cua-lap-trinh-c.jpg",
    },
    {
      id: 2,
      title: "Lập trình Java core",
      image:
        "https://resources.iostream.co/content/article/tong-quan-ve-ngon-ngu-lap-trinh-java/thumbnail-hd/blob-1600511467219@960x540.jpg",
    },
    {
      id: 3,
      title: "Lập trình PHP",
      image:
        "https://cdn2.fptshop.com.vn/unsafe/Uploads/images/tin-tuc/172619/Originals/PHP-8.jpg",
    },
    {
      id: 4,
      title: "Lập trình ReactJS",
      image:
        "https://cdn2.fptshop.com.vn/unsafe/Uploads/images/tin-tuc/167276/Originals/React-la-gi-1.png",
    },
  ];

  return (
    <div>
      <h1>Bài 9 :</h1>
      <h2 className="text-center font-bold text-2xl">Danh sách bài viết</h2>
      <div className="flex flex-wrap justify-center gap-10">
        {blogs.map((item, index) => {
          return (
            <div key={index} className="my-10">
              <div className="w-56 h-72 border-solid border-2 border-gray-300 rounded-sm">
                <Image
                  src={item.image}
                  width={230}
                  height={230}
                  alt={item.title}
                />
                <br />
                <hr />
                <br />
                <b className="flex justify-center">{item.title}</b>
                <br />
                <div className="border-solid border-2 border-gray-300 w-36 h-8 rounded-md flex justify-center items-center m-auto">
                  <Link
                    href={`/Baitap/b9/blogs/${slug(item.title, {
                      lower: true,
                    })}`}
                  >
                    Xem chi tiết
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
