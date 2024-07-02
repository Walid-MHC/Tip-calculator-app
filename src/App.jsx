import { space } from "postcss/lib/list";
import { useEffect } from "react";
import { useState } from "react";
import { BillInput, PeopleInput, Results, TippingPercentage } from "./components";

function App() {
  const [bill, setBill] = useState(0);
  const [people, setpeople] = useState(1);
  const [tipPercentage, setTipPercentage] = useState(15);
  const [tip, setTip] = useState(0);
  const [tBill,setTBill] = useState(0)
  const [error, setError] = useState(false);

  const validateInput = (value) => {

    if(value === ''){
      return true
    }

    const number = Number(value);

    if (!Number.isInteger(number) || number <= 0) {
      return false;
    } else {
      return true;
    }
  };

  const handlePeopleNumber = (value) => {

    if (validateInput(value)) {
      setError(false);
      
    } else {
      setError(true);
    }

    setpeople(value);
  };

  const handleBillChange = (value) =>{
    setBill(value)
  }

  const handleTipPercentageChange = (value) =>{
    setTipPercentage(value)
  }

  const calculatingTheTip = () => {
    if(bill && people && tipPercentage && !error){
       const tipValue = ((Number(bill) * Number(tipPercentage)) / 100) / Number(people);
    setTip(tipValue);
    } else {
      setTip(0)
    }
   
  };

  const calculateTheTotalBill = () => {

    if(bill && people && tip && !error){
      const tBillValue = (Number(bill) / Number(people)) + Number(tip)
      setTBill(t => t = Number(tBillValue))
      
    } else {
      setTBill(0)

    }
    
    
  }

  useEffect(()=>{

    calculatingTheTip()

  },[bill,tipPercentage,people])

  useEffect(()=>{
    
    calculateTheTotalBill()
    
    console.log(people);
    console.log(bill);

  },[bill,tip,people])


  const handleReset = () => {
    setBill("");
    setpeople(1);
    setTip(0);
    setTBill(0);
    setError(false);
  };


 

  return (
    <div className="p-6 bg-white rounded-xl flex flex-wrap gap-[1.5rem] xs:w-[90vw] w-[100vw] md:w-[75vw] max-w-[900px] ">
      <div className="flex-1 w-full p-[1rem] flex flex-col  justify-between gap-12 min-w-[300px] ">
        <BillInput bill={bill} handleBillChange={handleBillChange} />
        <TippingPercentage handleTipPercentageChange={handleTipPercentageChange} /> 
        <PeopleInput people={people} handlePeopleNumber={handlePeopleNumber} error={error} />
      </div>
      <Results totalBill={tBill} tip={tip} handleReset={handleReset} />
    </div>
  );
}

export default App;
