import React, { useState, useEffect } from "react";
import colors from "../consts/colors";
import ConstSlider from "./ConstSlider";
import { Typography } from "@mui/material";
import darkColors from "../consts/darkColors";
import bg from "../img/noktadesenbig.png";

const HeroBody = () => {
  const [visible, setVisible] = useState(false);
  const [showTypography, setShowTypography] = useState(false);

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
      }, 2000); // Delay in milliseconds, adjust as needed based on the duration of ConstSlider animations
      return () => clearTimeout(timer);
    } else {
      setShowTypography(false);
    }
  }, [visible]);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column-reverse",
        alignItems: "center",
        justifyContent: "space-evenly",
        height: "100vh",
        width: "100%",
        position: "relative",
        backgroundImage: `url(${bg})`,
        overflow: "hidden",
      }}
    >
 
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "space-evenly",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <ConstSlider />
        {showTypography && (
          <Typography fontFamily="Arial">
            <h1
              style={{
                color: colors.black,
                textAlign: "center",
                fontSize: "3rem",
                animation: "fadeIn 0s ease-in", // Animasyon süresini 1 saniyeye ve geçiş tipini 'ease-in' yapalım
                opacity: 1, // Opacity 1 olsun
                position: "absolute",
                bottom: "-10%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                zIndex: 1,
              }}
            >
              Yenilikçi Yazılım Çözümleriyle Geleceği Şekillendiriyoruz
            </h1>
          </Typography>
        )}
      </div>
    </div>
  );
};

export default HeroBody;
