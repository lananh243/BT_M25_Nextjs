import React from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
export default function Bai6() {
  return (
    <>
      <div className="w-3/4 h-20 bg-blue-700 flex items-center justify-around">
        <div>
          <Image
            src="https://www.websiteessentials.com.au/wp-content/uploads/2023/03/logoipsum-logo-6.png"
            alt=""
            width={160}
            height={160}
          ></Image>
        </div>
        <div className=" flex gap-12">
          <b className="text-white">Home</b>
          <b className="text-gray-300">Updates</b>
          <b className="text-gray-300">Services</b>
          <b className="text-gray-300">Features</b>
          <b className="text-gray-300">About Us</b>
        </div>
        <div>
          <FontAwesomeIcon
            icon={faUserCircle}
            className="w-12 h-12 text-white"
          ></FontAwesomeIcon>
        </div>
      </div>
    </>
  );
}
