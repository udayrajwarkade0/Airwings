import React from "react";
import "./Destination.css";

const Destinations = () => {
  return (
    <div className="page">
      <h1>Top Destinations</h1>
      <p>
        Discover breathtaking destinations across the world. Travel with
        comfort, style, and unforgettable experiences.
      </p>
      <img
        src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1000"
        alt="Destinations"
        style={{ width: "100%", borderRadius: "0px", marginTop: "20px", height: "600px", objectFit: "cover" }}
      />
    </div>
  );
};

export default Destinations;
