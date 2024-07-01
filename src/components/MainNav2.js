import React, { useState, useEffect } from "react";
import { AppBar, Toolbar, Box, Link, Icon } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Home, MenuBook, LocalMall, MonetizationOn } from "@mui/icons-material"; // Import icons
import colors from "../consts/colors";
import Logo from "./Logo";
import darkColors from "../consts/darkColors";

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "100%",
  position: "fixed",
  height: "6rem",
  top: 0,
  left: 0,
  zIndex: 1000,
  boxShadow: "0px 30px 30px rgba(0, 0, 0, 0.15)",
  transition: "background-color 1s, color 1s, transform 1s ease-in-out",
  backgroundColor: darkColors.darkBlack,
  color: "#F7F7F7",
}));

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-around",
  width: "90%",
  padding: theme.spacing(2),
}));

const StyledLink = styled(Link)(({ theme }) => ({
  fontSize: "1.2rem",
  fontFamily: "Poppins",
  color: "inherit",
  textDecoration: "none",
  position: "relative",
  display: "flex",
  alignItems: "center",
  gap: "0.5rem", // Adjust gap between icon and text
  "&:hover::after": {
    content: '""',
    position: "absolute",
    width: "100%",
    transform: "scaleX(1)",
    height: "2px",
    bottom: -2,
    left: 0,
    backgroundColor: colors.mor,
    transformOrigin: "bottom right",
    transition: "transform 0.9s ease-out",
  },
  "&::after": {
    content: '""',
    position: "absolute",
    width: "100%",
    transform: "scaleX(0)",
    height: "2px",
    bottom: -2,
    left: 0,
    backgroundColor: colors.mor,
    transformOrigin: "bottom right",
    transition: "transform 0.5s ease-out",
  },
}));

const MainNav2 = () => {
  const [hidden, setHidden] = useState(false);
  const [lastScrollTop, setLastScrollTop] = useState(0);

  const handleScroll = () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop > lastScrollTop && scrollTop > 48) {
      // 3rem * 16px = 48px
      setHidden(true);
    } else {
      setHidden(false);
    }
    setLastScrollTop(scrollTop <= 0 ? 0 : scrollTop); // For Mobile or negative scrolling
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollTop]);

  return (
    <StyledAppBar
      position="static"
      style={{
        backgroundColor: hidden ? "#F7F7F7" : darkColors.darkBlack,
        color: hidden ? darkColors.darkBlack : "#F7F7F7",
        transform: hidden ? "translateY(-100%)" : "translateY(0)",
      }}
    >
      <StyledToolbar>
        <div
          style={{
            marginLeft: "-20rem",
            transition: "transform 2s ease-in-out",
          }}
        >
          {hidden ? <Logo /> : <Logo />}
        </div>

        <Box sx={{ display: "flex", alignItems: "center", gap: 4 }}>
          <StyledLink href="#">
            <Home /> Hakkımızda
          </StyledLink>
          <StyledLink href="#">
            <MenuBook /> Katalog
          </StyledLink>
          <StyledLink href="#">
            <LocalMall /> Ürünler
          </StyledLink>
          <StyledLink href="#">
            <MonetizationOn /> Teklif Alın
          </StyledLink>
        </Box>
      </StyledToolbar>
    </StyledAppBar>
  );
};

export default MainNav2;
