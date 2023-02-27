import React, { useEffect } from 'react';
import Education from './Education/Education';
import Forum from './Forum/Forum';
import Projects, { Results } from './Projects/Projects';
import Videoblog from './Videoblog/Videoblog';
import Map from './Map/Map';
import { FutureEvents, PastEvents } from './Events/Events';
import Download from './Download/Download';
import ContactUs from './ContactUs/ContactUs';
import AOS from 'aos';
import 'aos/dist/aos.css'

const Landing = () => {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <>
        <Education/>
        <Results />
        <Projects data-aos="fade-up" data-aos-duration="2000"/>
        <Videoblog data-aos="fade-up" data-aos-duration="2000"/>
        <Forum data-aos="fade-up" data-aos-duration="2000"/>
        <Map data-aos="fade-up" data-aos-duration="2000"/>
        <FutureEvents data-aos="fade-up" data-aos-duration="2000"/>
        <PastEvents data-aos="fade-up" data-aos-duration="2000"/>
        <Download data-aos="fade-up" data-aos-duration="3000"/>
        <ContactUs data-aos="fade-up" data-aos-duration="3000"/>
    </>
  )
}

export default Landing
