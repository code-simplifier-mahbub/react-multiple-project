import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="flex justify-center items-center w-[100vw] h-[100vh] bg-gray-500">
      <div className="flex justify-center items-center gap-7">
        <Link
          className="shadow-md text-white border border-solid border-[#fff]/10 rounded-md px-5 py-3 bg-[#fff]/10"
          to="/"
        >
          Home
        </Link>
        <Link
          className="shadow-md text-white border border-solid border-[#fff]/10 rounded-md px-5 py-3 bg-[#fff]/10"
          to="/accordian"
        >
          Accordian
        </Link>
        <Link
          className="shadow-md text-white border border-solid border-[#fff]/10 rounded-md px-5 py-3 bg-[#fff]/10"
          to="/random-color"
        >
          Random Color
        </Link>
      </div>
    </div>
  );
};

export default Home;
