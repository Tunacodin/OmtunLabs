import React, { useState, useEffect } from "react";
import "../App.css";
import ımg2 from "../img/1.png";
import ımg3 from "../img/2.png";
import vid1 from "../img/hero1.mp4";
import vid2 from "../img/hero2.mp4";

const videos = [vid1, vid2];

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % videos.length);
    }, 5500); // Adjust the interval to your desired video length

    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((currentIndex + 1) % videos.length);
  };

  const prevSlide = () => {
    setCurrentIndex((currentIndex - 1 + videos.length) % videos.length);
  };

  useEffect(() => {
    const videoElement = document.getElementById(`video-${currentIndex}`);
    if (videoElement) {
      videoElement.play().catch((error) => {
        console.error("Error attempting to play video:", error);
      });
    }
  }, [currentIndex]);

  return (
    <div className="slider">
      {videos.map((video, index) => (
        <div
          key={index}
          className={`slide ${index === currentIndex ? "active" : ""}`}
          style={{ display: index === currentIndex ? "block" : "none" }}
        >
          <video
            id={`video-${index}`}
            src={video}
            style={{ objectFit: "cover", width: "100%", height: "100%" }}
            muted
            autoPlay
            loop
            playsInline
            onEnded={nextSlide}
          />
        </div>
      ))}
     
    </div>
  );
};

export default ImageSlider;
