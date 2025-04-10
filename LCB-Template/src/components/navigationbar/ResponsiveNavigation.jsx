import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { NavLinks } from "../../data/Navlinks";

const ResponsiveNavigation = ({ open, setOpen }) => {
  const menuRef = useRef(null);
  const [activeDropdown, setActiveDropdown] = useState(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setOpen(false);
      }
    };

    // Close menu when resizing to large screens
    const handleResize = () => {
      if (window.innerWidth >= 767) {
        setOpen(false);
      }
    };

    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    window.addEventListener("resize", handleResize);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      window.removeEventListener("resize", handleResize);
    };
  }, [open, setOpen]);

  const handleDropdownToggle = (index) => {
    setActiveDropdown((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <AnimatePresence mode="wait">
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -100 }}
          transition={{ duration: 0.3 }}
          className="absolute top-20 left-0 w-full h-screen z-20"
        >
          <div
            ref={menuRef}
            className="text-md font-semibold bg-slate-400 text-black py-10 m-6 rounded-3xl"
          >
            <ul className="flex flex-col justify-center items-center gap-4 font-mono">
              {NavLinks.map((item, index) => (
                <li key={item.id}>
                  <div>
                    <a
                      href={item.path}
                      className="inline-block py-1 px-3"
                      onClick={() => {
                        setOpen(false);
                        if (!item.dropdown) {
                          setActiveDropdown(null);
                        } else {
                          handleDropdownToggle(index);
                        }
                      }}
                    >
                      {item.title}
                    </a>
                    {item.dropdown && activeDropdown === index && (
                      <ul className="flex flex-col gap-2 mt-4 pl-5">
                        {item.dropdown.map((dropdownItem) => (
                          <li key={dropdownItem.id}>
                            <a
                              href={dropdownItem.path}
                              className="inline-block py-1 px-3 hover:text-primary"
                              onClick={() => setOpen(false)}
                            >
                              {dropdownItem.title}
                            </a>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ResponsiveNavigation;
