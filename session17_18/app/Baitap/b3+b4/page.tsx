import Image from "next/image";
import React from "react";

export default function page() {
  return (
    <div>
      <h1 className="p-6 text-3xl font-bold">Bài tập 3 + 4 : </h1>
      <div className="flex justify-center p-10 gap-10">
        <Image
          src={
            "https://locphuc.com.vn/Content/Images/022023/DSR0918BRW.WG01A/nhan-kim-cuong-DSR0918BRW-WG01A-g1.jpg"
          }
          width={300}
          height={300}
          alt=""
        ></Image>

        <Image
          src={
            "https://down-vn.img.susercontent.com/file/6fed113456130530063ba0d6fb830e8b"
          }
          width={300}
          height={300}
          alt=""
        ></Image>
      </div>
    </div>
  );
}
