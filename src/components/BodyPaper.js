import React, { useState } from "react";
import { Button, Paper, Typography, Box, IconButton } from "@mui/material";
import ArrowOutward from "@mui/icons-material/ArrowOutward";
import RateDiv from "./Rating";
import colors from "../consts/colors";
import darkColors from "../consts/darkColors";
import CloseIcon from "@mui/icons-material/Close";
import "../App.css";
import weblogo from "../img/omtunblack.png";
const rateValues = [4.2, 4.5, 4.9, 5.0];

const BodyPaper = ({ img, text, link, linkgit, desc, showSourceCode }) => {
  const [style, setStyle] = useState({});
  const [isHovered, setIsHovered] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const isMobile = window.innerWidth <= 768; // Define mobile breakpoint as per your design

  const handleMouseMove = (e) => {
    if (!isMobile) {
      const { left, top, width, height } =
        e.currentTarget.getBoundingClientRect();
      const x = (e.clientX - left) / width;
      const y = (e.clientY - top) / height;

      const rotateX = (y - 0.5) * 20; // Rotate by up to 20 degrees in Y axis
      const rotateY = (x - 0.5) * -20; // Rotate by up to 20 degrees in X axis

      setStyle({
        transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
      });
    }
  };

  const handleMouseLeave = () => {
    if (!isMobile) {
      setStyle({
        transform: `perspective(1000px) rotateX(0deg) rotateY(0deg)`,
        transition: "transform 0.3s ease", // Smoothly return to original state
      });
      setIsHovered(false);
    }
  };

  const handleMouseEnter = () => {
    if (!isMobile) {
      setIsHovered(true);
    }
  };

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  const closeDetails = () => {
    setShowDetails(false);
  };

  return (
    <Paper
      elevation={3}
      sx={{
        fontFamily: "Poppins",
        width: "100%",
        height: "50vh", // Fixed height for consistent appearance
        color: darkColors.black,
        display: "flex",
        flexDirection: "column",
        position: "relative",
        cursor: "pointer",
        transition: "transform 0.2s ease",
        borderRadius: "1rem",
        transformStyle: "preserve-3d", // Preserve 3D transformation
        ...style,
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={handleMouseEnter}
    >
      <Box
        component="img"
        src={img}
        alt="img"
        sx={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          position: "relative",
          top: 0,
          left: 0,
          opacity: isHovered ? 0.5 : 1,
          opacity: showDetails ? 0.5 : 1,
          transition: "opacity 0.5s ease",
          borderRadius: "1rem",
        }}
      />

      <Box
        sx={{
          fontFamily: "Poppins",
          color: "white",
          position: "absolute",
          top: 0,
          right: 0,
          padding: "5px 10px",
          backgroundColor: colors.mor,
          boxShadow: "0 0 10px rgba(0, 0, 0, 0.5)",
          minWidth: "35%",
          height: "5%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "1.1rem", // Font size
          borderRadius: "0 1rem 0 0",
        }}
      >
        <Typography
          variant="h6"
          sx={{
            fontFamily: "Poppins",
            textAlign: "start",
            fontWeight: 300,
            margin: 0, // Reset margin for h3 content
          }}
        >
          {text}
        </Typography>
      </Box>

      <Box
        sx={{
          alignSelf: "center",
          width: "90%",
          height: "10%",
          display: "flex",
          justifyContent: showSourceCode ? "space-evenly" : "center",
          alignItems: "center",
          zIndex: 1,
          gap: "1rem",
          position: "absolute",
          bottom: 0,
          fontFamily: "Poppins",
        }}
      >
        <Button
          sx={{
            borderRadius: 0,
            width: showSourceCode ? "45%" : "90%",
            height: "60%",
            fontSize: ".8rem",
            backgroundColor: colors.mor,
            color: "white",
            textAlign: "center",
            padding: "5px",
            transition: "background-color 0.5s ease-in-out",
            "&:hover": {
              backgroundColor: darkColors.mor,
            },
            display: showDetails ? "none" : "flex", // Hide in mobile view when details are shown
            display: {
              xs: "flex",
              md: "none",
            },
          }}
          onClick={toggleDetails}
        >
          Detay
        </Button>

        <Button
          sx={{
            width: showSourceCode ? "45%" : "90%",
            height: "60%",
            fontSize: ".8rem",
            backgroundColor: colors.mor,
            color: "white",
            borderRadius: 0,
            transition: "background-color 0.5s ease-in-out",
            "&:hover": {
              backgroundColor: darkColors.mor,
            },
          }}
          endIcon={<ArrowOutward />}
          href={link}
          target="_blank"
        >
          Siteyi Göster
        </Button>
      </Box>

      <Box
        sx={{
          position: "absolute",
          bottom: "10%",
          width: "100%",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <RateDiv defaultValue={rateValues[0]} precision={0.1} />
      </Box>

      {/* Additional details section */}
      <Box
        sx={{
          position: "absolute",
          top: "5%",
          right: "5%",
          display: showDetails ? "block" : "none",
          zIndex: 2,
        }}
      >
        <IconButton
          sx={{
            backgroundColor: colors.mor,
            color: "white",
            "&:hover": {
              backgroundColor: darkColors.mor,
            },
          }}
          onClick={closeDetails}
        >
          <CloseIcon />
        </IconButton>
      </Box>

      <Box
        sx={{
          position: "absolute",
          bottom: showDetails ? "20%" : "10%",
          width: "90%",
          height: "68%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-evenly",
          opacity: isHovered ? 1 : 0,
          opacity: showDetails ? 1 : 0,
          cursor: "pointer",
          transition: "bottom 0.5s ease, opacity 0.5s ease",
          backgroundColor: "rgba(0, 0, 0, 0.7)",
          color: "white",
          padding: "1rem",
          borderRadius: "1rem",
          alignSelf: "center",
          alignItems: "center",

        }}
      >
        <Box sx={{ width: "10rem", height: "5rem", }}>
          <img
            src={weblogo}
            alt="weblogo"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition:"start",
            }}
          />
        </Box>
        <Typography
          variant="body1"
          sx={{
            textAlign: "center",
            fontFamily: "Poppins",
            fontWeight: 500,
            fontSize: {sx: "1rem", md: "1.5rem"},
            cursor: "pointer",
          }}
        >
          {desc}
        </Typography>
      </Box>
    </Paper>
  );
};

export default BodyPaper;
