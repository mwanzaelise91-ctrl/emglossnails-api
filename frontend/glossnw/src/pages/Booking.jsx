import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./Booking.css";

function Booking() {
  const [booking, setBooking] = useState({
    fullName: "",
    email: "",
    phone: "",
    service: "",
    date: "",
    time: "",
    notes: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const services = [
    {
      name: "Gel Nails",
      price: 250,
    },
    {
      name: "Acrylic Nails",
      price: 300,
    },
    {
      name: "Gel Toes",
      price: 220,
    },
    {
      name: "Manicure",
      price: 180,
    },
    {
      name: "Pedicure",
      price: 220,
    },
    {
      name: "Nail Art",
      price: 150,
    },
  ];

  const handleChange = (e) => {
    setBooking({
      ...booking,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setSubmitted(true);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const selectedService = services.find(
    (service) => service.name === booking.service
  );

  if (submitted) {
    return (
      <>
        <Navbar />

        <main className="booking-page">

          <section className="booking-success">

            <div className="success-icon">
              ✓
            </div>

            <p className="booking-brand">
              EMGLOSS NAILS
            </p>

            <h1>Appointment Booked!</h1>

            <p className="success-text">
              Thank you, {booking.fullName}.
              Your appointment request has been received.
            </p>

            <div className="booking-confirmation">

              <div>
                <span>Service</span>
                <strong>{booking.service}</strong>
              </div>

              <div>
                <span>Date</span>
                <strong>{booking.date}</strong>
              </div>

              <div>
                <span>Time</span>
                <strong>{booking.time}</strong>
              </div>

              {selectedService && (
                <div>
                  <span>Price</span>
                  <strong>
                    R{selectedService.price}
                  </strong>
                </div>
              )}

            </div>

            <p className="confirmation-note">
              We will contact you using the details provided
              to confirm your appointment.
            </p>

            <button
              className="new-booking-btn"
              onClick={() => {
                setSubmitted(false);
                setBooking({
                  fullName: "",
                  email: "",
                  phone: "",
                  service: "",
                  date: "",
                  time: "",
                  notes: "",
                });
              }}
            >
              Book Another Appointment
            </button>

          </section>

        </main>

        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />

      <main className="booking-page">

        {/* HEADER */}
        <section className="booking-header">

          <p className="booking-brand">
            EMGLOSS NAILS
          </p>

          <h1>Book Your Appointment 💅</h1>

          <p>
            Treat yourself to beautiful nails.
            Choose your preferred service, date and time.
          </p>

        </section>


        {/* BOOKING CONTENT */}
        <section className="booking-container">

          {/* LEFT SIDE */}
          <div className="booking-info">

            <div className="booking-info-card">

              <span className="booking-icon">
                💅
              </span>

              <h2>Beautiful Nails Start Here</h2>

              <p>
                Choose from our professional nail services
                and book your appointment in just a few steps.
              </p>

            </div>


            <div className="booking-benefits">

              <div className="benefit">
                <span>✨</span>

                <div>
                  <strong>Professional Service</strong>
                  <p>
                    Quality nail care from experienced technicians.
                  </p>
                </div>
              </div>


              <div className="benefit">
                <span>📅</span>

                <div>
                  <strong>Easy Booking</strong>
                  <p>
                    Select a date and time that works for you.
                  </p>
                </div>
              </div>


              <div className="benefit">
                <span>💗</span>

                <div>
                  <strong>Beautiful Results</strong>
                  <p>
                    Leave feeling confident and fabulous.
                  </p>
                </div>
              </div>

            </div>

          </div>


          {/* FORM */}
          <div className="booking-card">

            <div className="booking-card-header">

              <p>APPOINTMENT DETAILS</p>

              <h2>Reserve Your Spot</h2>

            </div>

            <form onSubmit={handleSubmit}>

              {/* NAME */}
              <div className="booking-field">

                <label>
                  Full Name
                </label>

                <input
                  type="text"
                  name="fullName"
                  placeholder="Enter your full name"
                  value={booking.fullName}
                  onChange={handleChange}
                  required
                />

              </div>


              {/* EMAIL + PHONE */}
              <div className="booking-row">

                <div className="booking-field">

                  <label>
                    Email Address
                  </label>

                  <input
                    type="email"
                    name="email"
                    placeholder="you@example.com"
                    value={booking.email}
                    onChange={handleChange}
                    required
                  />

                </div>


                <div className="booking-field">

                  <label>
                    Phone Number
                  </label>

                  <input
                    type="tel"
                    name="phone"
                    placeholder="+27 67 123 4567"
                    value={booking.phone}
                    onChange={handleChange}
                    required
                  />

                </div>

              </div>


              {/* SERVICE */}
              <div className="booking-field">

                <label>
                  Select Service
                </label>

                <select
                  name="service"
                  value={booking.service}
                  onChange={handleChange}
                  required
                >

                  <option value="">
                    Choose a nail service
                  </option>

                  {services.map((service) => (

                    <option
                      key={service.name}
                      value={service.name}
                    >
                      {service.name} — R{service.price}
                    </option>

                  ))}

                </select>

              </div>


              {/* DATE + TIME */}
              <div className="booking-row">

                <div className="booking-field">

                  <label>
                    Appointment Date
                  </label>

                  <input
                    type="date"
                    name="date"
                    value={booking.date}
                    onChange={handleChange}
                    min={
                      new Date()
                        .toISOString()
                        .split("T")[0]
                    }
                    required
                  />

                </div>


                <div className="booking-field">

                  <label>
                    Preferred Time
                  </label>

                  <input
                    type="time"
                    name="time"
                    value={booking.time}
                    onChange={handleChange}
                    required
                  />

                </div>

              </div>


              {/* NOTES */}
              <div className="booking-field">

                <label>
                  Additional Notes
                  <span>Optional</span>
                </label>

                <textarea
                  name="notes"
                  rows="4"
                  placeholder="Tell us anything we should know about your appointment..."
                  value={booking.notes}
                  onChange={handleChange}
                />

              </div>


              {/* PRICE */}
              {selectedService && (

                <div className="selected-service">

                  <div>
                    <span>Selected Service</span>

                    <strong>
                      {selectedService.name}
                    </strong>
                  </div>

                  <strong>
                    R{selectedService.price}
                  </strong>

                </div>

              )}


              {/* SUBMIT */}
              <button
                type="submit"
                className="book-appointment-btn"
              >
                Confirm Appointment
                <span>→</span>
              </button>

              <p className="booking-small-text">
                By booking, you agree to our appointment
                terms and conditions.
              </p>

            </form>

          </div>

        </section>

      </main>

      <Footer />
    </>
  );
}

export default Booking;