import React, { useState, useEffect } from "react";
import { AppBar, Toolbar, Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import {
  Home,
  MenuBook,
  Group,
  MonetizationOn,
  ArrowRight,
} from "@mui/icons-material";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
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

const StyledLink = styled(ScrollLink)(({ theme }) => ({
  fontSize: "1.2rem",
  fontFamily: "Poppins",
  color: "inherit",
  textDecoration: "none",
  position: "relative",
  display: "flex",
  alignItems: "center",
  gap: "0.5rem",
  cursor: "pointer",
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

const DropdownMenu = styled(Box)(({ theme }) => ({
  position: "absolute",
  top: "100%",
  left: 0,
  backgroundColor: darkColors.darkBlack,
  color: "#F7F7F7",
  minWidth: "200px",
  boxShadow: "0px 8px 16px rgba(0, 0, 0, 0.2)",
  zIndex: 1000,
  display: "none",
  flexDirection: "column",
  transition: "transform 0.9s ease-out",
  padding: theme.spacing(2),
  "& a": {
    color: "#F7F7F7",
    padding: theme.spacing(1),
    textDecoration: "none",
    transition: "transform 0.9s ease-out",
    cursor: "pointer",
    "&:hover": {
      backgroundColor: colors.mor,
    },
  },
}));

const KatalogLink = styled(StyledLink)(({ theme }) => ({
  "&:hover": {
    "& > .dropdown-menu": {
      display: "flex",
    },
    "& > .arrow-icon": {
      transform: "rotate(90deg)",
    },
  },
}));

const StyledButtonLink = styled(ScrollLink)(({ theme }) => ({
  fontSize: "1.2rem",
  fontFamily: "Poppins",
  color: "inherit",
  textDecoration: "none",
  position: "relative",
  display: "flex",
  alignItems: "center",
  gap: "0.5rem",
  cursor: "pointer",
  backgroundColor: colors.white,
  color: darkColors.darkBlack,
  padding: "0.5rem 1rem",
  borderRadius: "5px",
  "&:hover": {
    backgroundColor: colors.mor,
    color: colors.white,
    transition: "background-color 0.5s ease-in-out, color 0.5s ease-in-y",
  },
}));

const MainNav2 = () => {
  const [hidden, setHidden] = useState(false);
  const [lastScrollTop, setLastScrollTop] = useState(0);

  const handleScroll = () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop > lastScrollTop && scrollTop > 200) {
      // 48 yerine 200
      setHidden(true);
    } else {
      setHidden(false);
    }
    setLastScrollTop(scrollTop <= 0 ? 0 : scrollTop);
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
            cursor: "pointer",
          }}
          onClick={() => scroll.scrollToTop()}
        >
          <Logo />
        </div>

        <Box sx={{ display: "flex", alignItems: "center", gap: 4 }}>
          <StyledLink to="hero" smooth={true} duration={500}>
            <Home /> Anasayfa
          </StyledLink>
          <StyledLink to="about-us" smooth={true} duration={500}>
            <Home /> Hakkımızda
          </StyledLink>
          <KatalogLink to="catalog" smooth={true} duration={500}>
            <MenuBook /> Katalog <ArrowRight className="arrow-icon" />
            <DropdownMenu className="dropdown-menu">
              <ScrollLink to="projects" smooth={true} duration={500}>
                Projeler
              </ScrollLink>
              <ScrollLink to="open-source" smooth={true} duration={500}>
                Açık Kaynak Ürünler
              </ScrollLink>
            </DropdownMenu>
          </KatalogLink>
          <StyledLink to="team" smooth={true} duration={500}>
            <Group /> Takım
          </StyledLink>
          <StyledButtonLink to="get-quote" smooth={true} duration={500}>
            <MonetizationOn /> Teklif Alın
          </StyledButtonLink>
        </Box>
      </StyledToolbar>
    </StyledAppBar>
  );
};

export default MainNav2;
