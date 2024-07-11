import React, { useState, useEffect, useRef } from "react";
import {
  Box,
  Grid,
  Link,
  Typography,
  useMediaQuery,
  IconButton,
} from "@mui/material";
import { Facebook, Twitter, Instagram, LinkedIn } from "@mui/icons-material";
import colors from "../consts/colors";
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
        height: "20vh",
        mt: "auto",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        opacity: 1,
        transition: "opacity 0.5s ease-in-out",
        paddingBottom: "5rem",
      }}
    >
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        spacing={2}
        style={{ width: "60%" }}
      >
        {/* Hızlı Bağlantılar */}
        <Grid
          item
          xs={12}
          md={3}
          sx={{ display: { xs: "none", sm: "block" }, textAlign: "center" }}
        >
          <Typography variant="h6" gutterBottom>
            Hızlı Bağlantılar
          </Typography>
          <Box>
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
        <Grid item xs={12} md={3} sx={{ textAlign: "center" }}>
          <Typography variant="h6" gutterBottom>
            Bizi Takip Edin
          </Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
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
      </Grid>

      {/* Telif Hakkı Bölümü */}
      <Box sx={{ marginTop: "3rem", textAlign: "center", width: "100%" }}>
        <Typography variant="body2" sx={{ color: colors.white }}>
          © {new Date().getFullYear()} OmTunLabs. Tüm hakları saklıdır.
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
