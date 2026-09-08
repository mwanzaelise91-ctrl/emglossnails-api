import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useCart } from "../components/CartContext";
import { useNavigate } from "react-router-dom";
import "./Checking.css";

function Checking() {
  const navigate = useNavigate();

  const {
    cart,
    cartTotal,
    cartCount,
  } = useCart();

  // ==============================
  // PAYMENT METHOD
  // ==============================

  const [paymentMethod, setPaymentMethod] = useState("");

  // ==============================
  // DELIVERY OR COLLECTION
  // ==============================

  const [fulfillmentMethod, setFulfillmentMethod] = useState("");

  // ==============================
  // MESSAGES
  // ==============================

  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState("");

  // ==============================
  // CUSTOMER DETAILS
  // ==============================

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    postalCode: "",
  });

  // ==============================
  // CARD DETAILS
  // ==============================

  const [cardData, setCardData] = useState({
    cardholderName: "",
    cardNumber: "",
    expiryDate: "",
    cvv: "",
  });

  // ==============================
  // DELIVERY FEE
  // ==============================

  const deliveryFee =
    cart.length > 0 && fulfillmentMethod === "delivery"
      ? 60
      : 0;

  // ==============================
  // FINAL TOTAL
  // ==============================

  const finalTotal =
    Number(cartTotal) + deliveryFee;

  // ==============================
  // CUSTOMER INPUT
  // ==============================

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

    setMessage("");
  };

  // ==============================
  // CARD INPUT
  // ==============================

  const handleCardChange = (e) => {
    let value = e.target.value;

    // CARD NUMBER
    if (e.target.name === "cardNumber") {
      value = value
        .replace(/\D/g, "")
        .slice(0, 16);

      value = value
        .replace(/(.{4})/g, "$1 ")
        .trim();
    }

    // EXPIRY DATE
    if (e.target.name === "expiryDate") {
      value = value
        .replace(/\D/g, "")
        .slice(0, 4);

      if (value.length >= 3) {
        value =
          value.slice(0, 2) +
          " / " +
          value.slice(2);
      }
    }

    // CVV
    if (e.target.name === "cvv") {
      value = value
        .replace(/\D/g, "")
        .slice(0, 4);
    }

    setCardData({
      ...cardData,
      [e.target.name]: value,
    });

    setMessage("");
  };

  // ==============================
  // PLACE ORDER
  // ==============================

  const handleSubmit = (e) => {
    e.preventDefault();

    setMessage("");
    setMessageType("");

    // CHECK CART
    if (cart.length === 0) {
      setMessage(
        "Your cart is empty. Please add products before checking out."
      );
      setMessageType("error");
      return;
    }

    // CHECK DELIVERY / COLLECTION
    if (!fulfillmentMethod) {
      setMessage(
        "Please choose whether you want Delivery or Pay & Collect."
      );
      setMessageType("error");
      return;
    }

    // CHECK PAYMENT
    if (!paymentMethod) {
      setMessage(
        "Please choose a payment method before placing your order."
      );
      setMessageType("error");
      return;
    }

    // CHECK DELIVERY ADDRESS
    if (fulfillmentMethod === "delivery") {
      if (
        !formData.address.trim() ||
        !formData.city.trim() ||
        !formData.postalCode.trim()
      ) {
        setMessage(
          "Please enter your delivery address, city and postal code."
        );
        setMessageType("error");
        return;
      }
    }

    // CHECK CARD DETAILS
    if (paymentMethod === "card") {
      const cleanCardNumber =
        cardData.cardNumber.replace(/\s/g, "");

      if (!cardData.cardholderName.trim()) {
        setMessage(
          "Please enter the name on your card."
        );
        setMessageType("error");
        return;
      }

      if (cleanCardNumber.length !== 16) {
        setMessage(
          "Please enter a valid 16-digit card number."
        );
        setMessageType("error");
        return;
      }

      if (!/^\d{2}\s\/\s\d{2}$/.test(cardData.expiryDate)) {
        setMessage(
          "Please enter your expiry date in MM / YY format."
        );
        setMessageType("error");
        return;
      }

      if (cardData.cvv.length < 3) {
        setMessage(
          "Please enter your 3 or 4 digit CVV."
        );
        setMessageType("error");
        return;
      }
    }

    // ==============================
    // SUCCESS MESSAGE
    // ==============================

    const orderType =
      fulfillmentMethod === "delivery"
        ? "Your order will be delivered to you."
        : "Your order will be ready for collection.";

    setMessage(
      `Order placed successfully! 💕 Your total is R${finalTotal.toFixed(
        2
      )}. ${orderType} Thank you for shopping with EMGloss Nails!`
    );

    setMessageType("success");
  };

  return (
    <>
      <Navbar />

      <section className="checkout">

        {/* ==============================
            HEADER
        ============================== */}

        <div className="checkout-header">

          <p className="checkout-small-title">
            EMGLOSS NAILS
          </p>

          <h1>
            Checkout 💳
          </h1>

          <p>
            Complete your details below to place your order.
          </p>

        </div>

        {/* ==============================
            MAIN CHECKOUT
        ============================== */}

        <div className="checkout-content">

          {/* ==============================
              CUSTOMER DETAILS
          ============================== */}

          <div className="checkout-card">

            <h2>Customer Details</h2>

            <form
              className="checkout-form"
              onSubmit={handleSubmit}
            >

              {/* FULL NAME */}

              <div className="checkout-field">

                <label>
                  Full Name
                </label>

                <input
                  type="text"
                  name="fullName"
                  placeholder="Enter your full name"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                />

              </div>

              {/* EMAIL */}

              <div className="checkout-field">

                <label>
                  Email Address
                </label>

                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email address"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />

              </div>

              {/* PHONE */}

              <div className="checkout-field">

                <label>
                  Phone Number
                </label>

                <input
                  type="tel"
                  name="phone"
                  placeholder="Enter your phone number"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />

              </div>

              {/* ==============================
                  DELIVERY / COLLECTION
              ============================== */}

              <div className="fulfillment-section">

                <h2>
                  How would you like to receive your order?
                </h2>

                <p className="payment-description">
                  Choose between delivery or collecting your order.
                </p>

                <div className="fulfillment-options">

                  {/* DELIVERY */}

                  <label
                    className={
                      fulfillmentMethod === "delivery"
                        ? "fulfillment-option active"
                        : "fulfillment-option"
                    }
                  >

                    <input
                      type="radio"
                      name="fulfillment"
                      value="delivery"
                      checked={
                        fulfillmentMethod === "delivery"
                      }
                      onChange={(e) => {
                        setFulfillmentMethod(e.target.value);
                        setMessage("");
                      }}
                    />

                    <div>

                      <strong>
                        🚚 Deliver to my address
                      </strong>

                      <p>
                        Have your order delivered to your address.
                      </p>

                      <span>
                        Delivery fee: R60.00
                      </span>

                    </div>

                  </label>

                  {/* COLLECTION */}

                  <label
                    className={
                      fulfillmentMethod === "collection"
                        ? "fulfillment-option active"
                        : "fulfillment-option"
                    }
                  >

                    <input
                      type="radio"
                      name="fulfillment"
                      value="collection"
                      checked={
                        fulfillmentMethod === "collection"
                      }
                      onChange={(e) => {
                        setFulfillmentMethod(e.target.value);
                        setMessage("");
                      }}
                    />

                    <div>

                      <strong>
                        🛍️ Pay & Collect
                      </strong>

                      <p>
                        Collect your order from EMGloss Nails.
                      </p>

                      <span>
                        No delivery fee
                      </span>

                    </div>

                  </label>

                </div>

              </div>

              {/* ==============================
                  ADDRESS
              ============================== */}

              {fulfillmentMethod === "delivery" && (

                <div className="delivery-details">

                  <h2>
                    Delivery Details 🚚
                  </h2>

                  <div className="checkout-field">

                    <label>
                      Delivery Address
                    </label>

                    <input
                      type="text"
                      name="address"
                      placeholder="Street address"
                      value={formData.address}
                      onChange={handleChange}
                    />

                  </div>

                  <div className="checkout-row">

                    <div className="checkout-field">

                      <label>
                        City
                      </label>

                      <input
                        type="text"
                        name="city"
                        placeholder="City"
                        value={formData.city}
                        onChange={handleChange}
                      />

                    </div>

                    <div className="checkout-field">

                      <label>
                        Postal Code
                      </label>

                      <input
                        type="text"
                        name="postalCode"
                        placeholder="Postal code"
                        value={formData.postalCode}
                        onChange={handleChange}
                      />

                    </div>

                  </div>

                </div>

              )}

              {/* ==============================
                  COLLECTION MESSAGE
              ============================== */}

              {fulfillmentMethod === "collection" && (

                <div className="collection-info">

                  <h3>
                    🛍️ Collection
                  </h3>

                  <p>
                    Your order will be prepared for collection.
                    You can collect it from EMGloss Nails after
                    your order has been confirmed.
                  </p>

                </div>

              )}

              {/* ==============================
                  PAYMENT
              ============================== */}

              <div className="payment-section">

                <h2>
                  Payment Details
                </h2>

                <p className="payment-description">
                  Choose how you would like to pay for your order.
                </p>

                {/* PAYMENT OPTIONS */}

                <div className="payment-options">

                  {/* CARD */}

                  <label
                    className={
                      paymentMethod === "card"
                        ? "payment-option active"
                        : "payment-option"
                    }
                  >

                    <input
                      type="radio"
                      name="payment"
                      value="card"
                      checked={
                        paymentMethod === "card"
                      }
                      onChange={(e) => {
                        setPaymentMethod(e.target.value);
                        setMessage("");
                      }}
                    />

                    <span>
                      💳 Credit / Debit Card
                    </span>

                  </label>

                  {/* EFT */}

                  <label
                    className={
                      paymentMethod === "eft"
                        ? "payment-option active"
                        : "payment-option"
                    }
                  >

                    <input
                      type="radio"
                      name="payment"
                      value="eft"
                      checked={
                        paymentMethod === "eft"
                      }
                      onChange={(e) => {
                        setPaymentMethod(e.target.value);
                        setMessage("");
                      }}
                    />

                    <span>
                      🏦 EFT / Bank Transfer
                    </span>

                  </label>

                  {/* CASH */}

                  <label
                    className={
                      paymentMethod === "cash"
                        ? "payment-option active"
                        : "payment-option"
                    }
                  >

                    <input
                      type="radio"
                      name="payment"
                      value="cash"
                      checked={
                        paymentMethod === "cash"
                      }
                      onChange={(e) => {
                        setPaymentMethod(e.target.value);
                        setMessage("");
                      }}
                    />

                    <span>
                      💵 Cash on Collection
                    </span>

                  </label>

                </div>

                {/* ==============================
                    CARD INFORMATION
                ============================== */}

                {paymentMethod === "card" && (

                  <div className="card-payment">

                    <h3>
                      💳 Card Information
                    </h3>

                    <p className="demo-note">
                      This is a demonstration payment form.
                      Do not enter real card details.
                    </p>

                    <div className="checkout-field">

                      <label>
                        Cardholder Name
                      </label>

                      <input
                        type="text"
                        name="cardholderName"
                        placeholder="Name on card"
                        value={cardData.cardholderName}
                        onChange={handleCardChange}
                      />

                    </div>

                    <div className="checkout-field">

                      <label>
                        Card Number
                      </label>

                      <input
                        type="text"
                        name="cardNumber"
                        placeholder="1234 5678 9012 3456"
                        value={cardData.cardNumber}
                        onChange={handleCardChange}
                        inputMode="numeric"
                      />

                    </div>

                    <div className="checkout-row">

                      <div className="checkout-field">

                        <label>
                          Expiry Date
                        </label>

                        <input
                          type="text"
                          name="expiryDate"
                          placeholder="MM / YY"
                          value={cardData.expiryDate}
                          onChange={handleCardChange}
                          inputMode="numeric"
                        />

                      </div>

                      <div className="checkout-field">

                        <label>
                          CVV
                        </label>

                        <input
                          type="password"
                          name="cvv"
                          placeholder="CVV"
                          value={cardData.cvv}
                          onChange={handleCardChange}
                          inputMode="numeric"
                        />

                      </div>

                    </div>

                  </div>

                )}

                {/* ==============================
                    EFT INFORMATION
                ============================== */}

                {paymentMethod === "eft" && (

                  <div className="payment-info">

                    <h3>
                      🏦 EFT / Bank Transfer
                    </h3>

                    <p>
                      After placing your order, you will
                      receive the EMGloss Nails banking details
                      for payment.
                    </p>

                    <p>
                      Please use your order number as your
                      payment reference.
                    </p>

                  </div>

                )}

                {/* ==============================
                    CASH INFORMATION
                ============================== */}

                {paymentMethod === "cash" && (

                  <div className="payment-info">

                    <h3>
                      💵 Cash on Collection
                    </h3>

                    <p>
                      You can pay for your order in cash when
                      you collect it from EMGloss Nails.
                    </p>

                  </div>

                )}

              </div>

              {/* ==============================
                  MESSAGE
              ============================== */}

              {message && (

                <div
                  className={
                    messageType === "success"
                      ? "checkout-message success"
                      : "checkout-message error"
                  }
                >
                  {message}
                </div>

              )}

              {/* ==============================
                  PLACE ORDER
              ============================== */}

              <button
                type="submit"
                className="checkout-button"
              >
                Place Order — R{finalTotal.toFixed(2)}
              </button>

              {/* BACK */}

              <button
                type="button"
                className="back-cart-button"
                onClick={() => navigate("/cart")}
              >
                ← Back to Cart
              </button>

            </form>

          </div>

          {/* ==============================
              ORDER SUMMARY
          ============================== */}

          <div className="order-summary">

            <h2>
              🛍️ Order Summary
            </h2>

            {/* PRODUCTS */}

            <div className="summary-products">

              {cart.length === 0 ? (

                <div className="empty-checkout">

                  <p>
                    Your cart is empty.
                  </p>

                  <button
                    type="button"
                    onClick={() => navigate("/browse")}
                  >
                    Shop Products
                  </button>

                </div>

              ) : (

                cart.map((item) => (

                  <div
                    className="summary-product"
                    key={item.id}
                  >

                    <img
                      src={item.image}
                      alt={item.name}
                    />

                    <div className="summary-product-info">

                      <h3>
                        {item.name}
                      </h3>

                      <p>
                        {item.category}
                      </p>

                      <span>
                        Qty: {item.quantity}
                      </span>

                    </div>

                    <strong>
                      R
                      {(
                        Number(item.price) *
                        Number(item.quantity)
                      ).toFixed(2)}
                    </strong>

                  </div>

                ))

              )}

            </div>

            {/* TOTALS */}

            {cart.length > 0 && (

              <>

                <hr />

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
                    {fulfillmentMethod === "collection"
                      ? "FREE"
                      : `R${deliveryFee.toFixed(2)}`}
                  </strong>

                </div>

                <hr />

                <div className="summary-total">

                  <span>
                    Total
                  </span>

                  <strong>
                    R{finalTotal.toFixed(2)}
                  </strong>

                </div>

                {/* SELECTED DELIVERY METHOD */}

                {fulfillmentMethod && (

                  <div className="selected-checkout-option">

                    <strong>
                      {fulfillmentMethod === "delivery"
                        ? "🚚 Delivery"
                        : "🛍️ Pay & Collect"}
                    </strong>

                  </div>

                )}

                {/* SELECTED PAYMENT */}

                {paymentMethod && (

                  <div className="selected-checkout-option">

                    <strong>
                      {paymentMethod === "card" &&
                        "💳 Card Payment"}

                      {paymentMethod === "eft" &&
                        "🏦 EFT / Bank Transfer"}

                      {paymentMethod === "cash" &&
                        "💵 Cash on Collection"}
                    </strong>

                  </div>

                )}

              </>

            )}

          </div>

        </div>

      </section>

      <Footer />

    </>
  );
}

export default Checking;