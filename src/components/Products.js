import React, { useState, useRef, useEffect } from "react";
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

const ProductsPage = () => {
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("sm"));

  const [visibleSections, setVisibleSections] = useState({
    title: false,
    products: Array.from({ length: paperInfo.length }, () => false),
  });

  const observerOptions = {
    threshold: 0.1,
  };

  const observeElement = (element, index) => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setVisibleSections((prev) => {
            const updatedProducts = [...prev.products];
            updatedProducts[index] = true;
            return { ...prev, products: updatedProducts };
          });
          observer.disconnect();
        }
      });
    }, observerOptions);

    if (element) {
      observer.observe(element);
    }
  };

  const titleRef = useRef(null);
  useEffect(() => {
    const titleElement = titleRef.current;
    observeElement(titleElement, -1);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const titleElement = titleRef.current;
      if (titleElement && !visibleSections.title) {
        const rect = titleElement.getBoundingClientRect();
        if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
          setVisibleSections((prev) => ({ ...prev, title: true }));
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [visibleSections.title]);

  return (
    <Box
      id="products"
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
        ref={titleRef}
        sx={{
          width: "60%",
          textAlign: "center",
          marginX: "auto",
          pt: 5,
          pb: 6,
          opacity: visibleSections.title ? 1 : 0,
          transition: "opacity 0.5s ease-in-out",
        }}
      >
        <Typography
          variant={isMobile ? "h4" : "h2"}
          sx={{
            width: "100%",
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
          width: { xs: "95%", sm: "60%", md: "60%", lg: "60%" },
        }}
      >
        {paperInfo.map((info, index) => (
          <Grid
            item
            xs={12}
            sm={6}
            md={4} // Desktop displays up to 3 columns
            lg={4} // Desktop displays up to 3 columns
            key={index}
            ref={(element) => observeElement(element, index)}
            sx={{
              display: "flex",
              justifyContent: "center",
              maxWidth: "100%",
              opacity: visibleSections.products[index] ? 1 : 0,
              transition: "opacity 0.5s ease-in-out",
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

export default ProductsPage;
