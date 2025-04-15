import React from "react";
import { Link } from "react-router-dom";

const AboutSection = () => {
  return (
    <div className="pt-10 bg-background relative z-0">
      <div className="container">
        {/* <div className="mx-auto border-t border-green-900/30 pt-6 px-4 max-w-4xl"> */}
        <div className="mx-auto px-2 max-w-4xl">
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

          <Link
            to="/about"
            className="inline-block text-[13px] font-[contentFont] text-green-700 hover:underline transition-all duration-200"
          >
            Know more →
          </Link>
          {/* </div> */}
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
