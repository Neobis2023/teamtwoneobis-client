import React from 'react'
import TrainingItem from '../components/TrainingItem';
import SaveButton from '../../../../components/SaveButton';
import AddButton from '../../AddButton';

const FutureTrainings = () => {
  return (
    <div>
        <h3 className='font-semibold text-[1.25rem] text-[#000] mb-2'>Предстоящие тренинги</h3>
        <TrainingItem />
        <div className='flex gap-2'>
          <SaveButton text={'Сохранить'}/>
          <AddButton text={'Добавить тренинг'}/>
        </div>
    </div>
  )
}

export default FutureTrainings
