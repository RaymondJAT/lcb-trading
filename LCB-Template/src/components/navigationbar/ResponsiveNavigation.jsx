import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { NavLinks } from "../../data/Navlinks";
import { Link } from "react-router-dom";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

const ResponsiveNavigation = ({ open, setOpen }) => {
  const menuRef = useRef(null);
  const [activeDropdown, setActiveDropdown] = useState(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setOpen(false);
      }
    };

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

  const toggleDropdown = (id) => {
    setActiveDropdown((prev) => (prev === id ? null : id));
  };

  return (
    <AnimatePresence mode="wait">
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -100 }}
          transition={{ duration: 0.3 }}
          className="absolute top-23 left-0 w-full h-screen z-20"
        >
          <div
            ref={menuRef}
            className="text-md font-semibold bg-background text-black py-10 m-6 rounded-3xl"
          >
            <ul className="flex flex-col justify-center items-center gap-4 font-mono">
              {NavLinks.map((item) => (
                <li key={item.id} className="w-full text-center">
                  {item.dropdown ? (
                    <>
                      <button
                        onClick={() => toggleDropdown(item.id)}
                        className="w-full flex justify-center items-center gap-2 px-3 py-2"
                      >
                        {item.title}
                        {activeDropdown === item.id ? (
                          <FiChevronUp />
                        ) : (
                          <FiChevronDown />
                        )}
                      </button>

                      <AnimatePresence>
                        {activeDropdown === item.id && (
                          <motion.ul
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="bg-neutral-900 text-white rounded-md py-2 mt-2 mx-4"
                          >
                            {item.dropdown.map((subItem) => (
                              <li key={subItem.id}>
                                <Link
                                  to={subItem.path}
                                  className="block px-6 py-2"
                                  onClick={() => setOpen(false)}
                                >
                                  {subItem.title}
                                </Link>
                              </li>
                            ))}
                          </motion.ul>
                        )}
                      </AnimatePresence>
                    </>
                  ) : (
                    <Link
                      to={item.path}
                      className="inline-block py-1 px-3"
                      onClick={() => setOpen(false)}
                    >
                      {item.title}
                    </Link>
                  )}
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
