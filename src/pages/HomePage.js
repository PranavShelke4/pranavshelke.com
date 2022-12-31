import React from 'react';
import Sidebar from '../component/Sidebar/sidebar';
import Header from '../component/Home/Header/Header';
import AboutMe from '../component/Home/AboutMe/AboutMe';
import Portfolio from '../component/Home/Portfolio/portfolio';

function HomePage() {
  return (
    <>
      <Sidebar />
      <Header />
      <Portfolio />
      <AboutMe />
    </>
  )
}

export default HomePage