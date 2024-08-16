"use client";
import React from "react";
/*
    component trong next js có 2 loại
    1: client component
        Chạy đc ở môi trường trình duyệt tức là môi trường windom
    2: server component
        Chỉ chạy đc trong mtrg server
        mặc định khi tạo function thì nó mặc định là server component

*/
interface Product {
  idProduct: string;
}
interface Props {
  params: Product;
}
export default function page(props: Props) {
  // dùng destructoring
  const { params } = props;
  console.log("Giá trị props", props);

  return (
    <div>
      Trang chi tiết sản phẩm <br />
      Id sản phẩm là : {params.idProduct}
    </div>
  );
}
