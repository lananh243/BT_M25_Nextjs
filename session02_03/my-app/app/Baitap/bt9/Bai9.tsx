import React from "react";

export default function Bai9({ children, type }: any) {
  return (
    <div>
      <input className={type} placeholder={children} />
    </div>
  );
}
