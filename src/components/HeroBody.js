import React, { useState, useEffect } from "react";
import { Box, useMediaQuery } from "@mui/material";
import { styled } from "@mui/system";
import colors from "../consts/colors";
import ConstSlider from "./ConstSlider";
import bg from "../img/noktadesenbig.png";
import TextAnimation from "../consts/textAnimate";
import "../App.css";

const StyledDiv = styled("div")({
  display: "flex",
  flexDirection: "column-reverse",
  alignItems: "center",
  justifyContent: "space-evenly",
  height: "100vh", // Adjusted height for full viewport
  width: "100%",
  position: "relative",
  backgroundImage: `url(${bg})`,
  zIndex: 500,
});

const HeroBody = ({ text }) => {
  const [visible, setVisible] = useState(false);
  const [showTypography, setShowTypography] = useState(false);
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("sm"));

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (visible) {
      const timer = setTimeout(() => {
        setShowTypography(true);
      }, 3500); // Adjust delay based on ConstSlider animations
      return () => clearTimeout(timer);
    } else {
      setShowTypography(false);
    }
  }, [visible]);

  return (
    <StyledDiv>
      <Box
        sx={{
          width: "80%", // Adjusted width for desktop view
          height: "100%", // Adjusted height for full viewport
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "space-evenly",
          position: "relative",
          overflow: "hidden",
          paddingTop: isMobile ? "5rem" : "7rem", // Adjusted padding top for mobile and desktop views
          [isMobile ? "width" : "maxWidth"]: isMobile ? "100%" : "80%", // Adjust width for mobile and non-mobile views
        }}
      >
        <ConstSlider />

       
      </Box>
    </StyledDiv>
  );
};

export default HeroBody;
