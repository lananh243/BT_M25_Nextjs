import React from "react";

export default function Bai7({ children, type = "button", variant }: any) {
  return (
    <div>
      <button type={type} className={variant}>
        {children}
      </button>
    </div>
  );
}
