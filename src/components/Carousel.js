import React, { useState, useEffect } from "react";
import { Box, IconButton } from "@mui/material";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";

const Carousel = ({ images, style }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
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

  return (
    <Box
      position="relative"
      width="100%"
      height="100%"
      margin="auto"
      style={{ ...style }}
    >
      <IconButton
        onClick={handlePrevious}
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
          objectFit: "cover", // Ensures the image covers the entire area while maintaining aspect ratio
        }}
      />
      <IconButton
        onClick={handleNext}
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
        mt={2}
        position="absolute"
        bottom="10px"
        width="100%"
      >
        {images.map((_, index) => (
          <Box
            key={index}
            onClick={() => setCurrentIndex(index)}
            sx={{
              height: "10px",
              width: "10px",
              backgroundColor:
                index === currentIndex ? "white" : "rgba(255, 255, 255, 0.5)",
              borderRadius: "50%",
              cursor: "pointer",
              margin: "0 5px",
            }}
          ></Box>
        ))}
      </Box>
    </Box>
  );
};

export default Carousel;
