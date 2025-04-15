import React from "react";
import NavBar from "../components/layout/navigationbar/NavBar";
import Hero from "../components/sections/Hero";
import Partners from "../components/sections/Partners";
import AboutSection from "../components/sections/AboutSection";
import ChooseUs from "../components/sections/ChooseUs";
import Product from "../components/sections/Product";
import Footer from "../components/layout/Footer";

const Home = () => {
  return (
    <>
      <Hero />
      <Partners />
      <AboutSection />
      <ChooseUs />
      <Product />
    </>
  );
};

export default Home;
