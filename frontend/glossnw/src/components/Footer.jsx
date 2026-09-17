import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        {/* BRAND */}
        <div className="footer-brand">
          <h2>💅 EMGloss Nails</h2>

          <p>
            Beautiful nails, quality products and professional
            nail care for everyone.
          </p>
        </div>


        {/* QUICK LINKS */}
        <div className="footer-section">
          <h3>Quick Links</h3>

          <a href="/home">Home</a>
          <a href="/browse">Shop</a>
          <a href="/booking">Book Appointment</a>
          <a href="/profile">My Profile</a>
        </div>


        {/* CONTACT */}
        <div className="footer-section">
          <h3>Contact Us</h3>

          <p>📍 Johannesburg, South Africa</p>
          <p>📞 +27 65 625 6923</p>
          <p>✉️ mwanzaelise91@gmail.com</p>
        </div>


        {/* SOCIAL MEDIA */}
        <div className="footer-section">
          <h3>Follow Us</h3>

          <div className="social-icons">

            {/* TikTok */}
            <a
              href="https://www.tiktok.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon tiktok"
              aria-label="TikTok"
            >
              🎵
            </a>

            {/* Facebook */}
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon facebook"
              aria-label="Facebook"
            >
              f
            </a>

            {/* WhatsApp */}
            <a
              href="https://wa.me/27671234567"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon whatsapp"
              aria-label="WhatsApp"
            >
              ☎
            </a>

            {/* Instagram */}
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon instagram"
              aria-label="Instagram"
            >
              ◎
            </a>

          </div>

          <p className="social-text">
            Follow EMGloss Nails for new products,
            nail inspiration and special offers.
          </p>
        </div>

      </div>


      {/* COPYRIGHT */}
      <div className="footer-bottom">
        <p>
          © 2026 EMGloss Nails. All rights reserved.
        </p>
      </div>

    </footer>
  );
}

export default Footer;