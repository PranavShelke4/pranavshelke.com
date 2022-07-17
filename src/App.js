import { useState, useEffect } from 'react';
import Loading from './pages/LoadingPage';
import Home from './pages/HomePage';


function App() {

  const [showHome, setShowHome] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShowHome(true);
    }, 6000);
  }, []);

  return (
    <div className="App">
       {showHome ? <Home /> : <Loading />}      
    </div>
  );
}

export default App;
