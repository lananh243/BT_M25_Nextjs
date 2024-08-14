import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
export default function Bai3() {
  return (
    <>
      <div className="w-1/3 bg-white border-solid border-4 border-gray-300 rounded m-6">
        <h1 className="text-2xl font-bold my-6 text-center">Form Sign Up</h1>
        <div className="w-10/12 h-10 m-auto">
          <label htmlFor="">Name</label>
          <br />
          <input
            type="text"
            placeholder="Your name"
            className="w-full bg-slate-200 border-solid border-2 border-indigo-600 rounded h-9 p-2"
          />
        </div>
        <br />
        <br />
        <div className="w-10/12 h-10 m-auto">
          <label htmlFor="">Email</label>
          <br />
          <input
            type="text"
            placeholder="you@company.com"
            className="w-full bg-slate-200 border-solid border-2 border-indigo-600 rounded h-9 p-2"
          />
        </div>
        <br />
        <br />
        <div className="w-10/12 h-10 m-auto">
          <label htmlFor="">Phone number</label>
          <br />
          <div className="w-full bg-slate-200 border-solid border-2 border-indigo-600 rounded h-9 p-2 flex items-center">
            <div className="flex items-center">
              <span>Us</span>
              <FontAwesomeIcon
                icon={faAngleDown}
                className="w-5 h-5 mx-2"
              ></FontAwesomeIcon>
            </div>
            <div>
              <span className="mx-3 text-gray-400">+84 (123) 456 789</span>
            </div>
          </div>
        </div>
        <br />
        <br />
        <div className="w-10/12 h-10 m-auto">
          <label htmlFor="">Address</label>
          <br />
          <textarea
            placeholder="Tell us a little about the project..."
            className="w-full h-24 bg-slate-200 border-solid border-2 border-indigo-600 rounded p-2"
          />
        </div>
        <br />
        <br />
        <div className="w-2/4 h-10 mx-10 my-16">
          <label htmlFor="">Skill</label>
          <br />
          <div className="flex justify-between">
            <ul>
              <li>
                <input type="checkbox" />
                HTML
              </li>
              <li>
                <input type="checkbox" />
                UX design
              </li>
              <li>
                <input type="checkbox" />
                CSS
              </li>
            </ul>
            <ul>
              <li>
                <input type="checkbox" />
                Javascript
              </li>
              <li>
                <input type="checkbox" />
                ReactJS
              </li>
              <li>
                <input type="checkbox" />
                Java
              </li>
            </ul>
          </div>
        </div>
        <br />
        <div className="w-10/12 h-10 m-auto">
          <button className="w-full bg-blue-600 border-solid border-2 border-indigo-600 rounded h-9 p-2 flex items-center justify-center text-white">
            Sign up
          </button>
        </div>
      </div>
    </>
  );
}
