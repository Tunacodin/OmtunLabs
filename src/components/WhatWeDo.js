import React from "react";
import colors from "../consts/colors";
import img from "../img/web1.png"; // Update with your actual image path

import Carousel from "./Carousel";

const WhatWeDo = () => {
  const sectionStyle = {
    display: "flex",
    flexDirection: "column",
    margin: "auto",
    marginTop: "5rem",
    backgroundColor: colors.white,
    padding: "0 5rem",
    position: "relative",
    overflow: "hidden",
    height: "100vh",
  };

  const featureStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    margin: "2rem 0",
  };

  const contentStyle = {
    flex: "1",
    color: colors.black,
    fontFamily: "Poppins",
    textAlign: "left",
    marginLeft: "2rem",
  };

  const imageStyle = {
    width: "45%",
    height: "auto",
    marginLeft: "2rem",
  };

  return (
    <div style={sectionStyle}>
      <h1
        style={{
          color: colors.black,
          fontFamily: "Anton",
          fontSize: "3rem",
          textAlign: "left",
          marginTop: "2rem",
        }}
      >
        Biz Ne Yapıyoruz?
      </h1>

      <div style={featureStyle}>
        <div style={{ ...contentStyle, marginRight: "2rem" }}>
          <h1>Web Teknolojileri</h1>
          <p>
            Web Teknolojileri gelişmiş web siteleri ve uygulamaları geliştirmek
            için kullanıyoruz.
          </p>
        </div>
        <Carousel />
      </div>

      <div style={featureStyle}>
        <Carousel />
        <div style={contentStyle}>
          <h1>Diğer Hizmetler</h1>
          <p>Diğer hizmetlerimiz hakkında bilgi buraya gelecek.</p>
        </div>
      </div>

      <div style={featureStyle}>
        <div style={{ ...contentStyle, marginRight: "2rem" }}>
          <h1>Üçüncü Özellik</h1>
          <p>Üçüncü özellik hakkında detaylar buraya.</p>
        </div>
        <Carousel  />
      </div>
    </div>
  );
};

export default WhatWeDo;
