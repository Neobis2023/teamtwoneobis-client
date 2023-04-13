import React from 'react'
import TrainingItem from '../components/TrainingItem';
import SaveButton from '../../../../components/SaveButton';
import axios from '../api/axios';
import { useSelector } from 'react-redux';

const FutureTrainings = () => {
  const training = useSelector(state => state.admin.training);
  const idOfQuestionnaire = useSelector(state => state.questionnaire.lastSavedQuestionnaireId);
  const lecturersId = useSelector(state => state.admin.createdLecturersId);
  
  const handleSave = () => {
    console.log(training)
    console.log(idOfQuestionnaire);
    console.log(lecturersId)
  }
  return (
    <div>
        <h3 className='font-semibold text-[1.25rem] text-[#000] mb-2'>Создать тренинг</h3>
        <TrainingItem />
        <div className='flex gap-2'>
          <SaveButton text={'Сохранить'} onClick={handleSave}/>
        </div>
    </div>
  )
}

export default FutureTrainings
