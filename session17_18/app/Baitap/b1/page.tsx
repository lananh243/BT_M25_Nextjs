import Image from "next/image";
import { title } from "process";
import React from "react";
const posts = [
  {
    id: 1,
    title: "Accusamus beatae ad facilis",
    thumbnailUrl:
      "https://bonn.vn/wp-content/uploads/2021/03/bo-hong-kem-dep.jpg",
  },
  {
    id: 2,
    title: "Reprehenderit est deserunt",
    thumbnailUrl:
      "https://bizweb.dktcdn.net/100/458/446/products/011024x1024.jpg?v=1656498966190",
  },
  {
    id: 3,
    title: "Officia porro iure quia",
    thumbnailUrl:
      "https://greengarden.vn/wp-content/uploads/2023/12/hoa-hong2-800x800.jpg",
  },
  {
    id: 4,
    title: "Qui eius qui autem sed",
    thumbnailUrl:
      "https://hoaonline24h.com/wp-content/uploads/2023/07/354973757_651417050363959_4763031743880617976_n-800x800.jpeg",
  },
  {
    id: 5,
    title: "Epudiandae iusto deleniti",
    thumbnailUrl:
      "https://lovearts.vn/wp-content/uploads/2021/03/10-bo-hoa-dep-nhat-lam-qua-tang-nhan-ngay-quoc-te-phu-nu-8-3-11.jpg",
  },
  {
    id: 6,
    title: "Iusto sunt nobis quasi veritatis",
    thumbnailUrl:
      "https://bizweb.dktcdn.net/100/164/753/files/camchuongxanhcalimeroxanh1-8393.jpg?v=1543546242172",
  },
];
export default function page() {
  return (
    <div>
      <h1 className="text-center">Danh sách bài viết</h1>
      <div className="flex flex-wrap">
        {posts.map((item, index) => (
          <div key={index} className="w-1/3 flex justify-center p-10">
            <div className="w-60 h-72 border-2 border-solid border-gray-100 shadow-md">
              <Image src={item.thumbnailUrl} width={300} height={100} alt="" />
              <b className="p-3">{item.title}</b>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
