import React, { useState, useEffect } from "react";
import { Box, Button } from "@mui/material";
import { ArrowBack, ArrowForward } from "@mui/icons-material";
import vid1 from "../img/Om tun2.mp4";

const videos = [vid1];

const VideoCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextVideo = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % videos.length);
  };

  const prevVideo = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + videos.length) % videos.length
    );
  };

  useEffect(() => {
    const interval = setInterval(nextVideo, 5500); // Change video every 5.5 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  useEffect(() => {
    const videoElement = document.getElementById(`video-${currentIndex}`);
    if (videoElement) {
      videoElement.play().catch((error) => {
        console.error("Error attempting to play video:", error);
      });
    }
  }, [currentIndex]);

  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        height: "100vh",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {videos.map((video, index) => (
        <Box
          key={index}
          sx={{
            display: index === currentIndex ? "block" : "none",
            width: "100%",
            height: "100%",
          }}
        >
          <video
            id={`video-${index}`}
            src={video}
            style={{ objectFit: "cover", width: "100%", height: "100%" }}
            muted
            autoPlay
            loop
            playsInline
          />
        </Box>
      ))}
      <Button
        onClick={prevVideo}
        sx={{
          position: "absolute",
          left: 10,
          top: "50%",
          transform: "translateY(-50%)",
          zIndex: 1,
        }}
      >
       
      </Button>
      <Button
        onClick={nextVideo}
        sx={{
          position: "absolute",
          right: 10,
          top: "50%",
          transform: "translateY(-50%)",
          zIndex: 1,
        }}
      >
        
      </Button>
    </Box>
  );
};

export default VideoCarousel;
