import React, { useEffect } from 'react'
import Criteria from '../Mentorship/Criteria/Criteria'
import FutureEvents from './FutureEvents/FutureEvents'
import PastEvents from './PastEvents/PastEvents'
import Start from './Start/Start'

const Trainings = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth"
    });
  }, []);
  return (
    <>
        <Start />
        <FutureEvents />
        <Criteria className={'bg-[#FEF7FF]'}/>
        <PastEvents />
    </>
  )
}

export default Trainings