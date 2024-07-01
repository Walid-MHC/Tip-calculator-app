import { space } from "postcss/lib/list";
import { useEffect } from "react";
import { useState } from "react";
import { BillInput, PeopleInput, Results, TippingPercentage } from "./components";

function App() {
 

  return (
    <div className="p-6 bg-white rounded-xl flex gap-[1.5rem] max-w-[920px]">
      <div>
        <BillInput />
        <TippingPercentage /> 
        <PeopleInput />
      </div>
      <Results />
    </div>
  );
}

export default App;
