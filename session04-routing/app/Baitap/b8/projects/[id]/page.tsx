import React from "react";
export default function Task(props: any) {
  const { params } = props;
  return <div>Trang chi tiết dự án có Id : {params.id}</div>;
}
