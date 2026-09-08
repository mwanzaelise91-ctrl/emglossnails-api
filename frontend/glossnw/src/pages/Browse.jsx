import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useCart } from "../components/CartContext";
import "./Browse.css";

function Browse() {
  const { addToCart } = useCart();
  const navigate = useNavigate();

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [message, setMessage] = useState("");

  const products = [
    {
      id: 1,
      name: "Classic Clear Nail Tips",
      category: "Nail Tips",
      price: 65,
      image:
        "https://placehold.co/600x600/fce4ec/9c4560?text=Clear+Nail+Tips",
      description:
        "Clear professional nail tips perfect for acrylic, gel and custom nail extensions.",
    },
    {
      id: 2,
      name: "Coffin Nail Tips",
      category: "Nail Tips",
      price: 75,
      image:
  "https://placehold.co/600x600/fce4ec/9c4560?text=Clear+Nail+Tips",
      description:
        "Stylish coffin-shaped nail tips designed for a modern salon-quality nail set.",
    },
    {
      id: 3,
      name: "Almond Nail Tips",
      category: "Nail Tips",
      price: 75,
      image:
        "https://placehold.co/600x600/fce4ec/9c4560?text=Almond+Nail+Tips",
      description:
        "Elegant almond-shaped tips for a soft and sophisticated look.",
    },
    {
      id: 4,
      name: "Stiletto Nail Tips",
      category: "Nail Tips",
      price: 80,
      image:
        "https://placehold.co/600x600/fce4ec/9c4560?text=Stiletto+Tips",
      description:
        "Long pointed stiletto tips for bold and dramatic nail designs.",
    },
    {
      id: 5,
      name: "Square Nail Tips",
      category: "Nail Tips",
      price: 70,
      image:
        "https://placehold.co/600x600/fce4ec/9c4560?text=Square+Nail+Tips",
      description:
        "Classic square nail tips suitable for everyday manicures.",
    },
    {
      id: 6,
      name: "Long Coffin Nail Tips",
      category: "Nail Tips",
      price: 85,
      image:
        "https://placehold.co/600x600/fce4ec/9c4560?text=Long+Coffin+Tips",
      description:
        "Extra-long coffin tips for glamorous statement nail designs.",
    },
    {
      id: 7,
      name: "Short Almond Nail Tips",
      category: "Nail Tips",
      price: 70,
      image:
        "https://placehold.co/600x600/fce4ec/9c4560?text=Short+Almond+Tips",
      description:
        "Short almond tips offering a natural and elegant appearance.",
    },
    {
      id: 8,
      name: "French Tip Nail Extensions",
      category: "Nail Tips",
      price: 90,
      image:
        "https://placehold.co/600x600/fce4ec/9c4560?text=French+Tips",
      description:
        "Ready-to-style French nail extensions for a clean manicure.",
    },

    {
      id: 9,
      name: "Clear Acrylic Powder 100g",
      category: "Acrylic",
      price: 180,
      image:
        "https://placehold.co/600x600/fce4ec/9c4560?text=Acrylic+Powder",
      description:
        "Smooth sculpting acrylic powder for durable nail extensions.",
    },
    {
      id: 10,
      name: "MMA-Free Liquid Monomer 250ml",
      category: "Acrylic",
      price: 240,
      image:
        "https://placehold.co/600x600/fce4ec/9c4560?text=Liquid+Monomer",
      description:
        "Professional liquid monomer for strong acrylic applications.",
    },

    {
      id: 11,
      name: "UV Gel Polish - Velvet Rose",
      category: "Polish",
      price: 120,
      image:
        "https://placehold.co/600x600/fce4ec/9c4560?text=Velvet+Rose",
      description:
        "Highly pigmented UV/LED gel polish with a high-gloss finish.",
    },
    {
      id: 12,
      name: "Glitter Gel Polish Set",
      category: "Polish",
      price: 450,
      image:
        "https://placehold.co/600x600/fce4ec/9c4560?text=Glitter+Gel+Set",
      description:
        "Sparkling gel polish colours for beautiful nail finishes.",
    },

    {
      id: 13,
      name: "Kolinsky Acrylic Nail Brush #8",
      category: "Tools",
      price: 195,
      image:
        "https://placehold.co/600x600/fce4ec/9c4560?text=Acrylic+Brush",
      description:
        "Professional acrylic brush for precise application.",
    },
    {
      id: 14,
      name: "Fine Detailer Nail Art Brush Set",
      category: "Tools",
      price: 150,
      image:
        "https://placehold.co/600x600/fce4ec/9c4560?text=Nail+Art+Brushes",
      description:
        "Ultra-fine brushes for detailed nail art.",
    },
    {
      id: 15,
      name: "Professional Grit Nail Files",
      category: "Tools",
      price: 65,
      image:
        "https://placehold.co/600x600/fce4ec/9c4560?text=Nail+Files",
      description:
        "Durable nail files for shaping acrylic and natural nails.",
    },

    {
      id: 16,
      name: "48W Smart LED/UV Nail Lamp",
      category: "Equipment",
      price: 450,
      image:
        "https://placehold.co/600x600/fce4ec/9c4560?text=UV+Nail+Lamp",
      description:
        "LED/UV curing lamp with automatic sensor and timer settings.",
    },
    {
      id: 17,
      name: "Professional Electric Nail Drill",
      category: "Equipment",
      price: 680,
      image:
        "https://placehold.co/600x600/fce4ec/9c4560?text=Nail+Drill",
      description:
        "Electric nail drill for filing, shaping and product removal.",
    },

    {
      id: 18,
      name: "Rubber Base & No-Wipe Top Coat",
      category: "Care",
      price: 210,
      image:
        "https://placehold.co/600x600/fce4ec/9c4560?text=Base+Top+Coat",
      description:
        "Strengthening base coat and high-shine top coat combination.",
    },
    {
      id: 19,
      name: "Nourishing Cuticle Oil Pen",
      category: "Care",
      price: 80,
      image:
        "https://placehold.co/600x600/fce4ec/9c4560?text=Cuticle+Oil",
      description:
        "Hydrating cuticle treatment for healthy-looking nails.",
    },
    {
      id: 20,
      name: "Acid-Free Primer & Dehydrator Kit",
      category: "Care",
      price: 160,
      image:
        "https://placehold.co/600x600/fce4ec/9c4560?text=Primer+Kit",
      description:
        "Essential nail preparation duo for helping prevent lifting.",
    },

    {
      id: 21,
      name: "Crystal Rhinestone Set",
      category: "Nail Decorations",
      price: 95,
      image:
        "https://placehold.co/600x600/fce4ec/9c4560?text=Crystal+Rhinestones",
      description:
        "Sparkling crystal rhinestones for glamorous nail designs.",
    },
    {
      id: 22,
      name: "3D Nail Charms",
      category: "Nail Decorations",
      price: 85,
      image:
        "https://placehold.co/600x600/fce4ec/9c4560?text=3D+Nail+Charms",
      description:
        "Cute 3D nail charms for stylish manicures.",
    },
    {
      id: 23,
      name: "Gold Nail Flakes",
      category: "Nail Decorations",
      price: 70,
      image:
        "https://placehold.co/600x600/fce4ec/9c4560?text=Gold+Nail+Flakes",
      description:
        "Beautiful gold flakes for luxury nail designs.",
    },
    {
      id: 24,
      name: "Silver Nail Flakes",
      category: "Nail Decorations",
      price: 70,
      image:
        "https://placehold.co/600x600/fce4ec/9c4560?text=Silver+Nail+Flakes",
      description:
        "Shimmering silver flakes for elegant nail art.",
    },
    {
      id: 25,
      name: "Pearl Nail Decorations",
      category: "Nail Decorations",
      price: 90,
      image:
        "https://placehold.co/600x600/fce4ec/9c4560?text=Pearl+Decorations",
      description:
        "Elegant mini pearls for soft and feminine nail designs.",
    },
    {
      id: 26,
      name: "Nail Art Glitter Set",
      category: "Nail Decorations",
      price: 120,
      image:
        "https://placehold.co/600x600/fce4ec/9c4560?text=Glitter+Set",
      description:
        "Colourful glitter collection for adding sparkle to nail designs.",
    },
    {
      id: 27,
      name: "Butterfly Nail Charms",
      category: "Nail Decorations",
      price: 85,
      image:
        "https://placehold.co/600x600/fce4ec/9c4560?text=Butterfly+Charms",
      description:
        "Pretty butterfly charms for cute nail designs.",
    },
    {
      id: 28,
      name: "Heart Nail Charms",
      category: "Nail Decorations",
      price: 80,
      image:
        "https://placehold.co/600x600/fce4ec/9c4560?text=Heart+Charms",
      description:
        "Cute heart-shaped decorations for romantic nail art.",
    },
    {
      id: 29,
      name: "French Nail Art Stickers",
      category: "Nail Decorations",
      price: 65,
      image:
        "https://placehold.co/600x600/fce4ec/9c4560?text=French+Stickers",
      description:
        "Easy-to-use French nail stickers.",
    },
    {
      id: 30,
      name: "Mixed Nail Art Decoration Box",
      category: "Nail Decorations",
      price: 150,
      image:
        "https://placehold.co/600x600/fce4ec/9c4560?text=Decoration+Box",
      description:
        "A mixed collection of rhinestones, charms, pearls and glitter.",
    },
  ];

  const categories = [
    "All",
    "Nail Tips",
    "Polish",
    "Acrylic",
    "Tools",
    "Equipment",
    "Care",
    "Nail Decorations",
  ];

  const filteredProducts = products.filter((product) => {
    const searchText = search.toLowerCase().trim();

    const matchesSearch =
      product.name.toLowerCase().includes(searchText) ||
      product.category.toLowerCase().includes(searchText);

    const matchesCategory =
      category === "All" || product.category === category;

    return matchesSearch && matchesCategory;
  });

  const handleAddToCart = (product) => {
    addToCart(product);

    setMessage(`${product.name} added to your cart!`);

    setTimeout(() => {
      setMessage("");
    }, 2500);
  };

  return (
    <>
      <Navbar />

      <main className="browse-page">

        {/* HERO */}
        <section className="browse-hero">
          <div className="browse-hero-content">
            <p className="browse-label">
              EMGLOSS NAILS COLLECTION
            </p>

            <h1>
              Everything You Need
              <br />
              For Beautiful Nails
            </h1>

            <p>
              Discover premium nail products, professional tools
              and beauty essentials made for your perfect manicure.
            </p>
          </div>
        </section>

        {/* SHOP */}
        <section className="shop-section">

          <div className="shop-heading">
            <div>
              <p className="section-small">
                OUR COLLECTION
              </p>

              <h2>
                Shop Nail Essentials
              </h2>

              <p>
                Find everything you need to create beautiful nails
                at home or in your salon.
              </p>
            </div>

            <div className="product-count">
              {filteredProducts.length} Products
            </div>
          </div>

          {/* SUCCESS MESSAGE */}
          {message && (
            <div className="cart-message">
              ✓ {message}
            </div>
          )}

          {/* SEARCH AND FILTER */}
          <div className="shop-controls">

            <div className="search-wrapper">
              <span>⌕</span>

              <input
                type="text"
                placeholder="Search nail products..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />

              {search && (
                <button
                  type="button"
                  className="clear-search"
                  onClick={() => setSearch("")}
                >
                  ×
                </button>
              )}
            </div>

            <div className="category-buttons">
              {categories.map((item) => (
                <button
                  type="button"
                  key={item}
                  className={
                    category === item
                      ? "category-button active"
                      : "category-button"
                  }
                  onClick={() => setCategory(item)}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          {/* PRODUCTS */}
          {filteredProducts.length > 0 ? (
            <div className="browse-product-grid">

              {filteredProducts.map((product) => (
                <article
                  className="browse-product-card"
                  key={product.id}
                >

                  {/* IMAGE */}
                  <div className="browse-product-image">

                    <img
                      src={product.image}
                      alt={product.name}
                    />

                    <span className="product-tag">
                      {product.category}
                    </span>
                  </div>

                  {/* PRODUCT INFO */}
                  <div className="browse-product-info">

                    <p className="browse-product-category">
                      {product.category}
                    </p>

                    <h3>
                      {product.name}
                    </h3>

                    <p className="browse-description">
                      {product.description}
                    </p>

                    <div className="browse-product-bottom">

                      <strong>
                        R{product.price}
                      </strong>

                      <button
                        type="button"
                        className="browse-add-btn"
                        onClick={() =>
                          handleAddToCart(product)
                        }
                      >
                        + Add to Cart
                      </button>
                    </div>

                    {/* VIEW DETAILS */}
                    <button
                      type="button"
                      className="view-details-btn"
                      onClick={() =>
                        navigate(`/products/${product.id}`)
                      }
                    >
                      View Details
                    </button>

                  </div>
                </article>
              ))}

            </div>
          ) : (
            <div className="no-products">

              <div className="no-products-icon">
                🔍
              </div>

              <h2>
                No products found
              </h2>

              <p>
                Try searching for another product or category.
              </p>

              <button
                type="button"
                onClick={() => {
                  setSearch("");
                  setCategory("All");
                }}
              >
                View All Products
              </button>

            </div>
          )}
        </section>

        {/* BOTTOM CTA */}
        <section className="browse-cta">

          <div>
            <p>
              NEED HELP CHOOSING?
            </p>

            <h2>
              Not sure what you need?
            </h2>

            <span>
              Book an appointment with EMGloss Nails and let us
              help you find the perfect products for your nails.
            </span>
          </div>

          <Link to="/booking">
            <button type="button">
              Book Appointment →
            </button>
          </Link>

        </section>

      </main>

      <Footer />
    </>
  );
}

export default Browse;