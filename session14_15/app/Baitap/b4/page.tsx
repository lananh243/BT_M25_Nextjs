import axios from "axios";
import React from "react";

async function errData() {
  try {
    const res = await axios.get("https://example.com/invalid-endpoint");
    return { data: res.data };
  } catch (error: any) {
    if (error.response) {
      return { error: error.response.status };
    }
  }
}
errData();
export default async function Page() {
  const result: any = await errData();

  if (result.error === 404) {
    return <div className="p-6">Lỗi trang 404 - Trang không tồn tại</div>;
  } else if (result.error === 500) {
    return <div>Lỗi 500 - Lỗi máy chủ</div>;
  }

  return <div>Dữ liệu đã được tải thành công</div>;
}
