import React from "react";

const Results = () => {
  return (
    <div className="flex-1 flex flex-col justify-between bg-cyan-very-dark p-[1.5rem] xs:p-[2rem] rounded-lg  xs:min-w-[350px] ]">
      <div className="mb-12">
        <div className="flex items-center justify-between mb-6">
          <div>
            <p className="text-[14px] xs:text-[1rem] text-white font-bold">Tip amount</p>
            <p className="text-[13px] xs:text-[14px] text-cyan-grayish font-bold">/ person</p>
          </div>
          <span className="text-[2rem] xs:text-[2.5rem] text-cyan-strong font-bold">
            $4.27
          </span>
        </div>
        <div className="flex items-center justify-between">
          <div>
            <p className="text-[14px] xs:text-[1rem] text-white font-bold">Tip amount</p>
            <p className="text-[13px] xs:text-[14px] text-cyan-grayish font-bold">/ person</p>
          </div>
          <span className="text-[2rem] xs:text-[2.5rem] text-cyan-strong font-bold">
            $4.27
          </span>
        </div>
      </div>
      <button className="w-full uppercase text-[20px] text-cyan-very-dark font-bold bg-cyan-strong py-[14px] rounded-lg">Reset</button>
    </div>
  );
};

export default Results;
