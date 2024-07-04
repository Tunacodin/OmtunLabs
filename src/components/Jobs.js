import React, { useState, useRef } from "react";
import { Box, Typography, Button, useMediaQuery, Stack } from "@mui/material";
import Carousel from "./Carousel";
import colors from "../consts/colors";
import darkColors from "../consts/darkColors";
import TeklifAl from "./TeklifAl";
import img1 from "../img/web1.png";
import img2 from "../img/web2.png";
import img3 from "../img/web4.png";

const Jobs = ({
  images = [img1, img2, img3],
  style,
  h1,
  p,
  bg,
  color,
  btncolor,
  features,
}) => {
  const [hover, setHover] = useState(false);
  const [clicked, setClicked] = useState(false);
  const detailsRef = useRef(null);
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery((theme) =>
    theme.breakpoints.between("sm", "md")
  );

  const handleMouseEnter = () => setHover(true);
  const handleMouseLeave = () => !clicked && setHover(false);
  const handleClick = () => setClicked(!clicked);

  const containerHeight = isMobile ? "200px" : "250px";

  return (
    <Box
      sx={{
        width: isMobile ? "90%" : isTablet ? "80%" : "60%",
        height: containerHeight,
        display: "flex",
        flexDirection: isMobile ? "column" : "row",
        justifyContent: "center",
        alignItems: "center",
        boxShadow: 3,
        borderRadius: 1,
        position: "relative",
        overflow: "hidden",
        ...style,
      }}
    >
      <Box
        ref={detailsRef}
        sx={{
          width: isMobile ? "100%" : "60%",
          height: containerHeight,
          backgroundColor: darkColors.black,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          position: "relative",
          overflow: "hidden",
          p: 2,
        }}
      >
        <Typography
          variant="h2"
          sx={{
            fontFamily: "Anton",
            color: colors.white,
            pb: 2,
            fontSize: isMobile ? "1.5rem" : "2rem",
          }}
        >
          {h1}
        </Typography>
        <Typography
          variant="body1"
          sx={{
            width: "100%",
            fontFamily: "Poppins",
            fontWeight: 500,
            color: colors.white,
            fontSize: isMobile ? "0.875rem" : "1rem",
          }}
        >
          {p}
        </Typography>
        <Button
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onClick={handleClick}
          sx={{
            color: hover ? color : colors.black,
            width: "6rem",
            borderRadius: 1,
            padding: ".4rem",
            border: "none",
            cursor: "pointer",
            fontFamily: "Poppins",
            fontWeight: 500,
            fontSize: "0.75rem",
            boxShadow: 4,
            backgroundColor: hover ? bg : colors.white,
            backgroundColor: clicked ? bg : colors.white,
            transition: "background-color 0.5s ease-in-out",
            mt: 2,
          }}
        >
          Daha Fazla
        </Button>
      </Box>

      <Box
        sx={{
          width: isMobile ? "100%" : "40%",
          height: containerHeight,
          mt: isMobile ? 2 : 0,
        }}
      >
        <Carousel
          images={images}
          style={{ height: "100%", overflow: "hidden", borderRadius: 1 }}
        />
      </Box>

      <Box
        sx={{
          position: "absolute",
          top: 0,
          right: hover || clicked ? 0 : `-${detailsRef.current?.offsetWidth}px`,
          width: isMobile ? "100%" : "45%",
          height: containerHeight,
          backgroundColor: "rgba(0, 0, 0, 0.8)",
          color: "white",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          transition: "right 0.7s ease-in-out, opacity 0.8s ease-in-out",
          opacity: hover || clicked ? 1 : 0,
          zIndex: 2,
          borderRadius: isMobile ? "0" : "0 1rem 1rem 0",
          p: 2,
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 1,
            overflowY: "auto",
            maxHeight: isMobile ? "70%" : "80%",
          }}
        >
          <ul
            style={{
              listStyleType: "disc",
              paddingLeft: "1.5rem",
              fontFamily: "Poppins",
              fontSize: isMobile ? "0.75rem" : "1rem",
            }}
          >
            {features.map((feature, index) => (
              <li key={index} style={{ marginBottom: "0.5rem" }}>
                {feature}
              </li>
            ))}
          </ul>
        </Box>

        <Stack
          sx={{
            alignSelf: "flex-end",
            mr: 1,
            mb: 1,
            width: "100%",
          }}
          direction={isMobile ? "row" : "column"}
          justifyContent="flex-end"
        >
          <TeklifAl btncolor={btncolor} />
        </Stack>
      </Box>
    </Box>
  );
};

export default Jobs;
