import React from 'react'
import { dollarIcon, personIcon } from '../assets'

const PeopleInput = () => {

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

  return (
    <div className="">
      <label className="text-cyan-grayish" htmlFor="people">Number of people</label>
      <div className="relative w-full mt-[.5rem]">
        <input
          className="block text-right w-full text-[1.5rem] p-[1rem] bg-cyan-very-light-grayish rounded-md"
          type="number"
          id="people"
          placeholder="1"
        />
        <img className="h-[1.25rem] absolute left-2 top-1/2 -translate-y-1/2" src={personIcon} alt="person" />
      </div>
    </div>
  )
}

export default PeopleInput