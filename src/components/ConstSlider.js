import React, { useState, useEffect } from "react";
import colors from "../consts/colors";
import img1 from "../img/web1.png";
import img2 from "../img/doğa.jpg";
import img3 from "../img/web2.png";
import img4 from "../img/web4.png";
import img5 from "../img/web5.png";

const ConstSlider = () => {
  const [visible, setVisible] = useState(false);

  // Animation variables
  const animationSpeed = "3s"; // Speed of the transition
  const baseTransitionDelay = 0.5; // Base delay for each div

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        // Adjust the value as needed
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

  const commonStyles = {
    width: "40%",
    height: "60%",
    position: "absolute",
    backgroundColor: colors.black,
    borderRadius: 20,
    boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)",
    overflow: "hidden",
    transition: `transform ${animationSpeed} ease-in-out, opacity ${animationSpeed} ease-in-out`, // Smooth transition effect
    transform: visible ? "translateY(0)" : "translateY(100%)",
    opacity: visible ? 1 : 0,
  };

  return (
    <div
      style={{
        marginTop: "10rem",
        position: "absolute",
        width: "100%",
        height: "100vh",
      }}
    >
      <div
        style={{
          ...commonStyles,
          width: "70%",
          height: "70%",
          top: "-5%",
          left: "15%",
          zIndex: 100,
          transitionDelay: `${baseTransitionDelay * 0}s`,
        }}
      >
        <img
          src={img1}
          alt="Hero Banner"
          style={{
            width: "100%",
            height: "100%",
            borderRadius: "10px",
            objectFit: "fill",
          }}
        />
      </div>

      <div
        style={{
          ...commonStyles,
          left: "10%",
          top: "5%",
          zIndex: 90,
          transitionDelay: `${baseTransitionDelay * 1}s`,
        }}
      >
        <img
          src={img2}
          alt="Hero Banner"
          style={{
            width: "100%",
            height: "100%",
            borderRadius: "10px",
            objectFit: "fill",
          }}
        />
      </div>

      <div
        style={{
          ...commonStyles,
          right: "10%",
          top: "5%",
          zIndex: 90,
          transitionDelay: `${baseTransitionDelay * 2}s`,
        }}
      >
        <img
          src={img3}
          alt="Hero Banner"
          style={{
            width: "100%",
            height: "100%",
            borderRadius: "10px",
            objectFit: "fill",
          }}
        />
      </div>

      <div
        style={{
          ...commonStyles,
          left: "5%",
          top: "10%",
          zIndex: 80,
          transitionDelay: `${baseTransitionDelay * 3}s`,
        }}
      >
        <img
          src={img4}
          alt="Hero Banner"
          style={{
            width: "100%",
            height: "100%",
            borderRadius: "10px",
            objectFit: "fill",
          }}
        />
      </div>

      <div
        style={{
          ...commonStyles,
          right: "5%",
          top: "10%",
          zIndex: 80,
          transitionDelay: `${baseTransitionDelay * 4}s`,
        }}
      >
        <img
          src={img5}
          alt="Hero Banner"
          style={{
            width: "100%",
            height: "100%",
            borderRadius: "10px",
            objectFit: "fill",
          }}
        />
      </div>
    </div>
  );
};

export default ConstSlider;
