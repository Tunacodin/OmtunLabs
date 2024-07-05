import React from "react";
import { Box, Typography, useMediaQuery } from "@mui/material";
import Jobs from "./Jobs";
import colors from "../consts/colors";

const WhatWeDo = ({ style }) => {
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
        pt: 9,
        pb: 6,
        
        ...style,
      }}
    >
      <Typography
        variant="h3"
        sx={{
          fontFamily: "Anton",
          color: colors.white,
          textAlign: "center",
        }}
      >
        Ne Yapıyoruz
      </Typography>

      <Jobs
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
