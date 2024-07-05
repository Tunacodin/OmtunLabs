import React, { useState, useEffect } from "react";
import { Box, IconButton, useMediaQuery } from "@mui/material";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";

const Carousel = ({ images, style }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("sm"));

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <Box
      position="relative"
      width="40%"
      height={isMobile ? "150px" : "100%"}
      sx={{
        ...style,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        
      }}
    >
      <IconButton
        onClick={handlePrevious}
        size="small"
        sx={{
          position: "absolute",
          top: "50%",
          left: "10px",
          transform: "translateY(-50%)",
          zIndex: 1,
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          color: "white",
        }}
      >
        <ArrowBackIos />
      </IconButton>
      <Box
        component="img"
        src={images[currentIndex]}
        alt={`Slide ${currentIndex}`}
        sx={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          transition: "transform 1s ease-in-out",
        }}
      />
      <IconButton
        onClick={handleNext}
        size="small"
        sx={{
          position: "absolute",
          top: "50%",
          right: "10px",
          transform: "translateY(-50%)",
          zIndex: 1,
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          color: "white",
        }}
      >
        <ArrowForwardIos />
      </IconButton>
      <Box
        display="flex"
        justifyContent="center"
        position="absolute"
        bottom="10px"
        width="100%"
        sx={{ mt: 2 }}
      >
        {images.map((_, index) => (
          <Box
            key={index}
            onClick={() => handleDotClick(index)}
            sx={{
              height: "10px",
              width: "10px",
              backgroundColor:
                index === currentIndex ? "rgba(25, 25, 255, 0.5)" : "gray",
              borderRadius: "50%",
              cursor: "pointer",
              mx: "5px",
            }}
          ></Box>
        ))}
      </Box>
    </Box>
  );
};

export default Carousel;
