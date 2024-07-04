import React, { useState, useRef } from "react";
import Carousel from "./Carousel";
import colors from "../consts/colors";
import darkColors from "../consts/darkColors";
import Stick from "./Stick";
import TeklifAl from "./TeklifAl";
import img1 from "../img/web1.png";
import img2 from "../img/web2.png";
import img3 from "../img/web4.png";


const Jobs = ({ images, style, h1, p, bg, color, btncolor, features,opacity,alignItems }) => {
  const [hover, setHover] = useState(false);
  const [clicked, setClicked] = useState(false);
  const detailsRef = useRef(null);

  // Placeholder images (replace with actual image props if necessary)
  images = [img1, img2, img3];

  const handleMouseEnter = () => {
    setHover(true);
  };

  const handleMouseLeave = () => {
    if (!clicked) {
      setHover(false);
    }
  };

  const handleClick = () => {
    setClicked(!clicked);
  };

  return (
    <div
      style={{
        width: "60%",
        height: "30%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
        boxShadow: "0px 3px 30px rgba(0, 0, 0, 1)",
        borderRadius: "1rem",
        position: "relative",
        overflow: "hidden",
        ...style,
      }}
    >
      {/* Sol taraftaki içerik */}
      <div // Kapsayıcı Div - Now position relative
        ref={detailsRef}
        style={{
          width: "100%",
          height: "100%",
          backgroundColor: darkColors.black,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "row",
          position: "relative",
          overflow: "hidden",
        }}
      >
     


        <div
          style={{
            height: "100%",
            padding: "2rem",
            zIndex: 1,
            display: "flex",
            flexDirection: "column",
            alignItems: alignItems,
            justifyContent: "center",
          }}
        >
          <h1
            style={{
              fontSize: "2rem",
              fontFamily: "Anton",
              color: colors.black,
              textAlign: "start",
              paddingBottom: "1.5rem",
            }}
          >
            {h1}
          </h1>
          <p
            style={{
              width: "50%",
              fontFamily: "Poppins",
              fontWeight: "500",
              color: colors.white,
              textAlign: "start",
              fontSize: "1.2rem",
            }}
          >
            {p}
          </p>
          <button
            style={{
              color: hover ? color : colors.black,
              width:"7rem",
              borderRadius: "1rem",
              padding: ".6rem",
              border: "none",
              cursor: "pointer",
              fontFamily: "Poppins",
              fontWeight: "500",
              fontSize: "1rem",
              boxShadow:
                "4px 4px 20px rgba(10, 110, 110, 0.5), -4px -4px 20px rgba(190, 120, 210, .5)",
              backgroundColor: hover ? bg : colors.white,
              backgroundColor: clicked ? bg : colors.white,
              transition: "background-color 0.5s ease-in-out",
            }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={handleClick}
          >
            Daha Fazla
          </button>
        </div>

        
      </div>

      {/* Sağ taraftaki carousel */}
      <div style={{ width: "40%", height: "100%", }}>
        <Carousel
          
          images={images}
          style={{ height: "100%", overflow: "hidden", borderRadius: 10,opacity: opacity}}
        />
      </div>

      <div
        style={{
          position: "absolute",
          top: 0,
          right:
            hover || clicked
              ? -16
              : `-${detailsRef.current?.offsetWidth || 0}px`,
          width: "45%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.8)", // Arkaplan rengini biraz daha şeffaf yaptım
          color: "white",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center", // Butonu alta hizalamak için
          alignItems: "center",
          transition: "right 0.7s ease-in-out, opacity 0.8s ease-in-out",
          opacity: hover || clicked ? 1 : 0,
          zIndex: 2,
          borderRadius: "0 1rem 1rem 0", // Sağ alt ve sağ üst köşelere yuvarlatma ekledim
        }}
      >
        <div style={{ display: "flex", flexDirection: "column" }}>
          {" "}
          {/* İki sütun için flexbox */}
          <ul
            style={{
              listStyleType: "disc",
              paddingLeft: "1.5rem",
              marginRight: "2rem",
              fontFamily: "Poppins",
            }}
          >
            {" "}
            {/* Sol sütun */}
            {features
              .slice(0, Math.ceil(features.length / 2))
              .map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
          </ul>
          <ul style={{ listStyleType: "disc", paddingLeft: "1.5rem" }}>
            {" "}
            {/* Sağ sütun */}
            {features
              .slice(Math.ceil(features.length / 2))
              .map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
          </ul>
        </div>

        <div
          style={{
            alignSelf: "flex-end",
            marginRight: "1rem",
            marginBottom: "1rem",
          }}
        >
          <TeklifAl btncolor={btncolor} />
        </div>
      </div>
    </div>
  );
};

export default Jobs;
