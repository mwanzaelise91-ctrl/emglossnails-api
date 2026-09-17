import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

function Login({ setAuth }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("");
    setLoading(true);

    try {
      const response = await fetch("http://localhost:3001/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        localStorage.setItem(
          "token",
          data.token || btoa(`${email}:${password}`)
        );

        localStorage.setItem(
          "user",
          JSON.stringify(data.user || { email })
        );

        if (setAuth) {
          setAuth(true);
        }

        navigate("/home");
      } else {
        setError(data.error || "Invalid email or password.");
      }

    } catch (error) {
      console.error("Login error:", error);
      setError("Unable to connect to the server. Please try again.");

    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-page">

      {/* LEFT IMAGE SECTION */}
      <div className="login-image-section">

        <div className="login-image-overlay">

          <p className="login-brand">
            EMGLOSS NAILS
          </p>

          <h1>
            Beautiful Nails.
            <br />
            Beautiful You. 💅
          </h1>

          <p>
            Discover beautiful nail products, professional services
            and everything you need for your perfect nail journey.
          </p>

        </div>

      </div>

      {/* RIGHT LOGIN SECTION */}
      <div className="login-form-section">

        <div className="login-card">

          <div className="login-logo">
            💅
          </div>

          <p className="login-small">
            WELCOME BACK
          </p>

          <h2>
            Sign in to EMGloss
          </h2>

          <p className="login-description">
            Sign in to access your account, bookings and orders.
          </p>

          {error && (
            <div className="login-error">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit}>

            {/* EMAIL */}
            <div className="login-field">

              <label>
                Email Address
              </label>

              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />

            </div>

            {/* PASSWORD */}
            <div className="login-field">

              <label>
                Password
              </label>

              <div className="password-wrapper">

                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />

                <button
                  type="button"
                  className="show-password"
                  onClick={() =>
                    setShowPassword(!showPassword)
                  }
                >
                  {showPassword ? "Hide" : "Show"}
                </button>

              </div>

            </div>

            {/* LOGIN BUTTON */}
            <button
              type="submit"
              className="login-button"
              disabled={loading}
            >
              {loading ? "Signing In..." : "Sign In"}

              {!loading && (
                <span>→</span>
              )}

            </button>

          </form>

          <div className="login-divider">
            <span>New to EMGloss?</span>
          </div>

          <button
            className="signup-button"
            onClick={() => navigate("/signup")}
          >
            Create an Account
          </button>

          <button
            className="back-home"
            onClick={() => navigate("/")}
          >
            ← Back to Home
          </button>

        </div>

      </div>

    </div>
  );
}

export default Login;