import React from 'react'
import { useNavigate } from 'react-router-dom'
import arrowLeft from '../assets/images/arrow-left.svg'

const Back = ({ className }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(-1); // navigates to the previous page
  };
  return (
    <button type='button' className={`flex gap-2 text-[#403A64] font-medium text-[clamp(0.8rem,_1.1vw,_1.2rem)] items-center ${className}`} onClick={handleClick}>
        <img src={arrowLeft} alt='arrow-left'/>
        <div>Назад</div>
    </button>
  )
}

export default Back