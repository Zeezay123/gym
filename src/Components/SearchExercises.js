import React from 'react';
import { useState, useEffect } from 'react';
import {Button , Typography,Box, Stack, TextField } from '@mui/material';
import { exerciseOptions, fetchData } from '../utils/fetchData';
import HorizontalScollbar from './HorizontalScollbar';



const SearchExercises = ({setExercises, bodyPart, setBodyPart}) => {
 
  const [search, setSearch]= useState('');
  const [bodyParts, setBodyParts] = useState([]);

  useEffect(() => {
    const fetchExercisesData = async () => {
      try {
        const bodyPartsData = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', exerciseOptions);
        setBodyParts(['all', ...bodyPartsData]);
      } catch (error) {
        console.error('Error fetching body parts:', error);
      }
    };

    fetchExercisesData();
  }, []);

  const handleClick = async () => {
    if (search) {
      try {
        const exerciseData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions);
        const searchedExercises = exerciseData.filter(
          (exercise) =>
            exercise.name.toLowerCase().includes(search) ||
            exercise.target.toLowerCase().includes(search) ||
            exercise.equipment.toLowerCase().includes(search) ||
            exercise.bodyPart.toLowerCase().includes(search)
        );

        setSearch('');
        setExercises(searchedExercises.length ? searchedExercises : []);
      } catch (error) {
        console.error('Error fetching exercises:', error);
        setExercises([]);
      }
    }
  };

  
  return (
   <Stack justifyContent='center' alignItems= 'center' p={2} mt={3}>
    <Typography fontWeight={700} sx={{
      fontSize:{lg:'44px', xs:'30px'} 
    }} mb={5} textAlign= 'center'>
      Awesome Exercises You <br /> Should Know
    </Typography>
   
   
   <Box position='relative' mb='72px'>
   <TextField   
   sx ={{
    input:{
      fontWeight: '700',
      border:'none',
      borderRadius:'4px'
    }, 
    width: {lg: '800px', xs:'350px'},
    backgroundColor:'#ffff',
    borderRadius:'40px'

   }}

   height="76px"
   value={search}
   onChange={(e)=> setSearch(
    e.target.value.toLowerCase()
   )}
   placeholder='Search Exercises'
   type='text'
   />
 
  <Button  className='search-btn'
  sx={{
    bgcolor:'#ff2625',
    color:'#fff',
    textTransform:'none',
    width:{lg:'175px', xs:'80px'},
    fontSize:{lg:'20px', xs: '14px'},
    height:'56px',
    position: "absolute",
    right: '0' 
  }}
  
  onClick={handleClick}> Search </Button>
   </Box>
   <Box sx = {{ postition:'relative', width:'100%', p:'20px'}}>
    <HorizontalScollbar data={bodyParts} bodyPart = {bodyPart} setBodyPart = {setBodyPart}/>
   </Box>
   </Stack>
 
   
  )
}

export default SearchExercises