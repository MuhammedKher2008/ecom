import "../app.css";
import { useState } from "react";
import ColorPicker from "../components/ColorPicker";
import bgtopsell from "../assets/bg-topsell.png";
import Card from "../components/card";
import data from "../data";
import shopgrid from "../assets/shop-grid-banner-image.png";
import { fmt } from "../components/card";
import Card2 from "../components/card2";
import ProductCarousel from "../components/productCarousel";

export default function ShopRightSidebar() {
  const [color, setColor] = useState("Red");
  const [sortType, setSortType] = useState("latest");
  const [showitems, setShowItems] = useState(30);
  const [loadingId, setLoadingId] = useState(null);
  const [selectedPrices, setSelectedPrices] = useState([]);
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [selectedRatings, setSelectedRatings] = useState([]);
  const [selectedColors, setSelectedColors] = useState([]);
  const [cardType, setCardType] = useState("grid");

  const handleAddToCart = (product) => {
    setLoadingId(product.id); // loading başla

    setTimeout(() => {
      addToCard(product); // sepete ekle
      setLoadingId(null); // loading bitir
    }, 1000); // 1 saniye
  };

  const categories = data.reduce((acc, product) => {
    const category = product.category;

    if (!acc[category]) {
      acc[category] = 0;
    }

    acc[category]++;

    return acc;
  }, {});

  const brands = [...new Set(data.map((product) => product.brand))];
  const handleBrandFilter = (brand) => {
    setSelectedBrands((prev) => {
      if (prev.includes(brand)) {
        return prev.filter((item) => item !== brand);
      }

      return [...prev, brand];
    });
  };
  const handleColorFilter = (color) => {
    setSelectedColors((prev) => {
      if (prev.includes(color)) {
        return prev.filter((item) => item !== color);
      }

      return [...prev, color];
    });
  };
  const handleRatingFilter = (rating) => {
    setSelectedRatings((prev) => {
      if (prev.includes(rating)) {
        return prev.filter((item) => item !== rating);
      }

      return [...prev, rating];
    });
  };
  const priceRanges = [
    {
      label: "Free-$100",
      min: 0,
      max: 100,
    },
    {
      label: "$100-$200",
      min: 100,
      max: 200,
    },
    {
      label: "$200-$400",
      min: 200,
      max: 400,
    },
    {
      label: "$400-$600",
      min: 400,
      max: 600,
    },
    {
      label: "$600-$800",
      min: 600,
      max: 800,
    },
    {
      label: "over $1000",
      min: 1000,
      max: Infinity,
    },
  ];
  const filteredData = data.filter((product) => {
    const priceMatch =
      selectedPrices.length === 0 ||
      selectedPrices.some((label) => {
        const selectedRange = priceRanges.find(
          (range) => range.label === label,
        );

        if (!selectedRange) return false;

        return (
          product.price >= selectedRange.min &&
          product.price < selectedRange.max
        );
      });
    const colors = ["Red", "Blue", "Green", "Black", "White"];
    const brandMatch =
      selectedBrands.length === 0 || selectedBrands.includes(product.brand);

    const ratingMatch =
      selectedRatings.length === 0 || selectedRatings.includes(product.rating);

    const colorMatch =
      selectedColors.length === 0 || selectedColors.includes(product.color);

    return priceMatch && brandMatch && ratingMatch && colorMatch;
  });
  const sortedData = [...filteredData].sort((a, b) => {
    if (sortType === "lowToHigh") {
      return a.price - b.price;
    }

    if (sortType === "highToLow") {
      return b.price - a.price;
    }

    return 0;
  });

  const handlePriceFilter = (priceRange) => {
    setSelectedPrices((prev) => {
      if (prev.includes(priceRange)) {
        return prev.filter((item) => item !== priceRange);
      }

      return [...prev, priceRange];
    });
  };

  return (
    <div className="container mt-5">
      <ProductCarousel products={sortedData} />
      <div className="row">
        <div className="col-md-3">
          <div className="sidebar-ads">
            <div className="bg-electronic">
              <span class="big-deal mb-5">Big deal</span>
              <h4 class="font-25">Electronic</h4>
              <p class="font-16 color-brand-3 mb-5">
                Hot devices, Latest trending
              </p>
            </div>
          </div>
          <div
            className="product-categorys"
            style={{ border: "1px solid #DDE4F0", borderRadius: "5px" }}
          >
            <h6
              className="p-3"
              style={{
                color: "#425A8B",
                fontSize: "20px",
                fontWeight: "bold",
                borderBottom: "1px solid #DDE4F0",
              }}
            >
              product categorys
            </h6>

            <ul className="list-group list-group-flush my-3">
              {Object.entries(categories).map(([category, count]) => (
                <li
                  className="list-group-item product-item"
                  style={{ border: "none" }}
                  key={category}
                >
                  <a
                    className="text-decoration-none product-category-item"
                    href="#"
                  >
                    {category}
                  </a>

                  <span className="product-list-item-number">{count}</span>
                </li>
              ))}
            </ul>
          </div>
          <div
            className="product-filter"
            style={{ border: "1px solid #DDE4F0", borderRadius: "5px" }}
          >
            <h6
              className="p-3"
              style={{
                color: "#425A8B",
                fontSize: "20px",
                fontWeight: "bold",
                borderBottom: "1px solid #DDE4F0",
              }}
            >
              Products Filter{" "}
            </h6>

            <ul className="list-group list-group-flush my-3">
              {priceRanges.map((range) => {
                const count = filteredData.filter(
                  (product) =>
                    product.price >= range.min && product.price < range.max,
                ).length;

                return (
                  <li
                    className="list-group-item product-filter-item"
                    style={{ border: "none" }}
                    key={range.label}
                  >
                    <span>
                      <input
                        className="form-check-input mx-2"
                        type="checkbox"
                        checked={selectedPrices.includes(range.label)}
                        onChange={() => handlePriceFilter(range.label)}
                      />

                      <a
                        className="text-decoration-none product-filter-item"
                        href="#"
                      >
                        {range.label}
                      </a>
                    </span>

                    <span className="product-list-item-number">{count}</span>
                  </li>
                );
              })}
            </ul>

            <p
              className="p-3"
              style={{
                color: "#425A8B",
                fontSize: "16px",
                fontWeight: "bold",
              }}
            >
              brands
            </p>
            <ul className="list-group list-group-flush my-3">
              {brands.map((brand) => (
                <li
                  className="list-group-item product-filter-item"
                  style={{ border: "none" }}
                  key={brand}
                >
                  <span>
                    <input
                      className="form-check-input mx-2"
                      type="checkbox"
                      checked={selectedBrands.includes(brand)}
                      onChange={() => handleBrandFilter(brand)}
                    />

                    <a
                      className="text-decoration-none product-filter-item"
                      href="#"
                      onClick={(e) => e.preventDefault()}
                    >
                      {brand}
                    </a>
                  </span>
                </li>
              ))}
            </ul>

            <p
              className="px-3 pt-3"
              style={{ color: "#425A8B", fontSize: "16px", fontWeight: "bold" }}
            >
              colors
            </p>

            <div className="row p-3">
              <div className="col-md-12">
                <ColorPicker
                  value={selectedColors}
                  onChange={handleColorFilter}
                />
              </div>
            </div>

            <div className="row">
              <div className="col-md-12">
                <button
                  type="button"
                  className="btn more-filter-btn ms-3 mb-3"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                >
                  <i className="bi bi-sliders me-2"></i>
                  More Filters
                </button>

                <div
                  className="modal fade"
                  id="exampleModal"
                  tabIndex="-1"
                  role="dialog"
                  aria-labelledby="exampleModalLabel"
                  aria-hidden="true"
                >
                  <div className="modal-dialog modal-xl" role="document">
                    <div className="modal-content">
                      <div className="modal-header">
                        <span className="modal-label">
                          <i className="bi bi-sliders me-2"></i>
                          <h5 className="modal-title"> More Filters</h5>
                        </span>
                        <button
                          type="button"
                          className="close btn-close"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                        ></button>
                      </div>
                      <div className="modal-body">
                        <div className="row">
                          <div className="col-md-3">
                            <p
                              className="p-3"
                              style={{
                                color: "#425A8B",
                                fontSize: "16px",
                                fontWeight: "bold",
                              }}
                            >
                              brands
                            </p>

                            <ul className="list-group list-group-flush my-3">
                              {brands.map((brand) => (
                                <li
                                  className="list-group-item product-filter-item"
                                  style={{ border: "none" }}
                                  key={brand}
                                >
                                  <span>
                                    <input
                                      className="form-check-input mx-2"
                                      type="checkbox"
                                      checked={selectedBrands.includes(brand)}
                                      onChange={() => handleBrandFilter(brand)}
                                    />

                                    <a
                                      className="text-decoration-none product-filter-item"
                                      href="#"
                                      onClick={(e) => e.preventDefault()}
                                    >
                                      {brand}
                                    </a>
                                  </span>
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div className="col-md-8">
                            <div className="row">
                              <div className="col-12 col-sm-6 col-xl-4">
                                {" "}
                                <p
                                  className="p-3"
                                  style={{
                                    color: "#425A8B",
                                    fontSize: "16px",
                                    fontWeight: "bold",
                                  }}
                                >
                                  Speical Offers
                                </p>
                                <ul className="list-group list-group-flush my-3">
                                  <li
                                    className="list-group-item product-filter-item"
                                    style={{ border: "none" }}
                                  >
                                    <span>
                                      <input
                                        className="form-check-input mx-2"
                                        type="checkbox"
                                      />
                                      <a
                                        className="text-decoration-none product-filter-item"
                                        href="#"
                                      >
                                        On sale
                                      </a>
                                    </span>
                                  </li>
                                  <li
                                    className="list-group-item product-filter-item"
                                    style={{ border: "none" }}
                                  >
                                    <span>
                                      <input
                                        className="form-check-input mx-2"
                                        type="checkbox"
                                      />
                                      <a
                                        className="text-decoration-none product-filter-item"
                                        href="#"
                                      >
                                        FREE shipping
                                      </a>
                                    </span>
                                  </li>
                                  <li
                                    className="list-group-item product-filter-item"
                                    style={{ border: "none" }}
                                  >
                                    <span>
                                      <input
                                        className="form-check-input mx-2"
                                        type="checkbox"
                                      />
                                      <a
                                        className="text-decoration-none product-filter-item"
                                        href="#"
                                      >
                                        big deals
                                      </a>
                                    </span>
                                  </li>
                                  <li
                                    className="list-group-item product-filter-item"
                                    style={{ border: "none" }}
                                  >
                                    <span>
                                      <input
                                        className="form-check-input mx-2"
                                        type="checkbox"
                                      />
                                      <a
                                        className="text-decoration-none product-filter-item"
                                        href="#"
                                      >
                                        Shop Mall
                                      </a>
                                    </span>
                                  </li>
                                </ul>
                              </div>
                              <div className="col-12 col-sm-6 col-xl-4">
                                {" "}
                                <p
                                  className="p-3"
                                  style={{
                                    color: "#425A8B",
                                    fontSize: "16px",
                                    fontWeight: "bold",
                                  }}
                                >
                                  Ordering options
                                </p>
                                <ul className="list-group list-group-flush my-3">
                                  <li
                                    className="list-group-item product-filter-item"
                                    style={{ border: "none" }}
                                  >
                                    <span>
                                      <input
                                        className="form-check-input mx-2"
                                        type="checkbox"
                                      />
                                      <a
                                        className="text-decoration-none product-filter-item"
                                        href="#"
                                      >
                                        Accepts gift cards
                                      </a>
                                    </span>
                                  </li>
                                  <li
                                    className="list-group-item product-filter-item"
                                    style={{ border: "none" }}
                                  >
                                    <span>
                                      <input
                                        className="form-check-input mx-2"
                                        type="checkbox"
                                      />
                                      <a
                                        className="text-decoration-none product-filter-item"
                                        href="#"
                                      >
                                        Customizable
                                      </a>
                                    </span>
                                  </li>
                                  <li
                                    className="list-group-item product-filter-item"
                                    style={{ border: "none" }}
                                  >
                                    <span>
                                      <input
                                        className="form-check-input mx-2"
                                        type="checkbox"
                                      />
                                      <a
                                        className="text-decoration-none product-filter-item"
                                        href="#"
                                      >
                                        Can be gift-wrapped
                                      </a>
                                    </span>
                                  </li>
                                  <li
                                    className="list-group-item product-filter-item"
                                    style={{ border: "none" }}
                                  >
                                    <span>
                                      <input
                                        className="form-check-input mx-2"
                                        type="checkbox"
                                      />
                                      <a
                                        className="text-decoration-none product-filter-item"
                                        href="#"
                                      >
                                        installment 0%
                                      </a>
                                    </span>
                                  </li>
                                </ul>
                              </div>
                              <div className="col-12 col-sm-6 col-xl-4">
                                {" "}
                                <p
                                  className="p-3"
                                  style={{
                                    color: "#425A8B",
                                    fontSize: "16px",
                                    fontWeight: "bold",
                                  }}
                                >
                                  Material
                                </p>
                                <ul className="list-group list-group-flush my-3">
                                  <li
                                    className="list-group-item product-filter-item"
                                    style={{ border: "none" }}
                                  >
                                    <span>
                                      <input
                                        className="form-check-input mx-2"
                                        type="checkbox"
                                      />
                                      <a
                                        className="text-decoration-none product-filter-item"
                                        href="#"
                                      >
                                        Nylon(8)
                                      </a>
                                    </span>
                                  </li>
                                  <li
                                    className="list-group-item product-filter-item"
                                    style={{ border: "none" }}
                                  >
                                    <span>
                                      <input
                                        className="form-check-input mx-2"
                                        type="checkbox"
                                      />
                                      <a
                                        className="text-decoration-none product-filter-item"
                                        href="#"
                                      >
                                        Tempered Glass(5)
                                      </a>
                                    </span>
                                  </li>
                                  <li
                                    className="list-group-item product-filter-item"
                                    style={{ border: "none" }}
                                  >
                                    <span>
                                      <input
                                        className="form-check-input mx-2"
                                        type="checkbox"
                                      />
                                      <a
                                        className="text-decoration-none product-filter-item"
                                        href="#"
                                      >
                                        Liquid Silicone Rubber(5)
                                      </a>
                                    </span>
                                  </li>
                                  <li
                                    className="list-group-item product-filter-item"
                                    style={{ border: "none" }}
                                  >
                                    <span>
                                      <input
                                        className="form-check-input mx-2"
                                        type="checkbox"
                                      />
                                      <a
                                        className="text-decoration-none product-filter-item"
                                        href="#"
                                      >
                                        Aluminium alloy(3)
                                      </a>
                                    </span>
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div className="row ">
                              <div className="col-12 col-sm-6 col-xl-4">
                                {" "}
                                <p
                                  className="p-3"
                                  style={{
                                    color: "#425A8B",
                                    fontSize: "16px",
                                    fontWeight: "bold",
                                  }}
                                >
                                  Rating
                                </p>
                                <ul className="list-group list-group-flush my-3">
                                  {[5, 4, 3, 2, 1].map((rating) => (
                                    <li
                                      key={rating}
                                      className="list-group-item product-filter-item"
                                      style={{ border: "none" }}
                                    >
                                      <span>
                                        <input
                                          className="form-check-input mx-2"
                                          type="checkbox"
                                          checked={selectedRatings.includes(
                                            rating,
                                          )}
                                          onChange={() =>
                                            handleRatingFilter(rating)
                                          }
                                        />

                                        <span>
                                          {[...Array(rating)].map(
                                            (_, index) => (
                                              <i
                                                key={index}
                                                className="bi bi-star-fill star"
                                              ></i>
                                            ),
                                          )}
                                        </span>

                                        <span className="ms-1">
                                          ({rating}) star
                                        </span>
                                      </span>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                              <div className="col-12 col-sm-6 col-xl-4">
                                {" "}
                                <p
                                  className="p-3"
                                  style={{
                                    color: "#425A8B",
                                    fontSize: "16px",
                                    fontWeight: "bold",
                                  }}
                                >
                                  Material
                                </p>
                                <ul className="list-group list-group-flush my-3">
                                  <li
                                    className="list-group-item product-filter-item"
                                    style={{ border: "none" }}
                                  >
                                    <span>
                                      <input
                                        className="form-check-input mx-2"
                                        type="checkbox"
                                      />
                                      <a
                                        className="text-decoration-none product-filter-item"
                                        href="#"
                                      >
                                        Nylon(8)
                                      </a>
                                    </span>
                                  </li>
                                  <li
                                    className="list-group-item product-filter-item"
                                    style={{ border: "none" }}
                                  >
                                    <span>
                                      <input
                                        className="form-check-input mx-2"
                                        type="checkbox"
                                      />
                                      <a
                                        className="text-decoration-none product-filter-item"
                                        href="#"
                                      >
                                        Tempered Glass(5)
                                      </a>
                                    </span>
                                  </li>
                                  <li
                                    className="list-group-item product-filter-item"
                                    style={{ border: "none" }}
                                  >
                                    <span>
                                      <input
                                        className="form-check-input mx-2"
                                        type="checkbox"
                                      />
                                      <a
                                        className="text-decoration-none product-filter-item"
                                        href="#"
                                      >
                                        Liquid Silicone Rubber(5)
                                      </a>
                                    </span>
                                  </li>
                                  <li
                                    className="list-group-item product-filter-item"
                                    style={{ border: "none" }}
                                  >
                                    <span>
                                      <input
                                        className="form-check-input mx-2"
                                        type="checkbox"
                                      />
                                      <a
                                        className="text-decoration-none product-filter-item"
                                        href="#"
                                      >
                                        Aluminium alloy(3)
                                      </a>
                                    </span>
                                  </li>
                                </ul>
                              </div>
                              <div className="col-12 col-sm-6 col-xl-4">
                                {" "}
                                <p
                                  className="p-3"
                                  style={{
                                    color: "#425A8B",
                                    fontSize: "16px",
                                    fontWeight: "bold",
                                  }}
                                >
                                  Product tags
                                </p>
                                <span className="tags  ms-2 my-1">Games</span>
                                <span className="tags mx-2 my-1">
                                  Electronics
                                </span>
                                <span className="tags mx-2 my-1">
                                  Cellphone
                                </span>
                                <span className="tags mx-2 my-1">Indoor</span>
                                <span className="tags mx-2 my-1">Video</span>
                                <span className="tags mx-2 my-1">VGA Card</span>
                                <span className="tags mx-2 my-1">USB</span>
                                <span className="tags mx-2 my-1">
                                  Lightning
                                </span>
                                <span className="tags mx-2 my-1">Camera</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="modal-footer">
                        <button
                          type="button"
                          className="btn btn-text"
                          data-dismiss="modal"
                        >
                          reset
                        </button>
                        <button type="button" className="btn btn-save">
                          Save changes
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="product-tags mt-5">
            <h6
              className="py-3"
              style={{
                color: "#425A8B",
                fontSize: "20px",
                fontWeight: "bold",
                borderBottom: "1px solid #DDE4F0",
              }}
            >
              Product Tags
            </h6>

            <span className="tags mx-2 my-1">Games</span>
            <span className="tags mx-2 my-1">Electronics</span>
            <span className="tags mx-2 my-1">Cellphone</span>
            <span className="tags mx-2 my-1">Indoor</span>
            <span className="tags mx-2 my-1">Video</span>
            <span className="tags mx-2 my-1">VGA Card</span>
            <span className="tags mx-2 my-1">USB</span>
            <span className="tags mx-2 my-1">Lightning</span>
            <span className="tags mx-2 my-1">Camera</span>
            <span className="tags mx-2 my-1">Window</span>
            <span className="tags mx-2 my-1">Air Vent</span>
            <span className="tags mx-2 my-1">Bedroom</span>
            <span className="tags mx-2 my-1">Laptop</span>
            <span className="tags mx-2 my-1">Dashboard</span>
            <span className="tags mx-2 my-1">Keyboard</span>
          </div>
          <div className="product-tags mt-5">
            {/* BAŞLIK + BUTONLAR */}
            <div className="d-flex justify-content-between align-items-center border-bottom">
              <h6
                className="py-3 mb-0"
                style={{
                  color: "#425A8B",
                  fontSize: "20px",
                  fontWeight: "bold",
                }}
              >
                Best seller
              </h6>

              <div>
                <button
                  className="btn carouselbtn"
                  type="button"
                  data-bs-target="#carouselExampleControls"
                  data-bs-slide="prev"
                >
                  <i className="bi bi-chevron-left"></i>{" "}
                </button>

                <button
                  className="btn carouselbtn"
                  type="button"
                  data-bs-target="#carouselExampleControls"
                  data-bs-slide="next"
                >
                  <i className="bi bi-chevron-right"></i>{" "}
                </button>
              </div>
            </div>

            <div
              id="carouselExampleControls"
              className="carousel slide"
              data-bs-ride="carousel"
            >
              <div className="carousel-inner">
                {data.slice(0, 8).map((product) => (
                  <div className="carousel-item active my-3">
                    <div className="row my-3">
                      <div className="col-md-4">
                        <img
                          className="img-fluid"
                          src={product.img}
                          alt="img"
                        />
                      </div>

                      <div className="col-md-8">
                        <h6 className="bs-title">{product.title}</h6>

                        <i className="bi bi-star-fill star"></i>
                        <i className="bi bi-star-fill star"></i>
                        <i className="bi bi-star-fill star"></i>
                        <i className="bi bi-star-fill star"></i>
                        <i className="bi bi-star-fill star"></i>

                        <span className="bs-raiting">({product.raters})</span>

                        <div className="mt-2">
                          <span className="bs-price">
                            ${fmt(product.price)}
                          </span>
                          <del className="ms-2">${fmt(product.prevprice)}</del>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <img className="img-fluid my-5" src={bgtopsell} alt="" />
        </div>
        <div className="col-md-9 ">
          <img src={shopgrid} className="img-fluid " alt="" />

          <div className="d-flex mt-5 flex-wrap align-items-center gap-3 pb-3 border-bottom text-secondary-emphasis">
            <button
              type="button"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
              className="btn tb-btn px-3 py-2"
            >
              <i className="bi bi-sliders me-2"></i>All Filters
            </button>

            <div className="ms-auto d-flex flex-wrap align-items-center gap-3">
              <span>Showing 1–16 of 17 results</span>
              <div className="tb-divider d-none d-md-block"></div>

              <div className="dropdown d-flex align-items-center gap-2">
                <span className="tb-label">Sort by:</span>
                <button
                  className="tb-select dropdown-toggle"
                  data-bs-toggle="dropdown"
                >
                  {sortType === "lowToHigh"
                    ? "Price: low to high"
                    : sortType === "highToLow"
                      ? "Price: high to low"
                      : "Latest products"}
                </button>
                <ul className="dropdown-menu">
                  <li>
                    <button
                      className="dropdown-item"
                      onClick={() => setSortType("latest")}
                    >
                      Latest products
                    </button>
                  </li>

                  <li>
                    <button
                      className="dropdown-item"
                      onClick={() => setSortType("lowToHigh")}
                    >
                      Price: low to high
                    </button>
                  </li>

                  <li>
                    <button
                      className="dropdown-item"
                      onClick={() => setSortType("highToLow")}
                    >
                      Price: high to low
                    </button>
                  </li>
                </ul>
              </div>
              <div className="tb-divider d-none d-md-block"></div>

              <div className="dropdown d-flex align-items-center gap-2">
                <span className="tb-label">Show</span>
                <button
                  className="tb-select dropdown-toggle"
                  data-bs-toggle="dropdown"
                >
                  {showitems} items
                </button>
                <ul className="dropdown-menu">
                  <li>
                    <a
                      className="dropdown-item"
                      href="#"
                      onClick={() => setShowItems(7)}
                    >
                      7 items
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      href="#"
                      onClick={() => setShowItems(15)}
                    >
                      15 items
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      href="#"
                      onClick={() => setShowItems(30)}
                    >
                      30 items
                    </a>
                  </li>
                </ul>
              </div>
              <div className="tb-divider d-none d-md-block"></div>

              <div className="d-flex gap-2">
                <button
                  onClick={() => setCardType("grid")}
                  className="tb-view active"
                >
                  <i className="bi bi-grid"></i>
                </button>
                <button onClick={() => setCardType("list")} className="tb-view">
                  <i className="bi bi-list-ul"></i>
                </button>
              </div>
            </div>
          </div>
          <div className="row">
            {cardType === "grid"
              ? sortedData
                  .slice(0, showitems)
                  .map((item) => <Card key={item.id} product={item} />)
              : sortedData
                  .slice(0, showitems)
                  .map((item) => <Card2 key={item.id} product={item} />)}
          </div>
        </div>{" "}
      </div>
    </div>
  );
}
