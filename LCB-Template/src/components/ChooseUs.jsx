import React from "react";
import { chooseData } from "../data/ChooseUs";

const ChooseUs = () => {
  return (
    <div className="pt-10 bg-background">
      <div className="container">
        <div className="mx-auto border-t border-b border-green-900/30 py-10 px-2 max-w-4xl">
          <h1 className="text-primary font-[titleFont] text-xl tracking-wide uppercase">
            Why Choose Us?
          </h1>

          <p className="pt-5 pb-3 text-[13px] text-justify font-[contentFont] tracking-wide">
            At LCB Trading Company, we go beyond simply delivering products — we
            provide solutions. With years of industry experience and a
            customer-first mindset, we’re committed to helping businesses thrive
            through efficient, reliable, and innovative supply chain services.
          </p>

          <div>
            {chooseData.map((item) => (
              <div key={item.id} className="pt-2">
                <h3 className="font-semibold text-[13px] md:text-sm text-primary">
                  {item.title}
                </h3>
                <p className="text-[13px] text-justify font-[contentFont] py-3">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChooseUs;
