import React from 'react'
import TrainingItem from '../components/TrainingItem';
import SaveButton from '../../../../components/SaveButton';
import axios from '../api/axios';
import { useSelector } from 'react-redux';

const FutureTrainings = () => {
  const training = useSelector(state => state.admin.training);
  const idOfQuestionnair = useSelector(state => state.questionnaire.lastSavedQuestionnaireId);
  const idOfQuestionnaire = idOfQuestionnair && idOfQuestionnair.toString();
  const lecturersId = useSelector(state => state.admin.createdLecturersId);
  
  const handleSave = () => {
    console.log(training);
    console.log(idOfQuestionnaire);
    console.log(lecturersId)
    const trainingData = {
      ...training,
      questionnaireId: idOfQuestionnaire,
      lecturers: JSON.stringify(lecturersId)
    }

    // const formData = new FormData();
    // formData.append("title", training.title);
    // formData.append("titleKG", training.titleKG);
    // formData.append("description", training.description);
    // formData.append("descriptionKG", training.descriptionKG);
    // formData.append("address", training.address);
    // formData.append("image", training.image);
    // formData.append("eventDate", training.eventDate);
    // formData.append("deadlineDate", training.deadlineDate);
    // formData.append("time", training.time);
    // formData.append("location", training.location);
    // formData.append("questionnaireId", idOfQuestionnaire);
    // formData.append("lecturers", JSON.stringify(lecturersId));

    console.log(trainingData);
    axios.post('/training', trainingData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    }).then(res => console.log(res)).catch(e => console.error(e))
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
