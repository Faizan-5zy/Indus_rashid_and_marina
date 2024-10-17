import React, { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { FaTimes } from "react-icons/fa";

const Home = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  return (
    <section className="relative" id="home" ref={ref}>
      <div className="text-white pb-4 pt-8 absolute top-40 left-0 right-0 bottom-40 flex flex-col items-center justify-center text-center z-20 px-4">
        {!isMenuOpen && (
          <>
            <motion.h1
              className="text-2xl sm:text-3xl md:text-4xl sm:pt-4 font-bold"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 1 }}
            >
              Experience Waterfront Luxury Like Never Before
            </motion.h1>

            <motion.h3
              className="text-base sm:text-lg md:text-xl mt-4 font-semibold"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 2 }}
            >
              Step into a world where the ocean meets elegance - Welcome to
              Rashid Yachts and Marina.
            </motion.h3>
          </>
        )}

        <div className="hidden md:flex flex-1  items-center ">
          {/* <motion.h3
            className="text-base sm:text-lg md:text-xl mt-4"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 2 }}
          > */}
            <button className="px-4 py-2 bg-none bg-opacity-50  hover:text-white hover:bg-darkGold rounded-lg font-semibold">
              <a
              className="get-directions-btn"
                href="#location">

              Take a Virtual Tour
                </a>
            </button>
            <button className="px-4 py-2 bg-none bg-opacity-50  hover:text-white hover:bg-darkGold rounded-lg font-semibold">
              <a
              className="get-directions-btn"
                href="#projects">

              Find Your Dream Home
                </a>
            </button>
            <button className="px-4 py-2 bg-none bg-opacity-50  hover:text-white hover:bg-darkGold rounded-lg font-semibold">
              <a
              className="get-directions-btn"
                href="#amenities">

              Discover the Marina Lifestyle
                </a>
            </button>{" "}
          {/* </motion.h3> */}
        </div>

        <button
          onClick={toggleMenu}
          className="hidden px-4 py-2 bg-none bg-opacity-50 text-none rounded-lg md:hidden"
        >
          Menu
        </button>

        {isMenuOpen && (
          <motion.div
            className="absolute top-0 left-0 right-0 bg-black bg-opacity-80 flex flex-col items-center py-4 z-30"
            initial={{ y: -200 }}
            animate={isMenuOpen ? { y: 0 } : { y: -200 }}
            transition={{ duration: 0.3 }}
          >
            <button
              onClick={toggleMenu}
              className="absolute top-4 right-4 text-white text-2xl"
            >
              <FaTimes />
            </button>
            <div className="flex flex-col items-center">
              <button className="px-4 py-2 bg-none bg-opacity-50 hover:bg-blue-500 text-white rounded-lg">
                Take a Virtual Tour
              </button>
              <button className="px-4 py-2 bg-none bg-opacity-50 hover:bg-blue-500 text-white rounded-lg">
                Find Your Dream Home
              </button>
              <button className="px-4 py-2 bg-none bg-opacity-50 hover:bg-blue-500 text-white rounded-lg">
                Discover the Marina Lifestyle
              </button>
            </div>
          </motion.div>
        )}
      </div>

      <div>
        <img
          className="brightness-[0.4] object-cover w-full h-[50vh] md:h-[80vh] lg:h-[832px] max-w-full"
          src="https://cdn.properties.emaar.com/wp-content/uploads/2020/02/EMAAR_MinaRashid_CGI19_06-1620x832.jpg"
          alt="Marina"
        />
      </div>
    </section>
  );
};

export default Home;
