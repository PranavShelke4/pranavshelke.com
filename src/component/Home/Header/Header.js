import React from 'react'
import "./Header.css"
import Developer from '../../../assets/illustrator/Developer.svg'
import Gamer from '../../../assets/illustrator/Gamer.svg'

function Header() {
  return (
    <div className='header'>
        <img style={{ clipPath: "polygon(0 0, 50% 0, 50% 100%, 0% 100%)" }} src={Developer} className="developer" alt="developer"></img>
        <img style={{ clipPath: "polygon(50% 0, 100% 0, 100% 100%, 50% 100%)" }} src={Gamer} className="gamer" alt="gamer"></img>
    </div>
  )
}

export default Header

