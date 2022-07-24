import { useState, useEffect } from 'react';
import Loading from './pages/LoadingPage';
import Home from './pages/HomePage';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";



function App() {

  const [showHome, setShowHome] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShowHome(true);
    }, 10000);
  }, []);

  return (
    <BrowserRouter>
    {showHome ? <Home /> : <Loading />}   
      <Routes>
        <Route path="*" element={<Navigate to="/" />}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
