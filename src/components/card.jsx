import React, { useContext } from "react";
import { CardContext } from "../context/cartContext";

export default function Card({ product }) {
  const { addToCard } = useContext(CardContext);

  return (
    <div className="col-12 m-2 col-md-6 col-lg-4 col-xl-3">
      <div
        className="card p-3"
        style={{
          border: "1px solid #DDE4F0",
          borderRadius: "4px",
        }}
      >
        {/* Discount */}
        <span
          className="badge rounded-pill align-self-start mb-2"
          style={{
            backgroundColor: "#FF9B45",
            fontSize: "12px",
          }}
        >
          -17%
        </span>

        {/* Image */}
        <div className="text-center">
          <img
            src={product.img}
            className="img-fluid"
            style={{
              width: "180px",
              height: "150px",
              objectFit: "contain",
            }}
            alt={product.title}
          />
        </div>

        {/* Product Info */}
        <div className="mt-3">
          <small style={{ color: "#8B9AB5" }}>Apple</small>

          <h6
            className="mt-1 mb-2"
            style={{
              color: "#425A8B",
              fontWeight: "600",
              lineHeight: "1.5",
            }}
          >
            {product.title}
          </h6>

          {/* Rating */}
          <div className="mb-2">
            <span style={{ color: "#FF9B45", fontSize: "18px" }}>★★★★★</span>

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
              style={{
                color: "#425A8B",
                fontSize: "20px",
              }}
            >
              ${product.price}
            </span>

            <del
              className="ms-2"
              style={{
                color: "#8B9AB5",
                fontSize: "14px",
              }}
            >
              ${product.prevprice}
            </del>
          </div>

          {/* Add To Cart */}
          <button
            className="btn w-100 mb-3"
            onClick={() => addToCard(product)}
            style={{
              border: "1px solid #668BE0",
              color: "#425A8B",
              backgroundColor: "white",
            }}
          >
            Add To Cart
          </button>

          {/* Features */}
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
