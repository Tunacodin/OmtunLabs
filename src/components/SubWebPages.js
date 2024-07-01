import React from "react";
import { Container, Grid, Paper, Typography, Box } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import ComputerIcon from "@mui/icons-material/Computer";
import PageviewIcon from "@mui/icons-material/Pageview";
import BuildIcon from "@mui/icons-material/Build";
import FontDownloadIcon from "@mui/icons-material/FontDownload";
import UpdateIcon from "@mui/icons-material/Update";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import colors from "../consts/colors";

const theme = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: "#121212",
      paper: "#1e1e1e",
    },
    text: {
      primary: "#ffffff",
    },
  },
  typography: {
    fontFamily: "Poppins",
  },
});

const features = [
  {
    icon: <ComputerIcon style={{ fontSize: 40, color: "#00b0ff" }} />,
    title: "Tamamen Duyarlı Düzen",
    description: "Web Sitesini Oluşturmak İçin Bootstrap Çatısını Kullandık.",
  },
  {
    icon: <PageviewIcon style={{ fontSize: 40, color: "#00e676" }} />,
    title: "15+ Benzersiz Sayfa",
    description: "Şablonun Tüm Sayfaları Duyarlıdır.",
  },
  {
    icon: <BuildIcon style={{ fontSize: 40, color: "#00e676" }} />,
    title: "Tamamen Özelleştirilebilir",
    description:
      "Bireysel İnsanları veya Görevleri Uygun Yollarla Değiştirmek veya Değiştirmek İçin.",
  },
  {
    icon: <FontDownloadIcon style={{ fontSize: 40, color: "#d500f9" }} />,
    title: "Google Fontları",
    description:
      "Geniş Bir Google Font Koleksiyonu Şablonla Entegre Edilmiştir.",
  },
  {
    icon: <UpdateIcon style={{ fontSize: 40, color: "#2979ff" }} />,
    title: "Ömür Boyu Güncelleme",
    description: "Şablonun Tüm Sayfaları Duyarlıdır.",
  },
  {
    icon: <PhoneIphoneIcon style={{ fontSize: 40, color: "#ffea00" }} />,
    title: "Mobil Uyumlu",
    description: "Şablonun Tüm Sayfaları Optimizedir.",
  },
];

const SubWebPages = () => {
  return (
    <ThemeProvider theme={theme}>
      <Container
        maxWidth="lg"
        style={{
          backgroundColor: colors.platinum,
          padding: "3rem",
          paddingBottom: "5rem",
          borderRadius: "5rem",
          height: "80%",

          boxShadow: "0px 4px 8px rgba(120, 120, 120, 0.8)",
        }}
      >
        <Box textAlign="center" pt={3}>
          <Typography variant="h4" gutterBottom>
            Yazılım Teknolojilerimizle birlikte işinizi büyütün
          </Typography>
          <Typography variant="subtitle1" gutterBottom>
            Şablonumuzdaki tüm özellikleri seveceksiniz. %100 garanti
            memnuniyet.
          </Typography>
        </Box>
        <Grid
          gridTemplateColumns={{ xs: "1fr", sm: "1fr 1fr", md: "1fr 1fr 1fr" }}
          container
          spacing={2}
          pt={2}
        >
          {features.map((feature, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Paper
                elevation={3}
                style={{
                  padding: "2rem",
                  backgroundColor: "#333",
                  height: "80%",
                  display: "flex",
                  flexDirection: "column",
                  borderRadius: "2rem",
                  justifyContent: "space-between",
                }}
              >
                <Box
                  display="flex"
                  flexDirection="column"
                  alignItems="center"
                  height="100%"
                  gap={3}
                  style={{
                    marginTop: "1rem",
                  }}
                >
                  {feature.icon}
                  <Typography
                    variant="h6"
                    style={{
                      marginTop: "10px",
                      fontFamily: "Poppins",
                    }}
                  >
                    {feature.title}
                  </Typography>
                  <Typography variant="body2" align="center">
                    {feature.description}
                  </Typography>
                </Box>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </ThemeProvider>
  );
};

export default SubWebPages;
