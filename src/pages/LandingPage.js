import React from "react";
import HeroHeader from "../components/HeroHeader";
import HeroBody from "../components/HeroBody";
import Footer from "../components/Footer";
import Social from "../components/Social";
import ContactUs from "../components/ContactUs";

import WhatWeDo from "../components/WhatWeDo";
import Products from "../components/Products";

const LandingPage = () => {
  return (
    <div>
      <Social />
      <HeroHeader id="hero" />
      <HeroBody id="hero-body" />
      <WhatWeDo id="what-we-do" />
      <Products id="poducts" />
      <ContactUs id="contact-us" />
      <Footer />
    </div>
  );
};

export default LandingPage;
