import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./Signup.css";

function Signup() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (
      !formData.firstName ||
      !formData.lastName ||
      !formData.email ||
      !formData.password ||
      !formData.confirmPassword
    ) {
      setError("Please fill in all fields.");
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    try {
      setLoading(true);

      const response = await fetch("http://localhost:3001/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          password: formData.password,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.error || "Signup failed.");
        return;
      }

      alert("Account created successfully!");
      navigate("/login");

    } catch (error) {
      console.error("Signup error:", error);
      setError("Unable to connect to the server.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="signup-page">

      {/* LEFT SIDE - EMGLOSS ILLUSTRATION */}
      <div className="signup-illustration">
        <div className="illustration-content">

          <h1>EMgloss Nails 💅</h1>

          <p className="illustration-text">
            Style yourself differently.
          </p>

          {/* Cute Nail SVG */}
          <svg
            className="nail-svg"
            viewBox="0 0 300 300"
            aria-hidden="true"
          >

            {/* Soft nude blob */}
            <path
              d="M150 20
              C230 20 280 80 280 150
              C280 220 230 280 150 280
              C70 280 20 220 20 150
              C20 80 70 20 150 20 Z"
              fill="url(#nudeGradient)"
              filter="url(#shadow)"
            />

            {/* Hand */}
            <g transform="translate(90, 120)">

              <ellipse
                cx="60"
                cy="80"
                rx="45"
                ry="55"
                fill="#f4d7c9"
              />

              <ellipse
                cx="30"
                cy="50"
                rx="12"
                ry="35"
                fill="#f4d7c9"
                transform="rotate(-20 30 50)"
              />

              <ellipse
                cx="50"
                cy="40"
                rx="12"
                ry="40"
                fill="#f4d7c9"
              />

              <ellipse
                cx="70"
                cy="45"
                rx="12"
                ry="38"
                fill="#f4d7c9"
                transform="rotate(10 70 45)"
              />

              <ellipse
                cx="90"
                cy="55"
                rx="12"
                ry="33"
                fill="#f4d7c9"
                transform="rotate(25 90 55)"
              />

              {/* Pink nails */}
              <ellipse
                cx="30"
                cy="20"
                rx="10"
                ry="15"
                fill="url(#nailPink)"
              />

              <ellipse
                cx="50"
                cy="10"
                rx="10"
                ry="15"
                fill="url(#nailPink)"
              />

              <ellipse
                cx="70"
                cy="15"
                rx="10"
                ry="15"
                fill="url(#nailPink)"
              />

              <ellipse
                cx="90"
                cy="25"
                rx="10"
                ry="15"
                fill="url(#nailPink)"
              />

              {/* Nail shine */}
              <ellipse
                cx="47"
                cy="5"
                rx="3"
                ry="5"
                fill="white"
                opacity="0.7"
              />

              <ellipse
                cx="67"
                cy="10"
                rx="3"
                ry="5"
                fill="white"
                opacity="0.7"
              />

            </g>

            {/* Sparkles */}
            <circle
              cx="60"
              cy="60"
              r="3"
              fill="#ffd6e8"
            />

            <circle
              cx="240"
              cy="80"
              r="2"
              fill="#ffd6e8"
            />

            <circle
              cx="200"
              cy="230"
              r="3"
              fill="#ffd6e8"
            />

            <path
              d="M250 200
              L252 206
              L258 208
              L252 210
              L250 216
              L248 210
              L242 208
              L248 206 Z"
              fill="#ffd6e8"
            />

            {/* Gradients */}
            <defs>

              <linearGradient
                id="nudeGradient"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="100%"
              >
                <stop
                  offset="0%"
                  stopColor="#f5e9e3"
                />

                <stop
                  offset="100%"
                  stopColor="#e8d7cf"
                />
              </linearGradient>

              <linearGradient
                id="nailPink"
                x1="0%"
                y1="0%"
                x2="0%"
                y2="100%"
              >
                <stop
                  offset="0%"
                  stopColor="#f8b4d9"
                />

                <stop
                  offset="100%"
                  stopColor="#e58ec8"
                />
              </linearGradient>

              <filter
                id="shadow"
                x="-20%"
                y="-20%"
                width="140%"
                height="140%"
              >
                <feDropShadow
                  dx="0"
                  dy="10"
                  stdDeviation="15"
                  floodColor="#000000"
                  floodOpacity="0.1"
                />
              </filter>

            </defs>

          </svg>

          <p className="welcome-text">
            Create your account and discover beautiful nail styles,
            products and appointments.
          </p>

        </div>
      </div>

      {/* RIGHT SIDE - SIGNUP FORM */}
      <div className="signup-container">

        <div className="signup-card">

          <h2>Create Account</h2>

          <p className="signup-subtitle">
            Join the EMgloss Nails family
          </p>

          {error && (
            <div className="signup-error">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit}>

            <div className="form-group">
              <label>First Name</label>

              <input
                type="text"
                name="firstName"
                placeholder="Enter your first name"
                value={formData.firstName}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label>Last Name</label>

              <input
                type="text"
                name="lastName"
                placeholder="Enter your last name"
                value={formData.lastName}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label>Email</label>

              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label>Password</label>

              <input
                type="password"
                name="password"
                placeholder="Create a password"
                value={formData.password}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label>Confirm Password</label>

              <input
                type="password"
                name="confirmPassword"
                placeholder="Confirm your password"
                value={formData.confirmPassword}
                onChange={handleChange}
              />
            </div>

            <button
              type="submit"
              className="signup-button"
              disabled={loading}
            >
              {loading
                ? "Creating Account..."
                : "Create Account"}
            </button>

          </form>

          <p className="login-link">
            Already have an account?{" "}
            <Link to="/login">Login</Link>
          </p>

        </div>

      </div>

    </div>
  );
}

export default Signup;