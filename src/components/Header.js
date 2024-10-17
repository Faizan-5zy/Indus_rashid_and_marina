// import React, { useRef, useState, useEffect } from "react";
import React, {  useState, useEffect } from "react";
import Logo from "./Logo";
// import { motion, useInView } from "framer-motion";


const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  // const ref = useRef(null);
  // const isInView = useInView(ref, { once: true, amount: 0.2 });

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
            {/* <motion.h3
            className="text-base sm:text-lg md:text-xl mt-4"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 2 }}
            > */}
            <ul className="flex gap-10 cursor-pointer font-semibold">

            <li>
              <a
                href="#about"
                className="text-white hover:text-white hover:bg-darkGold py-2 px-4 rounded capitalize transition-transform transform hover:scale-110"
                >
                About
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className="text-white hover:text-white hover:bg-darkGold py-2 px-4 rounded capitalize"
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#amenities"
                className="text-white hover:text-white hover:bg-darkGold py-2 px-4 rounded capitalize"
              >
                Amenities
              </a>
            </li>
            <li>
              <a
                href="#location"
                className="text-white hover:text-white hover:bg-darkGold py-2 px-4 rounded capitalize"
              >
                Location
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="text-white hover:text-white hover:bg-darkGold py-2 px-4 rounded capitalize"
              >
                Contact
              </a>
            </li>
          </ul>
                {/* </motion.h3> */}

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
                href="#about"
                onClick={toggleMobileMenu}
                className="text-white hover:bg-darkGold py-2 px-0 rounded capitalize"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#projects"
                onClick={toggleMobileMenu}
                className="text-white hover:bg-darkGold py-2 px-0 rounded capitalize"
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#amenities"
                onClick={toggleMobileMenu}
                className="text-white hover:bg-darkGold py-2 px-0 rounded capitalize"
              >
                Amenities
              </a>
            </li>
            <li>
              <a
                href="#location"
                onClick={toggleMobileMenu}
                className="text-white hover:bg-darkGold py-2 px-0 rounded capitalize"
              >
                Location
              </a>
            </li>
            <li>
              <a
                href="#contact"
                onClick={toggleMobileMenu}
                className="text-white hover:bg-darkGold py-2 px-0 rounded capitalize"
              >
                Contact
              </a>
            </li>
            <li>
              <a
                href="#location"
                onClick={toggleMobileMenu}
                className="text-white hover:bg-darkGold py-2 px-0 rounded capitalize"
              >
                Take a Virtual Tour
              </a>
            </li>
            <li>
              <a
                href="#projects"
                onClick={toggleMobileMenu}
                className="text-white hover:bg-darkGold py-2 px-0 rounded capitalize"
              >
                Find Your Dream Home
              </a>
            </li>
            <li>
              <a
                href="#amenities"
                onClick={toggleMobileMenu}
                className="text-white hover:bg-darkGold py-2 px-0 rounded capitalize"
              >
                Discover the Marina Lifestyle
              </a>
            </li>
          </ul>
        </div>
      </header>
    </div>
  );
};

export default Header;
