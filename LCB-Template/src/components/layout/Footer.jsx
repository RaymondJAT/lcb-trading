import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/lcb.png";

const Footer = () => {
  return (
    <footer className="bg-primary border-t pt-10 pb-5">
      <div className="container">
        <div className="mx-auto  px-2">
          <div className="flex flex-col md:flex-row justify-between items-start gap-10 text-[13px] text-neutral-800 font-[contentFont]">
            {/* company about */}
            <div className="flex-1 text-center md:text-left">
              <img
                src={logo}
                alt="LCB Logo"
                className="h-[60px] mb-4 mx-auto md:mx-0"
              />
              <p className="leading-relaxed text-white">
                LCB Trading Company is a trusted and dynamic trading partner
                committed to delivering high-quality goods and services across
                various industries.
              </p>
            </div>

            {/* quick links */}
            <div className="flex-1 text-center">
              <h4 className="text-white font-[titleFont] text-sm uppercase mb-4">
                Quick Links
              </h4>
              <ul className="space-y-2 text-white">
                <li>
                  <Link to="/products" className="hover:underline">
                    Products
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="hover:underline">
                    About
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="hover:underline">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>

            {/* contact */}
            <div className="flex-1 text-center md:text-left text-white">
              <h4 className="font-[titleFont] text-sm uppercase">Contact</h4>
              <p className="pt-4 pb-5">☎︎ 02-8709-98-96</p>
              <p>🏠︎ 57 Macaria Ave. Ph 3B Pacita Complex, Biñan, Laguna</p>
            </div>
          </div>

          <div className="pt-7 text-center text-[10px] text-gray-300 mt-7">
            © {new Date().getFullYear()} LCB Trading Company. All rights
            reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
