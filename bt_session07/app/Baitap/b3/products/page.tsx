"use client";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useState } from "react";

export default function Form() {
  const [name, setName] = useState<any>();
  const [category, setCategory] = useState<any>();
  const router = useRouter();
  const search = useSearchParams();
  const valueName = search.get("name");
  const valueCategory = search.get("category");
  const handleName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };
  const handleCategory = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCategory(e.target.value);
  };
  const handleSearch = () => {
    router.push(`/Baitap/b3/products?name=${name}&category=${category}`);
  };
  return (
    <div>
      <h2>Bài tập 3 : </h2>
      <b>Tên sản phẩm : {valueName}</b>
      <br />
      <br />
      <b>Danh mục : {valueCategory}</b>
      <br />
      <br />
      <input
        style={{ padding: "7px" }}
        type="text"
        placeholder="Tìm kiếm theo tên"
        value={name}
        onChange={handleName}
      />
      <br />
      <br />
      <input
        type="text"
        style={{ padding: "7px" }}
        placeholder="Tìm kiếm theo danh mục"
        value={category}
        onChange={handleCategory}
      />
      <br />
      <br />
      <button
        style={{
          padding: "7px",
          backgroundColor: "black",
          borderRadius: "5px",
          color: "white",
        }}
        onClick={handleSearch}
      >
        Tìm kiếm
      </button>
    </div>
  );
}
