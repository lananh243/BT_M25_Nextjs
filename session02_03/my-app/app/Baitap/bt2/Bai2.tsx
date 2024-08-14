import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-solid-svg-icons";
import { faCaretUp } from "@fortawesome/free-solid-svg-icons";
export default function Bai2() {
  return (
    <>
      <div className="w-1/3 h-96 bg-slate-200 m-6">
        <span className="m-6">Input Label</span>

        <div className="w-11/12 m-auto h-10 bg-white border-solid border-2 border-gray-400 rounded">
          <div className="w-11/12 h-10 flex justify-between m-auto items-center">
            <FontAwesomeIcon
              className="w-6 h-6"
              icon={faClock}
            ></FontAwesomeIcon>
            <FontAwesomeIcon
              className="w-6 h-6"
              icon={faCaretUp}
            ></FontAwesomeIcon>
          </div>
        </div>
        <div className="w-11/12 m-auto h-72 bg-white border-solid border-2 border-indigo-600 rounded mt-2">
          <div className="mt-6">
            <div className="w-11/12 h-10 flex justify-between m-auto items-center">
              <label htmlFor="">Label</label>
              <input type="checkbox" />
            </div>
            <div className="w-11/12 h-10 flex justify-between m-auto items-center">
              <label htmlFor="">Label</label>
              <input type="checkbox" />
            </div>
            <div className="w-11/12 h-10 flex justify-between m-auto items-center">
              <label htmlFor="">Label</label>
              <input type="checkbox" />
            </div>
            <div className="w-11/12 h-10 flex justify-between m-auto items-center">
              <label htmlFor="">Label</label>
              <input type="checkbox" />
            </div>
          </div>

          <div className="w-11/12 h-10 flex justify-between m-auto mt-10">
            <button className=" w-48 border-solid border-2 border-indigo-600 rounded">
              Clear
            </button>
            <button className=" w-48 border-solid border-2 border-indigo-600 rounded">
              Apply
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
