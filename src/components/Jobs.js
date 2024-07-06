import React, { useState, useRef } from "react";
import {
  Box,
  Typography,
  Button,
  Grid,
  useMediaQuery,
  Stack,
} from "@mui/material";
import Carousel from "./Carousel";
import colors from "../consts/colors";
import darkColors from "../consts/darkColors";
import TeklifAl from "./TeklifAl";


const Jobs = ({
images,
  style,
  h1,
  p,
  bg,
  color,
  btncolor,
  features,
}) => {
  const [hover, setHover] = useState(false);
  const [clicked, setClicked] = useState(false);
  const detailsRef = useRef(null);
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery((theme) =>
    theme.breakpoints.between("sm", "md")
  );

  const handleMouseEnter = () => setHover(true);
  const handleMouseLeave = () => !clicked && setHover(false);
  const handleClick = () => setClicked(!clicked);

  return (
    <Grid
      container
      spacing={2}
      sx={{
        width: { xs: "90%", sm: "80%", md: "60%" },
        boxShadow: 3,
        borderRadius: 1,
        position: "relative",
        overflow: "hidden",
marginLeft:.5,        
        ...style,
      }}
    >
      <Grid
        item
        xs={12}
        md={6}
        sx={{
          height: { xs: "200px", md: "100%" },
          backgroundColor: darkColors.black,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          position: "relative",
          overflow: "hidden",
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
        <Button
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onClick={handleClick}
          sx={{
            color: colors.black,
            width: "6rem",
            borderRadius: 1,
            padding: ".4rem",
            border: "none",
            cursor: "pointer",
            fontFamily: "Poppins",
            fontWeight: 500,
            fontSize: "0.75rem",
            boxShadow: 4,
            backgroundColor: colors.white,
            transition:
              "background-color 0.5s ease-in-out, color 0.5s ease-in-out",
            mt: 2,
            ...(hover && {
              backgroundColor: bg,
              color: color,
            }),
            ...(clicked && {
              backgroundColor: bg,
              color: color,
            }),
          }}
        >
          Daha Fazla
        </Button>
      </Grid>

      <Grid
        item
        xs={12}
        md={6}
        sx={{
          height: { xs: "200px", md: "100%" },
          mt: { xs: 2, md: 0 },
          
        }}
      >
        <Box
          sx={{
            width: "100%",
            height: "100%",
          }}
        >
          <Carousel
            images={images}
            style={{
              width: "100%",
              height: "100%",
              overflow: "hidden",
              borderRadius: 1,
            }}
          />
        </Box>
      </Grid>
    </Grid>
  );
};

export default Jobs;
