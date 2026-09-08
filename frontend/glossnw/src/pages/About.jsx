import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./About.css";

function About() {
  const navigate = useNavigate();

  return (
    <div className="about-page">

      <Navbar />

      {/* =====================================
          STORY HERO
      ====================================== */}
      <section className="about-hero">

        <div className="about-hero-content">

          <p className="about-small">
            WELCOME TO EMGLOSS NAILS
          </p>

          <h1>
            Our Story <span>💕</span>
          </h1>

          <p>
            More than nails. It's about confidence, creativity,
            beauty and expressing your own unique style.
          </p>

        </div>

      </section>


      {/* =====================================
          OUR STORY
      ====================================== */}
      <section className="story-section">

        <div className="story-text">

          <p className="section-small">
            THE EMGLOSS STORY
          </p>

          <h2>
            Where Beauty Meets Creativity
          </h2>

          <p>
            EMGLOSS Nails was created from a love for beautiful
            nails, creativity and self-expression. We believe
            that your nails are more than just a beauty detail.
            They are a small but powerful way to show your
            personality, confidence and individual style.
          </p>

          <p>
            Our vision is to create a place where nail lovers
            can easily find quality products, discover new
            styles and enjoy professional nail services.
          </p>

          <p>
            Whether you are doing your nails at home, learning
            how to create your own designs, or working as a
            professional nail technician, EMGLOSS Nails is here
            to support your nail journey.
          </p>

          <p>
            From nail polish and acrylic products to nail art
            accessories, tools and equipment, we bring together
            the essentials you need to create beautiful nails.
          </p>

        </div>


        {/* =====================================
            STORY CARD
        ====================================== */}
        <div className="story-card">

          <div className="story-icon">
            💅
          </div>

          <p className="story-card-small">
            OUR PHILOSOPHY
          </p>

          <h2>
            Style Yourself Differently
          </h2>

          <p>
            Be creative.
            <br />
            Be confident.
            <br />
            Be yourself.
          </p>

          <span>
            EMGLOSS NAILS
          </span>

        </div>

      </section>


      {/* =====================================
          OUR VALUES
      ====================================== */}
      <section className="about-values">

        <p className="section-small">
          WHAT WE BELIEVE IN
        </p>

        <h2>
          More Than Just Nails
        </h2>

        <p className="values-intro">
          EMGLOSS Nails is built around creativity, quality
          and making every customer feel confident in their
          own style.
        </p>

        <div className="values-grid">

          <div className="value-card">

            <span>💎</span>

            <h3>
              Quality
            </h3>

            <p>
              We believe in providing quality nail products
              that help you achieve beautiful and professional
              results.
            </p>

          </div>


          <div className="value-card">

            <span>✨</span>

            <h3>
              Creativity
            </h3>

            <p>
              Your nails are your canvas. We encourage you
              to experiment, create and express your own
              unique style.
            </p>

          </div>


          <div className="value-card">

            <span>💖</span>

            <h3>
              Confidence
            </h3>

            <p>
              We want every customer to leave feeling
              beautiful, confident and proud of their style.
            </p>

          </div>

        </div>

      </section>


      {/* =====================================
          WHAT WE OFFER
      ====================================== */}
      <section className="about-offer">

        <div className="about-offer-content">

          <p className="section-small">
            YOUR NAIL JOURNEY
          </p>

          <h2>
            Everything You Need For Beautiful Nails
          </h2>

          <p>
            Explore our collection of nail products, book
            a nail appointment or discover something new
            for your next nail look.
          </p>

          <div className="about-buttons">

            <button
              type="button"
              onClick={() => navigate("/browse")}
            >
              Shop Products →
            </button>

            <button
              type="button"
              onClick={() => navigate("/booking")}
            >
              Book Appointment →
            </button>

          </div>

        </div>

      </section>


      {/* FOOTER */}
      <Footer />

    </div>
  );
}

export default About;