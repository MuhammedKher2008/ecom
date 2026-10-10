import { useContext, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CardContext } from "../context/cartContext";
import s22ultra from "../assets/s22ultra.jpg";
import s22ultra2 from "../assets/s22ultra2.jpg";
import s22ultra3 from "../assets/s22ultra3.jpg";
import s22ultra4 from "../assets/s22ultra4.jpg";
import s22ultra5 from "../assets/s22ultra5.jpg";
import sp2 from "../assets/sp2.png"; // kendi dosya adların
import sp3 from "../assets/sp3.png";
import Data from "../Data"; // yolu düzelt
import Card from "../components/Card"; // yolu düzelt

/* ---------- Sabitler ---------- */
const product = {
  id: 204,
  title: 'Samsung 36" French door 28 cu. ft. Smart Energy Star Refrigerator',
  brand: "Ecom Tech",
  sku: "EcomTech12321",
  price: 2856.3,
  oldPrice: 3225.6,
  discount: 17,
  reviews: 65,
  image: s22ultra,
  images: [s22ultra, s22ultra2, s22ultra3, s22ultra4, s22ultra5],
  bullets: [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    "Nulla sit amet diam elementum, vehicula elit nec, accumsan velit.",
    "Integer consectetur lacus nec vestibulum auctor.",
    "Nulla suscipit tellus vel sem rhoncus auctor.",
  ],
  category: "Smartphones",
  tags: "Blue, Smartphone",
  description: [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
  ],
};

const fbtExtra = [
  {
    id: 102,
    title: "Apple AirPods Pro, Active Noise Cancellation, Custom Fit",
    price: 197,
    image: sp3,
  },
  {
    id: 103,
    title:
      'Apple iMac 24" All-In-One Computer, Apple M1, 8GB RAM, 512GB SSD, macOS Big Sur, Green, MGPJ3LL/A',
    price: 1599,
    image: sp2,
  },
];

const TABS = [
  "Description",
  "Specification",
  "Additional information",
  "Reviews (2)",
  "Vendor",
];

const money = (n) =>
  `$${Number(n).toLocaleString("en-US", { minimumFractionDigits: 2 })}`;

// Projende ortak bir discount varsa onu import edip bunu sil
const discount = (item) => Math.round((1 - item.price / item.prevprice) * 100);

/* ---------- Hover zoom ---------- */
function ZoomImage({ src, alt, scale = 2.5 }) {
  const imgRef = useRef(null);
  const onMove = (e) => {
    const r = e.currentTarget.getBoundingClientRect();
    imgRef.current.style.transformOrigin = `${((e.clientX - r.left) / r.width) * 100}% ${((e.clientY - r.top) / r.height) * 100}%`;
  };
  return (
    <div
      className="zoom-box"
      onMouseEnter={() => (imgRef.current.style.transform = `scale(${scale})`)}
      onMouseMove={onMove}
      onMouseLeave={() => (imgRef.current.style.transform = "scale(1)")}
    >
      <img ref={imgRef} src={src} alt={alt} draggable={false} />
    </div>
  );
}

