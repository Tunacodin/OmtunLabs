import React, { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import { styled } from "@mui/system";
import colors from "../consts/colors";
import img1 from "../img/web1.png";
import img2 from "../img/web1.png";
import img3 from "../img/web2.png";
import img4 from "../img/web4.png";
import img5 from "../img/web5.png";

const StyledBox = styled(Box)(({ theme, visible, delay, order }) => ({
  width: "40%",
  height: "60%",
  position: "absolute",
  backgroundColor: colors.black,
  borderRadius: 20,
  boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)",
  overflow: "hidden",
  transition: `transform 1s ease-in-out ${delay}s, opacity 1s ease-in-out ${delay}s`,
  transform: visible ? "translateY(0)" : "translateY(100%)",
  opacity: visible ? 1 : 0,
  zIndex: 100 - order,
  [theme.breakpoints.down("md")]: {
    width: "50%",
    height: "50%",
  },
  [theme.breakpoints.down("sm")]: {
    width: "80%",
    height: "40%",
    transition: `opacity 2s ease-in-out ${delay}s`,
    transform: "none",
    opacity: visible ? 1 : 0,
  },
}));

const ConstSlider = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
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

  return (
    <Box
      sx={{
        position: "absolute",
        width: "100%",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <StyledBox
        visible={visible}
        delay={0.5}
        order={4}
        sx={{
          right: { xs: "5%", sm: "5%" },
          top: { xs: "0%", sm: "15%", md: "20%" },
        }}
      >
        <img
          src={img1}
          alt="Hero Banner"
          style={{
            width: "100%",
            height: "100%",
            borderRadius: "10px",
            objectFit: "cover",
            boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.5)",
          }}
        />
      </StyledBox>

      <StyledBox
        visible={visible}
        delay={1}
        order={4}
        sx={{
          left: { xs: "0%", sm: "5%" },
          top: { xs: "15%", sm: "0%", md: "20%" },
        }}
      >
        <img
          src={img2}
          alt="Hero Banner"
          style={{
            width: "100%",
            height: "100%",
            borderRadius: "10px",
            objectFit: "cover",
            boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.5)",
          }}
        />
      </StyledBox>

      <StyledBox
        visible={visible}
        delay={1.2}
        order={3}
        sx={{
          right: { xs: "0%", sm: "10%" },
          top: { xs: "5%", sm: "0%", md: "15%" },
        }}
      >
        <img
          src={img3}
          alt="Hero Banner"
          style={{
            width: "100%",
            height: "100%",
            borderRadius: "10px",
            objectFit: "cover",
            boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.5)",
          }}
        />
      </StyledBox>

      <StyledBox
        visible={visible}
        delay={1.5}
        order={2}
        sx={{
          left: { xs: "5%", sm: "10%" },
          top: { xs: "10%", sm: "5%", md: "15%" },
        }}
      >
        <img
          src={img4}
          alt="Hero Banner"
          style={{
            width: "100%",
            height: "100%",
            borderRadius: "10px",
            objectFit: "cover",
            boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.5)",
          }}
        />
      </StyledBox>

      <StyledBox
        visible={visible}
        delay={1.6}
        order={1}
        sx={{
          width: { xs: "80%", sm: "70%", md: "70%" },
          height: { xs: "40%", sm: "60%", md: "70%" },
          top: { xs: "25%", sm: "10%", md: "5%" },
          left: { xs: "10%", sm: "15%" },
        }}
      >
        <img
          src={img5}
          alt="Hero Banner"
          style={{
            width: "100%",
            height: "100%",
            borderRadius: "10px",
            objectFit: "cover",
            boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.5)",
          }}
        />
      </StyledBox>

     
    </Box>
  );
};

export default ConstSlider;
