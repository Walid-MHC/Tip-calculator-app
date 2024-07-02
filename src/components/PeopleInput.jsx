import React from 'react'
import { dollarIcon, personIcon } from '../assets'

const PeopleInput = ({handlePeopleNumber, error, people}) => {
    
    const handleChange = (event) => {
        const value = event.target.value;
        handlePeopleNumber(value)
       
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
          value={people === 1 ? '' : people}
          onChange={handleChange}
        />
        <img className="h-[1.25rem] absolute left-2 top-1/2 -translate-y-1/2" src={personIcon} alt="person" />
      </div>
      <div className='h-[1rem] mt-2'>
        {error ? <p className='text-red-500 text-[14px]'>enter an integer greater than 0</p> : null }
      </div>
      
    </div>
  )
}

export default PeopleInput