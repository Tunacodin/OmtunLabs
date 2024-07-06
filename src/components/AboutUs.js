import React, { useState, useEffect } from "react";
import img from "../img/tuna.png";
import img2 from "../img/tuncer.png";
import img3 from "../img/ömer.png";
import "../App.css";
import colors from "../consts/darkColors";
import darkColors from "../consts/darkColors";
import Stick from "./Stick";
import zIndex from "@mui/material/styles/zIndex";
import { borderRadius } from "@mui/system";
import bg from "../img/noktadesen.png";


const AboutUs = ({style}) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const carouselItems = [
    {
      id: 1,
      image: img,
      title: "First slide label",
      description:
        "Some representative placeholder content for the first slide.",
    },
    {
      id: 2,
      image: img2,
      title: "Second slide label",
      description:
        "Some representative placeholder content for the second slide.",
    },
    {
      id: 3,
      image: img3,
      title: "Third slide label",
      description:
        "Some representative placeholder content for the third slide.",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % carouselItems.length);
    }, 5000); // Change slide every 5 seconds
    return () => clearInterval(interval);
  }, [carouselItems.length]);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % carouselItems.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prevSlide) =>
        (prevSlide - 1 + carouselItems.length) % carouselItems.length
    );
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div
      className="about-us-container"
      style={{
        fontFamily: "Poppins",
        backgroundColor: colors.white,
        paddingBottom: "5rem",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          alignSelf: "flex-start",
          paddingLeft: "9rem",
        }}
      >
        <h1
          style={{
            fontFamily: "Anton",
            color: colors.black,
            fontSize: "3rem",
            textAlign: "Start",
            marginTop: "2rem",
          }}
        >
          TAKIM
        </h1>
      </div>
      <Stick
        style={{
          ...style,
          bottom: "-10%",
          width: "20%",
          left: "28rem",
          height: "15%",
          overflow: "hidden",
          backgroundColor: colors.green,
        }}
      />

      <Stick
        style={{
          ...style,
          top: "-5%",
          right: -20,
          height: "25%",
          width: "10%",
          borderRightRadius: "2rem",
          overflow: "hidden",
          backgroundColor: colors.yellow,
        }}
      />

      <Stick
        style={{
          ...style,
          top: "15%",
          left: -20,
          height: "5%",
          width: "20%",
          borderRightRadius: "2rem",
          overflow: "hidden",
          backgroundColor: colors.red,
        }}
      />
      <div className="carousel-container">
        {carouselItems.map((item, index) => (
          <div
            key={item.id}
            className={`carousel-item ${
              index === currentSlide ? "active" : ""
            }`}
          >
            <img
              style={{
                zIndex: 1,
                borderWidth: "2px",
                borderStyle: "solid",
                borderColor: "#f0f0f0",
                boxShadow: " 0 0  7px rgba(0,0, 0, .7)",
                objectFit: "cover",
                width: "15%",
              }}
              src={item.image}
              alt={`Slide ${item.id}`}
            />
            <div
              className="carousel-caption"
              style={{
                FontFamily: "Poppins",
                position: "absolute",
                width: "100%",
                height: "75%",
                top: "65%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                color: "#fff",
                zIndex: 0,
                boxShadow: "0 1px 10px rgba(222,220, 220, 0.9)",
                backgroundColor: colors.black,
                borderRadius: "1rem",
              }}
            >
              <h2 style={{ fontFamily: "Poppins" }}>{item.title}</h2>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
        <button className="carousel-control prev" onClick={prevSlide}>
          &#10094;
        </button>
        <button className="carousel-control next" onClick={nextSlide}>
          &#10095;
        </button>
        <div className="carousel-indicators">
          {carouselItems.map((item, index) => (
            <span
              key={item.id}
              className={`indicator ${index === currentSlide ? "active" : ""}`}
              onClick={() => goToSlide(index)}
            ></span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
