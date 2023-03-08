import React from 'react'
import Mission from '../Mentorship/Mission/Mission'
import Application from './Application/Application'
import Criteria from './Criteria/Criteria'
import Graduates from './Graduates/Graduates'
import Mentors from './Mentors/Mentors'
import Power from './Power/Power'
import QA from './QA/QA'

const Mentorship = () => {
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