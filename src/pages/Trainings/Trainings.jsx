import React from 'react'
import Criteria from '../Mentorship/Criteria/Criteria'
import FutureEvents from './FutureEvents/FutureEvents'
import Start from './Start/Start'

const Trainings = () => {
  return (
    <>
        <Start />
        <FutureEvents />
        <Criteria className={'bg-[#FEF7FF]'}/>
    </>
  )
}

export default Trainings