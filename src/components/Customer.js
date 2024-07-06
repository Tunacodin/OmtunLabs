import React from "react";
import { Grid, Box, Typography, useMediaQuery } from "@mui/material";
import colors from "../consts/colors";
import BodyPaper from "./BodyPaper";
import darkColors from "../consts/darkColors";
import img1 from "../img/web9.png";
import img2 from "../img/web6.png";
import img3 from "../img/web5.png";
import img4 from "../img/web8.png";
import img5 from "../img/web7.png";
import img6 from "../img/web4.png";
import "../App.css";

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
  {
    img: img4,
    text: "Ulaşım Uygulaması",
    link: "http://www.elittur.com",
    linkgit: "https://github.com/OmTun-Labs/transporter-website",
    desc: "Ulaşım Araçlarının Kullanıcıya Hızlı ve Güvenilir Bir Şekilde Ulaşmasını Amaçladık",
  },
  {
    img: img5,
    text: "Proje",
    link: "http://www.mounth.com",
    linkgit: "https://github.com/OmTun-Labs/transporter-website",
    desc: "Lojistik İşlemlerini İş Sahiplerinin Kesintisiz Doğru Bilgi İle Erişimini Sağladık",
  },
  {
    img: img6,
    text: "Proje",
    link: "http://www.web1.com",
    linkgit: "https://github.com/OmTun-Labs/transporter-website",
    desc: "Öğrencilerin Not Tutmaları İçin Kullanışlı ve Kolay Anlaşılabilir Not Uygulması Tasarladık",
  },
];

const Customer = () => {
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("sm"));

  return (
    <Box
      id="open-source"
      sx={{
        width: "100%",
        minHeight: "60vh",
        backgroundColor: darkColors.black,
        color: colors.white,
        position: "relative",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        paddingY: { xs: 5, sm: 10 },
      }}
    >
      <Box
        sx={{
          width: "60%",
          textAlign: "center",
          marginX: "auto",
          pt: 5,
          pb: 6,
        }}
      >
        <Typography
          variant={isMobile ? "h4" : "h2"}
          sx={{
            width: "100%", // Başlığın tam genişlikte olmasını sağlar
            fontFamily: "Anton",
            color: colors.white,
            textAlign: "center",
          }}
        >
          Ürünlerimiz
        </Typography>
      </Box>

      <Grid
        container
        spacing={2}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width:{
            xs: "95%",
            sm: "60%",
            md: "60%",
            lg: "60%",},
        }}
      >
        {paperInfo.map((info, index) => (
          <Grid
            item
            xs={12}
            sm={6}
            md={4} // Desktopta en fazla 3 sütun
            lg={4} // Desktopta en fazla 3 sütun
            key={index}
            sx={{
              display: "flex",
              justifyContent: "center",
              maxWidth: "100%",
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
    </Box>
  );
};

export default Customer;
