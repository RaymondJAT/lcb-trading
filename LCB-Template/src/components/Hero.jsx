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
      className="flex flex-col justify-center items-center h-screen text-center relative"
      style={backgroundWp}
    >
      <div className="flex flex-col items-center">
        <img src={logo} alt="Logo" className="w-52 lg:w-120 h-auto mx-auto" />
        <p
          className="mt-6 text-lg xl:text-4xl font-[contentFont] font-semibold text-gray-200 tracking-widest"
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
