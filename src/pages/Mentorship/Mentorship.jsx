import React from 'react'
import Mission from '../Mentorship/Mission/Mission'
import Criteria from './Criteria/Criteria'
import Graduates from './Graduates/Graduates'
import Mentors from './Mentors/Mentors'
import Power from './Power/Power'

const Mentorship = () => {
  return (
    <>
        <Mission />
        <Power />
        <Criteria />
        <Mentors />
        <Graduates />
    </>
  )
}

export default Mentorship