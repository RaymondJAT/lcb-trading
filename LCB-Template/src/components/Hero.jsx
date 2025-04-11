import React from "react";
import logo from "../assets/lcb.png";
import background from "../assets/four.png";

const Hero = () => {
  const backgroundWp = {
    backgroundImage: `url(${background})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundAttachment: "fixed",
    innerWidth: "100%",
  };

  return (
    <div
      className="flex flex-col justify-center items-center h-screen text-center relative"
      style={backgroundWp}
    >
      <div className="transform -translate-y-12">
        <img src={logo} alt="Logo" className="w-52 lg:w-110 h-auto mx-auto" />
        <p
          className="text-lg xl:text-4xl font-mono font-semibold text-gray-200"
          style={{
            textShadow: "2px 2px 4px rgba(0, 0, 0, 0.8)",
          }}
        >
          Sealing Across Borders and Delivering Excellence
        </p>
      </div>
    </div>
  );
};

export default Hero;
