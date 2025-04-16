import React from "react";
import Hero from "../components/sections/Hero";
import Partners from "../components/sections/Partners";
import AboutSection from "../components/sections/AboutSection";
import ChooseUs from "../components/sections/ChooseUs";
import Product from "../components/sections/Product";
import Contact from "../components/sections/Contact";

const Home = () => {
  return (
    <>
      <Hero />
      <Partners />
      <AboutSection />
      <ChooseUs />
      <Product />
      <Contact />
    </>
  );
};

export default Home;
