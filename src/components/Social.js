import React from "react";
import { Box, Link, IconButton, useMediaQuery } from "@mui/material";
import {
  Facebook,
  Twitter,
  Instagram,
  LinkedIn,
  WhatsApp,
} from "@mui/icons-material";
import colors from "../consts/colors"; // Ensure correct path to your colors file
import darkColors from "../consts/darkColors";

const Social = () => {
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("sm"));

  if (isMobile) {
    return null; // Return null to hide the component on mobile screens
  }

  return (
    <Box
      sx={{
        position: "fixed",
        top: "50%",
        left: "1%",
        transform: "translateY(-50%)",
        backgroundColor: darkColors.black,
        width: "2rem",
        minHeight: "8rem",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-around",
        padding: "1rem 1rem",
        zIndex: 1000,
        borderRadius: "3rem",
        gap: "1rem",
      }}
    >
      <Link href="https://www.instagram.com" target="_blank" rel="noopener">
        <IconButton
          size="large"
          sx={{
            color: colors.white, // Normal color (white)
            transition: "color 1s, background 1s",
            "&:hover": {
              background: colors.white, // Hover background (white)
              color: colors.mor, // Hover color (colors.mor)
            },
          }}
        >
          <Instagram />
        </IconButton>
      </Link>
      <Link href="https://www.linkedin.com" target="_blank" rel="noopener">
        <IconButton
          sx={{
            color: colors.white,
            transition: "color 1s, background 1s",
            "&:hover": {
              background: colors.white,
              color: colors.blue,
            },
          }}
        >
          <LinkedIn />
        </IconButton>
      </Link>
      <Link
        href="https://wa.me/yourwhatsappnumber"
        target="_blank"
        rel="noopener"
      >
        <IconButton
          sx={{
            color: colors.white,
            transition: "color 1s, background 1s",
            "&:hover": {
              background: colors.white,
              color: darkColors.green,
            },
          }}
        >
          <WhatsApp />
        </IconButton>
      </Link>
      <Link href="https://twitter.com" target="_blank" rel="noopener">
        <IconButton
          sx={{
            color: colors.white,
            transition: "color 1s, background 1s",
            "&:hover": {
              background: colors.white,
              color: colors.blue,
            },
          }}
        >
          <Twitter />
        </IconButton>
      </Link>
      <Link href="https://www.facebook.com" target="_blank" rel="noopener">
        <IconButton
          sx={{
            color: colors.white,
            transition: "color 1s, background 1s",
            "&:hover": {
              background: colors.white,
              color: colors.blue,
            },
          }}
        >
          <Facebook />
        </IconButton>
      </Link>
    </Box>
  );
};

export default Social;
