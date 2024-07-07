import React, { useState, useRef, useEffect } from "react";
import { Box, Typography, useMediaQuery } from "@mui/material";
import Jobs from "./Jobs";
import colors from "../consts/colors";
import img1 from "../img/web5.png";
import img2 from "../img/web7.png";
import img3 from "../img/web8.png";
import img4 from "../img/web9.png";
import img5 from "../img/web1.png";
import img6 from "../img/web2.png";
import img7 from "../img/web4.png";
import img8 from "../img/web6.png";
import "../App.css";

const Techs = ({ style }) => {
  const webImages = [img1, img2, img3];
  const mobileImages = [img4, img5, img6];
  const desktopImages = [img8, img7, img4, img5, img6];

  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("sm"));

  const jobsContainerHeight = isMobile ? "250px" : "300px"; // Adjusted height for better visibility

  const [visibleSections, setVisibleSections] = useState({
    title: false,
    web: false,
    mobile: false,
    desktop: false,
  });

  const observerOptions = {
    threshold: 0.1,
  };

  const observeElement = (element, section) => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setVisibleSections((prev) => ({ ...prev, [section]: true }));
          observer.disconnect();
        }
      });
    }, observerOptions);

    if (element) {
      observer.observe(element);
    }
  };

  const titleRef = useRef(null);
  const webRef = useRef(null);
  const mobileRef = useRef(null);
  const desktopRef = useRef(null);

  useEffect(() => {
    observeElement(titleRef.current, "title");
    observeElement(webRef.current, "web");
    observeElement(mobileRef.current, "mobile");
    observeElement(desktopRef.current, "desktop");
  }, []);

  return (
    <Box
      id="techs"
      sx={{
        width: "100%",
        backgroundColor: colors.black,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        marginX: "auto",
        gap: 4,
        pt: 5,
        pb: 6,
        ...style,
      }}
    >
      <Typography
        ref={titleRef}
        variant={isMobile ? "h4" : "h2"}
        className={visibleSections.title ? "fadeInUp" : ""}
        sx={{
          width: "60%",
          fontFamily: "Anton",
          color: colors.white,
          textAlign: "center",
          paddingY: 3,
          opacity: visibleSections.title ? 1 : 0,
          transition: "opacity 0.5s ease-in-out",
        }}
      >
        Teknolojilerimiz
      </Typography>

      {/* Jobs component for Web Technologies */}
      <Box
        ref={webRef}
        className={visibleSections.web ? "fadeInUp" : ""}
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          opacity: visibleSections.web ? 1 : 0,
          transition: "opacity 0.5s ease-in-out",
        }}
      >
        <Jobs
          images={webImages}
          alignItems="center"
          color="white"
          btncolor={colors.white}
          bg={colors.red}
          h1="Web Teknolojileri"
          p="Yüksek kaliteli web uygulamalarımız, işletmenizin kullanıcı dostu olmasını ve müşterilerinize kolay erişim sağlamasını garanti eder."
          features={[
            "SEO Optimizasyonu",
            "Arka Uç Desteği",
            "Admin Paneli",
            "Verim iyileştirmesi",
            "Duyarlı tasarım",
            "Tarayıcılar Arası Uyumluluk",
            "Ölçeklenebilirlik",
          ]}
          style={{
            flexDirection: isMobile ? "column" : "row",
            height: jobsContainerHeight,
            mb: isMobile ? 4 : 0, // Add margin bottom for spacing in mobile view
          }}
        />
      </Box>

      {/* Jobs component for Mobile Technologies */}
      <Box
        ref={mobileRef}
        className={visibleSections.mobile ? "fadeInUp" : ""}
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          opacity: visibleSections.mobile ? 1 : 0,
          transition: "opacity 0.5s ease-in-out",
        }}
      >
        <Jobs
          images={mobileImages}
          alignItems="center"
          btncolor={colors.white}
          bg={colors.yellow}
          h1="Mobil Teknolojileri"
          p="Mobil uygulamalarımız, işletmenizin kullanıcı dostu olmasını ve müşterilerinize kolay erişim sağlamasını temin eder."
          features={[
            "Mobil Öncelikli Tasarım",
            "Push bildirimleri",
            "Çevrimdışı Destek",
            "Güvenlik özellikleri",
            "API'lerle entegrasyon",
          ]}
          style={{
            flexDirection: isMobile ? "column" : "row",
            height: jobsContainerHeight,
            mb: isMobile ? 4 : 0, // Add margin bottom for spacing in mobile view
          }}
        />
      </Box>

      {/* Jobs component for Desktop Applications */}
      <Box
        ref={desktopRef}
        className={visibleSections.desktop ? "fadeInUp" : ""}
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          opacity: visibleSections.desktop ? 1 : 0,
          transition: "opacity 0.5s ease-in-out",
        }}
      >
        <Jobs
          images={desktopImages}
          alignItems="center"
          btncolor={colors.white}
          bg={colors.green}
          h1="Masaüstü Uygulamaları"
          p="Üstün masaüstü uygulamalarımız, işletmenizin kullanıcı dostu olmasını ve kullanıcılarınıza kolay erişim sağlamasını sağlar."
          features={[
            "Çoklu Pencere Desteği",
            "Yüksek performans",
            "Veri güvenliği",
            "Masaüstü Özellikleriyle Entegrasyon",
          ]}
          style={{
            flexDirection: isMobile ? "column" : "row",
            height: jobsContainerHeight,
          }}
        />
      </Box>
    </Box>
  );
};

export default Techs;
