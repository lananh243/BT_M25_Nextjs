import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons/faArrowLeft";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
export default function Bai8() {
  return (
    <>
      <div className="w-3/4 h-20 bg-white flex items-center justify-center gap-5 border-solid border-2 border-gray-300 shadow-md">
        <button className="w-28 h-10 border-solid border-2 border-gray-300 flex items-center justify-center rounded-md">
          <FontAwesomeIcon
            icon={faArrowLeft}
            className="w-6 h-6"
          ></FontAwesomeIcon>
          <span>Prev</span>
        </button>
        <button className="w-10 h-10 border-solid border-2 border-gray-300 flex items-center justify-center rounded-md">
          1
        </button>
        <button className="w-10 h-10 border-solid border-2 border-gray-300 flex items-center justify-center rounded-md">
          2
        </button>
        <button className="w-10 h-10 border-solid border-2 border-gray-300 flex items-center justify-center rounded-md bg-blue-600 text-white">
          3
        </button>
        <button className="w-10 h-10 border-solid border-2 border-gray-300 flex items-center justify-center rounded-md">
          4
        </button>
        <button className="w-10 h-10 border-solid border-2 border-gray-300 flex items-center justify-center rounded-md">
          5
        </button>
        <button className="w-10 h-10 border-solid border-2 border-gray-300 flex items-center justify-center rounded-md">
          6
        </button>
        <button className="w-10 h-10 border-solid border-2 border-gray-300 flex items-center justify-center rounded-md">
          7
        </button>
        <button className="w-10 h-10 border-solid border-2 border-gray-300 flex items-center justify-center rounded-md">
          ...
        </button>
        <button className="w-10 h-10 border-solid border-2 border-gray-300 flex items-center justify-center rounded-md">
          20
        </button>
        <button className="w-28 h-10 border-solid border-2 border-gray-300 flex items-center justify-center rounded-md">
          <span>Next</span>
          <FontAwesomeIcon
            icon={faArrowRight}
            className="w-6 h-6"
          ></FontAwesomeIcon>
        </button>
      </div>
    </>
  );
}
