import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <section className='w-[22%]'>
        <div className='text-[#403A64] text-[clamp(0.7rem,0.972vw,_1.1rem)] mb-2 uppercase'>Моя учетная запись</div>
        <div className='text-[#403A64] font-[clamp(0.8rem,_1.1vw,_1.3rem)] flex flex-col gap-2'>
            <NavLink className={`bg-[#F7F5FF] border px-4 py-2 rounded-[8px]`} to={'/'} >Профиль</NavLink>
            <NavLink to={'/'} className={'px-4 py-2'}>Прогресс</NavLink>
            <NavLink to={'/'} className={'px-4 py-2'}>Заявки</NavLink>
            <NavLink to={'/'} className={'px-4 py-2'}>Обратная связь</NavLink>
        </div>
        
    </section>
  )
}

export default Navbar