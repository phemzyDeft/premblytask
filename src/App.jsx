import { useState } from 'react'
import './App.css'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import ExerciseTwo from './pages/ExerciseTwo'
import ExerciseThree from './pages/ExerciseThree'
import Checkout from './components/Shop/Checkout'
import Api1 from './pages/Exercise5/Api1'
import Api2 from './pages/Exercise5/Api2'
import Api3 from './pages/Exercise5/Api3'
import ExerciseOne from './pages/ExerciseOne'

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<ExerciseOne />} />
          <Route path='/slides' element={<ExerciseTwo />} />
          <Route path='/cart' element={<ExerciseThree />} />
          <Route path='/checkout' element={<Checkout />} />
          <Route path='/api1' element={<Api1 />} />
          <Route path='/api2' element={<Api2 />} />
          <Route path='/api3' element={<Api3 />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
