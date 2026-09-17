import React from "react";
import { useNavigate } from "react-router-dom";

function Logout({ setAuth }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Remove saved login information
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    // Update authentication state
    if (setAuth) {
      setAuth(false);
    }

    // Redirect to login page
    navigate("/Login");
  };

  const handleCancel = () => {
    // Return to the home page
    navigate("/");
  };

  return (
    <div style={styles.page}>
      <div style={styles.card}>

        <div style={styles.icon}>💅</div>

        <h2 style={styles.title}>
          EMGloss Nails
        </h2>

        <h3 style={styles.subtitle}>
          Are you sure you want to log out?
        </h3>

        <p style={styles.text}>
          You’ll need to sign in again to access your
          bookings, orders, and account.
        </p>

        <div style={styles.btnGroup}>

          <button
            type="button"
            style={styles.btnCancel}
            onClick={handleCancel}
          >
            Cancel
          </button>

          <button
            type="button"
            style={styles.btnLogout}
            onClick={handleLogout}
          >
            Yes, Log Out
          </button>

        </div>

      </div>
    </div>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    background:
      "linear-gradient(135deg, #fff1f5 0%, #fff8fa 50%, #ffe1e9 100%)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "20px",
    fontFamily:
      "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
  },

  card: {
    background: "#ffffff",
    padding: "40px 30px",
    borderRadius: "20px",
    boxShadow:
      "0 10px 40px rgba(231, 61, 125, 0.15)",
    width: "100%",
    maxWidth: "420px",
    textAlign: "center",
  },

  icon: {
    fontSize: "3rem",
    marginBottom: "10px",
  },

  title: {
    color: "#e73d7d",
    fontSize: "1.8rem",
    fontWeight: "700",
    marginBottom: "8px",
  },

  subtitle: {
    color: "#333",
    fontSize: "1.2rem",
    marginBottom: "10px",
  },

  text: {
    color: "#777",
    fontSize: "0.95rem",
    marginBottom: "25px",
    lineHeight: "1.5",
  },

  btnGroup: {
    display: "flex",
    gap: "12px",
    justifyContent: "center",
  },

  btnCancel: {
    padding: "12px 20px",
    borderRadius: "10px",
    border: "2px solid #e73d7d",
    background: "#ffffff",
    color: "#e73d7d",
    fontWeight: "600",
    cursor: "pointer",
    flex: 1,
  },

  btnLogout: {
    padding: "12px 20px",
    borderRadius: "10px",
    border: "none",
    background: "#e73d7d",
    color: "#ffffff",
    fontWeight: "600",
    cursor: "pointer",
    flex: 1,
  },
};

export default Logout;