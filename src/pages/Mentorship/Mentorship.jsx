import React, { useEffect } from 'react'
import Mission from '../Mentorship/Mission/Mission'
import Application from './Application/Application'
import Criteria from './Criteria/Criteria'
import Graduates from './Graduates/Graduates'
import Mentors from './Mentors/Mentors'
import Power from './Power/Power'
import QA from './QA/QA'

const Mentorship = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth"
    });
  }, []);
  return (
    <>
        <Mission />
        <Power />
        <Criteria />
        <Mentors />
        <Graduates />
        <Application />
        <QA />
    </>
  )
}

export default Mentorship