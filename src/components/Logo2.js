import React, { useState } from "react";
import black from "../img/softBlack.jpeg";
import light from "../img/OT Black2.png";

import darkColors from "../consts/darkColors";
import "../App.css";

const Logo2 = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      style={{
        width: "5.5rem",
        height: "5.5rem",
        left: "19.8rem",
        position: "relative",
        borderRadius: "50%",
        overflow: "hidden",
        zIndex: 1,
        cursor: "pointer",
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <img
        src={black}
        alt="black"
        style={{
          width: "100%",
          height: "100%",
            objectFit: "cover",
          position: "absolute",
          top: 0,
          left: 0,
          zIndex: 1,
         
        }}
      />
      
    </div>
  );
};

export default Logo2;
