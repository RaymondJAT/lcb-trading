import React from "react";
import NavBar from "./components/navigationbar/NavBar";
import Hero from "./components/Hero";
import Partners from "./components/Partners";
import About from "./components/AboutSection";

function App() {
  return (
    <>
      <NavBar />
      <Hero />
      <About />
      <Partners />
    </>
  );
}

export default App;
