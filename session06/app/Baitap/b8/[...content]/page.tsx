"use client";
import React from "react";
interface Params {
  content: string[];
}
interface Props {
  params: Params;
}
export default function page(props: Props) {
  const { params } = props;
  console.log(props);
  const date = [params.content[1], params.content[2], params.content[3]];
  const formatDate = date.join("/");
  return (
    <div>
      Bạn đang xem {params.content[0]} với đường dẫn: {formatDate}
    </div>
  );
}
