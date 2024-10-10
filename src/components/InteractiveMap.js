import React, { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";

const icon = new L.Icon({
  iconUrl: "/images/marker-icon.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowUrl: "/images/marker-shadow.png",
  shadowSize: [41, 41],
});

const locations = [
  {
    name: "Private Marina",
    position: [25.276987, 55.296249],
    description: "World-class yacht berthing and concierge services.",
    videoUrl: "/videos/private-marina.mp4",
  },
  {
    name: "Seaside Park",
    position: [25.276947, 55.292332],
    description: "Perfect for evening strolls by the marina.",
    videoUrl: "/videos/seaside-park.mp4",
  },
  {
    name: "Luxury Mall",
    position: [25.278387, 55.30112],
    description: "Upscale shopping with exclusive brands.",
    videoUrl: "/videos/luxury-mall.mp4",
  },
];

const InteractiveMap = () => {
  const [activeLocation, setActiveLocation] = useState(null);

  return (
    <div className="map-wrapper flex justify-center items-center overflow-hidden">
      <MapContainer
        center={[25.276987, 55.296249]}
        zoom={15}
        style={{ height: "400px", width: "50%" }}
        scrollWheelZoom={false}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="&copy; OpenStreetMap contributors"
        />

        {locations.map((location, index) => (
          <Marker
            key={index}
            position={location.position}
            icon={icon}
            eventHandlers={{
              click: () => {
                setActiveLocation(location);
              },
            }}
          />
        ))}

        {activeLocation && (
          <Popup
            position={activeLocation.position}
            onClose={() => setActiveLocation(null)}
          >
            <div>
              <h3>{activeLocation.name}</h3>
              <p>{activeLocation.description}</p>
              {activeLocation.videoUrl && (
                <video controls width="200">
                  <source src={activeLocation.videoUrl} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              )}
            </div>
          </Popup>
        )}
      </MapContainer>
    </div>
  );
};

export default InteractiveMap;
