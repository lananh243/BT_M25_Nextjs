import React from "react";

export default function UerDetail(props: any) {
  const { params } = props;
  return <div>Trang thông tin chi tiết user : {params.idUser}</div>;
}
