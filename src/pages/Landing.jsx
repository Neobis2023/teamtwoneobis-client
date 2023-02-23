import React, { useEffect } from 'react';
import Education from '../pages/Education/Education';
import Forum from '../pages/Forum/Forum';
import Projects, { Results } from '../pages/Projects/Projects';
import Videoblog from '../pages/Videoblog/Videoblog';
import Map from '../pages/Map/Map';
import { FutureEvents, PastEvents } from '../pages/Events/Events';
import Download from '../pages/Download/Download';
import ContactUs from '../pages/ContactUs/ContactUs';
import AOS from 'aos';
import 'aos/dist/aos.css'

const Landing = () => {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <>
        {/* <Header /> */}
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
        {/* <Footer data-aos="fade-up" data-aos-duration="2000"/> */}
    </>
  )
}

export default Landing
