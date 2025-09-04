import React from 'react'

import headerImg from '../assets/header.jpg'
import plan1 from '../assets/plan-1.jpg'
import plan2 from '../assets/plan-2.jpg'
import plan3 from '../assets/plan-3.jpg'
import lounge1 from '../assets/lounge-1.jpg'
import lounge2 from '../assets/lounge-2.jpg'
import traveller1 from '../assets/traveller-1.jpg'
import traveller2 from '../assets/traveller-2.jpg'
import traveller3 from '../assets/traveller-3.jpg'
import traveller4 from '../assets/traveller-4.jpg'
import client1 from '../assets/client-1.jpg'
import client2 from '../assets/client-2.jpg'
import client3 from '../assets/client-3.jpg'
import client4 from '../assets/client-4.jpg'

const Home = () => {
  return (
    <>
       <header className="section__container header__container">
        <h1 className="section__header">Find And Book<br />A Great Experience</h1>
        <img src={headerImg} alt="header" />
      </header>

    <section className="section__container booking__container">
      <div className="booking__nav">
        <span>Economy Class</span>
        <span>Business Class</span>
        <span>First Class</span>
      </div>
      <form>
        <div className="form__group">
          <span><i className="ri-map-pin-line"></i></span>
          <div className="input__content">
            <div className="input__group">
              <input type="text"  title="Location" />
              <label>Location</label>
            </div>
            <p>Where are you goung?</p>
          </div>
        </div>
        <div className="form__group">
          <span><i className="ri-user-3-line"></i></span>
          <div className="input__content">
            <div className="input__group">
              <input type="number" title="Number of Travellers" />
              <label>Travellers</label>
            </div>
            <p>Add guests</p>
          </div>
        </div>
        <div className="form__group">
          <span><i className="ri-calendar-line"></i></span>
          <div className="input__content">
            <div className="input__group">
              <input type="text" />
              <label>Departure</label>
            </div>
            <p>Add date</p>
          </div>
        </div>
        <div className="form__group">
          <span><i className="ri-calendar-line"></i></span>
          <div className="input__content">
            <div className="input__group">
              <input type="text" />
              <label>Return</label>
            </div>
            <p>Add date</p>
          </div>
        </div>
        <button type="submit" className="btn" title="Search"><i className="ri-search-line"></i></button>
      </form>
    </section>

    <section className="section__container plan__container">
      <p className="subheader">TRAVEL SUPPORT</p>
      <h2 className="section__header">Plan your travel with confidence</h2>
      <p className="description">
        Find help with your bookings and travel plans, and seee what to expect
        along your journey.
      </p>
      <div className="plan__grid">
        <div className="plan__content">
          <span className="number">01</span>
          <h4>Travel Requirements for Dubai</h4>
          <p>
            Stay informed and prepared for your trip to Dubai with essential
            travel requirements, ensuring a smooth and hassle-free experience in
            this vibrant and captivating city.
          </p>
          <span className="number">02</span>
          <h4>Multi-risk travel insurance</h4>
          <p>
            Comprehensive protection for your peace of mind, covering a range of
            potential travel risks and unexpected situations.
          </p>
          <span className="number">03</span>
          <h4>Travel Requirements by destinations</h4>
          <p>
            Stay informed and plan your trip with ease, as we provide up-to-date
            information on travel requirements specific to your desired
            destinations.
          </p>
        </div>
          <div className="plan__image">
          <img src={plan1} alt="plan" />
          <img src={plan2} alt="plan" />
          <img src={plan3} alt="plan" />
        </div>
      </div>
    </section>

    <section className="memories">
      <div className="section__container memories__container">
        <div className="memories__header">
          <h2 className="section__header">
            Travel to make memories all around the world
          </h2>
          <button className="view__all">View All</button>
        </div>
        <div className="memories__grid">
          <div className="memories__card">
            <span><i className="ri-calendar-2-line"></i></span>
            <h4>Book & relax</h4>
            <p>
              With "Book and Relax," you can sit back, unwind, and enjoy the
              journey while we take care of everything else.
            </p>
          </div>
          <div className="memories__card">
            <span><i className="ri-shield-check-line"></i></span>
            <h4>Smart Checklist</h4>
            <p>
              Introducing Smart Checklist with us, the innovative solution
              revolutionizing the way you travel with our airline.
            </p>
          </div>
          <div className="memories__card">
            <span><i className="ri-bookmark-2-line"></i></span>
            <h4>Save More</h4>
            <p>
              From discounted ticket prices to exclusive promotions and deals,
              we prioritize affordability without compromising on quality.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section className="section__container lounge__container">
      <div className="lounge__image">
          <img src={lounge1} alt="lounge" />
          <img src={lounge2} alt="lounge" />
        </div>
      <div className="lounge__content">
        <h2 className="section__header">Unaccompanied Minor Lounge</h2>
        <div className="lounge__grid">
          <div className="lounge__details">
            <h4>Experience Tranquility</h4>
            <p>
              Serenity Haven offers a tranquil escape, featuring comfortable
              seating, calming ambiance, and attentive service.
            </p>
          </div>
          <div className="lounge__details">
            <h4>Elevate Your Experience</h4>
            <p>
              Designed for discerning travelers, this exclusive lounge offers
              premium amenities, assistance, and private workspaces.
            </p>
          </div>
          <div className="lounge__details">
            <h4>A Welcoming Space</h4>
            <p>
              Creating a family-friendly atmosphere, The Family Zone is the
              perfect haven for parents and children.
            </p>
          </div>
          <div className="lounge__details">
            <h4>A Culinary Delight</h4>
            <p>
              Immerse yourself in a world of flavors, offering international
              cuisines, gourmet dishes, and carefully curated beverages.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section className="section__container travellers__container">
      <h2 className="section__header">Best travellers of the month</h2>
      <div className="travellers__grid">
        <div className="travellers__card">
          <img src={traveller1} alt="traveller" />
          <div className="travellers__card__content">
           <img src={client1} alt="client" />
            <h4>Emily Johnson</h4>
            <p>Dubai</p>
          </div>
        </div>
        <div className="travellers__card">
          <img src={traveller2} alt="traveller" />
          <div className="travellers__card__content">
           <img src={client2} alt="client" />
            <h4>David Smith</h4>
            <p>Paris</p>
          </div>
        </div>
        <div className="travellers__card">
            <img src={traveller3} alt="traveller" />
          <div className="travellers__card__content">
            <img src={client3} alt="client" />
            <h4>Olivia Brown</h4>
            <p>Singapore</p>
          </div>
        </div>
        <div className="travellers__card">
           <img src={traveller4} alt="traveller" />
          <div className="travellers__card__content">
           <img src={client4} alt="client" />
            <h4>Daniel Taylor</h4>
            <p>Malaysia</p>
          </div>
        </div>
      </div>
    </section>

    <section className="subscribe">
      <div className="section__container subscribe__container">
        <h2 className="section__header">Subscribe newsletter & get latest news</h2>
        <form className="subscribe__form">
          <input type="text" placeholder="Enter your email here" />
          <button type="submit" className="btn">Subscribe</button>
        </form>
      </div>
    </section>

    </>
  )
}

export default Home