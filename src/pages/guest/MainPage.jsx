import React from 'react';
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

const MainPage = () => {
  return (
    <>
        <Header />
        <Education/>
        <Results />
        <Projects />
        <Videoblog />
        <Forum />
        <Map />
        <FutureEvents/>
        <PastEvents />
        <Download />
        <ContactUs />
        <Footer />
    </>
  )
}

export default MainPage