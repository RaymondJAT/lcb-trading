import React from "react";
import AboutUs from "../components/sections/about/AboutUs";
import CompanyPillars from "../components/sections/about/CompanyPillars";
import OurTeam from "../components/sections/about/OurTeam";

const About = () => {
  return (
    <div className="bg-background">
      <AboutUs />
      <CompanyPillars />
      <OurTeam />
    </div>
  );
};

export default About;
