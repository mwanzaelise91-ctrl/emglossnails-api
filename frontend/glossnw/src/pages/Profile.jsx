import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import "../App.css";

function Profile({ setAuth }) {
  const navigate = useNavigate();

  // =========================================
  // GET LOGGED-IN USER
  // =========================================

  const savedUser = localStorage.getItem("user");

  let loggedInUser = {
    firstName: "User",
    lastName: "",
    email: "",
    phone: "",
  };

  try {
    if (savedUser) {
      loggedInUser = JSON.parse(savedUser);
    }
  } catch (error) {
    console.error("Could not read saved user:", error);
  }

  // =========================================
  // STATES
  // =========================================

  const [editing, setEditing] = useState(false);
  const [showLogout, setShowLogout] = useState(false);

  const [user, setUser] = useState({
    firstName: loggedInUser.firstName || "",
    lastName: loggedInUser.lastName || "",
    email: loggedInUser.email || "",
    phone: loggedInUser.phone || "",
  });

  // =========================================
  // HANDLE INPUT
  // =========================================

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  // =========================================
  // SAVE PROFILE
  // =========================================

  const handleSave = () => {
    localStorage.setItem("user", JSON.stringify(user));
    setEditing(false);
  };

  // =========================================
  // LOGOUT
  // =========================================

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    setAuth(false);
    setShowLogout(false);

    navigate("/login", { replace: true });
  };

  return (
    <>
      <Navbar />

      <main className="profile-page">

        {/* =====================================
            PAGE HEADER
        ====================================== */}

        <div className="profile-header">
          <p className="profile-small-title">
            EMGLOSS NAILS
          </p>

          <h1>My Profile</h1>

          <p>
            Manage your personal information and
            EMGloss Nails account.
          </p>
        </div>

        <div className="profile-container">

          {/* =====================================
              PROFILE CARD
          ====================================== */}

          <section className="profile-card">

            <div className="profile-cover"></div>

            <div className="profile-content">

              <div className="profile-image-wrapper">
                <img
                  src={`https://ui-avatars.com/api/?name=${encodeURIComponent(
                    `${user.firstName} ${user.lastName}`
                  )}&background=e83e7d&color=ffffff&size=200`}
                  alt={`${user.firstName} ${user.lastName}`}
                  className="profile-image"
                />
              </div>

              <div className="profile-name">

                <h2>
                  {user.firstName} {user.lastName}
                </h2>

                <span className="member-badge">
                  ✦ EMGloss Member
                </span>

              </div>

              <p className="profile-description">
                Welcome{" "}
                <strong>{user.firstName}</strong>!
                <br />
                Manage your orders, appointments and
                personal details from here.
              </p>

              <button
                type="button"
                className="edit-profile-btn"
                onClick={() => setEditing(!editing)}
              >
                {editing ? "Cancel Editing" : "Edit Profile"}
              </button>

            </div>

          </section>

          {/* =====================================
              PERSONAL DETAILS
          ====================================== */}

          <section className="profile-info-card">

            <div className="section-title">
              <p>ACCOUNT INFORMATION</p>

              <h2>Personal Details</h2>
            </div>

            {editing ? (

              <div className="profile-form">

                <div className="form-group">
                  <label>First Name</label>

                  <input
                    type="text"
                    name="firstName"
                    value={user.firstName}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-group">
                  <label>Last Name</label>

                  <input
                    type="text"
                    name="lastName"
                    value={user.lastName}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-group">
                  <label>Email Address</label>

                  <input
                    type="email"
                    name="email"
                    value={user.email}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-group">
                  <label>Phone Number</label>

                  <input
                    type="tel"
                    name="phone"
                    value={user.phone}
                    onChange={handleChange}
                    placeholder="+27..."
                  />
                </div>

                <button
                  type="button"
                  className="save-profile-btn"
                  onClick={handleSave}
                >
                  Save Changes
                </button>

              </div>

            ) : (

              <div className="profile-details">

                <div className="detail-item">

                  <span className="detail-icon">
                    👤
                  </span>

                  <div>
                    <small>Full Name</small>

                    <strong>
                      {user.firstName} {user.lastName}
                    </strong>
                  </div>

                </div>

                <div className="detail-item">

                  <span className="detail-icon">
                    ✉️
                  </span>

                  <div>
                    <small>Email Address</small>

                    <strong>
                      {user.email || "Not provided"}
                    </strong>
                  </div>

                </div>

                <div className="detail-item">

                  <span className="detail-icon">
                    📱
                  </span>

                  <div>
                    <small>Phone Number</small>

                    <strong>
                      {user.phone || "Not provided"}
                    </strong>
                  </div>

                </div>

              </div>

            )}

          </section>

          {/* =====================================
              ACCOUNT ACTIONS
          ====================================== */}

          <section className="profile-actions">

            <h2>My Account</h2>

            <div className="action-grid">

              <button
                type="button"
                className="account-action"
                onClick={() => navigate("/cart")}
              >

                <span className="action-icon">
                  🛍️
                </span>

                <div>
                  <strong>My Orders</strong>

                  <small>
                    View your shopping cart and orders
                  </small>
                </div>

                <span className="arrow">
                  →
                </span>

              </button>

              <button
                type="button"
                className="account-action"
                onClick={() => navigate("/booking")}
              >

                <span className="action-icon">
                  📅
                </span>

                <div>
                  <strong>My Bookings</strong>

                  <small>
                    Manage your nail appointments
                  </small>
                </div>

                <span className="arrow">
                  →
                </span>

              </button>

            </div>

          </section>

          {/* =====================================
              LOGOUT
          ====================================== */}

          <section className="logout-card">

            <div className="logout-content">

              <div className="logout-icon">
                <span>↪</span>
              </div>

              <div className="logout-info">

                <span className="logout-label">
                  ACCOUNT SECURITY
                </span>

                <h2>
                  Sign out of your account
                </h2>

                <p>
                  When you log out, you'll need to
                  enter your email and password again
                  to access your account.
                </p>

              </div>

            </div>

            <button
              type="button"
              className="logout-button"
              onClick={() => setShowLogout(true)}
            >

              <span>Log Out</span>

              <span className="logout-arrow">
                →
              </span>

            </button>

          </section>

        </div>

      </main>

      {/* =====================================
          LOGOUT CONFIRMATION MODAL
      ====================================== */}

      {showLogout && (

        <div
          className="logout-overlay"
          onClick={() => setShowLogout(false)}
        >

          <div
            className="logout-modal"
            onClick={(e) => e.stopPropagation()}
          >

            <div className="logout-modal-icon">
              👋
            </div>

            <span className="logout-modal-label">
              EMGLOSS NAILS
            </span>

            <h2>
              Ready to leave?
            </h2>

            <p>
              Are you sure you want to log out
              of your EMGloss Nails account?
            </p>

            <div className="logout-modal-buttons">

              <button
                type="button"
                className="cancel-logout-btn"
                onClick={() => setShowLogout(false)}
              >
                Stay Logged In
              </button>

              <button
                type="button"
                className="confirm-logout-btn"
                onClick={handleLogout}
              >
                Yes, Log Me Out
              </button>

            </div>

          </div>

        </div>

      )}

      <Footer />
    </>
  );
}

export default Profile;