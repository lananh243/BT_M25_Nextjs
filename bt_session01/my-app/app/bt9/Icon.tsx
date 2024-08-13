import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { faSave } from "@fortawesome/free-solid-svg-icons";
export default function Icon() {
  return (
    <>
      <h1 className="font-bold text-lg ">Danh sách các icon</h1>
      <div className="flex">
        <FontAwesomeIcon icon={faCoffee} className="w-20 h-20 ml-8" />
        <FontAwesomeIcon icon={faEye} className="w-20 h-20 ml-8" />
        <FontAwesomeIcon icon={faSave} className="w-20 h-20 ml-8" />
      </div>
    </>
  );
}
