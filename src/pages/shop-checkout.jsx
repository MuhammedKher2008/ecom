import { useContext } from "react";
import { CardContext } from "../context/cartContext"; // yolu kendi yapına göre düzelt
import gpay from "../assets/gpay.svg";
import amazonpay from "../assets/amazon.svg";
import paypal from "../assets/paypal.svg";

import { useState } from "react";

const COUPONS = {
  SAVE10: { type: "percent", value: 10 }, // %10 indirim
  WELCOME5: { type: "fixed", value: 5 }, // $5 indirim
};
const money = (n) => `$${Number(n).toFixed(2)}`;

export default function ShopChekout() {
  const { cards, totalprice } = useContext(CardContext);

  const [couponInput, setCouponInput] = useState("");
  const [appliedCoupon, setAppliedCoupon] = useState(null);
  const [couponMsg, setCouponMsg] = useState(null); // { type: "ok" | "err", text }

  const coupon = appliedCoupon ? COUPONS[appliedCoupon] : null;
  const discount = coupon
    ? coupon.type === "percent"
      ? (totalprice * coupon.value) / 100
      : Math.min(coupon.value, totalprice)
    : 0;

  const shipping = 0;
  const total = totalprice - discount + shipping;

  const handleCoupon = () => {
    // uygulanmışsa buton "Remove" olarak çalışır
    if (appliedCoupon) {
      setAppliedCoupon(null);
      setCouponInput("");
      setCouponMsg(null);
      return;
    }

    const code = couponInput.trim().toUpperCase();

    if (cards.length === 0)
      return setCouponMsg({ type: "err", text: "Your cart is empty" });
    if (!code)
      return setCouponMsg({ type: "err", text: "Enter a coupon code" });
    if (!COUPONS[code])
      return setCouponMsg({ type: "err", text: "Invalid coupon code" });

    setAppliedCoupon(code);
    setCouponMsg({ type: "ok", text: `Coupon ${code} applied` });
  };

  return (
    <div className="container mt-5">
      <div className="row">
        {/* ---------- SOL: Checkout ---------- */}
        <div className="col-md-5">
          <div className="pay-container d-flex flex-column align-items-center">
            <div className="pay-row d-flex">
              <div className="col-4">
                <button className="btn pay-btn m-2">
                  <img src={gpay} alt="Google Pay" />
                </button>
              </div>
              <div className="col-4">
                <button className="btn pay-btn m-2">
                  <img src={paypal} alt="PayPal" />
                </button>
              </div>
              <div className="col-4">
                <button className="btn pay-btn m-2">
                  <img src={amazonpay} alt="Amazon Pay" />
                </button>
              </div>
            </div>

            <div className="or-divider w-100">
              <p>Or</p>
            </div>

            <div className="d-flex justify-content-between w-100">
              <span
                style={{
                  color: "#425a8b",
                  fontWeight: "700",
                  fontSize: "16px",
                }}
              >
                Contact information
              </span>
              <span style={{ color: "#425a8b" }}>
                Already have an account?{" "}
                <a className="text-decoration-none" href="">
                  Login
                </a>
              </span>
            </div>

            <div className="field-block w-100">
              <input
                placeholder="Email*"
                type="email"
                className="form-control w-100 chekout-input"
              />
            </div>

            <label className="check-row w-100">
              <input type="checkbox" />
              Keep me up to date on news and exclusive offers
            </label>

            <div className="ship-title w-100">
              <span
                style={{
                  color: "#425a8b",
                  fontWeight: "700",
                  fontSize: "16px",
                }}
              >
                Shipping address
              </span>
            </div>

            <div className="field-block checkout-grid w-100">
              <input
                placeholder="First name*"
                type="text"
                className="form-control chekout-input"
              />
              <input
                placeholder="Last name*"
                type="text"
                className="form-control chekout-input"
              />
              <input
                placeholder="Address 1*"
                type="text"
                className="form-control chekout-input"
              />
              <input
                placeholder="Address 2*"
                type="text"
                className="form-control chekout-input"
              />
              <select className="form-control chekout-input">
                <option value="">Select an option...</option>
                <option value="">option</option>
              </select>
              <input
                placeholder="City*"
                type="text"
                className="form-control chekout-input"
              />
              <input
                placeholder="PostCode / ZIP*"
                type="text"
                className="form-control chekout-input"
              />
              <input
                placeholder="Company name"
                type="text"
                className="form-control chekout-input"
              />
              <input
                placeholder="Phone*"
                type="text"
                className="form-control chekout-input"
              />
              <textarea
                placeholder="Additional Information"
                className="form-control chekout-input"
              />
            </div>
          </div>

          <div className="checkout-footer">
            <button className="btn btn-return">
              <i className="bi bi-arrow-left"></i>
              Return to Cart
            </button>
            <button className="btn btns2">
              Place an Order
              <i className="bi bi-arrow-right"></i>
            </button>
          </div>
        </div>

        <div className="col-md-2"></div>

        {/* ---------- SAĞ: Your Order ---------- */}
        <div className="col-md-5">
          <div className="order-box">
            <h6 className="order-title">Your Order</h6>

            {cards.length === 0 && <p className="m-0">Your cart is empty</p>}

            {cards.map((item) => (
              <div className="order-card" key={item.id}>
                <img className="order-img" src={item.img} alt={item.title} />

                <div className="order-info">
                  <h6 className="order-name">{item.title}</h6>
                  <div className="order-rating">
                    {[...Array(5)].map((_, i) => (
                      <i key={i} className="bi bi-star-fill"></i>
                    ))}
                    <span>({item.reviews ?? 65})</span>
                  </div>
                </div>

                <span className="order-qty">x{item.quantity}</span>
                <span className="order-price">
                  {money(item.price * item.quantity)}
                </span>
              </div>
            ))}

            <div className="coupon-row">
              <input
                type="text"
                placeholder="Enter Your Coupon"
                className="form-control chekout-input coupon-input"
                value={couponInput}
                disabled={!!appliedCoupon}
                onChange={(e) => setCouponInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleCoupon()}
              />
              <button className="btn btns2 coupon-btn" onClick={handleCoupon}>
                {appliedCoupon ? "Remove" : "Apply"}
              </button>
            </div>

            {couponMsg && (
              <p className={`coupon-msg ${couponMsg.type}`}>{couponMsg.text}</p>
            )}

            <div className="order-row">
              <span>Subtotal</span>
              <span className="order-val">{money(totalprice)}</span>
            </div>

            {discount > 0 && (
              <div className="order-row">
                <span>Discount ({appliedCoupon})</span>
                <span className="order-val">-{money(discount)}</span>
              </div>
            )}

            <div className="order-row order-row-ship">
              <span>Shipping</span>
              <span className="order-val">–</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
