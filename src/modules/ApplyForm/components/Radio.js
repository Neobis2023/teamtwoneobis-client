import React, { useState } from 'react'

const Radio = ({ question, options, sublabel, another=null }) => {
  const [selectedOption, setSelectedOption] = useState(""); 
  const [anotherOption, setAnotherOption] = useState(""); 
  const handleChange = (e) => {
    setSelectedOption(e.target.value)
  }

  const handleAnotherChange = (e) => {
    setSelectedOption("");
    setAnotherOption(e.target.value)
  }
  return (
    <div className='my-6'>
        <div className='text-[#662D91] font-semibold text-[clamp(0.8rem,_1.1vw,_1.3rem)] mb-1 flex flex-col'>
          {question}
          {sublabel && <label htmlFor='answer' className='text-[#662D91] font-medium text-[clamp(0.5rem,_0.83vw,_1.05rem)]'>{sublabel.description}</label>}
          </div> 
        <div className='flex flex-col gap-1'>
            {options.map((option, index) => {
                return <label className='flex gap-2 items-center hover:cursor-pointer text-[#403A64] font-medium text-[clamp(0.8rem,_1.1vw,_1.3rem)]' key={index} >
                    <input type='radio' value={option.text} checked={selectedOption === option.text} onChange={handleChange} className='hover:cursor-pointer '/>
                    {option.text}
                </label>
            })}
            {another && 
                <div className='flex gap-2'>
                    <label htmlFor='another' className='text-[#403A64] font-medium text-[clamp(0.8rem,_1.1vw,_1.3rem)]'>Другое: </label>
                    <input type='text' id='another' value={anotherOption} placeholder='Мой ответ' onChange={handleAnotherChange} className='border-b outline-none'/>
                </div>
            }
        </div>
    </div>
  )
}

export default Radio