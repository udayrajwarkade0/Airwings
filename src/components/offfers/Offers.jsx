import React from 'react'
import "./Offers.css"

const Offers = () => {
  return (
    <section className="section__container offers__container">
      <h2 className="section__header">Special Offers</h2>
      <p className="offers__description">
        Grab the best deals with AIRwings! From discounted flight tickets to
        exclusive packages, we bring you comfort and affordability in every
        journey.
      </p>

      <div className="offers__grid">
        <div className="offer__card">
          <img
            src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600"
            alt="Beach"
          />
          <h3>Summer Getaway</h3>
          <p>Book your summer trips with 30% off to exotic beach destinations.</p>
          <button className="btn">Book Now</button>
        </div>

        <div className="offer__card">
          <img
            src="https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800"
            alt="Europe"
          />
          <h3>Europe Tour</h3>
          <p>
            Explore Europe’s most beautiful cities with flat 25% off on group
            bookings.
          </p>
          <button className="btn">Book Now</button>
        </div>

        <div className="offer__card">
          <img
            src="https://images.unsplash.com/photo-1473625247510-8ceb1760943f?w=600"
            alt="Business Class"
          />
          <h3>Business Class Upgrade</h3>
          <p>
            Upgrade to business class at half the price and fly in luxury like
            never before.
          </p>
          <button className="btn">Book Now</button>
        </div>
      </div>
    </section>
  )
}

export default Offers