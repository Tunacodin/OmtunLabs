import React from "react";
import { styled } from "@mui/material/styles";
import { MonetizationOn } from "@mui/icons-material";
import { Link as ScrollLink } from "react-scroll";
import colors from "../consts/colors";

const StyledButtonLink = styled(ScrollLink)(({ theme, btncolor }) => ({
  fontSize: "1.2rem",
  fontFamily: "Poppins",
  color: "inherit",
  textDecoration: "none",
  position: "relative",
  display: "flex",
  alignItems: "center",
  gap: "0.5rem",
  cursor: "pointer",
  color: colors.white,
  padding: "0.5rem 1rem",
  borderRadius: "5px",
  boxShadow: "0px 30px 30px rgba(0, 0, 0, 0.15)",
  background: `linear-gradient(
    110deg,
    ${btncolor} 0%,
    ${btncolor} 100%
  )`,
  backgroundSize: "0% 100%",
  backgroundRepeat: "no-repeat",
  transition: "background-size 0.6s ease-in-out",

  ":hover": {
    color: colors.black,
    backgroundSize: "100% 100%",
  },
}));

const TeklifAl = ({ btncolor }) => {
  return (
    <StyledButtonLink
      to="get-quote"
      smooth={true}
      duration={500}
      btncolor={btncolor}
    >
      <MonetizationOn /> Teklif Al
    </StyledButtonLink>
  );
};

export default TeklifAl;
