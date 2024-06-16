import React from 'react'
import { useState } from 'react';
import { Box } from '@mui/material';
import HeroBanner from '../Components/HeroBanner';
import SearchExercises from '../Components/SearchExercises';
import Exercise from '../Components/Exercise';


const Home = () => {
  const [bodyPart, setBodyPart] = useState('all')
  const [exercises, setExercises] = useState([]);
  return (
  <Box>
    <HeroBanner/>
    <SearchExercises 
    setExercises={setExercises}
    bodyPart={bodyPart} 
    setBodyPart = {setBodyPart}/>
    <Exercise 
    exercises={exercises} 
    setExercises={setExercises}
     bodyPart = {bodyPart}
    />
  </Box>
  )
}

export default Home
