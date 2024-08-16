import { useParams } from "next/navigation";
import React from "react";
interface Post {
  id: string;
}
interface Props {
  params: Post;
}
export default function page(props: Props) {
  const params = props;
  return <div>Danh sách bài viết của User Id là : {params.params.id}</div>;
}
