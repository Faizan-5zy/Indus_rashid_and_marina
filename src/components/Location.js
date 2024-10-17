import React, { useRef, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import { motion, useInView } from "framer-motion";
import ReactPlayer from "react-player/youtube";
import "leaflet/dist/leaflet.css"; // Import Leaflet styles

// Fix marker icon issues by importing images correctly
delete L.Icon.Default.prototype._getIconUrl;

const icon = new L.Icon({
  iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
  iconUrl: require("leaflet/dist/images/marker-icon.png"),
  shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

// Data for locations with descriptions and videos
const locations = [
  {
    name: "Rashid Yachts & Marina", // Translated from Arabic
    position: [25.259327778928466, 55.279240288137075],
    description: "Luxury living with stunning waterfront views.",
    videoUrl: "Z-YqIweLuCY",
  },
  {
    name: "Marina Beach",
    position: [25.078024832816475, 55.13173337173719],
    description:
      "Multiple skyscrapers frame this lively locale for sunbathing, sunset watching & water sports.",
    videoUrl: "3Ch-g72JLHk",
  },
  {
    name: "Dubai Mall", // Translated from Arabic
    position: [25.197670901337677, 55.27966954355484],
    description: "One of the largest shopping malls in the world.",
    videoUrl: "GswWlpc-IOw",
  },
  {
    name: "Burj Khalifa", // Translated from Arabic
    position: [25.19767045738606, 55.27434347529271],
    description: "The tallest building in the world, just 10 minutes away.",
    videoUrl: "JxidM-eFtnw",
  },
  {
    name: "Dubai International Airport", // Translated from Arabic
    position: [25.257613891568134, 55.364385669763436],
    description: "Only a 20-minute drive from the Marina.",
    videoUrl: "udBzP7ILihE",
  },
];

const Location = () => {
  const ref = useRef(null);
  const [activeLocation, setActiveLocation] = useState(null); // Track active marker
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="location" className="py-12 my-4 relative" ref={ref}>
      <motion.h3
        className="text-3xl sm:text-2xl font-bold mb-6 text-center z-20 text-white"
        initial={{ opacity: 0, x: -100 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 1, delay: 0.5 }}
      >
        Dubai’s Most Iconic Waterfront Locations
      </motion.h3>

      <div className="map-wrapper flex justify-center items-center">
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
              url="https://{s}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png"
              attribution="&copy; <a href='http://osm.org/copyright'>OpenStreetMap</a> contributors"
            />

            {locations.map((location, index) => (
              <Marker
                key={index}
                position={location?.position}
                icon={icon}
                eventHandlers={{
                  click: () => setActiveLocation(location),
                }}
              >
                <Popup onClose={() => setActiveLocation(null)}>
                  <h3 className="font-bold">{location?.name}</h3>
                  <p className="mb-2">{location?.description}</p>
                  <a
                    href={`https://www.google.com/maps/dir/?api=1&destination=${activeLocation?.position[0]},${activeLocation?.position[1]}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="get-directions-btn underline mb-2"
                  >
                    <button className=" rounded-lg bg-gold hover:bg-gold text-white p-2 m-2">
                      Get Directions
                    </button>
                  </a>

                  {activeLocation && activeLocation.name === location.name && (
                    <ReactPlayer
                      key={location?.videoUrl}
                      url={`https://www.youtube.com/watch?v=${location.videoUrl}`}
                      width="100%"
                      height="200px"
                      controls
                    />
                  )}
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
