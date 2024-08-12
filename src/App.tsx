import { Route, Routes } from 'react-router-dom'
import './App.css'
import GameHomePage from './Components/GameHomePage/GameHomePage'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<GameHomePage />}/>
      </Routes>
    </>
  )
}

export default App
