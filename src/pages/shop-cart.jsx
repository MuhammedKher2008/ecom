import React, { useContext } from "react";

import { CardContext } from "../context/cartContext";
import Card from "../components/card";
import Data from "../data";
export default function ShopCart() {
  const { cards, removeFromCard, updateQuantity, totalprice } =
    useContext(CardContext);

  return (
    <>
      <div className="container mt-5">
        <div className="row">
          <div className="col-lg-9">
            <div
              className=" px-3
            "
            >
              <div className="row bg-t justify-content-center align-items-center py">
                {/* Product */}
                <div className="col-12 col-md-6">
                  <div className="p-2">
                    <input type="checkbox" className="form-check-input" />

                    <span className="font-md-bold ms-2">Product</span>
                  </div>
                </div>

                {/* Price */}
                <div className="col-6 col-md-2 text-center">
                  <div className="py-2">
                    <span className="font-md-bold">Unit Price</span>
                  </div>
                </div>

                {/* Stock */}
                <div className="col-6 col-md-1 text-center">
                  <div className="py-2">
                    <span className="font-md-bold">Quantity</span>
                  </div>
                </div>

                {/* Action */}
                <div className="col-6 col-md-2 text-center">
                  <div className="py-2">
                    <span className="font-md-bold">Subtotal</span>
                  </div>
                </div>

                {/* Remove */}
                <div className="col-6 col-md-1 ">
                  <div className="py-2">
                    <span className="font-md-bold">Remove</span>
                  </div>
                </div>
              </div>
            </div>

            {cards.length > 0 ? (
              cards.map((product) => (
                <div
                  className="row align-items-center my-3 wishlist-product"
                  key={product.id}
                >
                  <div className="col-12 col-md-6">
                    <div className="d-flex align-items-center p-2">
                      {/* Checkbox */}
                      <input
                        type="checkbox"
                        className="form-check-input wishlist-checkbox flex-shrink-0"
                      />

                      {/* Image */}
                      <div className="wishlist-image ms-3 flex-shrink-0">
                        <img src={product.img} alt={product.title} />
                      </div>

                      {/* Title + Rating */}
                      <div className="wishlist-info ms-3">
                        <div className="wishlist-title">{product.title}</div>

                        <div className="wishlist-rating">
                          {Array.from({
                            length: product.rating,
                          }).map((_, index) => (
                            <i key={index} className="bi bi-star-fill star"></i>
                          ))}

                          <span className="wishlist-raters ms-1">
                            ({product.raters})
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* ================= PRICE ================= */}
                  <div className="col-6 col-md-2 text-center">
                    <div className="wishlist-price">${product.price}</div>
                  </div>

                  {/* ================= STOCK ================= */}
                  <div className="col-6 col-md-1 text-center">
                    <div
                      className=""
                      style={{
                        borderBottom: "1px solid #dde4f0",
                        display: "inline-flex",
                      }}
                    >
                      <button
                        className="btn "
                        style={{ color: "#425a8b", fontSize: "20px" }}
                        type="button"
                        onClick={() =>
                          updateQuantity(product.id, product.quantity - 1)
                        }
                      >
                        <i className="bi bi-dash" />
                      </button>
                      <span
                        className="wishlist-stock-text mt-2"
                        style={{
                          color: "#425a8b",
                          size: "16px",
                          fontWeight: "700",
                          lineHeight: "1.5",
                        }}
                      >
                        {product.quantity}
                      </span>
                      <button
                        className="btn"
                        type="button"
                        style={{ color: "#425a8b", fontSize: "20px" }}
                        onClick={() =>
                          updateQuantity(product.id, product.quantity + 1)
                        }
                      >
                        <i className="bi bi-plus" />
                      </button>
                    </div>
                  </div>

                  <div className="col-6 col-md-2 text-center">
                    <span className="wishlist-price">
                      {`$${product.price * product.quantity}`}
                    </span>
                  </div>

                  <div className="col-6 col-md-1 text-center">
                    <button
                      className="wishlist-remove"
                      onClick={() => removeFromCard(product.id)}
                    >
                      <i className="bi bi-trash3"></i>
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <div
                className="text-center py-5"
                style={{
                  color: "#425A8B",
                  fontWeight: "700",
                  fontSize: "16px",
                  lineHeight: "1.5",
                }}
              >
                <p>
                  <i
                    style={{
                      fontSize: "45px",
                      color: "#425A8B",
                    }}
                    className="bi bi-bag-x"
                  ></i>
                </p>

                <h4>Your cart is empty</h4>

                <p>Add some products to your cart.</p>
              </div>
            )}
          </div>
          <div className="col-lg-3 " style={{border:"1px solid #dde4f0 "}}>
            <div className="row" style={{ borderBottom: "1px solid #dde4f0" }}>
              <div className="col-md-6">
                <span style={{ color: "#8C9EC5", fontWeight: "700" }}>
                  Subtotal
                </span>
              </div>
              <div className="col-md-6 text-end">
                <span className="wishlist-price ">{`$${totalprice}`}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-md-12 ">
            <div className="row">
              <h4>You may also like</h4>
            </div>

            <div className="row">
              {Data.slice(0, 4).map((item) => (
                <Card key={item.id} product={item} />
              ))}
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 ">
            <div className="row">
              <h4>You may also like</h4>
            </div>

            {/* <div className="row justify-content-between">
              {Data.slice(0, 4).map((item) => (
                <div className="col-md-3">
                  <div className="pc-card position-relative d-flex align-items-center gap-3 p-3 h-100">
                    <span className="pc-badge">-{discount(item)}%</span>

                    <img
                      className="pc-img"
                      src={item.img}
                      alt={item.title}
                      loading="lazy"
                    />

                    <div className="flex-grow-1">
                      <div className="pc-brand">{item.brand}</div>
                      <h6 className="pc-title my-1">{item.title}</h6>

                      <div className="pc-stars">
                        {[1, 2, 3, 4, 5].map((s) => (
                          <i
                            key={s}
                            className={`bi bi-star-fill ${s <= item.rating ? "" : "pc-star-off"}`}
                          ></i>
                        ))}
                        <span className="pc-brand ms-1">({item.raters})</span>
                      </div>

                      <div className="mt-3">
                        <span className="pc-price">${item.price}</span>
                        <del className="pc-old ms-2">${item.prevprice}</del>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
}
// data.map((item) => <Card key={item.id} product={item} />)
