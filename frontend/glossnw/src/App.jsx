import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

// ================================
// Pages
// ================================
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Browse from "./pages/Browse";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/Cart";
import Booking from "./pages/Booking";
import Checking from "./pages/Checking";
import Profile from "./pages/Profile";
import About from "./pages/About";
import Orders from "./pages/Orders";

// ================================
// Components
// ================================
import ProtectedRoute from "./components/ProtectedRoute";
import { CartProvider } from "./components/CartContext";

// ================================
// Backend API
// ================================
export const API_BASE_URL = "http://localhost:3001";

function App() {
  const [auth, setAuth] = React.useState(
    !!localStorage.getItem("token")
  );

  return (
    <CartProvider>
      <Router>
        <Routes>

          {/* ================================
              LOGIN / FIRST PAGE
          ================================= */}
          <Route
            path="/"
            element={
              auth ? (
                <Navigate to="/home" replace />
              ) : (
                <Login setAuth={setAuth} />
              )
            }
          />

          {/* ================================
              SIGN UP
          ================================= */}
          <Route
            path="/signup"
            element={<Signup />}
          />

          {/* ================================
              LOGIN
          ================================= */}
          <Route
            path="/login"
            element={<Login setAuth={setAuth} />}
          />

          {/* ================================
              HOME
          ================================= */}
          <Route
            path="/home"
            element={
              <ProtectedRoute auth={auth}>
                <Home />
              </ProtectedRoute>
            }
          />

          {/* ================================
              ABOUT
          ================================= */}
          <Route
            path="/about"
            element={
              <ProtectedRoute auth={auth}>
                <About />
              </ProtectedRoute>
            }
          />

          {/* ================================
              BROWSE
          ================================= */}
          <Route
            path="/browse"
            element={
              <ProtectedRoute auth={auth}>
                <Browse />
              </ProtectedRoute>
            }
          />

          {/* ================================
              PRODUCT DETAILS
          ================================= */}
          <Route
            path="/product/:id"
            element={
              <ProtectedRoute auth={auth}>
                <ProductDetails />
              </ProtectedRoute>
            }
          />

          {/* ================================
              CART
          ================================= */}
          <Route
            path="/cart"
            element={
              <ProtectedRoute auth={auth}>
                <Cart />
              </ProtectedRoute>
            }
          />

          {/* ================================
              BOOKING
          ================================= */}
          <Route
            path="/booking"
            element={
              <ProtectedRoute auth={auth}>
                <Booking />
              </ProtectedRoute>
            }
          />

          {/* ================================
              CHECKOUT
          ================================= */}
          <Route
            path="/checkout"
            element={
              <ProtectedRoute auth={auth}>
                <Checking />
              </ProtectedRoute>
            }
          />

          {/* ================================
              ORDERS
          ================================= */}
          <Route
            path="/orders"
            element={
              <ProtectedRoute auth={auth}>
                <Orders />
              </ProtectedRoute>
            }
          />

          {/* ================================
              PROFILE
          ================================= */}
          <Route
            path="/profile"
            element={
              <ProtectedRoute auth={auth}>
                <Profile setAuth={setAuth} />
              </ProtectedRoute>
            }
          />

          {/* ================================
              UNKNOWN URL
          ================================= */}
          <Route
            path="*"
            element={<Navigate to="/" replace />}
          />

        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;