import React from 'react';
import downloadHeart from '../../../images/download-heart.png';
import googlePlay from '../../../images/googleplay.png';
import eclipse from '../../../images/eclipse.png';
import phone from '../../../images/phone.svg';
import splashOne from '../../../images/splash-one.png';
import splashTwo from '../../../images/splash-two.png';
import splashThree from '../../../images/splash-three.png';


const Download = ({ ...animation }) => {
  return (
    <section className='py-20 bg-[#E8E5FF] relative'>
        <div className="myWrapper flex justify-between items-center gap-6">
            <div className='relative basis-1/2' {...animation}>
                <img src={phone} alt="phone" className='relative z-10 mx-auto w-[60%] h-fit'/>
                <img src={eclipse} alt="eclipse" className='absolute -z-1 top-0 left-0 right-0 bottom-0 m-auto w-[80%] h-fit'/>
                <img src={splashOne} alt="splash" className='absolute top-0 left-0 right-0 bottom-0 m-auto w-[80%] h-fit'/>
                <img src={splashTwo} alt="splash" className='absolute top-0 left-0 right-0 bottom-0 m-auto w-[80%] h-fit '/>
                <img src={splashThree} alt="splash" className='absolute top-0 left-0 right-0 bottom-0 m-auto w-[80%] h-fit'/>
            </div>
            <div className='basis-1/2 flex flex-col gap-8' {...animation}>
                <p className='text-[clamp(2rem,_4.3vw,_4rem)] font-bold text-[#471280] leading-[4.5vw]'>Скачай приложение и будь с нами!</p>
                <img src={googlePlay} alt="google-play" className='h-fit w-[40%]'/>
                <img src={downloadHeart} alt="heart" className='absolute -top-[40%] right-[5%] h-auto w-[20%]'/>
            </div>
        </div>

    </section>
  )
}

export default Download