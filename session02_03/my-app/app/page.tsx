import React from "react";
import Bai1 from "./Baitap/bt1/Bai1";
import Bai2 from "./Baitap/bt2/Bai2";
import Bai3 from "./Baitap/bt3+bt4/Bai3";
import Bai5 from "./Baitap/bt5/Bai5";
import Bai6 from "./Baitap/bt6/Bai6";
import Bai7 from "./Baitap/bt7/Bai7";
import Bai8 from "./Baitap/bt8/Bai8";
import Bai9 from "./Baitap/bt9/Bai9";
import Bai10 from "./Baitap/bt10/Bai10";
import Bai11 from "./Baitap/bt11/Bai11";

export default function page() {
  return (
    <div>
      <h1>Bài tập 1</h1>
      <Bai1></Bai1>
      <h1>Bài tập 2</h1>
      <Bai2></Bai2>
      <h1>Bài tập 3+4</h1>
      <Bai3></Bai3>
      <h1>Bài tập 5</h1>
      <Bai5></Bai5>
      <h1>Bài tập 6</h1>
      <Bai6></Bai6>
      <h1>Bài tập 7</h1>
      <div className="flex m-6 gap-7">
        <Bai7 variant="primary" children="Primary"></Bai7>
        <Bai7 variant="success" children="Success"></Bai7>
        <Bai7 variant="warning" children="Warning"></Bai7>
        <Bai7 variant="danger" children="Danger"></Bai7>
      </div>
      <h1>Bài tập 8</h1>
      <Bai8></Bai8>
      <h1>Bài tập 9</h1>
      <div className="m-6">
        <Bai9 type="suc" children="Success Text"></Bai9>
        <br />
        <Bai9 type="info" children="Info Text"></Bai9>
        <br />
        <Bai9 type="warn" children="Warning Text"></Bai9>
        <br />
        <Bai9 type="error" children="Error Text"></Bai9>
      </div>
      <h1>Bài tập 10</h1>
      <div className="w-72 border-solid border-2 border-gray-300 m-6 text-center">
        <Bai10
          img="https://img.ws.mms.shopee.vn/6aba1d32171c02c7e0c3d59a5f75fbb8"
          title="Áo phông nam"
          content="Áo phông nam mát mẻ"
          children="Thêm vào giỏ hàng"
        ></Bai10>
      </div>
      <h1>Bài tập 11</h1>
      <Bai11></Bai11>
    </div>
  );
}
