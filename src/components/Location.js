import React, { useRef } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import { motion, useInView } from "framer-motion";

const locations = [
  {
    name: "Rashid Yachts & Marina",
    position: [25.276987, 55.296249],
    description: "Luxury living with stunning waterfront views.",
  },
  {
    name: "Dubai Mall",
    position: [25.198881, 55.279568],
    description: "One of the largest shopping malls in the world.",
  },
  {
    name: "Burj Khalifa",
    position: [25.197197, 55.274376],
    description: "The tallest building in the world, just 10 minutes away.",
  },
  {
    name: "Dubai International Airport",
    position: [25.253175, 55.365673],
    description: "Only a 20-minute drive from the Marina.",
  },
];

const icon = new L.Icon({
  iconUrl: "/images/marker-icon.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowUrl: "/images/marker-shadow.png",
  shadowSize: [41, 41],
});

const Location = () => {
  const ref = useRef(null);

  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="location" className="py-12 my-4 relative" ref={ref}>
      <motion.h3
        className="text-3xl sm:text-2xl font-bold mb-6 text-center z-20 text-black"
        initial={{ opacity: 0, x: -100 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 1, delay: 0.5 }}
      >
        Dubai’s Most Iconic Waterfront Location
      </motion.h3>

      <div className="map-wrapper flex justify-center">
        <div
          className="map-container w-full sm:h-80 h-64"
          style={{ height: "400px", width: "100%" }}
        >
          <MapContainer
            center={[25.276987, 55.296249]}
            zoom={12}
            style={{ height: "100%", width: "100%" }}
          >
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution="&copy; <a href='http://osm.org/copyright'>OpenStreetMap</a> contributors"
            />
            {locations.map((location, index) => (
              <Marker key={index} position={location.position} icon={icon}>
                <Popup>
                  <h3>{location.name}</h3>
                  <p>{location.description}</p>
                  <a
                    href={`https://www.google.com/maps/dir/?api=1&destination=${location.position[0]},${location.position[1]}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="get-directions-btn text-blue-500 underline"
                  >
                    Get Directions
                  </a>
                </Popup>
              </Marker>
            ))}
          </MapContainer>
        </div>
      </div>
    </section>
  );
};

export default Location;
