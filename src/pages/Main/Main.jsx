import React, { useEffect } from 'react';
import Education from './Education/Education';
import Forum from './Forum/Forum';
import Projects, { Results } from './Projects/Projects';
import Videoblog from './Videoblog/Videoblog';
import Map from './Map/Map';
import { FutureEvents, PastEvents } from './Events/Events';
import Download from './Download/Download';
import ContactUs from './ContactUs/ContactUs';

const Landing = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth"
    });
  }, []);
  return (
    <>
        <Education/>
        <Results />
        <Projects />
        <Videoblog />
        <Forum />
        <Map />
        <FutureEvents />
        <PastEvents />
        <Download />
        <ContactUs />
    </>
  )
}

export default Landing
