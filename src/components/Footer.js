import React from "react";
import {
  Box,
  Button,
  Grid,
  Link,
  TextField,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { Facebook, Twitter, Instagram, LinkedIn } from "@mui/icons-material";
import colors from "../consts/colors"; // Renkleriniz için yol ayarlaması yapın
import omtun from "../img/OmTunMobil.svg";
import darkColors from "../consts/darkColors";

const Footer = () => {
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("sm"));

  return (
    <Box
      sx={{
        backgroundColor: darkColors.black, // Renk paletinize göre ayarlayın
        color: colors.white,
        padding: "4rem 2rem", // Responsive padding
        mt: "auto",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around",
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
            <Link href="#" color="inherit">
              <Facebook />
            </Link>
            <Link href="#" color="inherit">
              <Twitter />
            </Link>
            <Link href="#" color="inherit">
              <Instagram />
            </Link>
            <Link href="#" color="inherit">
              <LinkedIn />
            </Link>
          </Box>
        </Grid>

        {/* Abonelik Formu */}
        <Grid item xs={12} md={3}>
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
            <Button variant="contained" color="secondary">
              Abone Ol
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Footer;
