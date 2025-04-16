import React from "react";
import Hero from "../components/sections/home/Hero";
import Partners from "../components/sections/home/Partners";
import AboutSection from "../components/sections/home/AboutSection";
import ChooseUs from "../components/sections/home/ChooseUs";
import Product from "../components/sections/home/Product";
import Contact from "../components/sections/home/Contact";

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
