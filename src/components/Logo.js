import React from "react";
import { styled } from "@mui/material/styles";
import blackLogo from "../img/maiblogo2.svg";
import { Box } from "@mui/system";

const LogoContainer = styled(Box)(({ theme }) => ({
  width: "3rem", // Adjusted size for desktop
  height: "3rem", // Adjusted size for desktop
  position: "relative",
  objectFit: "cover",
}));

const LogoImage = styled("img")({
  width: "100%",
  height: "100%",
  position: "absolute",
  top: 0,
  left: 0,
  transition: "opacity 0.5s ease-in-out", // Transition effect
});

const Logo = () => {
  return (
    <LogoContainer>
      <LogoImage src={blackLogo} alt="black logo" />
    </LogoContainer>
  );
};

export default Logo;
