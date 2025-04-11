import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import ResponsiveNavigation from "./ResponsiveNavigation";
import logo from "../../assets/lcb.png";
import { IoMenuSharp } from "react-icons/io5";
import { NavLinks } from "../../data/Navlinks";

const NavBar = () => {
  const menuIconRef = useRef(null);
  const [open, setOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full bg-transparent z-50 transition-all duration-300 ${
          isScrolled
            ? "py-3 h-21 xl:py-3 xl:h-21"
            : "py-4 h-22 md:py-4 md:h-25 xl:py-8 xl:h-26"
        }`}
      >
        <div className="container flex justify-center items-center gap-8 transition-all duration-300">
          <div className="flex items-center gap-40">
            {/* Logo */}
            <Link to="/">
              <h1
                className={`text-green-800 font-[logoFont] cursor-pointer transition-all duration-300 ${
                  isScrolled
                    ? "text-xl md:text-2xl xl:text-3xl"
                    : "text-2xl md:text-4xl xl:text-5xl"
                }`}
              >
                <span className="text-gray-200">LCB</span> TRADING
              </h1>
            </Link>
            {/* Navigation Links */}
            <div className="hidden lg:block">
              <ul className="flex items-center gap-8 text-sm font-bold font-mono tracking-wide text-gray-200">
                {NavLinks.map((item) => (
                  <li key={item.id} className="relative group">
                    {item.dropdown ? (
                      <>
                        <span className="inline-flex items-center gap-1 cursor-pointer hover:text-primary transition-all duration-200">
                          {item.title}
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-3 w-3"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M19 9l-7 7-7-7"
                            />
                          </svg>
                        </span>
                        <ul className="absolute left-0 top-full mt-2 bg-white text-black rounded-md shadow-lg opacity-0 group-hover:opacity-100 group-hover:translate-y-1 group-hover:visible invisible transition-all duration-300 z-50 min-w-[180px] transform">
                          {item.dropdown.map((dropdownItem) => (
                            <li key={dropdownItem.id}>
                              <Link
                                to={dropdownItem.path}
                                className="block px-4 py-2 hover:bg-primary hover:text-green-600 transition-all"
                              >
                                {dropdownItem.title}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </>
                    ) : (
                      <Link
                        to={item.path}
                        className="hover:text-primary transition-all duration-200"
                      >
                        {item.title}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Hamburger */}
          <div
            className="lg:hidden ml-auto"
            onClick={() => setOpen(!open)}
            ref={menuIconRef}
          >
            <IoMenuSharp className="text-3xl text-primary cursor-pointer" />
          </div>
        </div>

        {/* Responsive Menu */}
        <div className="">
          <ResponsiveNavigation
            open={open}
            setOpen={setOpen}
            menuIconRef={menuIconRef}
          />
        </div>
      </nav>
    </>
  );
};

export default NavBar;
