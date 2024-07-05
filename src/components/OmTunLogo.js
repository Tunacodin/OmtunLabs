import { Box } from '@mui/material';
import React from 'react'
import Logo from './Logo';
import img from "../img/OmTUnlabsMobil.svg"; // Assuming this is your SVG image

const OmTunLogo = () => {
  return (
    <Box sx={{ display: { xs: "none", md: "flex" }, alignItems: "center" }}>
      <Logo />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img src={img} alt="Logo" style={{ width: "80%", maxWidth: "150px" }} />
      </div>
    </Box>
  );
}

export default OmTunLogo