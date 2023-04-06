import React from 'react'

const Achievement = ({ imgUrl, name, amount }) => {
  return (
    <div className='flex flex-col gap-2 justify-center items-center border border-[#E6E0FF] rounded-[12px] p-3'>
        <img src={imgUrl} alt='achievement'/>
        <p className='text-[clamp(0.675rem,_0.972vw,_1.175rem)] text-white font-bold px-2 py-1 bg-[#00CEFF] rounded-[8px]'>Отличница</p>
        <p className='text-[#403A64] text-[clamp(0.55rem,_0.83vw,_1.05rem)]'>2 достижения</p>
    </div>
  )
}

export default Achievement