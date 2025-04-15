import React from "react";
import NavBar from "./components/navigationbar/NavBar";
import Hero from "./components/Hero";
import Partners from "./components/Partners";
import About from "./components/AboutSection";
import ChooseUs from "./components/ChooseUs";
import Product from "./components/Product";

function App() {
  return (
    <>
      <NavBar />
      <Hero />
      <Partners />
      <About />
      <ChooseUs />
      <Product />
    </>
  );
}

export default App;
