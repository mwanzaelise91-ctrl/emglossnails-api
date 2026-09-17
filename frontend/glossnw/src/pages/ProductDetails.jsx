import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useCart } from "../components/CartContext";
import "./ProductDetails.css";

function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();

  const [quantity, setQuantity] = useState(1);
  const [addedMessage, setAddedMessage] = useState(false);

  // =========================================
  // PRODUCTS
  // =========================================

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
        "https://placehold.co/600x600/fce4ec/9c4560?text=Coffin+Nail+Tips",
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
        "Elegant almond-shaped tips for a soft, feminine and sophisticated look.",
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
        "Classic square nail tips suitable for everyday manicures and professional sets.",
    },

    {
      id: 6,
      name: "Long Coffin Nail Tips",
      category: "Nail Tips",
      price: 85,
      image:
        "https://placehold.co/600x600/fce4ec/9c4560?text=Long+Coffin+Tips",
      description:
        "Extra-long coffin tips for creating glamorous and statement nail designs.",
    },

    {
      id: 7,
      name: "Short Almond Nail Tips",
      category: "Nail Tips",
      price: 70,
      image:
        "https://placehold.co/600x600/fce4ec/9c4560?text=Short+Almond+Tips",
      description:
        "Short almond tips offering a natural appearance with an elegant shape.",
    },

    {
      id: 8,
      name: "French Tip Nail Extensions",
      category: "Nail Tips",
      price: 90,
      image:
        "https://placehold.co/600x600/fce4ec/9c4560?text=French+Tips",
      description:
        "Ready-to-style French nail extensions for a clean and timeless manicure.",
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
        "Professional liquid monomer designed for strong and beautiful acrylic applications.",
    },

    {
      id: 11,
      name: "UV Gel Polish - Velvet Rose",
      category: "Polish",
      price: 120,
      image:
        "https://placehold.co/600x600/fce4ec/9c4560?text=Velvet+Rose",
      description:
        "Highly pigmented UV/LED gel polish with a beautiful high-gloss finish.",
    },

    {
      id: 12,
      name: "Glitter Gel Polish Set",
      category: "Polish",
      price: 450,
      image:
        "https://placehold.co/600x600/fce4ec/9c4560?text=Glitter+Gel+Set",
      description:
        "Sparkling gel polish colours for beautiful salon-quality nail finishes.",
    },

    {
      id: 13,
      name: "Kolinsky Acrylic Nail Brush #8",
      category: "Tools",
      price: 195,
      image:
        "https://placehold.co/600x600/fce4ec/9c4560?text=Acrylic+Brush",
      description:
        "Professional acrylic brush for precise liquid and powder application.",
    },

    {
      id: 14,
      name: "Fine Detailer Nail Art Brush Set",
      category: "Tools",
      price: 150,
      image:
        "https://placehold.co/600x600/fce4ec/9c4560?text=Nail+Art+Brushes",
      description:
        "Ultra-fine brushes for detailed nail art and precision line work.",
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
        "Rechargeable electric nail drill for filing, shaping and product removal.",
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
        "Hydrating cuticle treatment for maintaining healthy-looking nails.",
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
  ];

  // =========================================
  // FIND PRODUCT
  // =========================================

  const product = products.find(
    (item) => item.id === Number(id)
  );

  // =========================================
  // PRODUCT NOT FOUND
  // =========================================

  if (!product) {
    return (
      <>
        <Navbar />

        <main className="product-not-found">

          <div className="not-found-icon">
            💅
          </div>

          <h2>
            Product Not Found
          </h2>

          <p>
            Sorry, we couldn't find the product you're looking for.
          </p>

          <button
            onClick={() => navigate("/browse")}
          >
            ← Back to Products
          </button>

        </main>

        <Footer />
      </>
    );
  }

  // =========================================
  // ADD TO CART
  // =========================================

  const handleAddToCart = () => {
    addToCart(product, quantity);

    setAddedMessage(true);

    setTimeout(() => {
      setAddedMessage(false);
    }, 3000);
  };

  // =========================================
  // PAGE
  // =========================================

  return (
    <>
      <Navbar />

      <main className="product-details-page">

        {/* BACK BUTTON */}

        <button
          className="back-products"
          onClick={() => navigate("/browse")}
        >
          ← Back to Products
        </button>


        {/* PRODUCT */}

        <section className="product-details-card">

          {/* IMAGE */}

          <div className="product-details-image">

            <img
              src={product.image}
              alt={product.name}
            />

          </div>


          {/* INFORMATION */}

          <div className="product-details-info">

            <p className="product-details-category">
              {product.category}
            </p>

            <h1>
              {product.name}
            </h1>

            <p className="product-details-price">
              R{product.price}
            </p>

            <p className="product-details-description">
              {product.description}
            </p>


            {/* AVAILABILITY */}

            <div className="product-availability">
              <span className="availability-dot"></span>
              In Stock
            </div>


            {/* QUANTITY */}

            <div className="quantity-section">

              <label>
                Quantity
              </label>

              <div className="quantity-controls">

                <button
                  type="button"
                  onClick={() =>
                    setQuantity((current) =>
                      Math.max(1, current - 1)
                    )
                  }
                >
                  −
                </button>

                <span>
                  {quantity}
                </span>

                <button
                  type="button"
                  onClick={() =>
                    setQuantity((current) =>
                      current + 1
                    )
                  }
                >
                  +
                </button>

              </div>

            </div>


            {/* ADD TO CART */}

            <button
              className="product-add-btn"
              onClick={handleAddToCart}
            >
              Add to Cart 🛒
            </button>


            {/* SUCCESS MESSAGE */}

            {addedMessage && (
              <div className="product-success">
                ✓ {product.name} added to your cart!
              </div>
            )}


            {/* EXTRA INFO */}

            <div className="product-extra-info">

              <div>
                💎 <strong>Quality</strong>
                <span>Quality products for beautiful nails.</span>
              </div>

              <div>
                📦 <strong>Easy Shopping</strong>
                <span>Shop your favourite nail products online.</span>
              </div>

              <div>
                💖 <strong>EMGLOSS Nails</strong>
                <span>Style yourself differently.</span>
              </div>

            </div>

          </div>

        </section>


        {/* BOTTOM */}

        <section className="product-bottom-section">

          <p>
            LOVE THIS PRODUCT?
          </p>

          <h2>
            Find more products for your nail journey.
          </h2>

          <button
            onClick={() => navigate("/browse")}
          >
            Continue Shopping →
          </button>

        </section>

      </main>

      <Footer />
    </>
  );
}

export default ProductDetails;