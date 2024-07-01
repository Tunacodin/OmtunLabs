import React, { useRef, useState, useEffect } from "react";
import Navbar from "./Navbar";
import colors from "../consts/colors";
import DividerNav from "./DividerNav";
import Logo from "./Logo";
import ImageCarosell from "./ImageCarosell";
import MainNav from "./MainNav";
import darkColors from "../consts/darkColors";
import MainNav2 from "./MainNav2";
import Stick from "./Stick";
import bg from "../img/noktadesen.png";
import { BorderColor, Padding } from "@mui/icons-material";
import zIndex from "@mui/material/styles/zIndex";
import { Button } from "@mui/material";
import PrimaryButton from "./PrimaryButton";

const HeroHeader = ({text}) => {
  const [headerHeight, setHeaderHeight] = useState(0);
  const headerRef = useRef(null);

  // Dinamik olarak header yüksekliğini al
  useEffect(() => {
    if (headerRef.current) {
      setHeaderHeight(headerRef.current.clientHeight);
    }
  }, []);

  return (
    <div
      ref={headerRef}
      style={{
        background: `linear-gradient(to top, rgba(255, 255, 255, 0) 15%, ${darkColors.black} 100%)`,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "110vh",
        marginTop: "-4rem",
        overflow: "hidden",
        position: "relative",
      }}
    >
      <PrimaryButton text="KEŞFET" />
      <div
        style={{
          height: "84vh", // Header boyutu %90 viewport yüksekliği
          width: "75%",
          background: "transparent",
          zIndex: 100,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: "0px 30px 30px rgba(0, 0, 0, 0.15)",
          margin: "auto",
          position: "relative",
          overflow: "hidden",
          marginTop: "10rem",
          borderRadius: "0 0 5rem 5rem",
        }}
      >
        <div
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            alignItems: "center",
            overflow: "hidden",
          }}
        >
          <ImageCarosell />
        </div>
      </div>
    </div>
  );
};

export default HeroHeader;
