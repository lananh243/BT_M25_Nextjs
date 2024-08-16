import React from "react";
interface Id {
  id: string;
}
interface Props {
  params: Id;
}
export default function page(props: Props) {
  const params = props;
  return <div>Trang chi tiết dự án có Id : {params.params.id}</div>;
}
