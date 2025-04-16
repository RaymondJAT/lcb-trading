import React from "react";

const CompanyPillars = () => {
  return (
    <div className="pt-10 bg-background">
      <div className="container">
        <div className="mx-auto border-t border-green-900/30 py-10 px-2">
          <h1 className="text-primary font-[titleFont] text-xl tracking-wide uppercase">
            Vision
          </h1>

          <p className="pt-5 pb-3 text-[13px] text-justify font-[contentFont] tracking-wide">
            LCB Trading Company strives to become an internationally recognized
            trading leader, providing innovative solutions and creating lasting
            value for all stakeholders.
          </p>
        </div>

        <div className="mx-auto border-t border-green-900/30 py-10 px-2">
          <h1 className="text-primary font-[titleFont] text-xl tracking-wide uppercase">
            Mission
          </h1>

          <p className="pt-5 pb-3 text-[13px] text-justify font-[contentFont] tracking-wide">
            Our mission is to be a leader in the global trading market by
            offering superior products and outstanding customer service. We aim
            to build long-term relationships with our clients through
            reliability, quality, and professionalism.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CompanyPillars;
