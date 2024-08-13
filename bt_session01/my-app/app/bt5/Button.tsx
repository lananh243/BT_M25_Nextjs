import React from "react";
interface Props {
  text: string;
}
export default function Button(props: Props) {
  return (
    <>
      <button className=" font-bold py-2 px-4 rounded border-solid border-2 border-black">
        {props.text}
      </button>
    </>
  );
}
