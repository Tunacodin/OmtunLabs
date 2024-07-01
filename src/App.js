// App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import Navbar from "./components/Navbar"; // Navbar bileşenini içe aktarıyoruz
import LandingPage from "./pages/LandingPage";

function App() {
  const theme = createTheme();

  return (
    <ThemeProvider theme={theme}>
      <Router>

        <Routes>
          <Route path="/" element={<LandingPage />} />
          
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
