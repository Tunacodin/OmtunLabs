import React from "react";
import HeroHeader from "../components/HeroHeader";
import HeroBody from "../components/HeroBody";
import Footer from "../components/Footer";
import Social from "../components/Social";
import ContactUs from "../components/ContactUs";
import Products from "../components/Products";
import Techs from "../components/Techs";

const LandingPage = () => {
  return (
    <div>
      <Social />
      <HeroHeader id="anasayfa" />
      <HeroBody id="hero-body" />
      <Techs id="techs" />
      <Products id="products" />
      <ContactUs id="contact" />
      <Footer />
    </div>
  );
};

export default LandingPage;
