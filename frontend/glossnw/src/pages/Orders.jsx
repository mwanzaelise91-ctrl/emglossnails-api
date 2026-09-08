import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./Orders.css";

function Orders() {
  const navigate = useNavigate();

  // =========================================
  // SAMPLE ORDERS
  // =========================================

  const orders = [
    {
      id: "EMG-1001",
      date: "16 August 2026",
      status: "Completed",
      items: [
        {
          name: "Classic Clear Nail Tips",
          quantity: 2,
          price: 65,
        },
        {
          name: "UV Gel Polish - Velvet Rose",
          quantity: 1,
          price: 120,
        },
      ],
      total: 250,
    },

    {
      id: "EMG-1002",
      date: "12 August 2026",
      status: "Processing",
      items: [
        {
          name: "Crystal Rhinestone Set",
          quantity: 1,
          price: 95,
        },
        {
          name: "Gold Nail Flakes",
          quantity: 2,
          price: 70,
        },
      ],
      total: 235,
    },

    {
      id: "EMG-1003",
      date: "5 August 2026",
      status: "Completed",
      items: [
        {
          name: "Professional Grit Nail Files",
          quantity: 1,
          price: 65,
        },
      ],
      total: 65,
    },
  ];

  return (
    <>
      <Navbar />

      <main className="orders-page">

        {/* =========================================
            HEADER
        ========================================= */}

        <section className="orders-hero">

          <div className="orders-hero-content">

            <p className="orders-label">
              EMGLOSS NAILS
            </p>

            <h1>
              My Orders 💅
            </h1>

            <p>
              View your previous orders and keep track of your
              favourite EMGloss Nails products.
            </p>

          </div>

        </section>


        {/* =========================================
            ORDERS SECTION
        ========================================= */}

        <section className="orders-section">

          <div className="orders-heading">

            <div>
              <p className="section-small">
                ORDER HISTORY
              </p>

              <h2>
                Your Orders
              </h2>

              <p>
                Here you can view the products you have ordered.
              </p>
            </div>

            <div className="orders-count">
              {orders.length} Orders
            </div>

          </div>


          {/* =========================================
              ORDERS
          ========================================= */}

          <div className="orders-list">

            {orders.map((order) => (

              <article
                className="order-card"
                key={order.id}
              >

                {/* ORDER HEADER */}

                <div className="order-header">

                  <div>
                    <p className="order-number">
                      Order #{order.id}
                    </p>

                    <span className="order-date">
                      Placed on {order.date}
                    </span>
                  </div>

                  <span
                    className={
                      order.status === "Completed"
                        ? "order-status completed"
                        : "order-status processing"
                    }
                  >
                    {order.status}
                  </span>

                </div>


                {/* ORDER PRODUCTS */}

                <div className="order-products">

                  {order.items.map((item, index) => (

                    <div
                      className="order-product"
                      key={index}
                    >

                      <div className="order-product-icon">
                        💅
                      </div>

                      <div className="order-product-info">

                        <h3>
                          {item.name}
                        </h3>

                        <p>
                          Quantity: {item.quantity}
                        </p>

                      </div>

                      <strong>
                        R{item.price * item.quantity}
                      </strong>

                    </div>

                  ))}

                </div>


                {/* ORDER FOOTER */}

                <div className="order-footer">

                  <span>
                    Order Total
                  </span>

                  <strong>
                    R{order.total}
                  </strong>

                </div>

              </article>

            ))}

          </div>


          {/* =========================================
              CONTINUE SHOPPING
          ========================================= */}

          <div className="orders-actions">

            <button
              type="button"
              onClick={() => navigate("/browse")}
            >
              Continue Shopping →
            </button>

          </div>

        </section>

      </main>

      <Footer />
    </>
  );
}

export default Orders;