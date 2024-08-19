import { Route, Routes } from 'react-router-dom'
import './App.css'
import { GameHomePage } from './Components/GameHomePage/GameHomePage';
import Game from './Components/Game/Game'

function App() {
  const levels = [
    { level: 1, pairs: 4 },
    { level: 2, pairs: 8 },
    { level: 3, pairs: 12 },
    { level: 4, pairs: 16 },
    { level: 5, pairs: 20 },
    { level: 6, pairs: 24 },
    { level: 7, pairs: 30 },
  ];

  return (
    <>
      <Routes>
        <Route path="/" element={<GameHomePage levels={levels}/>} />
        <Route path="/level/:level" element={<Game />} />
      </Routes>
    </>
  );
}

export default App;