import React from 'react'
import NotFound from '../assets/illustrator/404.png'

function PageNotFound() {
  return (
    <>
        <img className='NotFoundImg' style={{ width: '80%', justifyItems: 'center', margin: '1%' }} src={NotFound} alt="Page Not Found"/>
    </>
  )
}

export default PageNotFound