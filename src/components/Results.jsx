import React from 'react'

const Results = () => {
  return (
    <div className='flex-1 bg-cyan-very-dark '>
        <div className='flex items-center justify-between'>
            <div>
                <p className='text-[1rem] text-white font-bold'>Tip amount</p>
                <p className='text-[14px] text-cyan-grayish font-bold'>/ person</p>
            </div>
            <span className='text-[2.5rem] text-cyan-strong font-bold p-[2rem]'>
                $4.27
            </span>
        </div>
        
    </div>
  )
}

export default Results