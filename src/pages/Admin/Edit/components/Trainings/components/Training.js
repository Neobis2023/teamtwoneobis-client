import React from 'react'
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { setTrainingAddQuestionnaire } from '../../../../../../helpers/reduxToolkit/toolkitSlice';

const Training = ({ id, eventDate, title, time, location }) => {
    // for date
    const newDate = new Date(eventDate);
    const options = { day: "numeric", month: "numeric", year: "numeric" };
    const date = newDate.toLocaleDateString("en-GB", options);

    // dispatch
    const dispatch = useDispatch();
  return (
    <div className='flex flex-col gap-4 border-b border-[#662D91] py-1 pb-4 mb-4'>
        <p className='text-[#79768D]'>Название: <span className='text-[#000]'>{title}</span></p>
        <p className='text-[#79768D]'>Дата: <span className='text-[#000]'>{date}</span></p>
        <p className='text-[#79768D]'>Время: <span className='text-[#000]'>{time}</span></p>
        <p className='text-[#79768D]'>Место: <span className='text-[#000]'>{location}</span></p>
        <div className='flex gap-2'>
            <NavLink to={`${id}/add-questionnaire`} className='text-[#9960C3] rounded-[8px] border border-[ #9960C3] py-1 px-2' onClick={() => dispatch(setTrainingAddQuestionnaire(title))}>Добавить анкету</NavLink>
            <button className='text-[#9960C3] rounded-[8px] border border-[ #9960C3] py-1 px-2'>Удалить</button>
        </div>
    </div>
  )
}

export default Training