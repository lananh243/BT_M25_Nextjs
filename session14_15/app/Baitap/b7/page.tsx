import React from "react";
async function getData() {
  const res = await fetch("https://fakestoreapi.com/products");
  const data = res.json();
  return data;
}
export default async function page() {
  const products = await getData();
  return (
    <div className="p-6">
      <p className="text-xl font-bold">Danh sách sản phẩm</p>
      {products.map((item: any) => {
        return (
          <ul>
            <li>{item.title}</li>
            <li>{item.price}</li>
            <b>****************************</b>
          </ul>
        );
      })}
    </div>
  );
}
