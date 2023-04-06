import React from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import document from '../assets/images/document.svg'

const EditNavbar = () => {
    const location = useLocation();
    const activeVideoblog = location.pathname.startsWith('/admin/edit/videoblog');
  return (
    <section className='bg-[#FBFBFB] pt-6 pr-6 pb-6 rounded-l-[10px]'>
        <div className='flex flex-col text-[rgb(153,96,195)] text-[0.875rem] gap-2 w-full mx-auto sticky'>
            <NavLink to={'/admin/edit/content'} className='editLink flex gap-1 p-2 rounded-r-[5px]'>
                <img src={document} alt='document'/>
                Контент
            </NavLink>
            <NavLink to={'/admin/edit/mentoring-program'} className='editLink flex gap-1 p-2 rounded-r-[5px]'>
                <img src={document} alt='document'/>
                Менторская программа
            </NavLink>
            <NavLink to={'/admin/edit/videoblog/list'} className={`${activeVideoblog ? "active" : ""} editLink flex gap-1 p-2 rounded-r-[5px]`}>
                <img src={document} alt='document'/>
                Видеоблог
            </NavLink>
            <NavLink to={'/admin/edit/trainings'} className='editLink flex gap-1 p-2 rounded-r-[5px]'>
                <img src={document} alt='document'/>
                Тренинги
            </NavLink>
            <NavLink to={'/admin/edit/forums'} className='editLink flex gap-1 p-2 rounded-r-[5px]'>
                <img src={document} alt='document'/>
                Форумы
            </NavLink>
            <NavLink to={'/admin/edit/achievements'} className='editLink flex gap-1 p-2 rounded-r-[5px]'>
                <img src={document} alt='document'/>
                Достижения
            </NavLink>
        </div>
    </section>
  )
}

export default EditNavbar