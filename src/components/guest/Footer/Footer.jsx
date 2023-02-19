import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../../images/logo.svg';
import lineFooter from '../../../images/line-footer.png';
import linkedin from '../../../images/linkedin.svg';
import youtube from '../../../images/youtube.svg';
import instagram from '../../../images/instagram.svg';


const Footer = () => {
  return (
    <footer className='pt-20'>
        <div className="myWrapper">
            <div className='grid grid-cols-4 gap-4 mb-6'>
                <NavLink to='/'>
                    <img src={logo} alt="logo" className='w-[60%] h-[100%] min-w-[170px] max-w-[200px] mx-auto my-auto'/>
                </NavLink>
                <div className='relative'>
                    <div className='flex flex-col w-fit mx-auto gap-4'>
                        <NavLink to='/' className='text-[#292D32] font-semibold'>Менторство</NavLink>
                        <NavLink to='/' className='text-[#292D32] font-semibold'>Видеоблог</NavLink>
                        <NavLink to='/' className='text-[#292D32] font-semibold'>Тренинги</NavLink>
                        <NavLink to='/' className='text-[#292D32] font-semibold'>Форум</NavLink>
                        <NavLink to='/' className='text-[#292D32] font-semibold'>О нас</NavLink>
                    </div>
                    <img src={lineFooter} alt="line-footer" className='absolute top-0 !justify-self-start h-full'/>
                </div>
                <div className='relative'>
                    <div className='flex flex-col w-[80%] mx-auto gap-4'>
                        <NavLink to='/' className='text-[#292D32] font-semibold'>Контакты</NavLink>
                        <NavLink to='/' className='text-[rgba(102,_45,_145,_0.6)] font-semibold'>girlsforgirls@gmail.com</NavLink>
                        <NavLink to='/' className='text-[#292D32] font-semibold'>Форма обратной связи</NavLink>
                    </div>
                    <img src={lineFooter} alt="line-footer" className='absolute top-0 !justify-self-start h-full'/>
                </div>
                <div className='relative'>
                    <div className='flex flex-col w-[80%] mx-auto gap-4'>
                        <NavLink to='/' className='text-[#292D32] font-semibold'>Найдите нас в соц сетях</NavLink>
                        <NavLink to='/' className='flex gap-3 items-center'>
                            <img src={linkedin} alt="linkedin" />
                            <p className='text-[rgba(102,_45,_145,_0.6)] font-semibold'>Girlsforgirls</p>
                        </NavLink>
                        <NavLink to='/' className='flex gap-3 items-center'>
                            <img src={youtube} alt="youtube" />
                            <p  className='text-[rgba(102,_45,_145,_0.6)] font-semibold'>Girlsforgirls</p>
                        </NavLink>
                        <NavLink to='/' className='flex gap-3 items-center'>
                            <img src={instagram} alt="linkedin" />
                            <p className='text-[rgba(102,_45,_145,_0.6)] font-semibold'>Girlsforgirls</p>
                        </NavLink>
                    </div>
                    <img src={lineFooter} alt="line-footer" className='absolute top-0 !justify-self-start h-full'/>
                </div>
            </div>
            <div className='h-[5rem]'>
                <div className='text-[#662D91] font-bold tracking-[.13rem] w-full h-full flex items-center justify-center' style={{ borderTop: 'solid', borderTopColor: '#E8CBF8', borderTopWidth: '1px'}}>
                    {new Date().getFullYear} 2023 © GIRLS FOR GIRLS - ALL RIGHTS RESERVED 
                </div>
            </div>
        </div>

    </footer>
  )
}

export default Footer