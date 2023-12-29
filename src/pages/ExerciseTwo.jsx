import React from 'react'
import Carousel from '../components/Carousel/Carousel'
import { slides } from '../../payloads/Exercise2data'

const ExerciseTwo = () => {
  return (
    <div className='slider'>
      <Carousel data={ slides } />
    </div>
  )
}

export default ExerciseTwo