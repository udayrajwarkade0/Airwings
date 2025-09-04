import React from "react";
import "./About.css";

const About = () => {
  return (
    <section className="section__container about__container">
      <h2 className="section__header">About AIRwings</h2>
      <p className="about__description">
        At AIRwings, we believe travel is more than just reaching a destination –
        it’s about creating unforgettable memories. With our commitment to
        excellence, we provide safe, comfortable, and world-class flying
        experiences across the globe.
      </p>

      <div className="about__grid">
        <div className="about__image">
          <img
            src="https://images.unsplash.com/photo-1504196606672-aef5c9cefc92?w=800
"
            alt="Airplane"
          />
        </div>
        <div className="about__content">
          <h3>Our Mission</h3>
          <p>
            To connect people, cultures, and destinations with exceptional
            service and a passion for aviation. Whether it’s your first flight
            or your hundredth, AIRwings makes sure your journey is seamless and
            memorable.
          </p>

          <h3>Our Vision</h3>
          <p>
            To be recognized globally as the most trusted and customer-focused
            airline, offering innovation, comfort, and sustainability in air
            travel.
          </p>
        </div>
      </div>

      <div className="team__container">
        <h2 className="section__header">Meet Our Team</h2>
        <div className="team__grid">
          <div className="team__card">
            <img
              src="https://images.unsplash.com/photo-1529070538774-1843cb3265df?w=400
"
              alt="Pilot"
            />
            <h4>Captain James</h4>
            <p>Chief Pilot</p>
          </div>
          <div className="team__card">
            <img
              src="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=400
"
              alt="Crew"
            />
            <h4>Sarah Lee</h4>
            <p>Cabin Crew Manager</p>
          </div>
          <div className="team__card">
            <img
              src="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=400

"
              alt="Manager"
            />
            <h4>Michael Chen</h4>
            <p>Operations Head</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
