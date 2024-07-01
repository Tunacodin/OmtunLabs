import React, { useState, useEffect } from "react";
import "../App.css";
import ımg from "../img/mounth.png"
import doğa from "../img/doğa.jpg"
import ımg2 from "../img/1.png"
import ımg3 from "../img/2.png"
import ımg4 from "../img/3.png"

const images = [

ımg,
  doğa,

  
];

const ImageSlider = ({img}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((currentIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((currentIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="slider" >
      {images.map((image, index) => (
        <div
          key={index}
          className={`slide ${index === currentIndex ? "active" : ""}`}
          style={{ backgroundImage: `url(${image})` }}
        />
      ))}
      <button className="prev" onClick={prevSlide}>
        &#10094;
      </button>
      <button className="next" onClick={nextSlide}>
        &#10095;
      </button>
    </div>
  );
};

export default ImageSlider;
