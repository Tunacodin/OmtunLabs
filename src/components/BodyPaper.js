import React, { useState } from "react";
import { Button, IconButton, Paper, Typography, Box } from "@mui/material";
import Fingerprint from "@mui/icons-material/Fingerprint";
import ArrowOutward from "@mui/icons-material/ArrowOutward";
import RateDiv from "./Rating";
import colors from "../consts/colors";
import darkColors from "../consts/darkColors";
import "../App.css";

const rateValues = [4.2, 4.5, 4.9, 5.0];

const BodyPaper = ({ img, text, link, linkgit, desc, showSourceCode }) => {
  const [style, setStyle] = useState({});
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    const { left, top, width, height } =
      e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - left) / width;
    const y = (e.clientY - top) / height;

    const rotateX = (y - 0.5) * 20; // Rotate by up to 20 degrees in Y axis
    const rotateY = (x - 0.5) * -20; // Rotate by up to 20 degrees in X axis

    setStyle({
      transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
    });
  };

  const handleMouseLeave = () => {
    setStyle({
      transform: `perspective(1000px) rotateX(0deg) rotateY(0deg)`,
      transition: "transform 0.3s ease", // Smoothly return to original state
    });
    setIsHovered(false);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
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
          fontSize: "1.1rem", // Font boyutu
          borderRadius: "0rem 1rem 0rem 1rem",
        }}
      >
        <Typography
          variant="h6"
          sx={{
            fontFamily: "Poppins",
            textAlign: "start",
            fontWeight: 300,
            margin: 0, // H3 içeriğinin kenar boşluğunu sıfırla
          }}
        >
          {text}
        </Typography>
      </Box>

      <Box
        sx={{
          width: "100%",
          height: "10%",
          display: "flex",
          justifyContent: showSourceCode ? "space-evenly" : "center",
          alignItems: "center",
          zIndex: 1,
          position: "absolute",
          bottom: 0,
          left: 0,
          fontFamily: "Poppins",
        }}
      >
        <Button
          sx={{
            width: showSourceCode ? "45%" : "90%",
            height: "60%",
            fontSize: ".8rem",
            backgroundColor: colors.mor,
            color: "white",
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

        {showSourceCode && (
          <Box
            sx={{
              borderWidth: "1px",
              borderStyle: "solid",
              borderColor: colors.mor,
              width: "50%",
              height: "70%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "row",
              borderRadius: "1rem",
              gap: "1rem",
            }}
          >
            <IconButton
              aria-label="fingerprint"
              color="secondary"
              sx={{ width: "40px", height: "40px" }}
              href={linkgit}
            >
              <Fingerprint />
            </IconButton>
            <Typography
              variant="body2"
              sx={{
                fontFamily: "Poppins",
                marginLeft: "-2rem",
              }}
            >
              Kaynak Kod
            </Typography>
          </Box>
        )}
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

      <Box
        sx={{
          position: "absolute",
          bottom: isHovered ? "20%" : "10%",
          width: "90%",
          height: "68%",
          display: "flex",
          justifyContent: "center",
          opacity: isHovered ? 1 : 0,
          transition: "bottom 0.5s ease, opacity 0.5s ease",
          backgroundColor: "rgba(0, 0, 0, 0.7)",
          color: "white",
          padding: "1rem",
          borderRadius: "1rem",
          alignSelf: "center",
          alignItems: "center",
        }}
      >
        <Typography
          variant="body1"
          p={3}
          sx={{
            textAlign: "center",
            fontFamily: "Poppins",
            fontWeight: 500,
          }}
        >
          {desc}
        </Typography>
      </Box>
    </Paper>
  );
};

export default BodyPaper;
