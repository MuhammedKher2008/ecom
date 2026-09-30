import "../app.css";
import { useState } from "react";
import DoubleRange from "../components/Dobulerange";
import ColorPicker from "../components/ColorPicker";
import bgtopsell from "../assets/bg-topsell.png";
import imgsp3 from "../assets/imgsp3.png";
import Card from "../components/card";
import data from "../data";
import shopgrid from "../assets/shop-grid-banner-image.png";

export default function ShopGrid() {
  const [range, setRange] = useState([0, 300]);
  const [color, setColor] = useState("Red");

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-3">
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
              <li
                className="list-group-item product-item"
                style={{ border: "none" }}
              >
                <a
                  className="text-decoration-none product-category-item"
                  href="#"
                >
                  Computers & Laptop
                </a>
                <span className="product-list-item-number">09</span>
              </li>
              <li
                className="list-group-item product-item"
                style={{ border: "none" }}
              >
                <a
                  className="text-decoration-none product-category-item"
                  href="#"
                >
                  Electric accessories
                </a>
                <span className="product-list-item-number">09</span>
              </li>
              <li
                className="list-group-item product-item"
                style={{ border: "none" }}
              >
                <a
                  className="text-decoration-none product-category-item"
                  href="#"
                >
                  Mainboard & CPU
                </a>
                <span className="product-list-item-number">09</span>
              </li>
              <li
                className="list-group-item product-item"
                style={{ border: "none" }}
              >
                <a
                  className="text-decoration-none product-category-item"
                  href="#"
                >
                  Mouse & Keyboard
                </a>
                <span className="product-list-item-number">09</span>
              </li>
              <li
                className="list-group-item product-item"
                style={{ border: "none" }}
              >
                <a
                  className="text-decoration-none product-category-item"
                  href="#"
                >
                  Wired Headphone
                </a>
                <span className="product-list-item-number">09</span>
              </li>
              <li
                className="list-group-item product-item"
                style={{ border: "none" }}
              >
                <a
                  className="text-decoration-none product-category-item"
                  href="#"
                >
                  Gaming Gadgets
                </a>
                <span className="product-list-item-number">09</span>
              </li>
              <li
                className="list-group-item product-item"
                style={{ border: "none" }}
              >
                <a
                  className="text-decoration-none product-category-item"
                  href="#"
                >
                  Smart Watches
                </a>
                <span className="product-list-item-number">09</span>
              </li>
              <li
                className="list-group-item product-item"
                style={{ border: "none" }}
              >
                <a
                  className="text-decoration-none product-category-item"
                  href="#"
                >
                  Cell Phones
                </a>
                <span className="product-list-item-number">09</span>
              </li>
              <li
                className="list-group-item product-item"
                style={{ border: "none" }}
              >
                <a
                  className="text-decoration-none product-category-item"
                  href="#"
                >
                  Headphone
                </a>
                <span className="product-list-item-number">09</span>
              </li>
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
              <li
                className="list-group-item product-filter-item"
                style={{ border: "none" }}
              >
                <span>
                  <input className="form-check-input mx-2" type="checkbox" />
                  <a
                    className="text-decoration-none product-filter-item"
                    href="#"
                  >
                    Free-$100
                  </a>
                </span>
                <span className="product-list-item-number">145</span>
              </li>
              <li
                className="list-group-item product-filter-item"
                style={{ border: "none" }}
              >
                <span>
                  <input className="form-check-input mx-2" type="checkbox" />
                  <a
                    className="text-decoration-none product-filter-item"
                    href="#"
                  >
                    $100-$200
                  </a>
                </span>
                <span className="product-list-item-number">56</span>
              </li>
              <li
                className="list-group-item product-filter-item"
                style={{ border: "none" }}
              >
                <span>
                  <input className="form-check-input mx-2" type="checkbox" />
                  <a
                    className="text-decoration-none product-filter-item"
                    href="#"
                  >
                    $200-$400
                  </a>
                </span>
                <span className="product-list-item-number">23</span>
              </li>
              <li
                className="list-group-item product-filter-item"
                style={{ border: "none" }}
              >
                <span>
                  <input className="form-check-input mx-2" type="checkbox" />
                  <a
                    className="text-decoration-none product-filter-item"
                    href="#"
                  >
                    $400-$600
                  </a>
                </span>
                <span className="product-list-item-number">43</span>
              </li>
              <li
                className="list-group-item product-filter-item"
                style={{ border: "none" }}
              >
                <span>
                  <input className="form-check-input mx-2" type="checkbox" />
                  <a
                    className="text-decoration-none product-filter-item"
                    href="#"
                  >
                    $600-$800
                  </a>
                </span>
                <span className="product-list-item-number">65</span>
              </li>
              <li
                className="list-group-item product-filter-item"
                style={{ border: "none" }}
              >
                <span>
                  <input className="form-check-input mx-2" type="checkbox" />
                  <a
                    className="text-decoration-none product-filter-item"
                    href="#"
                  >
                    over $1000
                  </a>
                </span>
                <span className="product-list-item-number">56</span>
              </li>
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
              <li
                className="list-group-item product-filter-item"
                style={{ border: "none" }}
              >
                <span>
                  <input className="form-check-input mx-2" type="checkbox" />
                  <a
                    className="text-decoration-none product-filter-item"
                    href="#"
                  >
                    Apple
                  </a>
                </span>
                <span className="product-list-item-number">12</span>
              </li>
              <li
                className="list-group-item product-filter-item"
                style={{ border: "none" }}
              >
                <span>
                  <input className="form-check-input mx-2" type="checkbox" />
                  <a
                    className="text-decoration-none product-filter-item"
                    href="#"
                  >
                    Sony
                  </a>
                </span>
                <span className="product-list-item-number">34</span>
              </li>
              <li
                className="list-group-item product-filter-item"
                style={{ border: "none" }}
              >
                <span>
                  <input className="form-check-input mx-2" type="checkbox" />
                  <a
                    className="text-decoration-none product-filter-item"
                    href="#"
                  >
                    Toshiba
                  </a>
                </span>
                <span className="product-list-item-number">56</span>
              </li>
              <li
                className="list-group-item product-filter-item"
                style={{ border: "none" }}
              >
                <span>
                  <input className="form-check-input mx-2" type="checkbox" />
                  <a
                    className="text-decoration-none product-filter-item"
                    href="#"
                  >
                    Assus
                  </a>
                </span>
                <span className="product-list-item-number">78</span>
              </li>
              <li
                className="list-group-item product-filter-item"
                style={{ border: "none" }}
              >
                <span>
                  <input className="form-check-input mx-2" type="checkbox" />
                  <a
                    className="text-decoration-none product-filter-item"
                    href="#"
                  >
                    Samsung
                  </a>
                </span>
                <span className="product-list-item-number">24</span>
              </li>
            </ul>

            <p
              className="px-3 pt-3"
              style={{
                color: "#425A8B",
                fontSize: "16px",
                fontWeight: "bold",
              }}
            >
              colors
            </p>

            <div className="row p-3">
              <div className="col-md-12 ">
                <ColorPicker className="" value={color} onChange={setColor} />
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
                                    Apple
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
                                    Samsung
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
                                    Baseus
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
                                    Remax
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
                                    Handtown
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
                                    Elecom
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
                                    Razer
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
                                    Auto Focus
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
                                    Nillkin
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
                                    Logitech
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
                                    ChromeBook
                                  </a>
                                </span>
                              </li>
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
                                  <li
                                    className="list-group-item product-filter-item"
                                    style={{ border: "none" }}
                                  >
                                    <span>
                                      <a
                                        className="text-decoration-none product-filter-item"
                                        href="#"
                                      >
                                        <i class="bi bi-star-fill star"></i>
                                        <i class="bi bi-star-fill star"></i>
                                        <i class="bi bi-star-fill star"></i>
                                        <i class="bi bi-star-fill star"></i>
                                        <i class="bi bi-star-fill star"></i>
                                      </a>
                                      (5) star
                                    </span>
                                  </li>
                                  <li
                                    className="list-group-item product-filter-item"
                                    style={{ border: "none" }}
                                  >
                                    <span>
                                      <a
                                        className="text-decoration-none product-filter-item"
                                        href="#"
                                      >
                                        <i class="bi bi-star-fill star"></i>
                                        <i class="bi bi-star-fill star"></i>
                                        <i class="bi bi-star-fill star"></i>
                                        <i class="bi bi-star-fill star"></i>
                                      </a>
                                      (4) star
                                    </span>
                                  </li>
                                  <li
                                    className="list-group-item product-filter-item"
                                    style={{ border: "none" }}
                                  >
                                    <span>
                                      <a
                                        className="text-decoration-none product-filter-item"
                                        href="#"
                                      >
                                        <i class="bi bi-star-fill star"></i>
                                        <i class="bi bi-star-fill star"></i>
                                        <i class="bi bi-star-fill star"></i>
                                      </a>
                                      (3) star
                                    </span>
                                  </li>
                                  <li
                                    className="list-group-item product-filter-item"
                                    style={{ border: "none" }}
                                  >
                                    <span>
                                      <a
                                        className="text-decoration-none product-filter-item"
                                        href="#"
                                      >
                                        <i class="bi bi-star-fill star"></i>
                                        <i class="bi bi-star-fill star"></i>
                                      </a>
                                      (2) star
                                    </span>
                                  </li>
                                  <li
                                    className="list-group-item product-filter-item"
                                    style={{ border: "none" }}
                                  >
                                    <span>
                                      <a
                                        className="text-decoration-none product-filter-item"
                                        href="#"
                                      >
                                        <i class="bi bi-star-fill star"></i>
                                      </a>
                                      (1) star
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
                  <i class="bi bi-chevron-left"></i>{" "}
                </button>

                <button
                  className="btn carouselbtn"
                  type="button"
                  data-bs-target="#carouselExampleControls"
                  data-bs-slide="next"
                >
                  <i class="bi bi-chevron-right"></i>{" "}
                </button>
              </div>
            </div>

            <div
              id="carouselExampleControls"
              className="carousel slide"
              data-bs-ride="carousel"
            >
              <div className="carousel-inner">
                <div className="carousel-item active my-3">
                  <div className="row my-3">
                    <div className="col-md-4">
                      <img className="img-fluid" src={imgsp3} alt="img" />
                    </div>

                    <div className="col-md-8">
                      <h6 className="bs-title">
                        HP Slim Desktop, Intel Celeron J4025, 4GB RAM
                      </h6>

                      <i className="bi bi-star-fill star"></i>
                      <i className="bi bi-star-fill star"></i>
                      <i className="bi bi-star-fill star"></i>
                      <i className="bi bi-star-fill star"></i>
                      <i className="bi bi-star-fill star"></i>

                      <span className="bs-raiting">(65)</span>

                      <div className="mt-2">
                        <span className="bs-price">2290$</span>
                        <del className="ms-2">187$</del>
                      </div>
                    </div>
                  </div>
                  <div className="row my-3">
                    <div className="col-md-4">
                      <img className="img-fluid" src={imgsp3} alt="img" />
                    </div>

                    <div className="col-md-8">
                      <h6 className="bs-title">
                        HP Slim Desktop, Intel Celeron J4025, 4GB RAM
                      </h6>

                      <i className="bi bi-star-fill star"></i>
                      <i className="bi bi-star-fill star"></i>
                      <i className="bi bi-star-fill star"></i>
                      <i className="bi bi-star-fill star"></i>
                      <i className="bi bi-star-fill star"></i>

                      <span className="bs-raiting">(65)</span>

                      <div className="mt-2">
                        <span className="bs-price">2290$</span>
                        <del className="ms-2">187$</del>
                      </div>
                    </div>
                  </div>
                  <div className="row my-3">
                    <div className="col-md-4">
                      <img className="img-fluid" src={imgsp3} alt="img" />
                    </div>

                    <div className="col-md-8">
                      <h6 className="bs-title">
                        HP Slim Desktop, Intel Celeron J4025, 4GB RAM
                      </h6>

                      <i className="bi bi-star-fill star"></i>
                      <i className="bi bi-star-fill star"></i>
                      <i className="bi bi-star-fill star"></i>
                      <i className="bi bi-star-fill star"></i>
                      <i className="bi bi-star-fill star"></i>

                      <span className="bs-raiting">(65)</span>

                      <div className="mt-2">
                        <span className="bs-price">2290$</span>
                        <del className="ms-2">187$</del>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="carousel-item active my-3">
                  <div className="row my-3">
                    <div className="col-md-4">
                      <img className="img-fluid" src={imgsp3} alt="img" />
                    </div>

                    <div className="col-md-8">
                      <h6 className="bs-title">
                        HP Slim Desktop, Intel Celeron J4025, 4GB RAM
                      </h6>

                      <i className="bi bi-star-fill star"></i>
                      <i className="bi bi-star-fill star"></i>
                      <i className="bi bi-star-fill star"></i>
                      <i className="bi bi-star-fill star"></i>
                      <i className="bi bi-star-fill star"></i>

                      <span className="bs-raiting">(65)</span>

                      <div className="mt-2">
                        <span className="bs-price">2290$</span>
                        <del className="ms-2">187$</del>
                      </div>
                    </div>
                  </div>
                  <div className="row my-3">
                    <div className="col-md-4">
                      <img className="img-fluid" src={imgsp3} alt="img" />
                    </div>

                    <div className="col-md-8">
                      <h6 className="bs-title">
                        HP Slim Desktop, Intel Celeron J4025, 4GB RAM
                      </h6>

                      <i className="bi bi-star-fill star"></i>
                      <i className="bi bi-star-fill star"></i>
                      <i className="bi bi-star-fill star"></i>
                      <i className="bi bi-star-fill star"></i>
                      <i className="bi bi-star-fill star"></i>

                      <span className="bs-raiting">(65)</span>

                      <div className="mt-2">
                        <span className="bs-price">2290$</span>
                        <del className="ms-2">187$</del>
                      </div>
                    </div>
                  </div>
                  <div className="row my-3">
                    <div className="col-md-4">
                      <img className="img-fluid" src={imgsp3} alt="img" />
                    </div>

                    <div className="col-md-8">
                      <h6 className="bs-title">
                        HP Slim Desktop, Intel Celeron J4025, 4GB RAM
                      </h6>

                      <i className="bi bi-star-fill star"></i>
                      <i className="bi bi-star-fill star"></i>
                      <i className="bi bi-star-fill star"></i>
                      <i className="bi bi-star-fill star"></i>
                      <i className="bi bi-star-fill star"></i>

                      <span className="bs-raiting">(65)</span>

                      <div className="mt-2">
                        <span className="bs-price">2290$</span>
                        <del className="ms-2">187$</del>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="carousel-item active my-3">
                  <div className="row my-3">
                    <div className="col-md-4">
                      <img className="img-fluid" src={imgsp3} alt="img" />
                    </div>

                    <div className="col-md-8">
                      <h6 className="bs-title">
                        HP Slim Desktop, Intel Celeron J4025, 4GB RAM
                      </h6>

                      <i className="bi bi-star-fill star"></i>
                      <i className="bi bi-star-fill star"></i>
                      <i className="bi bi-star-fill star"></i>
                      <i className="bi bi-star-fill star"></i>
                      <i className="bi bi-star-fill star"></i>

                      <span className="bs-raiting">(65)</span>

                      <div className="mt-2">
                        <span className="bs-price">2290$</span>
                        <del className="ms-2">187$</del>
                      </div>
                    </div>
                  </div>
                  <div className="row my-3">
                    <div className="col-md-4">
                      <img className="img-fluid" src={imgsp3} alt="img" />
                    </div>

                    <div className="col-md-8">
                      <h6 className="bs-title">
                        HP Slim Desktop, Intel Celeron J4025, 4GB RAM
                      </h6>

                      <i className="bi bi-star-fill star"></i>
                      <i className="bi bi-star-fill star"></i>
                      <i className="bi bi-star-fill star"></i>
                      <i className="bi bi-star-fill star"></i>
                      <i className="bi bi-star-fill star"></i>

                      <span className="bs-raiting">(65)</span>

                      <div className="mt-2">
                        <span className="bs-price">2290$</span>
                        <del className="ms-2">187$</del>
                      </div>
                    </div>
                  </div>
                  <div className="row my-3">
                    <div className="col-md-4">
                      <img className="img-fluid" src={imgsp3} alt="img" />
                    </div>

                    <div className="col-md-8">
                      <h6 className="bs-title">
                        HP Slim Desktop, Intel Celeron J4025, 4GB RAM
                      </h6>

                      <i className="bi bi-star-fill star"></i>
                      <i className="bi bi-star-fill star"></i>
                      <i className="bi bi-star-fill star"></i>
                      <i className="bi bi-star-fill star"></i>
                      <i className="bi bi-star-fill star"></i>

                      <span className="bs-raiting">(65)</span>

                      <div className="mt-2">
                        <span className="bs-price">2290$</span>
                        <del className="ms-2">187$</del>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <img className="img-fluid my-5" src={bgtopsell} alt="" />
        </div>
        <div className="col-md-9 ">
          <img src={shopgrid} className="img-fluid " alt="" />

          <div class="d-flex mt-5 flex-wrap align-items-center gap-3 pb-3 border-bottom text-secondary-emphasis">
            <button class="btn tb-btn px-3 py-2">
              <i class="bi bi-sliders me-2"></i>All Filters
            </button>

            <div class="ms-auto d-flex flex-wrap align-items-center gap-3">
              <span>Showing 1–16 of 17 results</span>
              <div class="tb-divider d-none d-md-block"></div>

              <div class="dropdown d-flex align-items-center gap-2">
                <span class="tb-label">Sort by:</span>
                <button
                  class="tb-select dropdown-toggle"
                  data-bs-toggle="dropdown"
                >
                  Latest products
                </button>
                <ul class="dropdown-menu">
                  <li>
                    <a class="dropdown-item" href="#">
                      Latest products
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Price: low to high
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Price: high to low
                    </a>
                  </li>
                </ul>
              </div>
              <div class="tb-divider d-none d-md-block"></div>

              <div class="dropdown d-flex align-items-center gap-2">
                <span class="tb-label">Show</span>
                <button
                  class="tb-select dropdown-toggle"
                  data-bs-toggle="dropdown"
                >
                  30 items
                </button>
                <ul class="dropdown-menu">
                  <li>
                    <a class="dropdown-item" href="#">
                      15 items
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      30 items
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      60 items
                    </a>
                  </li>
                </ul>
              </div>
              <div class="tb-divider d-none d-md-block"></div>

              <div class="d-flex gap-2">
                <button class="tb-view active">
                  <i class="bi bi-grid"></i>
                </button>
                <button class="tb-view">
                  <i class="bi bi-list-ul"></i>
                </button>
              </div>
            </div>
          </div>
          <div className="row">
             {data.slice(0, 24).map((item) => (
              <Card key={item.id} product={item} />

              ))};
          </div>
        </div>
      </div>
    </div>
  );
}
