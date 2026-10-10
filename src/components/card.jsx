import React, { useContext, useState } from "react";
import { CardContext } from "../context/cartContext";
import { WishlistContext } from "../context/WishlistContext";

export const fmt = (n) =>
  n.toLocaleString("en-US", { maximumFractionDigits: 0 });

export default function Card({ product }) {
  const { addToCard } = useContext(CardContext);
  const { toggleWishlist, isInWishlist } = useContext(WishlistContext);
  const [loading, setLoading] = useState(false);

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
    <div className="col-12 col-md-6 col-lg-4 col-xl-3 my-4">
      <div
        className="card p-3 product-card"
        style={{ border: "1px solid #DDE4F0", borderRadius: "4px" }}
      >
        {/* Discount */}
        {hasPrev && (
          <span
            className="badge rounded-pill align-self-start mb-2"
            style={{ backgroundColor: "#FF9B45", fontSize: "12px" }}
          >
            -{discount}%
          </span>
        )}

        {/* Image */}
        <div className="text-center">
          <img
            src={product.img}
            className="img-fluid"
            style={{ width: "180px", height: "150px", objectFit: "contain" }}
            alt={product.title}
          />
        </div>

        {/* Hover Actions */}
        <div className="product-actions">
          <button type="button">
            <i class="bi bi-lightning-fill"></i>
          </button>
          <button
            type="button"
            onClick={() => toggleWishlist(product)}
            className={wished ? "text-danger" : ""}
          >
            <i className="bi bi-heart-fill"></i>
          </button>
          <button type="button">↗</button>
          <button type="button">👁</button>
        </div>

        {/* Product Info */}
        <div className="mt-3">
          <small style={{ color: "#8B9AB5", textTransform: "capitalize" }}>
            {product.brand}
          </small>

          <h6
            className="mt-1 mb-2"
            style={{ color: "#425A8B", fontWeight: "600", lineHeight: "1.5" }}
          >
            {product.title}
          </h6>

          {/* Rating */}
          <div className="mb-2">
            <span style={{ color: "#FF9B45", fontSize: "18px" }}>{stars}</span>
            <span
              className="ms-1"
              style={{ color: "#6680A9", fontSize: "13px" }}
            >
              ({product.raters})
            </span>
          </div>

          {/* Price */}
          <div className="mb-3">
            <span
              className="fw-bold"
              style={{ color: "#425A8B", fontSize: "20px" }}
            >
              ${fmt(product.price)}
            </span>
            {hasPrev && (
              <del
                className="ms-2"
                style={{ color: "#8B9AB5", fontSize: "14px" }}
              >
                ${fmt(product.prevprice)}
              </del>
            )}
          </div>

          {/* Add To Cart */}
          <button
            className="btn w-100 mb-3"
            onClick={handleAddToCart}
            disabled={loading}
            style={{
              border: "1px solid #668BE0",
              color: "#425A8B",
              backgroundColor: "white",
            }}
          >
            {loading ? (
              <>
                <span className="spinner-border spinner-border-sm me-2"></span>
                Adding to cart...
              </>
            ) : (
              "Add to Cart"
            )}
          </button>

          <ul
            className="mb-0 ps-3"
            style={{
              color: "#425A8B",
              fontSize: "11px",
              lineHeight: "2",
            }}
          >
            <li>27-inch (diagonal) Retina 5K display</li>
            <li>3.1GHz 6-core 10th-generation Intel Core i5</li>
            <li>AMD Radeon Pro 5300 graphics</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
