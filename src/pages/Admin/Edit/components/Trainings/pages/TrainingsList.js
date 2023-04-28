import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import axios from '../api/axios';
import flash from '../assets/images/flash.svg';
import DeleteButton from '../../../../components/DeleteButton';

const TrainingsList = () => {
  const [trainings, setTrainings] = useState([]);
  const [isDeleted, setIsDeleted] = useState([]);
  useEffect(() => {
    axios.get('/training').then((res) => {
      setTrainings(res.data.data)
      setIsDeleted((curr) => {
        return res.data.data.map((training) => ({
          id: training.id,
          isDeleted: false
        }))
      })
    })
  }, []) 
  console.log(trainings)

  setTimeout(() => {
    console.log(isDeleted)
  }, 2000)

  const handleDelete = (trainingId) => {
    axios.delete(`/training/${trainingId}`).then(res => {
      console.log(res);
      setIsDeleted(prevState => prevState.map(training => {
        if (training.id === trainingId) {
          return {
            ...training,
            isDeleted: true
          };
        }
        return training;
      }));
    }).catch(err => console.error(err));
  }
  return (
    <section>
        <NavLink type='button' to={'future-trainings'} className={'bg-[#9960C3] rounded-[8px] text-[#fff] p-2 hover:text-[#fff]'}>Добавить тренинг</NavLink>
        <div className='w-[70%]'>
            {trainings.map((training) => <div key={training.id} className='flex justify-between items-center mt-2 bg-[#EAF0FF] rounded-[10px] p-2'>
                {training.title}
                {isDeleted.find(item => item.id === training.id && item.isDeleted) ? <p className="text-base text-green-500">Удален</p> : <DeleteButton text={'Удалить'} onClick={() => handleDelete(training.id)}/>}
            </div>)}
        </div>
    </section>
  )
}

export default TrainingsList