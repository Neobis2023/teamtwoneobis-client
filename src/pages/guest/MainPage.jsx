import React, { useEffect } from 'react';
import Education from '../../components/guest/Education/Education';
import Forum from '../../components/guest/Forum/Forum';
import Header from '../../components/guest/Header/Header';
import Projects, { Results } from '../../components/guest/Projects/Projects';
import Videoblog from '../../components/guest/Videoblog/Videoblog';
import Map from '../../components/guest/Map/Map';
import { FutureEvents, PastEvents } from '../../components/guest/Events/Events';
import Download from '../../components/guest/Download/Download';
import ContactUs from '../../components/guest/ContactUs/ContactUs';
import Footer from '../../components/guest/Footer/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css'

const MainPage = () => {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <>
        <Header />
        <Education/>
        <Results data-aos="fade-up" data-aos-duration="1000"/>
        <Projects data-aos="fade-up" data-aos-duration="2000"/>
        <Videoblog data-aos="fade-up" data-aos-duration="2000"/>
        <Forum data-aos="fade-up" data-aos-duration="2000"/>
        <Map data-aos="fade-up" data-aos-duration="2000"/>
        <FutureEvents data-aos="fade-up" data-aos-duration="2000"/>
        <PastEvents data-aos="fade-up" data-aos-duration="2000"/>
        <Download data-aos="fade-up" data-aos-duration="3000"/>
        <ContactUs data-aos="fade-up" data-aos-duration="3000"/>
        <Footer data-aos="fade-up" data-aos-duration="2000"/>
    </>
  )
}

export default MainPage