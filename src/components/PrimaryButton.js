import { Button, useMediaQuery } from "@mui/material";
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

const PrimaryButton = ({
  style,
  text,
  fontSize,
  fontFamily,
  fontWeight,
  link,
  onClick,
  ...rest
}) => {
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("sm"));

  if (isMobile) {
    return null; // Don't render the button on mobile screens
  }

  return (
    <div
      style={{
        position: "absolute",
        width: "6%", // Adjusted to fit content width
        zIndex: 600,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        boxShadow: "0px 30px 30px rgba(0, 0, 0, 0.15)",
        bottom: "30%",
        borderRadius: "1rem",
        backgroundColor: colors.black,
        margin: "auto",
        fontFamily: fontFamily ? fontFamily : "Poppins, sans-serif",
        ...style,
      }}
    >
      <Button
        variant=""
        href={link}
        size="large"
        onClick={onClick}
        sx={{
          width: "100%",
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
          fontFamily: fontFamily ? fontFamily : "Anton",
          fontSize: fontSize ? fontSize : "1.5rem",
          fontWeight: fontWeight ? fontWeight : 400,
          ...rest, // Rest props for additional styles or props
        }}
      >
        {text}
      </Button>
    </div>
  );
};

export default PrimaryButton;
