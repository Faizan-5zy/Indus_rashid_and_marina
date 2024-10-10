import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import InteractiveMap from "./InteractiveMap";
import { AMENITIES, NEARBYPLACES } from "../utils.js/constants";
import { motion, useInView } from "framer-motion";

const amenities = AMENITIES;
const nearbyPlaces = NEARBYPLACES;

const Amenities = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section
      id="amenities"
      className="amenities-section bg-none py-12 overflow-x-hidden"
    >
      <div className="container mx-auto text-center px-4">
        <h2 className="text-4xl sm:text-3xl font-bold mb-8">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1 }}
          >
            More Than Just a Home – A Lifestyle
          </motion.div>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 mb-12">
          {amenities.map((amenity, index) => (
            <div
              key={index}
              className="amenity-block bg-white text-blue-600 hover:bg-blue-600 hover:text-white p-6 rounded-lg shadow-lg transform transition-all duration-300 ease-in-out hover:scale-105"
            >
              <div className="text-4xl mb-4">{amenity.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{amenity.title}</h3>
              <p>{amenity.description}</p>
            </div>
          ))}
        </div>

        <h3 className="text-3xl sm:text-2xl font-bold mb-6">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1 }}
          >
            Nearby Attractions
          </motion.div>
        </h3>

        <Slider {...sliderSettings} className="mb-12 w-full">
          {nearbyPlaces.map((place, index) => (
            <div key={index} className="p-4">
              <div className="relative bg-white rounded-lg shadow-lg overflow-hidden">
                <img
                  src={place.image}
                  alt={place.name}
                  className="w-full h-48 sm:h-64 object-cover brightness-50 hover:brightness-100 shadow-lg cursor-pointer transition-transform transform-all hover:scale-110"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-4">
                  <h4 className="text-lg font-semibold">{place.name}</h4>
                  <p>{place.time}</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>

        <h3 className="text-3xl sm:text-2xl font-semibold mb-6">
          Explore the Marina Community
        </h3>
        <div className="relative h-96 w-full bg-none mb-12">
          <InteractiveMap />
        </div>

        <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition">
          Discover More
        </button>
      </div>
    </section>
  );
};

export default Amenities;
