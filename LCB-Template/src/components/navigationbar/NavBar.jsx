import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import ResponsiveNavigation from "./ResponsiveNavigation";
import { IoMenuSharp } from "react-icons/io5";
import { NavLinks } from "../../data/Navlinks";

const NavBar = () => {
  const menuIconRef = useRef(null);
  const [open, setOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  const leftLinks = NavLinks.slice(0, 2);
  const rightLinks = NavLinks.slice(2);

  // Handle scroll behavior
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      const isScrollingUp = prevScrollPos > currentScrollPos;

      setVisible(isScrollingUp || currentScrollPos < 10);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-transform duration-300 uppercase backdrop-blur-md bg-white/10 border-b border-white/20 ${
          visible ? "translate-y-0" : "-translate-y-full"
        } ${isScrolled ? "py-3 xl:py-3" : "py-4 xl:py-3"}`}
      >
        <div className="container grid grid-cols-2 lg:grid-cols-3 items-center transition-all duration-300">
          {/* Left Nav */}
          <ul className="hidden lg:flex justify-end items-center gap-x-20 text-xs font-bold font-[contentFont] tracking-wide text-white">
            {leftLinks.map((item) => (
              <li key={item.id} className="relative group">
                {item.dropdown ? (
                  <>
                    <span className="inline-flex items-center gap-1 cursor-pointer hover:text-primary transition-all duration-200">
                      {item.title} ▼
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

          {/* Logo */}
          <Link to="/" className="px-4">
            <h1
              className={`text-green-700 font-[logoFont] cursor-pointer transition-all duration-300 lg:text-center leading-tighter ${
                isScrolled
                  ? "text-xl md:text-2xl xl:text-3xl"
                  : "text-2xl md:text-3xl xl:text-4xl"
              }`}
            >
              <span className="lg:block text-white">LCB</span> TRADING
            </h1>
          </Link>

          {/* Right Nav */}
          <ul className="hidden lg:flex justify-start items-center gap-x-20 text-xs font-bold font-[contentFont] tracking-wide text-gray-200">
            {rightLinks.map((item) => (
              <li key={item.id}>
                <Link
                  to={item.path}
                  className="hover:text-primary transition-all duration-200"
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>

          {/* Hamburger Icon */}
          <div className="lg:hidden flex justify-end px-4 text-white">
            <IoMenuSharp
              className="text-3xl text-primary cursor-pointer"
              onClick={() => setOpen(!open)}
              ref={menuIconRef}
            />
          </div>
        </div>

        {/* Mobile Nav */}
        <ResponsiveNavigation
          open={open}
          setOpen={setOpen}
          menuIconRef={menuIconRef}
        />
      </nav>
    </>
  );
};

export default NavBar;
