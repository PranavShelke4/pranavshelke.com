import React from 'react'
import Navbar from '../component/Home/Navbar/Navbar'
import Header from '../component/Home/Header/Header'
import AboutMe from '../component/Home/AboutMe/AboutMe'
import Hireme from '../component/Home/Hire_me/HireMe'

function HomePage() {
  return (
    <>
      <Navbar />
      <Header />
      <AboutMe />
      <Hireme />
    </>
  )
}

export default HomePage