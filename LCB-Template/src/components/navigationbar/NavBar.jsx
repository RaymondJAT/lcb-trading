import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";
import { NavLinks } from "../../data/Navlinks";

const NavBar = () => {
  const [position, setPosition] = useState({ left: 0, width: 0, opacity: 0 });
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className="w-full bg-white py-5">
      <div className="relative flex justify-center items-center p-4 md:p-6 max-w-7xl mx-auto">
        {/* Responsive Navigation */}
        <div className="absolute right-4 md:hidden">
          {menuOpen ? (
            <FiX className="w-6 h-6" onClick={toggleMenu} />
          ) : (
            <FiMenu className="w-6 h-6" onClick={toggleMenu} />
          )}
        </div>

        {/* Desktop Navigation */}
        <ul
          onMouseLeave={() => setPosition((prev) => ({ ...prev, opacity: 0 }))}
          className="hidden md:flex relative w-fit rounded-full border-2 border-black bg-white p-1"
        >
          {NavLinks.map((link) => (
            <NavItem
              key={link.id}
              label={link.title}
              path={link.path}
              dropdown={link.dropdown}
              setPosition={setPosition}
            />
          ))}
          {/* <Cursor position={position} /> */}
        </ul>
      </div>

      {/* Mobile Navigation */}
      {menuOpen && (
        <div className="md:hidden px-4 pb-4">
          <ul className="flex flex-col gap-2 w-full">
            {NavLinks.map((link) => (
              <MobileNavItem
                key={link.id}
                label={link.title}
                path={link.path}
                dropdown={link.dropdown}
                onClick={() => setMenuOpen(false)}
              />
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

const NavItem = ({ label, path, setPosition, dropdown }) => {
  const ref = useRef(null);
  const [showDropdown, setShowDropdown] = useState(false);

  const handleHover = () => {
    if (!ref.current) return;
    const { width } = ref.current.getBoundingClientRect();
    setPosition({
      left: ref.current.offsetLeft,
      width,
      opacity: 1,
    });
    if (dropdown) setShowDropdown(true);
  };

  const handleLeave = () => {
    setShowDropdown(false);
    setPosition((prev) => ({ ...prev, opacity: 0 }));
  };

  return (
    <li
      ref={ref}
      onMouseEnter={handleHover}
      onMouseLeave={handleLeave}
      className="relative z-10 block cursor-pointer px-4 py-1 text-xs uppercase text-black font-semibold hover:text-white duration-200 md:px-7 md:py-1 md:text-sm font-mono"
    >
      <a href={path}>{label}</a>

      {/* Dropdown Menu */}
      {dropdown && showDropdown && (
        <ul className="absolute left-0 top-full mt-2 w-40 rounded-md bg-white shadow-lg text-black z-20">
          {dropdown.map((item) => (
            <li key={item.id} className="text-sm">
              <a
                href={item.path}
                className="block px-4 py-2 hover:bg-gray-100 transition duration-150"
              >
                {item.title}
              </a>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
};

const MobileNavItem = ({ label, path, dropdown, onClick }) => {
  const [open, setOpen] = useState(false);

  return (
    <li>
      <div
        className="flex justify-between items-center cursor-pointer text-black font-medium"
        onClick={() => (dropdown ? setOpen(!open) : onClick())}
      >
        <a href={path}>{label}</a>
        {dropdown && <span>{open ? "▲" : "▼"}</span>}
      </div>

      {/* Mobile Dropdown */}
      {dropdown && open && (
        <ul className="mt-1 ml-4 border-l pl-3 border-gray-300">
          {dropdown.map((item) => (
            <li key={item.id}>
              <a
                href={item.path}
                className="block py-1 text-sm text-gray-700 hover:underline"
                onClick={onClick}
              >
                {item.title}
              </a>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
};

const Cursor = ({ position }) => {
  return (
    <motion.li
      animate={{ ...position }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      className="absolute z-0 h-6 rounded-full bg-black md:h-7"
    />
  );
};

export default NavBar;
