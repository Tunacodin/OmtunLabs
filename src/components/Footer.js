import React, { useState, useEffect, useRef } from "react";
import {
  Box,
  Button,
  Grid,
  Link,
  TextField,
  Typography,
  useMediaQuery,
  IconButton,
} from "@mui/material";
import { Facebook, Twitter, Instagram, LinkedIn } from "@mui/icons-material";
import colors from "../consts/colors";
import omtun from "../img/OmTunMobil.svg";
import darkColors from "../consts/darkColors";

const Footer = () => {
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  const [isVisible, setIsVisible] = useState(false);
  const footerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.disconnect();
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    if (footerRef.current) {
      observer.observe(footerRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <Box
      ref={footerRef}
      sx={{
        backgroundColor: darkColors.black,
        color: colors.white,
        padding: "4rem 2rem",
        mt: "auto",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around",
        opacity: isVisible ? 1 : 0,
        transition: "opacity 0.5s ease-in-out",
      }}
    >
      <Grid container spacing={5} style={{ width: "60%" }}>
        {/* Şirket Bilgileri */}
        <Grid item xs={12} md={3}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: isMobile ? "center" : "flex-start",
              width: "100%",
            }}
          >
            <img
              src={omtun}
              alt="omtun"
              style={{
                width: "10rem",
                marginBottom: isMobile ? "1rem" : "2rem",
              }}
            />
          </Box>
        </Grid>

        {/* Hızlı Bağlantılar */}
        <Grid item xs={12} md={3}>
          <Typography variant="h6" gutterBottom>
            Hızlı Bağlantılar
          </Typography>
          <Box sx={{ textAlign: isMobile ? "center" : "left" }}>
            <Link
              href="#"
              color="inherit"
              underline="none"
              sx={{ display: "block", margin: "0.5rem 0" }}
            >
              Anasayfa
            </Link>
            <Link
              href="#"
              color="inherit"
              underline="none"
              sx={{ display: "block", margin: "0.5rem 0" }}
            >
              Hakkımızda
            </Link>
            <Link
              href="#"
              color="inherit"
              underline="none"
              sx={{ display: "block", margin: "0.5rem 0" }}
            >
              Hizmetler
            </Link>
            <Link
              href="#"
              color="inherit"
              underline="none"
              sx={{ display: "block", margin: "0.5rem 0" }}
            >
              İletişim
            </Link>
          </Box>
        </Grid>

        {/* Sosyal Medya */}
        <Grid item xs={12} md={3}>
          <Typography variant="h6" gutterBottom>
            Bizi Takip Edin
          </Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: isMobile ? "center" : "flex-start",
              gap: "1rem",
            }}
          >
            <Link
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener"
            >
              <IconButton
                sx={{
                  color: colors.white,
                  transition: "color 0.3s, background 0.3s",
                  "&:hover": {
                    background: colors.white,
                    color: colors.blue,
                  },
                }}
              >
                <Facebook />
              </IconButton>
            </Link>
            <Link href="https://twitter.com" target="_blank" rel="noopener">
              <IconButton
                sx={{
                  color: colors.white,
                  transition: "color 0.3s, background 0.3s",
                  "&:hover": {
                    background: colors.white,
                    color: colors.blue,
                  },
                }}
              >
                <Twitter />
              </IconButton>
            </Link>
            <Link
              href="https://www.instagram.com/omtun_labs/"
              target="_blank"
              rel="noopener"
            >
              <IconButton
                sx={{
                  color: colors.white,
                  transition: "color 0.3s, background 0.3s",
                  "&:hover": {
                    background: colors.white,
                    color: colors.mor,
                  },
                }}
              >
                <Instagram />
              </IconButton>
            </Link>
            <Link
              href="https://www.linkedin.com/company/omtun/posts/?feedView=all"
              target="_blank"
              rel="noopener"
            >
              <IconButton
                sx={{
                  color: colors.white,
                  transition: "color 0.3s, background 0.3s",
                  "&:hover": {
                    background: colors.white,
                    color: colors.blue,
                  },
                }}
              >
                <LinkedIn />
              </IconButton>
            </Link>
          </Box>
        </Grid>

        {/* Abonelik Formu */}
        <Grid item xs={12} md={3} sx={{ display: { xs: "none", md: "block" } }}>
          <Typography variant="h6" gutterBottom>
            Abone Ol
          </Typography>
          <Typography variant="body2">
            Yeni haberler ve güncellemeler için abone olun.
          </Typography>
          <Box
            component="form"
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
              mt: "1rem",
              alignItems: isMobile ? "center" : "flex-start",
            }}
          >
            <TextField
              variant="outlined"
              placeholder="Email adresiniz"
              sx={{
                input: {
                  backgroundColor: colors.white,
                  borderRadius: "4px",
                },
              }}
            />
            <Button variant="contained" sx={{ borderRadius: "4px",backgroundColor: colors.mor }}>
              Abone Ol
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Footer;
