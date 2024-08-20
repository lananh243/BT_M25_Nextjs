import React from "react";
interface Params {
  idProduct: string[];
}
interface Props {
  params: Params;
}

export default function Detail(props: Props) {
  const { params } = props;
  return <div>Trang chi tiết sản phẩm có id là : {params.idProduct[0]}</div>;
}