export default function ProductPage4() {
  const { addToCard } = useContext(CardContext);
  const navigate = useNavigate();

  const [active, setActive] = useState(0);
  const [qty, setQty] = useState(1);
  const [tab, setTab] = useState(0);
  const [expanded, setExpanded] = useState(false);

  const fbtItems = [product, ...fbtExtra];
  const [checked, setChecked] = useState(fbtItems.map((i) => i.id));
  const toggleChecked = (id) =>
    setChecked((p) =>
      p.includes(id) ? p.filter((x) => x !== id) : [...p, id],
    );
  const fbtSelected = fbtItems.filter((i) => checked.includes(i.id));
  const fbtTotal = fbtSelected.reduce((sum, i) => sum + i.price, 0);
  const addFbt = () => fbtSelected.forEach((i) => addToCard(i));

  const addProduct = () => {
    for (let i = 0; i < qty; i++) addToCard(product);
  };
  const buyNow = () => {
    addProduct();
    navigate("/checkout"); // route'unu düzelt
  };

  return (
    <>
      <div className="pd4-wrap">
        <div className="pd4-top">
          {/* ---------- Thumbs ---------- */}
          <div className="pd4-thumbs">
            {product.images.map((src, i) => (
              <button
                key={i}
                className="pd4-thumb"
                onClick={() => setActive(i)}
              >
                <img src={src} alt="" />
              </button>
            ))}
          </div>

          {/* ---------- Main ---------- */}
          <div className="pd4-main">
            <span className="pd4-badge">-{product.discount}%</span>
            <ZoomImage src={product.images[active]} alt={product.title} />
          </div>

          {/* ---------- Info ---------- */}
          <div className="pd4-info">
            <h1 className="pd4-title">{product.title}</h1>

            <div className="pd4-meta">
              <div className="pd4-by">
                by{" "}
                <a href="#" className="pd4-brand">
                  {product.brand}
                </a>
              </div>
              <div className="pd4-stars">
                {[...Array(5)].map((_, i) => (
                  <i key={i} className="bi bi-star-fill"></i>
                ))}
                <span>({product.reviews})</span>
              </div>
            </div>

            <div className="pd4-price">
              ${product.price} <del>${product.oldPrice}</del>
            </div>

            <ul className="pd4-list">
              {product.bullets.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>

            <div className="pd4-label">Quantity</div>
            <div className="pd4-buy-row">
              <div className="pd4-qty">
                <button onClick={() => setQty((q) => Math.max(1, q - 1))}>
                  <i className="bi bi-dash-lg"></i>
                </button>
                <span>{qty}</span>
                <button onClick={() => setQty((q) => q + 1)}>
                  <i className="bi bi-plus-lg"></i>
                </button>
              </div>
              <button className="pd4-btn" onClick={addProduct}>
                Add to cart
              </button>
              <button className="pd4-btn primary" onClick={buyNow}>
                Buy now
              </button>
            </div>

            <div className="pd4-actions">
              <button className="pd4-act">
                <span className="pd4-act-ico">
                  <i className="bi bi-suit-heart-fill"></i>
                </span>
                Add to Wish list
              </button>
              <button className="pd4-act">
                <span className="pd4-act-ico">
                  <i className="bi bi-intersect"></i>
                </span>
                Add to Compare
              </button>
            </div>

            <div className="pd4-meta2">
              <div>SKU: {product.sku}</div>
              <div>Category: {product.category}</div>
              <div>Tags: {product.tags}</div>
            </div>

            <a href="#" className="pd4-compare">
              Compare with similar items
            </a>
          </div>
        </div>

        {/* ================= FREQUENTLY BOUGHT TOGETHER ================= */}
        <h2 className="pd-h2">Frequently Bought Together</h2>
        <div className="fbt-row">
          {fbtItems.map((it, i) => (
            <div className="fbt-item" key={it.id}>
              <div className="fbt-box">
                <img src={it.image} alt={it.title} />
              </div>
              {i < fbtItems.length - 1 && <span className="fbt-plus">+</span>}
            </div>
          ))}
          <div className="fbt-total">
            <div className="fbt-price">
              ${Number(fbtTotal.toFixed(2))}{" "}
              <span>({fbtSelected.length} items)</span>
            </div>
            <button className="pd-btn fbt-btn" onClick={addFbt}>
              Add To Cart
            </button>
          </div>
        </div>

        <ul className="fbt-list">
          {fbtItems.map((it, i) => (
            <li key={it.id} onClick={() => toggleChecked(it.id)}>
              <i
                className={`bi ${checked.includes(it.id) ? "bi-check2-square" : "bi-square"}`}
              ></i>
              <span>
                {i === 0 && <b>This item:</b>}
                {it.title} - {money(it.price)}
              </span>
            </li>
          ))}
        </ul>

        {/* ================= TABS ================= */}
        <div className="pd-tabs">
          {TABS.map((t, i) => (
            <button
              key={t}
              className={i === tab ? "active" : ""}
              onClick={() => setTab(i)}
            >
              {t}
            </button>
          ))}
        </div>

        <div className={`pd-desc ${expanded ? "open" : ""}`}>
          {tab === 0 ? (
            product.description.map((p, i) => <p key={i}>{p}</p>)
          ) : (
            <p>{TABS[tab]} content goes here.</p>
          )}
        </div>
        <button className="pd-more" onClick={() => setExpanded((v) => !v)}>
          {expanded ? "Less Details" : "More Details"}
        </button>
      </div>
      {/* ← pd4-wrap burada kapanıyor */}

      {/* ================= YOU MAY ALSO LIKE / RECENTLY VIEWED ================= */}
      <div className="container pd3-more">
        <div className="row">
          <div className="col-md-12">
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
          <div className="col-md-12">
            <div className="row">
              <h4>Recently viewed items</h4>
            </div>
            <div className="row justify-content-between">
              {Data.slice(0, 4).map((item) => (
                <div className="col-12 col-sm-6 col-md-3 mb-3" key={item.id}>
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
