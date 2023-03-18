import React from 'react'
import { NavLink } from 'react-router-dom';
import logo from './assets/images/logo.svg';
import chart from './assets/images/chart.svg'
import edit from './assets/images/edit.svg'
import applications from './assets/images/applications.svg'
import users from './assets/images/users.svg'
import feedback from './assets/images/feedback.svg'
import logout from './assets/images/logout.svg'

const Sidebar = () => {
  return (
    <section className='bg-[#FDFDFD] px-8 w-[320px] h-screen min-h-[700px] flex flex-col'>
        <div className='h-[15%] flex items-center'>
            <img src={logo} alt='logo'/>
        </div>
        <nav className='h-[70%]'>
            <ul className='text-[#79768D] flex flex-col gap-6'>
              <li>
                <NavLink to={'/'} className='flex items-center gap-2'>
                  <img src={chart} alt='chart' className=''/>
                  <p className='text-[0.875rem] font-semibold'>Статистика</p>
                </NavLink>
              </li>
              <li>
                <NavLink to={'/'} className='flex items-center gap-2'>
                  <img src={edit} alt='chart' className='
                  '/>
                  <p className='text-[0.875rem] font-semibold'>Редактировать контент</p>
                </NavLink>
              </li>
              <li>
                <NavLink to={'/'} className='flex items-center gap-2'>
                  <img src={applications} alt='chart' className='
                  '/>
                  <p className='text-[0.875rem] font-semibold'>Заявки</p>
                </NavLink>
              </li>
              <li>
                <NavLink to={'/'} className='flex items-center gap-2'>
                  <img src={users} alt='chart' className='
                  '/>
                  <p className='text-[0.875rem] font-semibold'>Пользователи</p>
                </NavLink>
              </li>
              <li>
                <NavLink to={'/'} className='flex items-center gap-2'>
                  <img src={feedback} alt='chart' className='
                  '/>
                  <p className='text-[0.875rem] font-semibold'>Обратная связь</p>
                </NavLink>
              </li>
            </ul>
        </nav>
        <div className='h-[15%]'>
          <NavLink to='/' className={'flex gap-2 items-center text-[#79768D]'}>
            <p className='text-[0.875rem] font-semibold'>Выход</p>
            <img src={logout} alt='logout'/>
          </NavLink>
        </div>
    </section>
  )
}

export default Sidebar