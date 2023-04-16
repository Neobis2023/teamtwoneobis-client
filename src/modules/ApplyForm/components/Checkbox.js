import React from 'react'

const Checkbox = ({ id, question, options, label, checked, another, handleAnotherChange, sublabel, ...props }) => {
    
  return (
    <div className='my-6'>
    <div className='text-[#662D91] font-semibold text-[clamp(0.8rem,_1.1vw,_1.3rem)] flex flex-col mb-2'>
        {question}
        {sublabel && <label htmlFor='answer' className='text-[#662D91] font-medium text-[clamp(0.5rem,_0.83vw,_1.05rem)]'>{sublabel}</label>}
    </div> 
   
    <div className='flex flex-col gap-1'>
        {options.map((option, index) => {
            return <label className='flex gap-2 items-center hover:cursor-pointer text-[#403A64] font-medium text-[clamp(0.8rem,_1.1vw,_1.3rem)]' key={index} >
                <input type='checkbox' id={id} checked={checked}  className='hover:cursor-pointer ' {...props}/>
                {option.text}
                <span class="custom-checkbox"></span>
            </label>
        })}
        {/* {another && 
            <div className='flex gap-2'>
                <label htmlFor='another' className='text-[#403A64] font-medium text-[clamp(0.8rem,_1.1vw,_1.3rem)]'>Другое: </label>
                <input type='text' id='another' placeholder='Мой ответ' onChange={handleAnotherChange} className='border-b outline-none'/>
            </div>
        } */}
    </div>
</div>
  )
}

export default Checkbox