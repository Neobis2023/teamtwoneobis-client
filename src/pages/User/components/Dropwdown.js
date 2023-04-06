import React, { useState } from 'react'

const Dropwdown = ({ label, options, value, ...props}) => {
    const [open, setOpen] = useState(false);
    const [currentOption, setCurrentOption] = useState('Мужской');
    return (
        <label className='mb-2' onClick={() => setOpen((current) => !current)}>
            <p className='text-[#662D91] font-bold text-[0.75rem] mb-1'>{label}</p>
            <input {...props} placeholder={label} value={value} className='bg-[#FAF7FF] p-2 rounded-[8px] outline-none'/>
            {open && <div>open</div>}
        </label>
      )
}

export default Dropwdown