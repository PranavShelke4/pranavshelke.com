import React from 'react'
import "./HireMe.css"
import { Container } from 'react-bootstrap'
import HireMeImg from "../../../assets/illustrator/ContectMe.png"

function HireMe() {
  return (
    <div className='hire-me' id='hire-me'>
      <Container>
        <h1>HIRE ME</h1>
        <div className='row twoDiv'>
          <div className="col-lg-6"><img className='hireimg' src={HireMeImg} alt="Hire Me" /></div>
          <div className="col-lg-6 row">
              <div className='col-lg-6'><input className='imputBox' type="text" placeholder='First Name' for="fname" /></div>
              <div className='col-lg-6'><input className='imputBox' type="text" placeholder='Last Name' for="lname" /></div>
              <div className='col-lg-6' id='inputBox'><input className='imputBox' type="email" placeholder='Email' for="Email" /></div>
              <div className='col-lg-6' id='inputBox'><input className='imputBox' type="number" placeholder='Mobile No' for="mobile" /></div>
              <textarea placeholder='Message' className='msgbox'></textarea>
              <button className='submitBTN'>Submit</button>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default HireMe