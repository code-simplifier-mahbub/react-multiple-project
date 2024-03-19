import React, { useState } from "react";
import data from "../Data/data";

const Accordion = () => {
  const [selected, setSelected] = useState(null);
  const [enableMultiSelection, setEnableMultiSelection] = useState(false);
  const [multiple, setMultiple] = useState([]);

  const handleSingleSelection = (getSelectedId) => {
    setSelected(getSelectedId === selected ? null : getSelectedId);
  };
  const handleMultiSelection = (getCurrentId) => {
    let copyMultiple = [...multiple];
    const findIndexOfCurrentId = copyMultiple.indexOf(getCurrentId);
    console.log(findIndexOfCurrentId);
    if (findIndexOfCurrentId === -1) {
      copyMultiple.push(getCurrentId);
    } else {
      copyMultiple.splice(findIndexOfCurrentId, 1);
    }
    setMultiple(copyMultiple);
  };

  console.log(selected, enableMultiSelection, multiple);

  return (
    <>
      <div className="h-screen flex justify-center items-center flex-col">
        <div className="mb-5">
          <button
            onClick={() => setEnableMultiSelection(!enableMultiSelection)}
            className="px-5 py-3 bg-gray-600 text-white font-semibold rounded-md shadow-lg"
          >
            Enable enableMultiSelection
          </button>
        </div>
        {data && data.length > 0 ? (
          data.map((item) => (
            <div key={item.id}>
              <div
                onClick={
                  enableMultiSelection
                    ? () => handleMultiSelection(item.id)
                    : () => handleSingleSelection(item.id)
                }
                className="bg-gray-600 mt-5 w-[600px] p-4 text-md font-bold text-white rounded-md"
              >
                <h3>{item.question}</h3>
                <span>+</span>
              </div>
              {enableMultiSelection
                ? multiple.indexOf(item.id) !== -1 && (
                    <div className="bg-gray-300 mt-2 p-4 text-gray-700 font-bold">
                      {item.answer}
                    </div>
                  )
                : selected === item.id && (
                    <div className="bg-gray-300 mt-2 p-4 text-gray-700 font-bold">
                      {item.answer}
                    </div>
                  )}
              {/* {selected === item.id || multiple.indexOf(item.id) !== -1 ? (
                <div className="bg-gray-300 mt-2 p-4 text-gray-700 font-bold">
                  {item.answer}
                </div>
              ) : null} */}
            </div>
          ))
        ) : (
          <div></div>
        )}
      </div>
    </>
  );
};

export default Accordion;
