import React, { useState } from "react";
import Navbar from "../Navbar/Navbar";
import { FaStar } from "react-icons/fa";

const RatingStar = () => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  const handlClickItem = (getCurrentIndex) => {
    setRating(getCurrentIndex);
  };
  const handlMouseHover = (getCurrentIndex) => {
    setHover(getCurrentIndex);
  };
  const handlMouseLeave = () => {
    setHover(rating);
  };

  return (
    <>
      <Navbar></Navbar>
      <div className="flex justify-center">
        {/*rating star area*/}
        {[...Array(5)].map((_, index) => {
          index += 1;
          return (
            <FaStar
              key={index}
              onClick={() => handlClickItem(index)}
              onMouseMove={() => handlMouseHover(index)}
              onMouseLeave={() => handlMouseLeave()}
              className={
                index <= (hover || rating)
                  ? "text-yellow-300"
                  : "text-slate-600"
              }
              size={40}
            />
          );
        })}
      </div>
    </>
  );
};

export default RatingStar;
