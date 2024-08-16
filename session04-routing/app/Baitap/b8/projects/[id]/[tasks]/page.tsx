import React from "react";
interface Task {
  id: string;
}
interface Props {
  params: Task;
}
export default function page(props: Props) {
  const params = props;
  return <div>Danh sách nhiệm vụ của dự án Id : {params.params.id}</div>;
}
