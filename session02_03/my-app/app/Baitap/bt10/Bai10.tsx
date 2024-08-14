import React from "react";
import Image from "next/image";
interface Props {
  content: string;
  title: string;
  img: any;
  children: string;
}
export default function Bai10(props: Props) {
  return (
    <div>
      <Image src={props.img} alt="" width={300} height={100}></Image>
      <br />
      <h1 className="font-bold">{props.title}</h1>
      <br />
      <span>{props.content}</span>
      <br />
      <br />
      <button className="w-60 h-10 bg-blue-600 rounded-lg text-white">
        {props.children}
      </button>
    </div>
  );
}
