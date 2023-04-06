import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import flowers from '../assets/images/flowers.svg'
import user from '../assets/images/user.svg'
import EditProfileModal from './EditProfileModal'

const TopContent = () => {
  const [name, setName] = useState('Пользователь'); 
  const [userImage, setUserImage] = useState(null); 
  const [modalOpened, setModalOpened] = useState(false);
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    setName(user.firstName);
    setUserImage(user.image.url);
    console.log(user.image.url)
    
  }, [])
  return (
    <section className='bg-[radial-gradient(100%_498.87%_at_102.29%_100%,_#FAEFFF_40.59%,_#F3F2FF_100%)]'>
        <div className='flex justify-between items-center myWrapper'>
            <div className='flex gap-4'>
                <img src={userImage ? userImage : user} alt='profile photo' className='w-24 h-24 rounded-full'/>
                <div className='flex flex-col gap-2'>
                    <p className='w-fit text-[#C192EE] font-extrabold text-[clamp(1.3rem,_1.66vw,_1.8rem)] px-4 py-2 border bg-[#FFFFFF]  rounded-[12px]'>Привет, {name}!</p>
                    <NavLink to={'/'} className='underline'>Заполнить информацию о себе</NavLink>
                </div>
            </div>
            <div>
                <img src={flowers} alt='flowers'/>
            </div>
            <button type='button' className='text-[#5900B2] font-medium text-[clamp(0.675rem,_0.972vw,_1.175rem)] bg-[rgba(255,_255,_255,_0.2)] border  px-4 py-2 w-fit border-[#5900B2] rounded-[20px]' onClick={() => setModalOpened(true)}>Редактировать профиль</button>
        </div>
        {modalOpened ? <EditProfileModal onClose={() => setModalOpened(false)}/> : null}
    </section>
  )
}

export default TopContent