import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./Home.css";

function Home() {
  const navigate = useNavigate();

  const products = [
    {
      id: 1,
      name: "Nail Polish",
      category: "Nail Polish",
      price: 85,
      emoji: "💅",
      description: "Beautiful colours for everyday nail styling.",
    },
    {
      id: 2,
      name: "Gel Polish",
      category: "Gel",
      price: 120,
      emoji: "✨",
      description: "Long-lasting gel polish with a beautiful shine.",
    },
    {
      id: 3,
      name: "Acrylic Powder",
      category: "Acrylic",
      price: 180,
      emoji: "💎",
      description: "High-quality acrylic powder for nail extensions.",
    },
    {
      id: 4,
      name: "Acrylic Liquid",
      category: "Acrylic",
      price: 160,
      emoji: "🧴",
      description: "Professional acrylic liquid for nail applications.",
    },
    {
      id: 5,
      name: "Nail Brushes",
      category: "Tools",
      price: 95,
      emoji: "🖌️",
      description: "Professional brushes for detailed nail art.",
    },
    {
      id: 6,
      name: "Nail Decorations",
      category: "Nail Art",
      price: 75,
      emoji: "💖",
      description: "Beautiful decorations to make your nails stand out.",
    },
    {
      id: 7,
      name: "UV/LED Nail Lamp",
      category: "Equipment",
      price: 450,
      emoji: "💡",
      description: "Fast and professional curing lamp for gel nails.",
    },
    {
      id: 8,
      name: "Nail Tips",
      category: "Extensions",
      price: 110,
      emoji: "💅",
      description: "Strong nail tips for beautiful nail extensions.",
    },
  ];

  return (
    <div className="home-page">

      <Navbar />

      {/* HERO */}
      <section className="hero-section">

        <div className="hero-content">

          <p className="hero-small">
            EMGLOSS NAILS
          </p>

          <h1>
            Everything You Need
            <br />
            For Beautiful Nails 💅
          </h1>

          <p className="hero-description">
            Discover quality nail products, tools and accessories
            to create beautiful nails at home or professionally.
          </p>

          <div className="hero-buttons">

            <button
              className="shop-btn"
              onClick={() => navigate("/browse")}
            >
              Shop Collection →
            </button>

            <button
              className="book-btn"
              onClick={() => navigate("/booking")}
            >
              Book Appointment →
            </button>

          </div>

        </div>

        <div className="hero-decoration">
          <div className="hero-circle">
            <span>💅</span>
          </div>
        </div>

      </section>


      {/* CATEGORIES */}
      <section className="categories-section">

        <div className="section-heading">

          <p className="section-small">
            SHOP YOUR FAVOURITES
          </p>

          <h2>
            Shop by Category
          </h2>

          <p>
            Find everything you need to create your perfect nail look.
          </p>

        </div>


        <div className="category-grid">

          <div
            className="category-card"
            onClick={() => navigate("/browse")}
          >
            <span>💅</span>
            <h3>Nail Polish</h3>
            <p>Beautiful colours</p>
          </div>

          <div
            className="category-card"
            onClick={() => navigate("/browse")}
          >
            <span>✨</span>
            <h3>Acrylic</h3>
            <p>Professional products</p>
          </div>

          <div
            className="category-card"
            onClick={() => navigate("/browse")}
          >
            <span>🖌️</span>
            <h3>Nail Art</h3>
            <p>Creative accessories</p>
          </div>

          <div
            className="category-card"
            onClick={() => navigate("/browse")}
          >
            <span>🧰</span>
            <h3>Nail Tools</h3>
            <p>Tools for professionals</p>
          </div>

          <div
            className="category-card"
            onClick={() => navigate("/browse")}
          >
            <span>💎</span>
            <h3>Accessories</h3>
            <p>Make your nails shine</p>
          </div>

        </div>

      </section>


      {/* FEATURED PRODUCTS */}
      <section className="products-section">

        <div className="products-heading">

          <div>
            <p className="section-small">
              OUR COLLECTION
            </p>

            <h2>
              Featured Nail Products
            </h2>

            <p>
              Shop our collection of quality nail products and accessories.
            </p>
          </div>

          <button
            className="view-all-btn"
            onClick={() => navigate("/browse")}
          >
            View All Products →
          </button>

        </div>


        <div className="products-grid">

          {products.map((product) => (

            <div
              className="product-card"
              key={product.id}
            >

              <div
                className="product-image"
                onClick={() =>
                  navigate(`/product/${product.id}`)
                }
              >

                <span className="product-emoji">
                  {product.emoji}
                </span>

                <span className="product-view">
                  View Product →
                </span>

              </div>


              <div className="product-info">

                <p className="product-category">
                  {product.category}
                </p>

                <h3>
                  {product.name}
                </h3>

                <p className="product-description">
                  {product.description}
                </p>

                <div className="product-bottom">

                  <strong>
                    R{product.price}
                  </strong>

                  <button
                    className="add-cart-btn"
                    onClick={() => navigate("/cart")}
                  >
                    Add to Cart
                  </button>

                </div>

              </div>

            </div>

          ))}

        </div>

      </section>


      {/* WHY SHOP WITH US */}
      <section className="why-section">

        <p className="section-small">
          WHY EMGLOSS NAILS?
        </p>

        <h2>
          Everything For Your Nail Journey
        </h2>


        <div className="why-grid">

          <div className="why-card">

            <span>💎</span>

            <h3>
              Quality Products
            </h3>

            <p>
              We provide quality products for beautiful and
              professional-looking nails.
            </p>

          </div>


          <div className="why-card">

            <span>🚚</span>

            <h3>
              Easy Shopping
            </h3>

            <p>
              Find your favourite nail products easily and
              shop from the comfort of your home.
            </p>

          </div>


          <div className="why-card">

            <span>💖</span>

            <h3>
              Made For Nail Lovers
            </h3>

            <p>
              Everything you need to create your own
              beautiful nail designs.
            </p>

          </div>

        </div>

      </section>


      <Footer />

    </div>
  );
}

export default Home;