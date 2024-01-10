import React, { useState } from "react";
import data from "./data";

const Accordion = () => {
  const [selected, setSelected] = useState("");
  const [toggleButton, settoggleButton] = useState("+");

  const handleAccordian = (currentId) => {
    const toggleValue = currentId !== selected ? "-" : "+";
    settoggleButton(toggleValue);
    setSelected(currentId === selected ? null : currentId);
  };

  return (
    <div className="h-screen flex justify-center items-center flex-col">
      {data && data.length > 0 ? (
        data.map((dataItem) => (
          <div key={dataItem.id}>
            <div
              onClick={() => handleAccordian(dataItem.id)}
              className="bg-gray-200 mt-5 w-[600px] p-4 text-md font-bold text-gray-400 rounded-md"
            >
              <h3>{dataItem.question} there</h3>
              <span className="font-bold text-4xl">{toggleButton}</span>
            </div>
            {selected !== dataItem.id ? null : (
              <div className="bg-gray-200 mt-2 p-4 text-gray-600 font-bold">
                {dataItem.answer}
              </div>
            )}
          </div>
        ))
      ) : (
        <div>
          <h5>data not found</h5>
        </div>
      )}
    </div>
  );
};

export default Accordion;
