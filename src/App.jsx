import { space } from "postcss/lib/list";
import { useEffect } from "react";
import { useState } from "react";
import { BillInput, PeopleInput, Results, TippingPercentage } from "./components";

function App() {
  const [bill, setBill] = useState("");
  const [people, setpeople] = useState("");
  const [tip, setTip] = useState("");
  const [tBill,setTBill] = useState('')
  const [error, setError] = useState(false);

  const validateInput = (value) => {
    const number = Number(value);

    if (!Number.isInteger(number) || number <= 0) {
      return false;
    } else {
      return true;
    }
  };

  // this is for handling the bill value and storing it in "bill"
  const handlePeopleNumber = (event) => {
    const value = event.target.value;

    if (validateInput(value)) {
      setpeople(value);
      setError(false);
      console.log(typeof bill);
    } else {
      setpeople(value);
      setError(true);
    }
  };

  const handleBillChange = (value) =>{
    setBill(value)
    console.log(value)
  }

  const calculatingTheTip = (value) => {
    const tipValue = (Number(bill) * value) / 100;
    setTip(tipValue);
  };

  const calculateTheTotalBill = () => {
    
    if(bill && people){
      const tBillValue = Number(bill) / Number(people) + tip
      setTBill(tBillValue)
    } else {
      setTBill(0)
    }
  }

 
 

  return (
    <div className="p-6 bg-white rounded-xl flex flex-wrap gap-[1.5rem] xs:w-[90vw] w-[100vw] md:w-[75vw] max-w-[900px] ">
      <div className="flex-1 w-full p-[1rem] flex flex-col  justify-between gap-12 min-w-[300px] ">
        <BillInput handleBillChange={handleBillChange} />
        <TippingPercentage /> 
        <PeopleInput />
      </div>
      <Results />
    </div>
  );
}

export default App;
