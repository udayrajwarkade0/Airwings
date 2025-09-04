import React, { useState } from "react";
import "./Seats.css";

const Seats = () => {
  const [selectedSeats, setSelectedSeats] = useState([]);

  const seats = [
    "1A", "1B", "1C", "1D",
    "2A", "2B", "2C", "2D",
    "3A", "3B", "3C", "3D",
    "4A", "4B", "4C", "4D",
  ];

  const toggleSeat = (seat) => {
    if (selectedSeats.includes(seat)) {
      setSelectedSeats(selectedSeats.filter((s) => s !== seat));
    } else {
      setSelectedSeats([...selectedSeats, seat]);
    }
  };

  return (
    <section className="section__container seats__container">
      <h2 className="section__header">Choose Your Seats</h2>
      <p className="seats__description">
        Select your preferred seats for a comfortable journey with AIRwings.
      </p>

      <div className="seats__grid">
        {seats.map((seat) => (
          <div
            key={seat}
            className={`seat ${selectedSeats.includes(seat) ? "selected" : ""}`}
            onClick={() => toggleSeat(seat)}
          >
            {seat}
          </div>
        ))}
      </div>

      <div className="selected__info">
        <h3>Selected Seats:</h3>
        {selectedSeats.length > 0 ? (
          <p>{selectedSeats.join(", ")}</p>
        ) : (
          <p>No seats selected</p>
        )}
      </div>
    </section>
  );
};

export default Seats;
