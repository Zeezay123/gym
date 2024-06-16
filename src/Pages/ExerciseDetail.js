import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Box } from '@mui/material';
import ExerciseVideos from '../Components/ExerciseVideos';
import SimilarExercises from '../Components/SimilarExercises';
import Detail from '../Components/Detail'

import {exerciseOptions, fetchData} from '../utils/fetchData'




const ExerciseDetail = () => {
 const [exerciseDetail, setExerciseDetail] = useState({})
 
 const {id} = useParams();

useEffect(() => {
  const fetchExerciseData = async () => {
    const exerciseDbUrl = 'https://exercisedb.p.rapidapi.com';
    const youtubeSearchUrl = 'https://youtube-search-and-download.p.rapidapi.com';


   const exerciseDetailsData = await fetchData(`${exerciseDbUrl}/exercises/exercise/${id}`, exerciseOptions);
  //  setExerciseDetail(exerciseDetailsData);
 console.log(exerciseDetailsData);
   }

  fetchExerciseData();

},[id]);


  return (
    <Box>
      <Detail exerciseDetail = {exerciseDetail} />
      <ExerciseVideos />
      <SimilarExercises  />
    </Box>
  )
}

export default ExerciseDetail
