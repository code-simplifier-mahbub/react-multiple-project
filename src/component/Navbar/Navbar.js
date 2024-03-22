import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="w-full h-[50px] p-5 bg-slate-300 flex justify-between items-center shadow-lg">
      <h5 className="text-[22px] font-bold text-blue-600">
        <Link to="/">Easy Coder</Link>
      </h5>
      <ul className="flex">
        <li className="">
          <Link
            className="text-blue-700 font-semibold hover:bg-blue-600 hover:text-slate-200 transition-all duration-300 py-3 px-4"
            to="/"
          >
            Home
          </Link>
        </li>
        <li className="">
          <Link
            className="text-blue-700 font-semibold hover:bg-blue-600 hover:text-slate-200 transition-all duration-300 py-3 px-4"
            to="/accordian"
          >
            Accordian
          </Link>
        </li>
        <li className="">
          <Link
            className="text-blue-700 font-semibold hover:bg-blue-600 hover:text-slate-200 transition-all duration-300 py-3 px-4"
            to="/random-color"
          >
            Random Color
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
