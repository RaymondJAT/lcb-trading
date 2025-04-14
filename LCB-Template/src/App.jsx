import React from "react";
import NavBar from "./components/navigationbar/NavBar";
import Hero from "./components/Hero";
import Partners from "./components/Partners";
import About from "./components/AboutSection";
import ChooseUs from "./components/ChooseUs";

function App() {
  return (
    <>
      <NavBar />
      <Hero />
      <About />
      <Partners />
      <ChooseUs />
    </>
  );
}

export default App;
