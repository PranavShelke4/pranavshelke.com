import React from 'react'
import Sidebar from '../component/Sidebar/sidebar'
import Header from '../component/Home/Header/Header'
import AboutMe from '../component/Home/AboutMe/AboutMe'

function HomePage() {
  return (
    <>
      <Sidebar />
      <Header />
      <AboutMe />
    </>
  )
}

export default HomePage