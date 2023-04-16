import React, { useEffect, useState } from 'react'
import ApplyForm from '../../modules/ApplyForm/ApplyForm'
import axios from './api/axios';

const ApplyFormTraining = () => {
  const id = sessionStorage.getItem("eventId");
  const [questionnaire, setQuestionnaire] = useState(null);

  useEffect(() => {
    try {
      axios.get(`/training/${id}`).then(res => setQuestionnaire(res.data.questionnaire));
    } catch(e) {
      console.log(e)
    }
  }, [])
    
  return (
    <>
        <ApplyForm questionnaire={questionnaire}/>
    </>
  )
}

export default ApplyFormTraining