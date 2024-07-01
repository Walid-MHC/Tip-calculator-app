import React, { useState } from "react";

const TippingPercentage = () => {
  const [selecetedOption, setSelectedOption] = useState("15");

  const handleRadioChange = (event) => {
    setSelectedOption(event.target.value);
  };
  return (
    <div>
        <h2 className="text-cyan-grayish mb-4">Select tip %</h2>
        <div className="grid grid-cols-2 grid-rows-3 xs:grid-rows-2 xs:grid-cols-3 gap-3">
      {["5", "10", "15", "20", "25", "50"].map((option, index) => (
        <label
          className={`  text-center text-[1.5rem] py-[.5rem] rounded-md ${
            selecetedOption === option ? 'bg-cyan-strong text-cyan-very-dark' : 'bg-cyan-very-dark text-white'} cursor-pointer`}
          htmlFor={option}
        >
          <input
            id={option}
            type="radio"
            checked={selecetedOption === option}
            value={option}
            onChange={handleRadioChange}
          />
          {option}%
        </label>
      ))}
    </div>
    </div>
    
  );
};

export default TippingPercentage;
