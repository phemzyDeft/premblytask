import { useState } from 'react'
import './App.css'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Exercise1 from './pages/exercise1'
import Exercise2 from './pages/Exercise2'
import Exercise3 from './pages/Exercise3'
import Checkout from './components/Shop/Checkout'
import Api1 from './pages/Exercise5/Api1'
import Api2 from './pages/Exercise5/Api2'
import Api3 from './pages/Exercise5/Api3'

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Exercise1 />} />
          <Route path='/slides' element={<Exercise2 />} />
          <Route path='/cart' element={<Exercise3 />} />
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
