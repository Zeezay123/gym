import React from 'react';
import { useContext } from 'react';
import { Box, Typography } from '@mui/material';
import BodyPart from './BodyPart';
import {ScrollMenu,VisibilityContext } from 'react-horizontal-scrolling-menu';
import leftArrowIcon from '../assets/icons/left-arrow.png';
import rightArrowIcon from '../assets/icons/right-arrow.png' ;



const LeftArrow = () =>{
  const {scrollPrev} = useContext(VisibilityContext);

  return(
    <Typography onClick = {()=> scrollPrev()} className="left-arrow">
      <img src={leftArrowIcon} alt='leftarrowicon'/>
    </Typography>
  );
};


const RightArrow = () =>{
  const {scrollNext} = useContext(VisibilityContext);

  return(
    <Typography onClick = {()=> scrollNext()} className="right-arrow">
      <img src={rightArrowIcon} alt='leftarrowicon'/>
    </Typography>
  );
};


const HorizontalScollbar = ({data, bodyPart, setBodyPart}) => {
  return (
    <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
    {data.map((item) => <Box
        key = {item.id || item}
        itemID = {item.id || item}
        title = {item.id || item}  m="0 40px">

            

        <BodyPart item = {item}  bodyPart = {bodyPart} setBodyPart = {setBodyPart} />    
        </Box>
        )}
        </ScrollMenu>
  )
}

export default HorizontalScollbar