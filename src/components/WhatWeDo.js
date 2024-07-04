import React, { useRef, useState } from "react";
import Jobs from "./Jobs";
import colors from "../consts/colors";
import darkColors from "../consts/darkColors";

const WhatWeDo = ({ style }) => {
    const [hover, setHover] = useState(false);
    const [clicked, setClicked] = useState(false);
    const detailsRef = useRef(null);

    
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
        width: "100%",
        height: "110vh",
        backgroundColor: colors.black,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        gap: "2rem",
        position: "relative",
        paddingTop: "7rem",
        paddingBottom: "5rem",
        ...style,
      }}
    >
      <h1
        style={{
          fontSize: "3rem",
          fontFamily: "Anton",
          color: colors.white,
          textAlign: "start",
          position: "absolute",
          top: "1.5rem",
          left: "4rem",
        }}
      >
        OmTun Ne İş Yapıyor?
      </h1>

      <Jobs
        color={"white"}
        btncolor={colors.white}
        bg={colors.red}
        h1={"Web Teknolojileri"}
        p={
          "Yüksek kaliteli web uygulamalarımız, işletmenizin kullanıcı dostu olmasını ve müşterilerinize kolay erişim sağlamasını garanti eder."
        }
        features={[
          "SEO Optimizasyonu",
          "Arka Uç Desteği",
          "Admin Paneli",
          "Verim iyileştirmesi",
          "Duyarlı tasarım",
          "Tarayıcılar Arası Uyumluluk",
          "Ölçeklenebilirlik",
        ]}
      />
      <Jobs
        
        btncolor={colors.white}
        bg={colors.yellow}
        h1={"Mobil Teknolojileri"}
        p={
          "Mobil uygulamalarımız, işletmenizin kullanıcı dostu olmasını ve müşterilerinize kolay erişim sağlamasını temin eder."
        }
        features={[
          "Mobil Öncelikli Tasarım",
          "Push bildirimleri",
          "Çevrimdışı Destek",
          "Güvenlik özellikleri",
          "API'lerle entegrasyon",
        ]}
        style={{ flexDirection: "row-reverse" }}
      />
      <Jobs
        btncolor={colors.white}
        bg={colors.green}
        h1={"Masaüstü Uygulamaları"}
        p={
          "Üstün masaüstü uygulamalarımız, işletmenizin kullanıcı dostu olmasını ve kullanıcılarınıza kolay erişim sağlamasını sağlar."
        }
        features={[
          "Çoklu Pencere Desteği",
          "Yüksek performans",
          "Veri güvenliği",
          "Masaüstü Özellikleriyle Entegrasyon",
        ]}
      />
    </div>
  );
};

export default WhatWeDo;
