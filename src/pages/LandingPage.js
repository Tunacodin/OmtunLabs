import React from "react";
import HeroHeader from "../components/HeroHeader";
import HeroBody from "../components/HeroBody";
import HeroBodyEnd from "../components/HeroBodyEnd";
import Footer from "../components/Footer";
import Social from "../components/Social";
import ContactUs from "../components/ContactUs";
import AboutUs from "../components/AboutUs";
import OpenSource from "../components/OpenSource";
import Customer from "../components/Customer";

const LandingPage = () => {
  return (
    <div>
      <Social />
      <HeroHeader id="hero" />
      <HeroBody id="hero-body" />
      <HeroBodyEnd id="hero-body-end" />
      <Customer id="customer" />
      <OpenSource id="open-source" />
  
      <ContactUs id="contact-us" />
      <Footer />
    </div>
  );
};

export default LandingPage;
