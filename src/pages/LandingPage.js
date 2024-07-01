import React from "react";
import HeroHeader from "../components/HeroHeader";
import Navbar from "../components/Navbar";
import colors from "../consts/colors";
import mounth from "../img/mounth.png";
import { Box } from "@mui/material";
import HeroBody from "../components/HeroBody";
import HeroBodyEnd from "../components/HeroBodyEnd";
import Footer from "../components/Footer";
import Social from "../components/Social";
import ContactUs from "../components/ContactUs";
import MainNav2 from "../components/MainNav2";
import AboutUs from "../components/AboutUs";
import OpenSource from "../components/OpenSource";
import Customer from "../components/Customer";

const LandingPage = () => {
  return (
    <div >
     
      <Social />
      <MainNav2 />
  <HeroHeader />
      <HeroBody />
      <HeroBodyEnd />
      <Customer />
      <OpenSource />
      <AboutUs />
      <ContactUs />
      <Footer/>
      

</div>
   
  );
};

export default LandingPage;
