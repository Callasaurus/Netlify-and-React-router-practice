import './App.css';
import { Routes, Route, useNavigate } from 'react-router-dom'
import Count from '../Count/Count';
import DadJoke from '../DadJoke/DadJoke';

function App() {
  const navigate = useNavigate()

  const navigateCount = () => {
    navigate('/count', { replace: true })
  }

  const navigateDadJoke = () => {
    navigate('/dadjoke', { replace: true })
  }

  return (
    <div className="App">
      <h1><b>The most original app ever created</b></h1>
      <div className='buttons-parent'>
        <button className="home-button" onClick={navigateCount}> Count away</button>
        <button className="home-button" onClick={navigateDadJoke}> Want to laugh? </button>
      </div>
      <Routes>
        <Route path="/count" element={<Count />} />
        <Route path="/dadjoke" element={<DadJoke />} />
      </Routes>
    </div>
  );
}

export default App;
