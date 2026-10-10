import React, { useContext } from "react";

import { WishlistContext } from "../context/WishlistContext";
import { CardContext } from "../context/cartContext";
import Card from "../components/card";
import Data from "../data";
export default function ShopWishlist() {
  const { wishlist, RemoveFromWishlist } = useContext(WishlistContext);
  const { addToCard } = useContext(CardContext);
  const hasPrev = Data.prevprice > Data.price;

  const discount = (item) => {
    const hasPrev = item.prevprice > item.price;

    return hasPrev ? Math.round((1 - item.price / item.prevprice) * 100) : 0;
  };
  return (
    <>
      <div className="container mt-5">
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
              <span className="font-md-bold">Price</span>
            </div>
          </div>

          {/* Stock */}
          <div className="col-6 col-md-1 text-center">
            <div className="py-2">
              <span className="font-md-bold">Stock</span>
            </div>
          </div>

          {/* Action */}
          <div className="col-6 col-md-2 text-center">
            <div className="py-2">
              <span className="font-md-bold">Action</span>
            </div>
          </div>

          {/* Remove */}
          <div className="col-6 col-md-1 text-center">
            <div className="py-2">
              <span className="font-md-bold">Remove</span>
            </div>
          </div>
        </div>

        {/* ================= PRODUCTS ================= */}

        {wishlist.length > 0 ? (
          wishlist.map((product) => (
            <div
              className="row align-items-center my-3 wishlist-product"
              key={product.id}
            >
              {/* ================= PRODUCT ================= */}
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
                <div className="wishlist-stock">In Stock</div>
              </div>

              {/* ================= ACTION ================= */}
              <div className="col-6 col-md-2 text-center">
                <button
                  className="btn wishlist-cart-btn"
                  onClick={() => addToCard(product)}
                >
                  Add to Cart
                </button>
              </div>

              {/* ================= REMOVE ================= */}
              <div className="col-6 col-md-1 text-center">
                <button
                  className="wishlist-remove"
                  onClick={() => RemoveFromWishlist(product.id)}
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

            <h4>Your wishlist is empty</h4>

            <p>Add some products to your wishlist.</p>
          </div>
        )}
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
              <h4>Recently viewed itemsq</h4>
            </div>

            <div className="row justify-content-between">
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
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
// data.map((item) => <Card key={item.id} product={item} />)
