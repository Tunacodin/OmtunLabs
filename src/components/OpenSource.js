import React from "react";
import { Grid } from "@mui/material";
import colors from "../consts/colors";
import BodyPaper from "./BodyPaper";
import img3 from "../img/OmTun Black Rounded.png";
import img1 from "../img//mounth.png";
import img2 from "../img/web1.png";
import img4 from "../img/web2.png";
import darkColors from "../consts/darkColors";
import bg from "../img/noktadesen.png";
import "../App.css";
import noktadesen from "../img/noktadesen.png";
import Stick from "./Stick";
import zIndex from "@mui/material/styles/zIndex";

const paperInfo = [
  {
    img: img1,
    text: "Ulaşım Uygulaması",
    link: "http://www.elittur.com",
    linkgit: "https://github.com/OmTun-Labs/transporter-website",
    desc: "Ulaşım Araçlarının Kullanıcıya Hızlı ve Güvenilir Bir Şekilde Ulaşmasını Amaçladık",
  },
  {
    img: img2,
    text: "Proje",
    link: "http://www.mounth.com",
    linkgit: "https://github.com/OmTun-Labs/transporter-website",
    desc: "Lojistik İşlemlerini İş Sahiplerinin Kesintisiz Doğru Bilgi İle Erişimini Sağladık",
  },
  {
    img: img3,
    text: "Proje",
    link: "http://www.web1.com",
    linkgit: "https://github.com/OmTun-Labs/transporter-website",
    desc: "Öğrencilerin Not Tutmaları İçin Kullanışlı ve Kolay Anlaşılabilir Not Uygulması Tasarladık",
  },
];

const OpenSource = () => (
  <div
    id="open-source"
    style={{
      minHeight: "100vh",
      backgroundColor: darkColors.black,
      color: colors.white,
      padding: "2rem",
      paddingLeft: "4rem",
      paddingRight: "4rem",
      position: "relative",
      overflow: "hidden",
    }}
  >
    <div
      style={{
        width: "100%",
      }}
    >
      <h1
        style={{
          fontFamily: "Anton",
          color: colors.platinum,
          paddingLeft: "11rem",
          textAlign: "start",
          fontSize: "3rem",
          marginTop: "9rem",
        }}
      >
        Kaynak Projelerimiz
      </h1>
      <span
        style={{
          color: colors.black,
          position: "absolute",
          fontFamily: "Anton",
          fontSize: "3rem",
          top: "11rem",
          left: "9rem",
          zIndex: 1,
        }}
      >
        Açık
      </span>
    </div>

    <Grid
      container
      style={{
        marginTop: "5rem",
        paddingLeft: "4rem",
        paddingRight: "4rem",
      }}
      spacing={2} // Changed to spacing={2} for 2 rem spacing
      alignItems="center"
      justifyContent="center"
    >
      <Stick
        stickyBg={bg}
        style={{ left: "0rem", top: "10rem", width: "14.5rem", zIndex: 0 }}
      />
      <Stick
        stickyBg={bg}
        style={{
          right: 2,
          top: 0,
          transform: "rotate(90deg)",
        }}
      />

      {paperInfo.map((info, index) => (
        <Grid
          item
          xs={12}
          sm={6}
          md={4}
          lg={3} // Changed to lg={3} for 4 items per row on large screens
          key={index}
          style={{
            display: "flex",
            justifyContent: "center",
            padding: "1rem",
          }}
        >
          <BodyPaper
            img={info.img}
            text={info.text}
            link={info.link}
            linkgit={info.linkgit}
            desc={info.desc}
          />
        </Grid>
      ))}
    </Grid>
  </div>
);

export default OpenSource;
