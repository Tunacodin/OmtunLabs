import { Button } from "@mui/material";
import React from "react";
import colors from "../consts/colors";
import { keyframes } from "@emotion/react";

// Renk dolma animasyonu için keyframe tanımlaması
const fillAnimation = keyframes`
  0% {
    background-size: 0% 100%;
  }
  100% {
    background-size: 100% 100%;
  }
`;

const PrimaryButton = ({ style,text }) => {
  return (
    <div
      style={{
        position: "absolute",
        width: "10%",
        height: "5%",
        zIndex: 600,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        boxShadow: "0px 30px 30px rgba(0, 0, 0, 0.15)",
        bottom: "30%",
        borderRadius: "3rem",
        backgroundColor: colors.black,
        margin: "auto",
        fontFamily: "Poppins, sans-serif",
        ...style,
      }}
    >
      <Button
        variant=""
        size="large"
        sx={{
            color: "white",
            boxShadow: "0px 30px 30px rgba(0, 0, 0, 0.15)",
          background: `linear-gradient(
            110deg,
            #BBA896 0%,
            #BBA896 100%
          )`,
          backgroundSize: "0% 100%",
          backgroundRepeat: "no-repeat",
          transition: "color .6s ease-in-out",
          transition: "background-size  0.6s ease-in-out",

          ":hover": {
            backgroundSize: "100% 100%",
          },
        }}
        style={{
          width: "100%",
          height: "100%",
          borderRadius: "3rem",
          justifyContent: "center",
          alignItems: "center",
          fontFamily: "Anton",
          fontSize: "1.5rem",
          
        }}
      >
        {text}
      </Button>
    </div>
  );
};

export default PrimaryButton;
