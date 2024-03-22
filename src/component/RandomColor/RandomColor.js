import React, { useState } from "react";
import Navbar from "../Navbar/Navbar";

const RandomColor = () => {
  const [typeOfColor, setTypeOfColor] = useState("hex");
  const [color, setColor] = useState("#949398FF");

  const randomColorUtility = (length) => {
    return Math.floor(Math.random() * length);
  };

  const handleCreateRandomHexColor = () => {
    const hex = [1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    let hexColor = "#";
    for (let i = 0; i < 6; i++) {
      hexColor += hex[randomColorUtility(hex.length)]; //this code get specific array position data like B
      // hexColor = hexColor + hex[randomColorUtility(hex.length)];
    }
    setColor(hexColor);
  };

  const handleCreateRandomRgbColor = () => {
    const rgbColor = `rgb(${randomColorUtility(256)}, ${randomColorUtility(
      256
    )}, ${randomColorUtility(256)})`;
    setColor(rgbColor);
  };

  return (
    <>
      <Navbar></Navbar>
      <div
        style={{
          width: "100vw",
          height: "100vh",
          background: color,
        }}
      >
        <div className="flex justify-center items-start pt-10 gap-5 ">
          <button
            onClick={() => setTypeOfColor("hex")}
            className="bg-pink-700 font-semibold text-gray-100 mr-5 px-5 py-3 rounded-md"
          >
            Create HEX Color
          </button>
          <button
            onClick={() => setTypeOfColor("rgb")}
            className="bg-pink-700 font-semibold text-gray-100 mr-5 px-5 py-3 rounded-md"
          >
            Create RGB Color
          </button>
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
        </div>
        <div className="flex justify-center items-center mt-24 text-[100px] text-white">
          {color}
        </div>
      </div>
    </>
  );
};

export default RandomColor;
