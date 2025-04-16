import React from "react";
import logo from "../../../assets/lcb.png";

const AboutUs = () => {
  return (
    <div className="pt-40 pb-5 bg-background ">
      <div className="container">
        <div className="mx-auto px-2">
          {/* Logo + Name */}
          <div className="flex items-center gap-4 mb-6">
            <img
              src={logo}
              alt="LCB Logo"
              className="w-45 h-auto object-contain"
            />
            <h1 className="text-2xl font-bold text-primary font-[titleFont] uppercase tracking-wide">
              LCB Trading
            </h1>
          </div>

          {/* About Us Content */}
          <div className="text-[13px] leading-relaxed font-[contentFont] text-justify tracking-wide space-y-4">
            <p>
              LCB Trading Company is a recognized and dynamic trading company
              dedicated to providing high-quality goods and services in a
              variety of industries. With a strong dedication to client
              satisfaction, we simplify complex supply chain challenges by
              offering cost-effective, timely, and reliable products and
              services.
            </p>

            <p>
              As your trusted trade partner, LCB Trading provides a
              comprehensive range of products aimed at meeting our client's
              specific requirements. We have established ourselves as
              trustworthy partners in business by prioritizing consumer
              satisfaction, innovation, and efficiency.
            </p>

            <p>
              Years of industry experience, cutting-edge technology, and a
              customer-focused attitude are the foundations of our goods. Our
              mission is to assist organizations of all sizes— from small
              enterprises to multinational corporations—in expanding their needs
              and optimizing their operations.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
