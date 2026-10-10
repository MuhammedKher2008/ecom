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

export default function ShopFullWidth() {
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
        <div className="col-md-12 ">
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
