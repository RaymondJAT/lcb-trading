import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../ui/Button";
import background from "../../../assets/three.png";

const Contact = () => {
  const backgroundImg = {
    backgroundImage: `linear-gradient(rgba(10,5,0,1), rgba(10,25,0,0.8)), url(${background})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    innerWidth: "100%",
  };

  const navigate = useNavigate();

  return (
    <div className="bg-background" style={backgroundImg}>
      <div className="container text-center">
        <div className="mx-auto py-30 px-2">
          <h2 className="text-2xl text-slate-100 md:text-3xl font-[titleFont] font-bold tracking-wide">
            Ready to Elevate Your Business?
          </h2>
          <p className="max-w-2xl mx-auto text-[13px] text-slate-100 font-[contentFont] py-4">
            Let LCB Trading Company deliver reliable, cost-effective solutions
            tailored to your needs. Partner with us and take your operations to
            the next level.
          </p>
          <Button
            onClick={() => navigate("/contact")}
            className="text-slate-100"
          >
            Let's Work Together
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
