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
              <form name="contact" netlify>
                <input type='text' placeholder='First Name *' className='imputBox' required/>
                <input type='text' placeholder='Last Name *' className='imputBox' required/>
                <input type='email' placeholder='Email *' className='imputBox' required/>
                <input type='number' placeholder='Number' className='imputBox' />
                <textarea placeholder='Message *' className='msgbox' required></textarea>
                <button className='submitBTN'>Submit</button>
              </form>
          </div>
        </div>
      </Container>
      
    </div>
  )
}

export default HireMe