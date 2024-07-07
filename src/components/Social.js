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
        transition: "background-color 0.3s", // Added transition for background color
        "&:hover": {
          backgroundColor: colors.lightGrey, // Soft background color on hover
        },
      }}
    >
      <Link
        href="https://www.instagram.com/omtun_labs/"
        target="_blank"
        rel="noopener"
      >
        <IconButton
          size="large"
          sx={{
            color: colors.white, // Normal color (white)
            transition: "color 0.3s, background 0.3s",
            "&:hover": {
              background: colors.white, // Hover background (white)
              color: colors.mor, // Hover color (colors.mor)
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
      <Link href="https://wa.me/05387227258" target="_blank" rel="noopener">
        <IconButton
          sx={{
            color: colors.white,
            transition: "color 0.3s, background 0.3s",
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
      <Link href="https://www.facebook.com" target="_blank" rel="noopener">
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
    </Box>
  );
};

export default Social;
