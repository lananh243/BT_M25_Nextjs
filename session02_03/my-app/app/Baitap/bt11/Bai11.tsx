import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretUp } from "@fortawesome/free-solid-svg-icons";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
export default function Bai11() {
  return (
    <>
      <div className="w-1/3 h-80 bg-slate-200 m-6">
        <span className="m-6">Môn học</span>

        <div className="w-11/12 m-auto h-10 bg-white border-solid border-2 border-gray-400 rounded">
          <div className="w-11/12 h-10 flex justify-between m-auto items-center">
            <b>HTML</b>
            <FontAwesomeIcon
              className="w-6 h-6"
              icon={faCaretUp}
            ></FontAwesomeIcon>
          </div>
        </div>
        <div className="w-11/12 m-auto h-56 bg-white border-solid border-2 border-indigo-600 rounded mt-2">
          <div className="mt-6">
            <div className="w-11/12 h-10 flex justify-between m-auto items-center">
              <label htmlFor="">HTML</label>
              <FontAwesomeIcon
                icon={faCheck}
                className="w-6 h-6"
              ></FontAwesomeIcon>
            </div>
            <div className="w-11/12 h-10 flex justify-between m-auto items-center">
              <label htmlFor="">CSS</label>
              <span></span>
            </div>
            <div className="w-11/12 h-10 flex justify-between m-auto items-center">
              <label htmlFor="">JavaScript</label>
              <span></span>
            </div>
            <div className="w-11/12 h-10 flex justify-between m-auto items-center">
              <label htmlFor="">NextJS</label>
              <span></span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
