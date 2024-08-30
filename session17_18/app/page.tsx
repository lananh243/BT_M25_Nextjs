import React from "react";
import Image from "next/image";
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Học lập trình nextjs",
  description: "Học nextjs cơ bản, đơn giản, basic",
};
export default function Home() {
  return (
    <div>
      <img
        width={200}
        height={200}
        src="https://gaubongonline.vn/wp-content/uploads/2024/04/Capybara-banh-hamburger-1.jpg"
        alt="capypara"
      />
      <Image
        height={200}
        width={200}
        src={
          "https://gaubongonline.vn/wp-content/uploads/2024/04/Capybara-banh-hamburger-1.jpg"
        }
        alt="capypara"
      ></Image>
      <Image
        height={200}
        width={200}
        src={
          "https://down-vn.img.susercontent.com/file/sg-11134201-22100-cycwdpb05wivf7"
        }
        alt="gấu dâu"
      ></Image>
    </div>
  );
}
