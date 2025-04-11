import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ResponsiveNavigation from "./ResponsiveNavigation";
import logo from "../../assets/lcb.png";
import { IoMenuSharp } from "react-icons/io5";
import { NavLinks } from "../../data/Navlinks";

const NavBar = () => {
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
        className={`fixed top-0 left-0 w-full bg-background shadow-md z-50 transition-all duration-300 ${
          isScrolled
            ? "py-3 h-21 xl:py-3 xl:h-21"
            : "py-4 h-22 md:py-4 md:h-25 xl:py-4 xl:h-26"
        }`}
      >
        <div className="container flex justify-between items-center transition-all duration-300">
          {/* Logo */}
          <div className="text-2xl flex items-center gap-2 font-bold transition-all duration-300">
            <Link to="/">
              <img
                src={logo}
                alt="5L Solutions logo"
                className={`cursor-pointer transition-all duration-300 ${
                  isScrolled
                    ? "w-17 h-14 md:w-20 md:h-16 xl:w-20 xl:h-16"
                    : "w-19 h-15 md:w-22 md:h-18 xl:w-24 xl:h-18"
                }`}
              />
            </Link>
          </div>

          {/* Menu */}
          <div className="hidden lg:block">
            <ul className="flex items-center gap-10 text-sm font-bold font-mono tracking-wide text-black relative">
              {NavLinks.map((item) => (
                <li key={item.id} className="relative group">
                  {item.dropdown ? (
                    <div>
                      <Link
                        to={item.path}
                        className="hover:text-primary transition-all duration-200 inline-block"
                      >
                        {item.title}
                      </Link>
                      <ul className="absolute left-0 top-full mt-2 bg-white text-black rounded-md shadow-lg opacity-0 group-hover:opacity-100 group-hover:visible invisible transition-opacity duration-300 z-50 min-w-[150px]">
                        {item.dropdown.map((dropdownItem) => (
                          <li key={dropdownItem.id}>
                            <Link
                              to={dropdownItem.path}
                              className="block px-4 py-2 hover:bg-primary hover:text-white"
                            >
                              {dropdownItem.title}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ) : (
                    <Link
                      to={item.path}
                      className="hover:text-primary duration-200"
                    >
                      {item.title}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Dropdown Menu */}
          <div className="lg:hidden" onClick={() => setOpen(!open)}>
            <IoMenuSharp className="text-3xl text-primary cursor-pointer" />
          </div>
        </div>

        {/* Responsive Menu */}
        <div className="">
          <ResponsiveNavigation open={open} setOpen={setOpen} />
        </div>
      </nav>
    </>
  );
};

export default NavBar;
