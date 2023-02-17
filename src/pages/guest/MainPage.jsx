
import React from 'react';
import Education from '../../components/guest/Education/Education';
import Forum from '../../components/guest/Forum/Forum';
import Header from '../../components/guest/Header/Header';
import Projects, { Results } from '../../components/guest/Projects/Projects';
import Videoblog from '../../components/guest/Videoblog/Videoblog';

const MainPage = () => {
  return (
    <>
        <Header />
        <Education/>
        <Results />
        <Projects />
        <Videoblog />
        <Forum />
    </>
  )
}

export default MainPage