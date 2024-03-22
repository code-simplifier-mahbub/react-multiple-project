import React from "react";
import Navbar from "../Navbar/Navbar";

const Home = () => {
  return (
    <>
      <Navbar></Navbar>
      <div className="flex justify-center items-center w-[100vw] h-[100vh]">
        <div className="flex justify-center items-center gap-7">
          <h3 className="text-[100px] text-slate-700 shadow-md px-20 py-5 rounded-md">
            React 25 Project
          </h3>
        </div>
      </div>
    </>
  );
};

export default Home;
