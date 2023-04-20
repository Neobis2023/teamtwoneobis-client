import React from 'react';
import downloadHeart from './assets/images/download-heart.png';
import googlePlay from './assets/images/googleplay.png';
import eclipse from './assets/images/eclipse.png';
import phone from './assets/images/phoneAndroid.svg';
import splashOne from './assets/images/splash-one.png';
import splashTwo from './assets/images/splash-two.png';
import splashThree from './assets/images/splash-three.png';
import { useTranslation } from 'react-i18next';


const Download = () => {
  const { t } = useTranslation();
  return (
    <section className='py-20 bg-[#E8E5FF] relative'>
        <div className="myWrapper flex justify-between items-center gap-6">
            <div className='relative basis-1/2'>
                <img src={phone} alt="phone" className='relative z-10 mx-auto w-[40%] h-fit'/>
                <img src={eclipse} alt="eclipse" className='absolute -z-1 top-0 left-0 right-0 bottom-0 m-auto w-[80%] h-fit'/>
                <img src={splashOne} alt="splash" className='absolute top-0 left-0 right-0 bottom-0 m-auto w-[80%] h-fit'/>
                <img src={splashTwo} alt="splash" className='absolute top-0 left-0 right-0 bottom-0 m-auto w-[80%] h-fit '/>
                <img src={splashThree} alt="splash" className='absolute top-0 left-0 right-0 bottom-0 m-auto w-[80%] h-fit'/>
            </div>
            <div className='basis-1/2 flex flex-col gap-8'>
                <p className='text-[clamp(2rem,_4.3vw,_4rem)] font-bold text-[#471280] leading-[4.5vw]'>{t('Main.Download.title')}</p>
                <img src={googlePlay} alt="google-play" className='h-fit w-[40%]'/>
                <img src={downloadHeart} alt="heart" className='absolute top-[7%] right-[15%] h-auto w-[10%]'/>
            </div>
        </div>

    </section>
  )
}

export default Download