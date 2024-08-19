import { useParams } from "next/navigation";
import React from "react";
export default function Post(props: any) {
  const posts = [
    {
      content: "hoc nextjs",
      idPost: 1573,
      id: 1,
    },
    {
      content: "hoc lap trinh",
      idPost: 378,
      id: 2,
    },
    {
      content: "hoc code",
      idPost: 378,
      id: 2,
    },
  ];
  const { params } = props;
  console.log(1111, params);

  let postFilter = posts.filter((item) => {
    return item.id == params.id;
  });
  return (
    <div>
      Danh sách bài viết của User Id là : {params.id}
      {postFilter.map((item, index) => {
        return <li key={item.idPost}>{item.content}</li>;
      })}
    </div>
  );
}
