import React from "react";

import Company from "./bt4/Company";
import Button from "./bt5/Button";
import Header from "./bt7/Header";
import Footer from "./bt8/Footer";
import Icon from "./bt9/Icon";
import Img from "./bt12/Img";

export default function page() {
  return (
    <div>
      <h1>Bài tập 3</h1>
      <h3>Họ và tên : Nguyễn Văn A</h3>
      <br />
      <h1>Bài tập 4</h1>
      <Company />
      <br />
      <h1>Bài tập 5</h1>
      <Button text="Thêm mới"></Button>
      <Button text="Sửa"></Button>
      <Button text="Xóa"></Button>
      <br />
      <br />
      <h1>Bài tập 7</h1>
      <Header />
      <h1 className="text-xl">Trang chủ</h1>
      <Footer />
      <br />
      <h1>Bài tập 10</h1>
      <Icon />
      <br />
      <h1>Bài tập 11</h1>
      <br />
      <h1>Bài tập 12</h1>
      <Img />
    </div>
  );
}
