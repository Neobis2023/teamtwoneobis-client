import React from 'react'
import MySlider from '../../../helpers/swiper/MySlider';
import aykanysh from './assets/images/aykanysh.png';
import salkynay from './assets/images/salkynay.png';
import aysezim from './assets/images/aysezim.png';
import nurayim from './assets/images/nurayim.png';

const Mentors = () => {
  const mentors = [
    {
      id: 1,
      img: aykanysh,
      fullName: 'Айканыш Сыдыкова',
      desc: 'Vitae sapien pellentesque habitant morbi nunc. Viverra aliquet  porttitor rhoncus libero justo laoreet sit amet vitae.',
    }, 
    {
      id: 2,
      img: salkynay,
      fullName: 'Салкынай Эмилбекова',
      desc: 'Vitae sapien pellentesque habitant morbi nunc. Viverra aliquet  porttitor rhoncus libero justo laoreet sit amet vitae.',
    },
    {
      id: 3,
      img: aysezim,
      fullName: 'Айсезим Арымбаева',
      desc: 'Vitae sapien pellentesque habitant morbi nunc. Viverra aliquet  porttitor rhoncus libero justo laoreet sit amet vitae.',
    },
    {
      id: 4,
      img: nurayim,
      fullName: 'Нурайым Нургазиева',
      desc: 'Vitae sapien pellentesque habitant morbi nunc. Viverra aliquet  porttitor rhoncus libero justo laoreet sit amet vitae.',
    },
    {
      id: 5,
      img: aysezim,
      fullName: 'Айсезим Арымбаева',
      desc: 'Vitae sapien pellentesque habitant morbi nunc. Viverra aliquet  porttitor rhoncus libero justo laoreet sit amet vitae.',
    },
    {
      id: 6,
      img: aysezim,
      fullName: 'Айсезим Арымбаева',
      desc: 'Vitae sapien pellentesque habitant morbi nunc. Viverra aliquet  porttitor rhoncus libero justo laoreet sit amet vitae.',
    },
    {
      id: 7,
      img: aysezim,
      fullName: 'Айсезим Арымбаева',
      desc: 'Vitae sapien pellentesque habitant morbi nunc. Viverra aliquet  porttitor rhoncus libero justo laoreet sit amet vitae.',
    },
    {
      id: 8,
      img: aysezim,
      fullName: 'Айсезим Арымбаева',
      desc: 'Vitae sapien pellentesque habitant morbi nunc. Viverra aliquet  porttitor rhoncus libero justo laoreet sit amet vitae.',
    },
  ];
  return (
    <section className='pb-20 bg-[#F8F9FA] mentors'>
        <h2 className='text-[#662D91] font-semibold text-[clamp(1.2rem,_2.5vw,_2.5rem)] text-center pb-10'>Менторы</h2>
        <MySlider mentors={mentors}/>
    </section>
  )
}

export default Mentors