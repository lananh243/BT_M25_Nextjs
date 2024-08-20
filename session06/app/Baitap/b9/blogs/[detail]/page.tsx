import React from "react";
import slug from "slug";
export default function Detail(props: any) {
  const blogs = [
    {
      id: 1,
      title: "Lập trình cơ bản C",
      image:
        "https://topdev.vn/blog/wp-content/uploads/2019/04/ung-dung-cua-lap-trinh-c.jpg",
      time: 100,
      author: "Trần Minh Cường",
    },
    {
      id: 2,
      title: "Lập trình Java core",
      image:
        "https://resources.iostream.co/content/article/tong-quan-ve-ngon-ngu-lap-trinh-java/thumbnail-hd/blob-1600511467219@960x540.jpg",
      time: 60,
      author: "Trần Minh Cường",
    },
    {
      id: 3,
      title: "Lập trình PHP",
      image:
        "https://cdn2.fptshop.com.vn/unsafe/Uploads/images/tin-tuc/172619/Originals/PHP-8.jpg",
      time: 90,
      author: "Trịnh Quốc Hai",
    },
    {
      id: 4,
      title: "Lập trình ReactJS",
      image:
        "https://cdn2.fptshop.com.vn/unsafe/Uploads/images/tin-tuc/167276/Originals/React-la-gi-1.png",
      time: 120,
      author: "Trịnh Quốc Hai",
    },
  ];
  const { params } = props;
  let blogFilter = blogs.filter((item) => {
    return slug(item.title, { lower: true }) == params.detail;
  });
  return (
    <div>
      {blogFilter.map((item) => {
        return (
          <div className="p-6">
            <p>Id : {item.id}</p>
            <p>Tiêu đề : {item.title}</p>
            <p>Số giờ học : {item.time}</p>
            <p>Tác giả : {item.author}</p>
          </div>
        );
      })}
    </div>
  );
}
