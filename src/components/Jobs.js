import React, { useState } from 'react'
import Carousel from './Carousel'
import img1 from '../img/web1.png'
import img2 from '../img/web2.png'
import img3 from '../img/web4.png'
import colors from '../consts/colors'
import darkColors from '../consts/darkColors'
import Stick from './Stick'
import zIndex from '@mui/material/styles/zIndex'
const Jobs = ({images,style,h1,p,bg}) => {
  const [hover, setHover] = useState(false);

    images = [
        img1,
        img2,
        img3
    ]
  return (
    <div
      style={{
              width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
              flexDirection: "row",
        
              ...style,
              
      }}
    >
      <div
        style={{
          width: "50%",
          height: "40vh",
          backgroundColor: darkColors.black,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "row",
          position: "relative",
          
        }}
      >
        <Stick
          style={{
            position: "absolute",
            top: "0",
            left: "0",
            width: "50%",
            height: "20%",
            marginTop: ".7rem",
            backgroundColor: "white",
          }}
        />
        <div
          style={{
            height: "100%",
            padding: "2rem",
            zIndex: 1,
          }}
        >
          <h1
            style={{
              fontSize: "2.5rem",
              fontFamily: "Anton",
              color: colors.black,
              textAlign: "start",
              paddingBottom: "1.5rem",
            }}
          >
            {h1}
          </h1>
          <p
            style={{
              width: "60%",
              fontFamily: "Poppins",
              fontWeight: "500",
              color: colors.white,
              textAlign: "start",
              fontSize: "1.2rem",
            }}
          >
            {p}
                  </p>
             <button 
      style={{
        color: colors.black,
        borderRadius: "1rem",
        padding: ".6rem",
        border: "none",
        marginTop: "1rem",
        cursor: "pointer",
        fontFamily: "Poppins",
        fontWeight: "500",
                          fontSize: "1.2rem",
        boxShadow: "4px 4px 20px rgba(10, 110, 110, 0.5), -4px -4px 20px rgba(190, 120, 210, .5)",
        backgroundColor: hover ? bg : colors.white,
                          transition: "background-color 0.5s ease-in-out",
                      }}
                      

      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      Daha Fazla
    </button>


        </div>
      </div>
      <div style={{ width: "30%", height: "40vh" }}>
        {" "}
        {/* Set desired height */}
        <Carousel images={images} style={{ height: "100%",overflow:"hidden",borderRadius:10 }} />
      </div>
    </div>
  );
}

export default Jobs