import { useState } from 'react'
import './App.css'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Exercise1 from './pages/exercise1'
import Exercise2 from './pages/Exercise2'
import Exercise3 from './pages/Exercise3'

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Exercise1 />} />
          <Route path='/slides' element={<Exercise2 />} />
          <Route path='/cart' element={<Exercise3 />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
