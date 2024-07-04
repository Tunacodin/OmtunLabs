import React from "react";
import HeroHeader from "../components/HeroHeader";
import HeroBody from "../components/HeroBody";
import Footer from "../components/Footer";
import Social from "../components/Social";
import ContactUs from "../components/ContactUs";
import AboutUs from "../components/AboutUs";
import OpenSource from "../components/OpenSource";
import Customer from "../components/Customer";
import ProductContext from "../components/ProductContext";
import WhatWeDo from "../components/WhatWeDo";

const LandingPage = () => {
  return (
    <div>
      <Social />
      <HeroHeader id="hero" />
      <HeroBody id="hero-body" />
      <WhatWeDo id="what-we-do" />
      <Customer id="customer" />
      <ContactUs id="contact-us" />
      <Footer />
    </div>
  );
};

export default LandingPage;
