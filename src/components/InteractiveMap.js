import React, { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import ReactPlayer from "react-player/youtube";
import "leaflet/dist/leaflet.css"; // Import Leaflet styles

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
  iconUrl: require("leaflet/dist/images/marker-icon.png"),
  shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
});

const locations = [
  {
    name: "Dubai Marina",
    position: [25.0754763648, 55.1397777742],
    description:
      "Dubai Marina is a canal city in Dubai along a 3 km stretch of the Persian Gulf. It will house over 120,000 residents in towers and villas.",
    videoUrl: "_BVYKjsr1eE",
  },
  {
    name: "Dubai Marina Mall",
    position: [25.080888156745694, 55.13977063786897],
    description:
      "Find everything at this waterfront shopping and dining destination that's frequented by locals and visitors for its big name brands and boat rides.",
    videoUrl: "DLG6TJNBSe8",
  },
  {
    name: "Marina Beach",
    position: [25.078024832816475, 55.13173337173719],
    description:
      "Multiple skyscrapers frame this lively locale for sunbathing, sunset watching & water sports.",
    videoUrl: "3Ch-g72JLHk",
  },
  {
    name: "Marina Walkway",
    position: [25.075572295201926, 55.12903903261406],
    description:
      "Dubai Marina Walk offers a vibrant mix of leisure, dining, and retail options. Enjoy top restaurants like those at Pier 7, or explore Dubai Marina Mall with shops, dining, a cinema, and more.",
    videoUrl: "ol8y4rXVlUU",
  },
  {
    name: "Counter Culture Cafe",
    position: [25.08794096291829, 55.14581161705783],
    description:
      "Enjoy avocado toast, burgers, beverages, and healthy snacks. The café offers fresh juices, smoothies, and hubbly bubbly from 4-10pm. Relax with drinks on the pet-friendly terrace.",
    videoUrl: "DnA-w0KJN0c",
  },
  {
    name: "Fitness First Marina Gate",
    position: [25.09068482053153, 55.14578615596154],
    description:
      "Fitness First Middle East is one of the world's leading health and fitness chains, with a wide range of branches across the UAE in Dubai, Abu Dhabi, Sharjah and Al Ain.",
    videoUrl: "XKuCinMW5CM",
  },
];

const InteractiveMap = () => {
  const [activeLocation, setActiveLocation] = useState(null);

  return (
    <div className="map-wrapper flex justify-center items-center overflow-hidden">
      <MapContainer
        center={locations[0].position}
        zoom={15}
        style={{ height: "400px", width: "80%" }}
        scrollWheelZoom={false}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />

        {locations.map((location, index) => (
          <Marker
            key={index}
            position={location.position}
            eventHandlers={{
              click: () => setActiveLocation(location),
            }}
          />
        ))}

        {activeLocation && (
          <Popup
            position={activeLocation.position}
            onClose={() => setActiveLocation(null)}
          >
            <div>
              <h3 className="font-bold">{activeLocation.name}</h3>
              <p className="mb-2">{activeLocation.description}</p>
              <ReactPlayer
                key={activeLocation.videoUrl} 
                url={`https://www.youtube.com/watch?v=${activeLocation.videoUrl}`}
                width="100%"
                height="200px"
                controls
              />
            </div>
          </Popup>
        )}
      </MapContainer>
    </div>
  );
};

export default InteractiveMap;
