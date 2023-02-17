import React from 'react';
import curlyArrow from '../../../images/arrowcurly.svg';
import Slider from '../../Slider';
import DetailsButton from '../DetailsButton';
import { videos } from '../../Videos';
import computer from '../../../images/computer.png'

const Videoblog = () => {
  return (
    <section className='bg-[rgba(232,_229,_255,_0.4)] py-20'>
        <div className='flex gap-5 myWrapper'>
            <h2 className='mySubtitle'>Видеоблог/Study plan</h2>
            <img src={curlyArrow} alt="curly" />
        </div>
        <Slider videosProp={videos.videoBlog} />
        <div className='relative'>
          <img src={computer} alt="computer" className='absolute left-20 h-[6vw]'/>
          <DetailsButton className={'mx-auto mt-5'}/>
        </div>
    </section>
  )
}

export default Videoblog