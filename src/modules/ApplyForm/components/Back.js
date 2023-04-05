import React from 'react'
import { NavLink } from 'react-router-dom'
import arrowLeft from '../assets/images/arrow-left.svg'

const Back = ({ className }) => {
  return (
    <NavLink to={'/trainings'} className={`flex gap-2 text-[#403A64] font-medium text-[clamp(0.8rem,_1.1vw,_1.2rem)] items-center ${className}`}>
        <img src={arrowLeft} alt='arrow-left'/>
        <div>Назад к событиям</div>
    </NavLink>
  )
}

export default Back