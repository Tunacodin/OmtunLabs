import React, { useState } from "react";
import black from "../img/maiblogo2.svg";
import light from "../img/OT White.png";
import darkColors from "../consts/darkColors";
import "../App.css"

const Logo = () => {

  return (
    <div
      style={{
        width: "5.5rem",
        height: "5.5rem",
        left: "20rem",
        position: "relative",
        objectFit: "cover",
      }}
    >
      <img
        src={black}
        alt="black"
        style={{
          width: "100%",
          height: "100%",
          position: "absolute",
          top: 0,
          left: 0,
          transition: "opacity 0.5s ease-in-out", // Geçiş efekti
        }}
      />
    </div>
  );
};

export default Logo;
