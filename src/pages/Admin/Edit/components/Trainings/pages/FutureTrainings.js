import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Training from '../components/Training';

const FutureTrainings = () => {
  const [trainings, setTrainings] = useState('');
  
  useEffect(() => {
    axios.get("https://girls4girls.herokuapp.com/api/training").then(res => setTrainings(res.data.data)).catch(err => console.log(err));
  }, []) 
  return (
    <div>
        <h3 className='font-semibold text-[1.25rem] text-[#000] mb-2'>Предстоящие тренинги</h3>
        {trainings && trainings.map((training) => <Training {...training}/>)}
    </div>
  )
}

export default FutureTrainings