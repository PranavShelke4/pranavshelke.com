import React from 'react'
import { Routes, Route } from "react-router-dom";
import NotFound from '../pages/PageNotFound';
import App from '../App';

function Routess() {
  return (
      <Routes>
        <Route path='/' element={<App />}/>
        <Route path="*" element={<NotFound />}/>
    </Routes>
    
  )
}

export default Routess