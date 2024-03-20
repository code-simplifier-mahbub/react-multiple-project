import React, { useState } from "react";

const RandomColor = () => {
  const [typeOfColor, setTypeOfColor] = useState("hex");
  const [color, setColor] = useState("#808080");

  const handleCreateRandomHexColor = () => {};
  const handleCreateRandomRgbColor = () => {};

  return (
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
  );
};

export default RandomColor;
