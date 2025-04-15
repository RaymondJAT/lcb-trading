import React from "react";
import logo from "../assets/lcb.png";
import background from "../assets/one.png";

const Hero = () => {
  const backgroundWp = {
    backgroundImage: `linear-gradient(rgba(10, 5, 0, 1), rgba(10, 25, 0, 0.7)),url(${background})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundAttachment: "fixed",
    innerWidth: "100%",
  };

  return (
    <div
      className="flex flex-col justify-center items-center min-h-[95vh] text-center md:h-screen "
      style={backgroundWp}
    >
      <div className="container flex flex-col items-center">
        <img
          src={logo}
          alt="Logo"
          className="w-96 md:w-110 lg:w-120 h-auto mt-10 mx-auto"
        />
        <h1
          className="text-xl md:text-3xl lg:text-4xl font-[titleFont] text-white tracking-widest uppercase"
          style={{
            textShadow: "2px 2px 4px rgba(0, 0, 0, 0.8)",
          }}
        >
          Sealing Across Borders and Delivering Excellence
        </h1>
      </div>
    </div>
  );
};

export default Hero;
