import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../ui/Button";

const AboutSection = () => {
  const navigate = useNavigate();

  return (
    <div className="pt-10 bg-background relative z-0">
      <div className="container">
        {/* <div className="mx-auto border-t border-green-900/30 pt-6 px-4 max-w-4xl"> */}
        <div className="mx-auto px-2">
          <h1 className="text-primary font-[titleFont] text-xl tracking-wide uppercase">
            LCB Trading
          </h1>

          <p className="pt-5 pb-2 text-[13px] text-justify font-[contentFont] tracking-wide">
            LCB Trading Company is a trusted and dynamic trading partner
            committed to delivering high-quality goods and services across
            various industries. Backed by years of experience, modern
            technology, and a customer-first mindset, we simplify supply chain
            challenges through cost-effective and timely solutions. From small
            businesses to global corporations, we aim to support growth and
            efficiency by offering reliable products tailored to every client’s
            needs.
          </p>

          <Button onClick={() => navigate("/about")} className="text-primary">
            Know More
          </Button>
          {/* </div> */}
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
