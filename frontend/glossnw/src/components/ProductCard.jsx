import React from "react";
import { useCart } from "../components/CartContext";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../App.css";

function ProductDetails() {
  const { addToCart } = useCart();

  const product = {
    id: 1,
    name: "Acrylic Powder",
    price: 180,
    image: "https://d2j6dbq0eux0bg.cloudfront.net/images/11664180/1665058629.jpg",
  };

  const handleAddToCart = () => {
    addToCart(product);
    alert("Acrylic Powder has been added to your cart!");
  };

  return (
    <>
      <Navbar />

      <section className="details">

        <div className="details-image">
          <img
            src={product.image}
            alt={product.name}
          />
        </div>

        <div className="details-info">

          <p className="product-category">
            EMGLOSS NAILS
          </p>

          <h1>{product.name}</h1>

          <h2>R{product.price}</h2>

          <p>
            Premium acrylic powder designed for beautiful,
            strong, long-lasting nails. Perfect for creating
            professional-looking acrylic nail designs at home
            or in the salon.
          </p>

          <div className="product-rating">
            ⭐⭐⭐⭐⭐
            <span> (125 Reviews)</span>
          </div>

          <button
            type="button"
            className="shop-btn"
            onClick={handleAddToCart}
          >
            🛒 Add to Cart
          </button>

        </div>

      </section>

      <Footer />
    </>
  );
}

export default ProductDetails;