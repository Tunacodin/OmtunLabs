import React, { useEffect, useRef } from "react";
import Lottie from "lottie-react";
import animationData from "../animations/business-analysis.json";
import animationData2 from "../animations/business-call.json";
import animationData3 from "../animations/business-sales-profit.json";
import animationData4 from "../animations/horizontal-bar-chart.json";
import animationData5 from "../animations/online-delivery-service.json";
import animationData6 from "../animations/online-sales.json";
import animationData7 from "../animations/business-analysis.json";
import darkColors from "../consts/darkColors";
import colors from "../consts/colors";

const SmallSlider = () => {
  const sliderRef = useRef(null);

  useEffect(() => {
    const slider = sliderRef.current;
    let scrollAmount = 0;

    const scrollStep = () => {
      scrollAmount += 1; // Kayma hızı
      if (scrollAmount >= slider.scrollWidth / 2) {
        scrollAmount = 0;
      }
      slider.scrollLeft = scrollAmount;
    };

    const intervalId = setInterval(scrollStep, 20); // Kayma sıklığı

    return () => clearInterval(intervalId);
  }, []);

  const items = [
    { title: "1 Ayda Ürün Hazır", animation: animationData },
    { title: "Bakım Hizmeti", animation: animationData2 },
    { title: "7/24 Servis Hizmeti", animation: animationData3 },
    { title: "Güvenilir", animation: animationData4 },
    { title: "Müşteri Memnuniyeti", animation: animationData5 },
    { title: "Kullanıcı Dostu", animation: animationData6 },
    { title: "Kaliteli Ürün", animation: animationData7 },
  ];

  return (
    <div
      style={{
        backgroundColor: colors.black, // Soft background color
        width: "60%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        position: "relative",
      }}
    >
      <div
        ref={sliderRef}
        style={{
          display: "flex",
          width: "100%",
          height: "100%",
          overflowX: "hidden",
          borderLeft: "1px solid white",
          borderRight: "1px solid white",
          boxShadow:
            "inset 10px 0 10px -10px rgba(0, 0, 0, 0.5), inset -10px 0 10px -10px rgba(0, 0, 0, 0.5)",
        }}
      >
        {items.concat(items).map((item, index) => (
          <div
            key={index}
            style={{
              flex: "0 0 25%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              height: "100%",
              borderWidth: 1,
              borderColor: "black",
              boxSizing: "border-box",
            }}
          >
            <Lottie
              animationData={item.animation}
              style={{ width: "90%", height: "80%" }}
            />
            <h3
              style={{
                textAlign: "center",
                color: darkColors.white,
                fontSize: "1.2em",
              }}
            >
              {item.title}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SmallSlider;
