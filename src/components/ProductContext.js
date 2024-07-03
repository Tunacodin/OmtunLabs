
import React from 'react'
import colors from '../consts/colors';
import darkColors from '../consts/darkColors';
import { Typography } from '@mui/material';
import SubWebPages from './SubWebPages';
import bg from "../img/noktadesenbig.png";
import Stick from './Stick';
import bgst from "../img/dalgadesen.png";


const ProductContext = ({style,stickyBg}) => {
  return (
    <div
      style={{
        height: "100vh",
        width: "100%",
backgroundColor:"white"
        
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

      <div>
        
      </div>

    </div>
  );
}

export default ProductContext;