import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ABOUTIMAGE, MARINAIMAGE } from "../utils.js/constants";

const About = () => {
  const aboutImage = ABOUTIMAGE;
  const marinaImage = MARINAIMAGE;

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section
      id="about"
      className="about-section py-12 my-24 mx-4 lg:mx-8"
      ref={ref}
    >
      <div className="container mx-auto px-4 text-center">
        <motion.h2
          className="text-4xl font-bold mb-8 text-black"
          initial={{ opacity: 0, y: -50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          The Heart of Dubai’s Premier Waterfront Living
        </motion.h2>

        <motion.p
          className="text-lg mb-8 text-black text-left"
          initial={{ opacity: 0, y: -30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Experience the epitome of coastal luxury at Rashid Yachts & Marina,
          Dubai’s newest icon on the Arabian Gulf. As the world’s premier
          yachting destination, this masterfully crafted residential gem
          promises more than just a home – it offers an unparalleled lifestyle
          by the sea.
        </motion.p>

        <div className="flex flex-col md:flex-row justify-center items-start">
          <motion.div
            className="md:w-1/2 text-left mb-8 md:mb-0"
            initial={{ opacity: 0, x: -100 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <p className="text-lg mb-6 pt-6 text-black">
              Rashid Yachts & Marina is more than just a place to live; it's a
              redefinition of luxury living, a destination where architectural
              innovation meets coastal serenity. Designed to set a new benchmark
              in waterfront elegance, this exceptional project by Emaar brings a
              fresh perspective to seafront living.
            </p>

            <ul className="list-disc list-inside py-12 text-black">
              <li className="mb-16">
                <strong>Architectural Masterpiece:</strong> With meticulous
                attention to detail, every element of Rashid Yachts & Marina is
                designed to evoke a sense of modern sophistication. Its
                cutting-edge design transcends conventional boundaries, offering
                an architectural marvel that reshapes the skyline and the
                concept of luxurious living by the coast.
              </li>
              <li>
                <strong>A Fresh Vision of Coastal Living:</strong> Set against
                the stunning backdrop of the Arabian Gulf, Rashid Yachts &
                Marina introduces an exquisite range of waterfront properties,
                each thoughtfully crafted to provide unparalleled views and a
                seamless connection to the ocean.
              </li>
            </ul>
          </motion.div>

          <motion.div
            className="md:w-1/2 flex flex-col gap-6 justify-center items-center px-4"
            initial={{ opacity: 0, x: 100 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <img
              src={marinaImage}
              alt="Marina View"
              className="brightness-50 hover:brightness-100 w-1/2 h-auto rounded-lg shadow-lg cursor-pointer transition-transform transform hover:scale-110"
            />
            <img
              src={aboutImage}
              alt="About Rashid Yachts"
              className="brightness-50 hover:brightness-100 w-[50%] h-auto rounded-lg shadow-lg cursor-pointer transition-transform transform hover:scale-105"
            />
          </motion.div>
        </div>

        <motion.p
          className="text-lg text-black pt-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          Discover a lifestyle where luxury knows no limits, and sophistication
          is the norm. At Rashid Yachts & Marina, living by the water is
          elevated to an art form.
        </motion.p>
      </div>
    </section>
  );
};

export default About;
