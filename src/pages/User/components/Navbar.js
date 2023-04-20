import React from 'react'
import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  const { t } = useTranslation();
  return (
    <section className='w-[22%]'>
        <div className='text-[#403A64] text-[clamp(0.7rem,0.972vw,_1.1rem)] mb-2 uppercase'>{t('Profile.navbar.title')}</div>
        <div className='text-[#403A64] font-[clamp(0.8rem,_1.1vw,_1.3rem)] flex flex-col gap-2'>
            <NavLink className={`bg-[#F7F5FF] border px-4 py-2 rounded-[8px]`} to={'/'} >{t('Profile.navbar.profile')}</NavLink>
            <NavLink to={'/'} className={'px-4 py-2'}>{t('Profile.navbar.progress')}</NavLink>
            <NavLink to={'/'} className={'px-4 py-2'}>{t('Profile.navbar.applications')}</NavLink>
            <NavLink to={'/'} className={'px-4 py-2'}>{t('Profile.navbar.feedback')}</NavLink>
        </div>
        
    </section>
  )
}

export default Navbar