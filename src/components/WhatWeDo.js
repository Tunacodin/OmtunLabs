import React from "react";
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
const WhatWeDo = ({ style }) => {



  const webImages = [img1, img2, img3];
  const mobileImages = [img4, img5, img6];
  const desktopImages = [img8, img7, img4,  img5, img6];

  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery((theme) =>
    theme.breakpoints.between("sm", "md")
  );

  const jobsContainerHeight = isMobile ? "250px" : "300px"; // Increased height

  return (
    <Box
      sx={{
        width: "100%",
        minHeight: "110vh",
        backgroundColor: colors.black,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 4,
        pt: 5,
        pb: 6,

        ...style,
      }}
    >
      <Typography
        variant={isMobile ? "h4" : "h2"}
        
        sx={{
          width: "60%",
          fontFamily: "Anton",
          color: colors.white,
          textAlign: "isMobile" ? "center" : "left",
paddingY:3
          
        }}
      >
        Teknolojilerimiz
      </Typography>

      <Jobs
        images={webImages}
        alignItems="flex-end"
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

      <Jobs
        images={mobileImages}
        alignItems="flex-end"
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

      <Jobs
        images={desktopImages}
        alignItems="flex-end"
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
  );
};

export default WhatWeDo;
