import React, { useState, useEffect } from "react";
import Logo from "./Logo";
import Navbar from "./Navbar";

const MainNav = () => {
  const [hidden, setHidden] = useState(false);
  const [lastScrollTop, setLastScrollTop] = useState(0);

  const handleScroll = () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop > lastScrollTop && scrollTop > 64) {
      // 4 rem * 16px = 64px
      setHidden(true);
    } else {
      setHidden(false);
    }
    setLastScrollTop(scrollTop <= 0 ? 0 : scrollTop); // For Mobile or negative scrolling
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollTop]);

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        width: "80%",
        maxWidth: 1200,
        marginLeft: "auto",
        marginRight: "auto",
        zIndex: 100,
        padding: "0 1rem",
        boxSizing: "border-box",
        marginTop: 20,
        transition: "transform 0.7s ease",
        transform: hidden ? "translateY(-100%)" : "translateY(0)",
        position: "fixed", // Navbar sabitlenmiş olarak kalır
        top: 0,
        left: 0,
        right: 0,
      }}
    >
      <Logo />
      <Navbar />
    </div>
  );
};

export default MainNav;
