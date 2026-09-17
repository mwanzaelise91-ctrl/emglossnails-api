import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";
import { useCart } from "../components/CartContext";
import "../Cart.css";

function Cart() {
  const navigate = useNavigate();

  const {
    cart,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
    clearCart,
    cartTotal,
    cartCount,
  } = useCart();

  // =========================================
  // GO TO CHECKOUT
  // =========================================

  const handleCheckout = () => {
    if (cart.length === 0) {
      return;
    }

    navigate("/checkout");
  };

  return (
    <>
      <Navbar />

      <main className="cart-page">

        {/* =========================================
            HEADER
        ========================================= */}

        <section className="cart-header">

          <p>YOUR SHOPPING BAG</p>

          <h1>
            Shopping Cart 🛍️
          </h1>

          <span>
            {cartCount}{" "}
            {cartCount === 1 ? "item" : "items"}
          </span>

        </section>


        {/* =========================================
            EMPTY CART
        ========================================= */}

        {cart.length === 0 ? (

          <section className="empty-cart">

            <div className="empty-cart-icon">
              🛍️
            </div>

            <h2>
              Your cart is empty
            </h2>

            <p>
              You haven't added any nail products yet.
            </p>

            <button
              type="button"
              className="continue-shopping"
              onClick={() => navigate("/browse")}
            >
              Start Shopping →
            </button>

          </section>

        ) : (

          /* =========================================
             CART WITH PRODUCTS
          ========================================= */

          <section className="cart-container">

            {/* =====================================
                CART PRODUCTS
            ===================================== */}

            <div className="cart-items">

              {cart.map((item) => (

                <article
                  className="cart-item"
                  key={item.id}
                >

                  {/* PRODUCT IMAGE */}

                  <div className="cart-product-image">

                    <img
                      src={
                        item.image ||
                        "https://placehold.co/200x200/fce4ec/9c4560?text=Nails"
                      }
                      alt={item.name}
                    />

                  </div>


                  {/* PRODUCT INFORMATION */}

                  <div className="cart-product-info">

                    <p className="cart-category">
                      {item.category || "Nail Product"}
                    </p>

                    <h3>
                      {item.name}
                    </h3>

                    <p className="cart-price">
                      R{Number(item.price || 0).toFixed(2)}
                    </p>


                    {/* QUANTITY */}

                    <div className="quantity-controls">

                      <button
                        type="button"
                        aria-label="Decrease quantity"
                        onClick={() =>
                          decreaseQuantity(item.id)
                        }
                      >
                        −
                      </button>

                      <span>
                        {item.quantity || 1}
                      </span>

                      <button
                        type="button"
                        aria-label="Increase quantity"
                        onClick={() =>
                          increaseQuantity(item.id)
                        }
                      >
                        +
                      </button>

                    </div>

                  </div>


                  {/* PRICE + REMOVE */}

                  <div className="cart-item-right">

                    <strong>
                      R
                      {(
                        Number(item.price || 0) *
                        Number(item.quantity || 1)
                      ).toFixed(2)}
                    </strong>

                    <button
                      type="button"
                      className="remove-btn"
                      onClick={() =>
                        removeFromCart(item.id)
                      }
                    >
                      Remove
                    </button>

                  </div>

                </article>

              ))}


              {/* CLEAR CART */}

              <button
                type="button"
                className="clear-cart"
                onClick={clearCart}
              >
                Clear Cart
              </button>

            </div>


            {/* =====================================
                ORDER SUMMARY
            ===================================== */}

            <aside className="cart-summary">

              <h2>
                Order Summary
              </h2>


              <div className="summary-row">

                <span>
                  Items
                </span>

                <strong>
                  {cartCount}
                </strong>

              </div>


              <div className="summary-row">

                <span>
                  Subtotal
                </span>

                <strong>
                  R{Number(cartTotal).toFixed(2)}
                </strong>

              </div>


              <div className="summary-row">

                <span>
                  Delivery
                </span>

                <strong>
                  Calculated at checkout
                </strong>

              </div>


              <hr />


              <div className="total-row">

                <span>
                  Total
                </span>

                <strong>
                  R{Number(cartTotal).toFixed(2)}
                </strong>

              </div>


              {/* =================================
                  CHECKOUT
              ================================= */}

              <button
                type="button"
                className="checkout-btn"
                onClick={handleCheckout}
              >
                Proceed to Checkout →
              </button>


              {/* =================================
                  CONTINUE SHOPPING
              ================================= */}

              <button
                type="button"
                className="continue-shopping"
                onClick={() => navigate("/browse")}
              >
                Continue Shopping
              </button>

            </aside>

          </section>

        )}

      </main>

      <Footer />
    </>
  );
}

export default Cart;