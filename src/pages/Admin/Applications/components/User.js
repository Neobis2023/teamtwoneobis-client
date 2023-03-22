import React from 'react'
import { NavLink } from 'react-router-dom';

const User = ({ id, imgUrl, fullName, email, phoneNumber }) => {
    return (
      <div
        className={`${
          id % 2 === 0 ? "bg-[#F3F3F3]" : "bg-[#EAF0FF]"
        } rounded-[10px] grid grid-cols-[1fr_1fr_1fr_1fr_1fr] gap-4 items-center py-4 px-2 justify-between text-[0.875rem] my-3`}
      >
        <div className="flex items-center gap-2">
          <img src={imgUrl} alt="user" />
          <div>{fullName}</div>
        </div>
        <div>{email}</div>
        <div className='text-[#616161]'>{phoneNumber}</div>
        <div className="flex items-center gap-2">
          <button type='button' className='text-[#FFFFFF] font-bold bg-[#9960C3] p-2 rounded-[8px]'>Одобрить</button>
          <button type='button' className='text-[#9960C3] font-bold bg-transparent border border-[#9960C3] p-2 rounded-[8px]'>Отклонить</button>
        </div>
        <NavLink to={'/'} className={'justify-self-center underline'}>Открыть</NavLink>
      </div>
    );
  };
  

export default User