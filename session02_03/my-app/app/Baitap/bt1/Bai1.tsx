import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
export default function Bai1() {
  return (
    <>
      <div className="w-96 h-28 bg-slate-100 m-5 p-3">
        <p className="text-indigo-500 mx-5">Label</p>
        <div className="w-64 h-10 border-solid border-2 border-indigo-600 bg-slate-50 flex items-center mx-5">
          <input
            type="text"
            placeholder="Placeholder"
            className="border-none bg-slate-50 "
          />
          <FontAwesomeIcon icon={faEye} className="w-6 h-6"></FontAwesomeIcon>
        </div>
        <p className="mx-5">Helper Text</p>
      </div>
    </>
  );
}
