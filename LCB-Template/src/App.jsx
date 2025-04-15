import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "./components/layout/navigationbar/NavBar";
import Footer from "./components/layout/Footer";

function App() {
  return (
    <>
      <NavBar />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
