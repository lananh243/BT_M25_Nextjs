import React from "react";
import Image from "next/image";
export default function Bai5() {
  return (
    <>
      <div className="w-96 h-60 bg-white m-5 shadow-md">
        <div className="p-7">
          <Image
            src="https://static.vecteezy.com/system/resources/thumbnails/024/382/927/small_2x/caution-warning-sign-icon-symbol-transparent-background-free-png.png"
            alt=""
            width={40}
            height={40}
          ></Image>
          <p className="font-bold my-3">Delete blog post</p>
          <p className="text-gray-400">
            Are you sure you want to delete this post ? This action cannot be
            undone.
          </p>
          <br />
          <div className="w-80 flex justify-between">
            <button className=" border-solid border-2 border-gray-300 rounded h-9 p-2 flex items-center justify-center w-36">
              Cancel
            </button>
            <button className=" bg-red-600 rounded h-9 p-2 flex items-center justify-center w-36 text-white">
              Delete
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
