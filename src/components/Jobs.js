import React, { useState } from "react";
import { Box, Typography, Button, Grid, useMediaQuery } from "@mui/material";
import Carousel from "./Carousel"; // Ensure this import path is correct
import colors from "../consts/colors";
import darkColors from "../consts/darkColors";
import "../App.css";

const Jobs = ({ images, style, h1, p, bg, color, btncolor, features }) => {
  const [clicked, setClicked] = useState(false);
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("sm"));

  const handleClick = () => setClicked(!clicked);

  return (
    <Grid
      container
      sx={{
        width: { xs: "90%", sm: "80%", md: "60%" },
        boxShadow: 3,
        borderRadius: 1,
        position: "relative",
        display: "flex",
        flexDirection: isMobile ? "row" : "column",
        overflow: "hidden",
        marginLeft: 0.5,
        ...style,
      }}
    >
      <Grid
        item
        xs={12}
        md={8}
        sx={{
          height: { xs: "200px", md: "100%" },
          backgroundColor: darkColors.black,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          position: "relative",
          overflow: "hidden",
          padding: "1rem",
          textAlign: "center",
        }}
      >
        <Typography
          variant="h2"
          sx={{
            fontFamily: "Anton",
            color: colors.white,
            pb: 2,
            fontSize: { xs: "1.5rem", md: "2rem" },
          }}
        >
          {h1}
        </Typography>
        <Typography
          variant="body1"
          sx={{
            width: "100%",
            fontFamily: "Poppins",
            fontWeight: 500,
            color: colors.white,
            fontSize: { xs: "0.875rem", md: "1rem" },
          }}
        >
          {p}
        </Typography>
        {isMobile && (
          <Button
            onClick={handleClick}
            sx={{
              color: clicked ? colors.white : colors.black,
              width: "6rem",
              borderRadius: 1,
              padding: ".4rem",
              border: "none",
              cursor: "pointer",
              fontFamily: "Poppins",
              fontWeight: 500,
              fontSize: "0.75rem",
              boxShadow: 4,
              backgroundColor: clicked ? colors.mor : colors.white,
              transition:
                "background-color 0.5s ease-in-out, color 0.5s ease-in-out",
              mt: 2,
              "&:hover": {
                backgroundColor: colors.mor,
                color: colors.white,
              },
            }}
          >
            Daha Fazla
          </Button>
        )}
      </Grid>

      <Grid
        item
        xs={12}
        md={4}
        sx={{
          height: { xs: "200px", md: "100%" },
          position: "relative",
          overflow: "hidden",
        }}
      >
        <Carousel
          images={images}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            borderRadius: 1,
            margin: 0,
          }}
        />

        {isMobile && (
          <Box
            className={`slide-left ${
              clicked ? "slide-left-in" : "slide-left-out"
            }`}
            sx={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              backgroundColor: darkColors.black,
              color: colors.white,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              padding: 2,
              zIndex: clicked ? 1 : -1,
              transition: "opacity 0.5s ease-in-out",
              opacity: clicked ? 1 : 0,
            }}
          >
            <Typography
              variant="h4"
              sx={{ fontFamily: "Anton", paddingLeft: "1.5rem" }}
            >
              Özellikler
            </Typography>
            <ul>
              {features.map((feature, index) => (
                <li
                  key={index}
                  style={{
                    fontFamily: "Poppins",
                    fontSize: "1.1rem",
                    textAlign: "left",
                  }}
                >
                  {feature}
                </li>
              ))}
            </ul>
          </Box>
        )}
      </Grid>
    </Grid>
  );
};

export default Jobs;
