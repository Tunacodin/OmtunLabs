import React, { useState, useEffect, useRef } from "react";
import { Grid, Typography, TextField, Button, Box } from "@mui/material";
import colors from "../consts/colors";
import darkColors from "../consts/darkColors";

const ContactUs = () => {
  const [isVisible, setIsVisible] = useState(false);
  const formRef = useRef(null);

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

    if (formRef.current) {
      observer.observe(formRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <Box
      ref={formRef}
      sx={{
        width: "100%",
        minHeight: "100vh",
        backgroundColor: darkColors.black,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        fontFamily: "Poppins",
        opacity: isVisible ? 1 : 0,
        transition: "opacity 0.5s ease-in-out",
      }}
    >
      <Typography
        sx={{
          textAlign: "center",
          fontFamily: "Anton",
          color: colors.white,
          fontSize: { xs: "2rem", md: "3rem" },
          marginBottom: "2rem",
        }}
        variant="h4"
        gutterBottom
      >
        Bize Ulaşın
      </Typography>

      <Box
        sx={{
          width: { xs: "80%", md: "50%" },
          backgroundColor: colors.white,
          boxShadow:
            "0 0 20px rgba(0, 0, 0, 0.2), 0 5px 5px rgba(0, 0, 0, 0.24)",
          color: colors.white,
          borderRadius: "1rem",
          overflow: "hidden",
          padding: "2rem",
        }}
      >
        <Typography
          variant="body1"
          sx={{
            marginBottom: "2rem",
            color: colors.platinum,
            textAlign: "center",
          }}
        ></Typography>

        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Name"
              type="text"
              size="medium"
              InputProps={{
                sx: {
                  color: "white",
                  fontWeight: 400,
                  marginTop: "px",
                  marginBottom: "5px",
                },
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Email"
              type="email"
              color="secondary"
              InputProps={{
                sx: {
                  color: "black",
                  fontWeight: 400,
                  borderWidth: 2,
                },
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Subject"
              InputProps={{
                sx: {
                  color: "black",
                  padding: "5px",
                  fontWeight: 400,
                  borderWidth: 2,
                  fontSize: "1rem",
                },
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Message"
              multiline
              rows={4}
              InputProps={{
                sx: {
                  color: "black",
                  padding: "10px",
                  paddingLeft: "1.2rem",
                  fontWeight: 400,
                  borderWidth: 2,
                  fontSize: "1rem",
                },
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <Button
              variant="contained"
              fullWidth
              sx={{
                backgroundColor: darkColors.black,
                color: colors.white,
                padding: "1rem",
                fontWeight: 600,
                borderWidth: 2,
                fontSize: "1rem",
                marginTop: "1rem",
                transition:
                  "background-color 0.5s ease-in-out, color 0.5s ease-in-out",
                "&:hover": {
                  backgroundColor: colors.mor,
                },
              }}
            >
              Submit
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default ContactUs;
