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

const  Customer  = () => (
  <div
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
          paddingLeft: "5rem",
          textAlign: "start",
          fontSize: "3rem",
          marginTop: "9rem",
        }}
      >
        Müşteri Ürünleri
      </h1>
    </div>
    <div
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "15%",
        backgroundImage: `url(${noktadesen})`,
        display: "flex",
        alignItems: "center",
        overflow: "hidden",
        whiteSpace: "nowrap",
      }}
    >
      <div style={{ width: "63%", margin: "auto" }} className="scrolling-text">
        <h1>
          TASARIM YENİLİKÇİ ÖZELLEŞTİRİLEBİLİR KULLANICI DOSTU İNOVATİF TASARIM
          YENİLİKÇİ ÖZELLEŞTİRİLEBİLİR KULLANICI DOSTU İNOVATİF TASARIM
          YENİLİKÇİ ÖZELLEŞTİRİLEBİLİR KULLANICI DOSTU İNOVATİF
        </h1>
      </div>
    </div>

    <Grid
      container
      style={{
        marginTop: "10rem",
        paddingLeft: "4rem",
        paddingRight: "4rem",
      }}
      spacing={2} // Changed to spacing={2} for 2 rem spacing
      alignItems="center"
      justifyContent="center"
    >
      <Stick stickyBg={bg} style={{ left: "15%", bottom: "20%",width: "17.5rem",height: "20.5rem", transform: "rotate(90deg)" }} />
      <Stick
        stickyBg={bg}
        style={{
          right: "20rem",
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

export default Customer;
