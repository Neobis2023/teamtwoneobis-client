import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import axios from '../api/axios';
import flash from '../assets/images/flash.svg';

const TrainingsList = () => {
  const [trainings, setTrainings] = useState([]);
  useEffect(() => {
    axios.get('/training').then((res) => setTrainings(res.data.data))
  }, [])  
  return (
    <section>
        <NavLink type='button' to={'future-trainings'} className={'bg-[#9960C3] rounded-[8px] text-[#fff] p-2 hover:text-[#fff]'}>Добавить тренинг</NavLink>
        <div className='w-[70%]'>
            {trainings.map((training) => <div className='flex justify-between items-center mt-2 bg-[#EAF0FF] rounded-[10px] p-2'>
                {training.title}
                <img src={flash} alt='flash'/>
            </div>)}
        </div>
    </section>
  )
}

export default TrainingsList