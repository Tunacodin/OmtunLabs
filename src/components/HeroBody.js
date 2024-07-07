import React, { useState, useEffect } from "react";
import { Box, Typography, useMediaQuery } from "@mui/material";
import { styled, keyframes } from "@mui/system";
import colors from "../consts/colors";
import ConstSlider from "./ConstSlider";
import bg from "../img/noktadesenbig.png";
import "../App.css";

const StyledDiv = styled("div")({
  display: "flex",
  flexDirection: "column-reverse",
  alignItems: "center",
  justifyContent: "space-evenly",
  height: "100vh",
  width: "100%",
  position: "relative",
  backgroundImage: `url(${bg})`,
  zIndex: 500,
});

const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

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
      }, 0);
      return () => clearTimeout(timer);
    } else {
      setShowTypography(false);
    }
  }, [visible]);

  return (
    <StyledDiv
    id="hero-body"
    >
      <Box
        sx={{
          width: "80%",
          height: "100%",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-evenly",
          position: "relative",
          overflow: "hidden",
          paddingTop: isMobile ? "1rem" : "4rem",
          [isMobile ? "width" : "maxWidth"]: isMobile ? "100%" : "80%",
        }}
      >
        <ConstSlider  visible={showTypography} delayOffset={0.3} />
        <Typography
          sx={{
            fontFamily: "Anton",
            color: colors.black,
            margin: 2,
            fontSize: { xs: "2rem", md: "3rem" },
            textAlign: "center",
            zIndex: 1000,
            [isMobile ? "width" : "maxWidth"]: isMobile ? "100%" : "80%",
            opacity: showTypography ? 1 : 0,
            animation: showTypography
              ? `${fadeInUp} 1s ease-out`
              : "none", // Apply fadeInUp animation when showTypography is true
          }}
        >
          Girişimlerinizi Birlikte Gerçekleştirelim
        </Typography>
      </Box>
    </StyledDiv>
  );
};

export default HeroBody;
