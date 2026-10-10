import React, { useContext, useState } from "react";

import { CardContext } from "../context/cartContext";
import { WishlistContext } from "../context/WishlistContext";

export const fmt = (n) =>
  n.toLocaleString("en-US", { maximumFractionDigits: 0 });

export default function Card2({ product }) {
  const { addToCard } = useContext(CardContext);
  const { toggleWishlist, isInWishlist } = useContext(WishlistContext);

  const [loading, setLoading] = useState(false);
  const [hover, setHover] = useState(false);

  const hasPrev = product.prevprice > product.price;

  const discount = hasPrev
    ? Math.round((1 - product.price / product.prevprice) * 100)
    : 0;

  const rating = Math.min(5, Math.max(0, product.raiting || 0));

  const stars = "★".repeat(rating) + "☆".repeat(5 - rating);

  const wished = isInWishlist(product.id);

  const handleAddToCart = () => {
    if (loading) return;

    setLoading(true);

    setTimeout(() => {
      addToCard(product);
      setLoading(false);
    }, 1000);
  };

  return (
    <div className="col-12 my-4">
      <div
        className="card position-relative"
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        style={{
          border: "1px solid #DDE4F0",
          borderRadius: "4px",
          minHeight: "275px",
          padding: "15px",
        }}
      >
        {/* DISCOUNT */}
        {hasPrev && (
          <span
            className="badge rounded-pill position-absolute"
            style={{
              top: "15px",
              left: "15px",
              backgroundColor: "#FF9B45",
              fontSize: "12px",
              padding: "5px 12px",
              zIndex: 2,
            }}
          >
            -{discount}%
          </span>
        )}

        <div className="row align-items-start">

          {/* IMAGE */}
          <div className="col-3 col-md-3 d-flex justify-content-center">
            <img
              src={product.img}
              className="img-fluid"
              style={{
                width: "150px",
                height: "150px",
                objectFit: "contain",
                marginTop: "20px",
              }}
              alt={product.title}
            />
          </div>

          {/* PRODUCT INFO */}
          <div className="col-9 col-md-9">

            {/* BRAND */}
            <small
              style={{
                color: "#8B9AB5",
                textTransform: "capitalize",
                fontSize: "13px",
              }}
            >
              {product.brand}
            </small>

            {/* TITLE */}
            <h4
              className="mt-1 mb-1"
              style={{
                color: "#425A8B",
                fontSize: "24px",
                fontWeight: "600",
                lineHeight: "1.25",
              }}
            >
              {product.title}
            </h4>

            {/* RATING */}
            <div className="mb-2">
              <span
                style={{
                  color: "#FF9B45",
                  fontSize: "18px",
                  letterSpacing: "1px",
                }}
              >
                {stars}
              </span>

              <span
                className="ms-1"
                style={{
                  color: "#6680A9",
                  fontSize: "13px",
                }}
              >
                ({product.raters})
              </span>
            </div>

            {/* PRICE */}
            <div className="mb-3">
              <span
                className="fw-bold"
                style={{
                  color: "#425A8B",
                  fontSize: "20px",
                }}
              >
                ${fmt(product.price)}
              </span>

              {hasPrev && (
                <del
                  className="ms-2"
                  style={{
                    color: "#8B9AB5",
                    fontSize: "14px",
                  }}
                >
                  ${fmt(product.prevprice)}
                </del>
              )}
            </div>

            {/* FEATURES */}
            <ul
              className="ps-3 mb-3"
              style={{
                color: "#425A8B",
                fontSize: "11px",
                lineHeight: "1.8",
              }}
            >
              <li>27-inch (diagonal) Retina 5K display</li>
              <li>3.1GHz 6-core 10th-generation Intel Core i5</li>
              <li>AMD Radeon Pro 5300 graphics</li>
            </ul>

            {/* ADD TO CART */}
            <button
              className="btn"
              onClick={handleAddToCart}
              disabled={loading}
              style={{
                width: "260px",
                height: "36px",
                border: "1px solid #668BE0",
                color: "#425A8B",
                backgroundColor: "white",
                borderRadius: "4px",
              }}
            >
              {loading ? (
                <>
                  <span className="spinner-border spinner-border-sm me-2"></span>
                  Adding to cart...
                </>
              ) : (
                "Add To Cart"
              )}
            </button>
          </div>
        </div>

        {/* HOVER ACTIONS */}
        <div
          className="position-absolute d-flex gap-2"
          style={{
            left: "10px",
            bottom: "10px",

            opacity: hover ? 1 : 0,
            visibility: hover ? "visible" : "hidden",

            transform: hover
              ? "translateY(0)"
              : "translateY(8px)",

            transition: "all 0.25s ease",
          }}
        >
          {/* QUICK ACTION */}
          <button
            type="button"
            title="Quick Action"
            style={iconStyle}
          >
            <i className="bi bi-lightning-fill"></i>
          </button>

          {/* WISHLIST */}
          <button
            type="button"
            title="Wishlist"
            onClick={() => toggleWishlist(product)}
            style={{
              ...iconStyle,
              color: wished ? "#dc3545" : "#425A8B",
            }}
          >
            <i
              className={
                wished
                  ? "bi bi-heart-fill"
                  : "bi bi-heart-fill"
              }
            ></i>
          </button>

          {/* COMPARE */}
          <button
            type="button"
            title="Compare"
            style={iconStyle}
          >
            <i className="bi bi-arrow-left-right"></i>
          </button>

          {/* VIEW */}
          <button
            type="button"
            title="Quick View"
            style={iconStyle}
          >
            <i className="bi bi-eye-fill"></i>
          </button>
        </div>
      </div>
    </div>
  );
}

const iconStyle = {
  width: "30px",
  height: "30px",
  padding: "0",

  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  border: "1px solid #DDE4F0",
  borderRadius: "5px",

  backgroundColor: "#fff",
  color: "#425A8B",

  fontSize: "14px",
};