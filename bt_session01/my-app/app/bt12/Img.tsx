import React from "react";
import Image from "next/image";

export default function Img() {
  return (
    <div>
      <Image
        src="https://rikkei.edu.vn/wp-content/uploads/2023/05/khoa-hoc-lap-trinh-rikkei-academy-1.jpg"
        alt=""
        width={900}
        height={400}
      />
    </div>
  );
}
