import { useState } from 'react';
import './App.css';
import HomePage from './pages/home-page/home-page';
import GamePage from './pages/game-page/game-page';

function App() {
  const [isPlay, setIsPlay] = useState(false);

  function handlePlay() {
    setIsPlay(true);
  }

  return (
    <div className='App'>
      {!isPlay ? <HomePage onClick={handlePlay}/> : <GamePage/>}
    </div>
  );
}

export default App;
