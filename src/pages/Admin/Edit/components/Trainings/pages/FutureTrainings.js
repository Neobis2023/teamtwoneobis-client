import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Training from '../components/Training';
import TrainingItem from '../components/TrainingItem';
import SaveButton from '../../../../components/SaveButton';
import AddButton from '../../AddButton';

const FutureTrainings = () => {
  const [trainings, setTrainings] = useState('');
  
  
  useEffect(() => {
    axios.get("https://girls4girls.herokuapp.com/api/training").then(res => setTrainings(res.data.data)).catch(err => console.log(err));
  }, [])
  
  return (
    <div>
        <h3 className='font-semibold text-[1.25rem] text-[#000] mb-2'>Предстоящие тренинги</h3>
        {/* {trainings && trainings.map((training) => <Training {...training}/>)} */}
        <TrainingItem />
        <div className='flex gap-2'>
          <SaveButton text={'Сохранить'}/>
          <AddButton text={'Добавить тренинг'}/>
        </div>
    </div>
  )
}

export default FutureTrainings
