import { Facebook, Twitter, Instagram, LinkedIn } from "@mui/icons-material";
import React from "react";
import { Box, Button, Grid, Link, TextField, Typography } from "@mui/material";
import colors from "../consts/colors"; // Renkleriniz için yol ayarlaması yapın
import omtun from "../img/OT_White-removebg-preview.png";
import darkColors from "../consts/darkColors";
const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: darkColors.black, // Renk paletinize göre ayarlayın
        color: colors.white,
        padding: "4rem 4rem",
        mt: "auto",
      }}
    >
      <Grid container spacing={4}>
        {/* Şirket Bilgileri */}
        <Grid item xs={12} md={3}>
          <img
            src={omtun}
            alt="omtun"
            style={{
              width: "10rem",
              marginBottom: "2rem",
            }}
          />{" "}
          <Typography fontFamily={"Poppins"} variant="h4" gutterBottom>
            OmTun Labs
          </Typography>
          <Typography fontFamily={"Poppins"} style={{fontSize: "1rem"}} >
            Yenilikçi çözümler ve tasarımlar sunarak dijital dünyada fark
            yaratıyoruz. Misyonumuz, kullanıcı dostu ve özelleştirilebilir
            ürünler geliştirmek.
          </Typography>
        </Grid>

        {/* Hızlı Bağlantılar */}
        <Grid item xs={12} md={3}>
          <Typography variant="h6 " gutterBottom>
            Hızlı Bağlantılar
          </Typography>
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
        </Grid>

        {/* Sosyal Medya */}
        <Grid item xs={12} md={3}>
          <Typography variant="h6" gutterBottom>
            Bizi Takip Edin
          </Typography>
          <Box sx={{ display: "flex", gap: "1rem" }}>
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
