import React, { useRef, useEffect } from "react";
import { Box, Button, useMediaQuery } from "@mui/material";
import { styled } from "@mui/system";
import darkColors from "../consts/darkColors";
import ImageCarousel from "../components/ImageCarosell"; // Assuming ImageCarousel is the correct component name

const HeroHeader = ({ text }) => {
  const headerRef = useRef(null);
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("sm"));

  useEffect(() => {
    const handleResize = () => {
      if (headerRef.current) {
        // Dynamically adjust header height
        headerRef.current.style.height = isMobile ? "100vh" : "100vh";
      }
    };

    handleResize(); // Check initial size
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [isMobile]);

  const PrimaryButton = styled(Button)({
    background: darkColors.black,
    color: "white",
    borderRadius: "2rem",
    padding: "1rem 2rem",
    marginTop: "2rem",
    "&:hover": {
      backgroundColor: darkColors.blue, // Assuming darkColors.blue is defined
    },
  });

  const HeaderContainer = styled(Box)({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh", // Adjusted height for full viewport height
    overflow: "hidden",
    position: "relative",
    marginTop: "2rem",
    boxShadow: "0px 3px 30px rgba(0, 0, 0, 0.5)",
    zIndex: 999,
    backgroundImage: `linear-gradient(to top, rgba(255, 255, 255, 0) 15%, ${darkColors.black} 100%)`,
  });

  const ImageContainer = styled(Box)({
    height: "100%",
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    overflow: "hidden",
  });

  return (
    <HeaderContainer id="hero" ref={headerRef}>
      <PrimaryButton variant="contained">{text}</PrimaryButton>
      <ImageContainer>
        <ImageCarousel />
      </ImageContainer>
    </HeaderContainer>
  );
};

export default HeroHeader;
