import React from "react";
import { dollarIcon } from "../assets";

const BillInput = ({handleBillChange}) => {
    const handleChange = (event) =>{
        const value = event.target.value
        handleBillChange(value)
    }

  return (
    <div className="">
      <label className="text-cyan-grayish" htmlFor="bill" >Bill</label>
      <div className="relative w-full mt-[.5rem]">
        <input
          className="block text-right w-full text-[1.5rem] p-[1rem] bg-cyan-very-light-grayish rounded-md"
          type="number"
          id="bill"
          placeholder="$00.0"
          onChange={handleChange}
        />
        <img className="h-[1.25rem] absolute left-2 top-1/2 -translate-y-1/2" src={dollarIcon} alt="$" />
      </div>
    </div>
  );
};

export default BillInput;
