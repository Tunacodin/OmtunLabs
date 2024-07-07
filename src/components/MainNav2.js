import React, { useState, useEffect } from "react";
import {
  AppBar,
  Toolbar,
  Box,
  IconButton,
  Drawer,
  Button,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import {
  Home,
  MenuBook,
  ContactMail,
  Menu as MenuIcon,
  Build as BuildIcon,
} from "@mui/icons-material";
import { Link as ScrollLink } from "react-scroll";
import colors from "../consts/colors";
import darkColors from "../consts/darkColors";
import img from "../img/OmTUnlabsMobil.svg"; // Assuming this is your SVG image
import Logo from "./Logo";

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  width: "100%",
  margin: "auto",
  position: "fixed",
  height: "6rem",
  top: 0,
  left: 0,
  zIndex: 1000,
  boxShadow: "0px 30px 30px rgba(0, 0, 0, 0.15)",
  transition: "background-color 0.5s, color 0.5s, transform 0.5s ease-in-out",
  backgroundColor: darkColors.darkBlack,
  color: "#F7F7F7",
  "&.scroll-up": {
    transform: "translateY(0)",
    backgroundColor: colors.white,
    color: darkColors.darkBlack,
  },
  "&.scroll-down": {
    transform: "translateY(-100%)",
    backgroundColor: darkColors.darkBlack,
    color: "#F7F7F7",
  },
}));

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-around",
  width: "90%",
  padding: theme.spacing(2),
  [theme.breakpoints.down("md")]: {
    justifyContent: "space-between",
  },
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

const DrawerContainer = styled(Box)(({ theme }) => ({
  width: "100vw",
  height: "50vh",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  gap: "1rem",
  backgroundColor: darkColors.darkBlack,
  color: "#F7F7F7",
  "& a": {
    color: "#F7F7F7",
    textDecoration: "none",
  },
}));

const MainNav2 = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [lastScrollTop, setLastScrollTop] = useState(0);

  const handleScroll = () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop > lastScrollTop && scrollTop > 200) {
      // Scroll down
      document.body.classList.add("scroll-down");
      document.body.classList.remove("scroll-up");
    } else {
      // Scroll up
      document.body.classList.remove("scroll-down");
      document.body.classList.add("scroll-up");
    }
    setLastScrollTop(scrollTop <= 0 ? 0 : scrollTop);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollTop]);

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  return (
    <StyledAppBar position="static">
      <StyledToolbar>
        <Box
          sx={{
            position: { xs: "relative", md: "static" },
            left: { xs: "45%", md: "auto" },
            transform: { xs: "translateX(-50%)", md: "none" },
            display: "flex",
            alignItems: "center",
          }}
        >
          <Logo />
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img
              src={img}
              alt="Logo"
              style={{ width: "70%", maxWidth: "150px" }}
            />
          </div>
        </Box>
        <IconButton
          onClick={toggleDrawer}
          size="large"
          sx={{ display: { md: "none" }, position: "absolute", right: 0 }}
        >
          <MenuIcon sx={{ fontSize: "2rem", color: "#F7F7F7" }} />
        </IconButton>
        <Box
          sx={{
            display: { xs: "none", md: "flex" },
            alignItems: "center",
            gap: 3,
          }}
        >
          <StyledLink to="hero" smooth={true} duration={500}>
            <Home /> Anasayfa
          </StyledLink>
          <StyledLink to="techs" smooth={true} duration={500}>
            <BuildIcon /> Teknolojiler
          </StyledLink>
          <StyledLink to="products" smooth={true} duration={500}>
            <MenuBook /> Ürünler
          </StyledLink>
          <StyledLink to="contact" smooth={true} duration={500}>
            <ContactMail /> İletişim
          </StyledLink>
          <Button
            variant="text"
            color="inherit"
            sx={{
              backgroundColor: colors.white,
              color: darkColors.darkBlack,
              "&:hover": {
                backgroundColor: colors.mor,
                color: colors.white,
              },
              ml: "auto",
            }}
          >
            Teklif Al
          </Button>
        </Box>
      </StyledToolbar>

      <Drawer anchor="top" open={drawerOpen} onClose={toggleDrawer}>
        <DrawerContainer>
          <StyledLink to="hero" smooth={true} duration={500}>
            <Home /> Anasayfa
          </StyledLink>
          <StyledLink to="products" smooth={true} duration={500}>
            <MenuBook /> Ürünler
          </StyledLink>
          <StyledLink to="hero-body" smooth={true} duration={500}>
            
              <BuildIcon /> Teknolojiler
                </StyledLink>
          <StyledLink to="contact" smooth={true} duration={500}>
            <ContactMail /> İletişim
          </StyledLink>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "1rem",
            }}
          >
            <Button
              variant="text"
              sx={{
                backgroundColor: colors.mor,
                color: "white",
                fontFamily: "Poppins",
                fontSize: "1rem",
                "&:hover": {
                  backgroundColor: colors.mor,
                  color: colors.white,
                },
              }}
              onClick={toggleDrawer}
            >
              Teklif Al
            </Button>
          </Box>
        </DrawerContainer>
      </Drawer>
    </StyledAppBar>
  );
};

export default MainNav2;
