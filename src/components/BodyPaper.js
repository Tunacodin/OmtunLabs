import React, { useState } from "react";
import { Button, IconButton, Paper, Typography } from "@mui/material";
import Fingerprint from "@mui/icons-material/Fingerprint";
import ArrowOutward from "@mui/icons-material/ArrowOutward";
import RateDiv from "./Rating";
import colors from "../consts/colors";
import darkColors from "../consts/darkColors";

const rateValues = [4.2, 4.5, 4.9, 5.0];

const BodyPaper = ({ img, text, link, linkgit, desc }) => {
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
      transition: "transform 0.5s ease", // Smoothly return to original state
    });
    setIsHovered(false);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  return (
    <Paper
      elevation={3}
      style={{
        fontFamily: "Poppins",
        height: "50vh", // Fixed height for consistent appearance
        width: "100%", // Full width within its container
        color: darkColors.black,

        display: "flex",
        flexDirection: "column",
        position: "relative",
        cursor: "pointer",
        transition: "transform 0.5s ease",
        borderRadius: "1rem",
        transformStyle: "preserve-3d", // Preserve 3D transformation
        ...style,
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={handleMouseEnter}
    >
      <img
        src={img}
        alt="img"
        style={{
          width: "100%",
          height: "90%",
          objectFit: "cover",
          position: "relative",
          top: 0,
          left: 0,
          opacity: isHovered ? 0.5 : 1,
          transition: "opacity 0.5s ease",
        }}
      />

      <div
        style={{
          fontFamily: "Poppins",
          color: "white",
          position: "absolute",
          top: -10,
          right: 0,
          padding: "5px 10px",
          backgroundColor: "#B052C0",
          minWidth: "25%",
          height: "5%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: "0px 4px 8px rgba(120, 120, 120, 0.6)", // Box shadow
          fontSize: "1.1rem", // Font boyutu
          borderRadius: "0rem 0rem 0rem 1rem",
        }}
      >
        <h3
          style={{
            fontFamily: "Poppins",
            textAlign: "start",
            fontWeight: 300,
            margin: 0, // H3 içeriğinin kenar boşluğunu sıfırla
            
          }}
        >
          {text}
        </h3>
      </div>

      <div
        style={{
          width: "100%",
          height: "10%",
          display: "flex",
          justifyContent: "space-evenly",
          alignItems: "center",
          zIndex: 1,
          position: "absolute",
          bottom: 0,
          left: 0,
          fontFamily: "Poppins",
        }}
      >
        <Button
          style={{
            width: "45%",
            height: "60%",
            opacity: 0.8,
            fontSize: ".8rem",
          }}
          color="secondary"
          variant="contained"
          endIcon={<ArrowOutward />}
          href={link}
          target="_blank"
        >
          Siteyi Göster
        </Button>

        <div
          style={{
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
            gap: "3rem",
          }}
        >
          <IconButton
            aria-label="fingerprint"
            color="secondary"
            style={{ width: "40px", height: "40px" }}
            href={linkgit}
          >
            <Fingerprint />
          </IconButton>
          <div
            style={{
              fontSize: "1rem",
              marginLeft: "-2rem",
              fontFamily: "Poppins",
            }}
          >
            Kaynak Kod
          </div>
        </div>
      </div>

      <div
        style={{
          position: "absolute",
          bottom: "10%",
          width: "100%",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <RateDiv defaultValue={rateValues[0]} precision={0.1} />
      </div>

      <div
        style={{
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
          variant="h6"
          p={3}
          component="div"
          style={{
            textAlign: "center",
            fontFamily: "Poppins",
            fontWeight: "500",
          }}
        >
          {desc}
        </Typography>
      </div>
    </Paper>
  );
};

export default BodyPaper;
