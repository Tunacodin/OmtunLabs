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

const PrimaryButton = ({ style, text, fontSize, fontFamily, fontWeight }) => {
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
        fontFamily: fontFamily ? fontFamily : "Poppins, sans-serif",
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
            ${colors.mor} 0%,
            ${colors.mor} 100%
          )`,
          backgroundSize: "0% 100%",
          backgroundRepeat: "no-repeat",
          transition: "color .6s ease-in-out, background-size 0.6s ease-in-out",
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
          fontFamily: fontFamily ? fontFamily : "Anton",
          fontSize: fontSize ? fontSize : "1.5rem",
          fontWeight: fontWeight ? fontWeight : 400,
        }}
      >
        {text}
      </Button>
    </div>
  );
};

export default PrimaryButton;
