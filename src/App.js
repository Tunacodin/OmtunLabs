import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import Navbar from "./components/Navbar";
import LandingPage from "./pages/LandingPage";
import AboutUs from "./components/AboutUs"; // Yeni bileşeni içe aktarıyoruz
import ContactUs from "./components/ContactUs"; // Yeni bileşeni içe aktarıyoruz
import MainNav2 from "./components/MainNav2";

function App() {
  const theme = createTheme();

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <MainNav2 />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<ContactUs />} />

        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
