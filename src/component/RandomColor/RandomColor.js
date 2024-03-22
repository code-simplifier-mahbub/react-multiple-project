import React, { useState } from "react";
import Navbar from "../Navbar/Navbar";

const RandomColor = () => {
  const [typeOfColor, setTypeOfColor] = useState("hex");
  const [color, setColor] = useState("#f4f4f4");

  const handleCreateRandomHexColor = () => {};
  const handleCreateRandomRgbColor = () => {};

  return (
    <>
      <Navbar></Navbar>
      <div
        style={{
          width: "100vw",
          height: "100vh",
          background: color,
        }}
        className="flex justify-center items-start pt-10 gap-5 "
      >
        <button
          onClick={
            typeOfColor === "hex"
              ? handleCreateRandomHexColor
              : handleCreateRandomRgbColor
          }
          className="bg-pink-700 font-semibold text-gray-100 mr-5 px-5 py-3 rounded-md"
        >
          Create Random Color
        </button>
        <button
          onClick={() => setTypeOfColor("hex")}
          className="bg-pink-700 font-semibold text-gray-100 mr-5 px-5 py-3 rounded-md"
        >
          Create HEX Color
        </button>
        <button
          onClick={() => setTypeOfColor("hex")}
          className="bg-pink-700 font-semibold text-gray-100 mr-5 px-5 py-3 rounded-md"
        >
          Create RGB Color
        </button>
      </div>
    </>
  );
};

export default RandomColor;
