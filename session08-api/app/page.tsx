import fs from "fs";
import path from "path";

export default function Page() {
  const filePath = path.join(process.cwd(), "./app/api/data/product.json");
  const data = JSON.stringify(
    { message: "Thêm và Lấy sản phẩm thành công" },
    null,
    4
  ); // Nội dung để ghi vào file
  fs.writeFileSync(filePath, data, "utf8");

  const readData = fs.readFileSync(filePath, "utf8");
  console.log(readData);

  return <div>page</div>;
}
