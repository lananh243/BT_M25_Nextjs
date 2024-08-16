import React from "react";
interface User {
  id: string;
}
interface Props {
  params: User;
}
export default function page(props: Props) {
  const params = props;
  return <div>User Id : {params.params.id}</div>;
}
