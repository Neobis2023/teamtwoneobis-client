import React, { useEffect, useState } from 'react'
import arrowDown from '../assets/images/arrow-down.svg'

const Dropwdown = ({ label, options, value, onChange, ...props}) => {
    const [open, setOpen] = useState(false);
    const [currentOption, setCurrentOption] = useState(value);
    const [currentGender, setCurrentGender] = useState("");
    const [currentRegion, setCurrentRegion] = useState("");
    useEffect(() => {
        setCurrentOption(value);
    }, [value])
    return (
        <div className='mb-2 relative hover:cursor-pointer w-[48%]' onClick={() => setOpen((current) => !current)}>
            <p className='text-[#662D91] font-bold text-[0.75rem] mb-1'>{label}</p>
            <div {...props} className='bg-[#FAF7FF] p-2 rounded-[8px] outline-none flex gap-2 justify-between'>
                {currentOption}
                <img src={arrowDown} alt='arrow down'/>
            </div>
            {open && <div className='border rounded-md px-2 py-1 absolute z-20 left-0 top-[62px] bg-[#fff]'>
                {options.map((option) => {
                    return <p onClick={() => {
                        setCurrentOption(option)
                        onChange(option)
                    }
                        
                }>{option}</p>
                })}
                {/* <p onClick={() => setCurrentOption('Женский')}>Женский</p>    
                <p  onClick={() => setCurrentOption('Мужской')}>Мужской</p>     */}
            </div>}
        </div>
      )
}

export default Dropwdown