import React, { useState, useEffect } from "react";
import Logo from "./Logo";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  return (
    <div className="relative">
      <header className="absolute z-50 mx-10 my-2 h-22 flex justify-between items-center top-10 left-0 right-0">
        <div className="flex justify-center items-center">
          <Logo />
        </div>

        <div className="lg:hidden">
          <button
            onClick={toggleMobileMenu}
            className="text-white focus:outline-none"
          >
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        <nav className="hidden lg:flex items-center">
          <ul className="flex gap-10 cursor-pointer">
            <li>
              <a
                href="#home"
                className="text-white hover:bg-blue-500 py-2 px-4 rounded capitalize"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="text-white hover:bg-blue-500 py-2 px-4 rounded capitalize"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className="text-white hover:bg-blue-500 py-2 px-4 rounded capitalize"
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#amenities"
                className="text-white hover:bg-blue-500 py-2 px-4 rounded capitalize"
              >
                Amenities
              </a>
            </li>
            <li>
              <a
                href="#location"
                className="text-white hover:bg-blue-500 py-2 px-4 rounded capitalize"
              >
                Location
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="text-white hover:bg-blue-500 py-2 px-4 rounded capitalize"
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>

        <div
          className={`${
            isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
          } fixed top-0 right-0 w-64 h-full bg-gray-900 text-white transition-transform transform lg:hidden z-50`}
        >
          <button
            onClick={toggleMobileMenu}
            className="absolute top-4 left-4 text-white focus:outline-none"
          >
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          <ul className="flex flex-col gap-8 p-8 mt-20">
            <li>
              <a
                href="#home"
                onClick={toggleMobileMenu}
                className="text-white hover:bg-blue-500 py-2 px-4 rounded capitalize"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#about"
                onClick={toggleMobileMenu}
                className="text-white hover:bg-blue-500 py-2 px-4 rounded capitalize"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#projects"
                onClick={toggleMobileMenu}
                className="text-white hover:bg-blue-500 py-2 px-4 rounded capitalize"
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#amenities"
                onClick={toggleMobileMenu}
                className="text-white hover:bg-blue-500 py-2 px-4 rounded capitalize"
              >
                Amenities
              </a>
            </li>
            <li>
              <a
                href="#location"
                onClick={toggleMobileMenu}
                className="text-white hover:bg-blue-500 py-2 px-4 rounded capitalize"
              >
                Location
              </a>
            </li>
            <li>
              <a
                href="#contact"
                onClick={toggleMobileMenu}
                className="text-white hover:bg-blue-500 py-2 px-4 rounded capitalize"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </header>
    </div>
  );
};

export default Header;
