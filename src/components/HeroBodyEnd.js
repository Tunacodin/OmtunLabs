
import React from 'react'
import colors from '../consts/colors';
import { Typography } from '@mui/material';
import SubWebPages from './SubWebPages';
import bg from "../img/noktadesenbig.png";
import Stick from './Stick';
import bgst from "../img/dalgadesen.png";


const HeroBodyEnd = ({style,stickyBg}) => {
  return (
    <div
      style={{
        height: "100vh",
        width: "100%",
       
backgroundImage: `url(${bg})`,
        
      }}
    >
      <Stick
        style={{
          ...style,
          backgroundColor: colors.black,
          right: 0,
          top: "110rem",
          width: "5%",
         
        
        }}
      />
          <SubWebPages/>
    </div>
  );
}

export default HeroBodyEnd