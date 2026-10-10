import { useContext, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CardContext } from "../context/cartContext";
import s22ultra from "../assets/s22ultra.jpg";
import s22ultra2 from "../assets/s22ultra2.jpg";
import s22ultra3 from "../assets/s22ultra3.jpg";
import s22ultra4 from "../assets/s22ultra4.jpg";
import s22ultra5 from "../assets/s22ultra5.jpg";
import bgtopsell from "../assets/bg-topsell.png";
import sp2 from "../assets/sp2.png"; // kendi dosya adların
import sp3 from "../assets/sp3.png";
import Data from "../Data"; // yolu düzelt
import Card from "../components/Card"; // yolu düzelt

/* ---------- Sabitler ---------- */
const product = {
  id: 203,
  title:
    "Samsung Galaxy S22 Ultra 5G 128/256GB SM-S906U1 Unlocked Cell Phones All Colors - Good Condition",
  brand: "Ecom Tech",
  sku: "EcomTech13689",
  price: 2856.3,
  oldPrice: 3225.6,
  discount: 17,
  reviews: 65,
  sold: 135,
  stock: 320,
  image: s22ultra,
  images: [s22ultra, s22ultra2, s22ultra3, s22ultra4, s22ultra5],
  features: [
    "8k super steady video",
    "Nightography plus portait mode",
    "50mp photo resolution plus bright display",
    "Adaptive color contrast",
    "premium design & craftmanship",
    "Long lasting battery plus fast charging",
  ],
  colors: [
    { name: "White", img: s22ultra, disabled: true },
    { name: "Phantom Black", img: s22ultra2 },
    { name: "Graphite", img: s22ultra3 },
    { name: "Green", img: s22ultra4 },
    { name: "Pink Gold", img: s22ultra5 },
  ],
  styles: [
    { label: "S22 Ultra", disabled: true },
    { label: "S22" },
    { label: "S22 + Standing Cover" },
  ],
  sizes: [
    { label: "1GB", disabled: true },
    { label: "512 GB" },
    { label: "256 GB" },
    { label: "64GB", disabled: true },
  ],
  category: "Smartphones",
  tags: "Blue,Smartphone",
  description: [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
  ],
};

const perks = [
  { icon: "bi-airplane", t: "Free Delivery", s: "From all orders over $10" },
  { icon: "bi-headset", t: "Support 24/7", s: "Shop with an expert" },
  { icon: "bi-box-seam", t: "Return & Refund", s: "Free return over $200" },
  { icon: "bi-shield-check", t: "Secure payment", s: "100% Protected" },
];

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

const TABS = ["Description", "Specification", "Additional information", "Reviews (2)", "Vendor"];

const money = (n) =>
  `$${Number(n).toLocaleString("en-US", { minimumFractionDigits: 2 })}`;

// Card'larındaki indirim yüzdesi (projende zaten varsa onu import et)
const discount = (item) =>
  Math.round((1 - item.price / item.prevprice) * 100);

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

export default function ProductPage3() {
  const { addToCard } = useContext(CardContext);
  const navigate = useNavigate();

  const [active, setActive] = useState(0);
  const [color, setColor] = useState(4);
  const [style, setStyle] = useState(1);
  const [size, setSize] = useState(1);
  const [qty, setQty] = useState(1);
  const [tab, setTab] = useState(0);
  const [expanded, setExpanded] = useState(false);

  const fbtItems = [product, ...fbtExtra];
  const [checked, setChecked] = useState(fbtItems.map((i) => i.id));
  const toggleChecked = (id) =>
    setChecked((p) => (p.includes(id) ? p.filter((x) => x !== id) : [...p, id]));
  const fbtSelected = fbtItems.filter((i) => checked.includes(i.id));
  const fbtTotal = fbtSelected.reduce((sum, i) => sum + i.price, 0);
  const addFbt = () => fbtSelected.forEach((i) => addToCard(i));

  const soldPct = Math.min(100, (product.sold / product.stock) * 100);

  const buyNow = () => {
    for (let i = 0; i < qty; i++) addToCard(product);
    navigate("/checkout"); // route'unu düzelt
  };

  return (
    <>
      <div className="pd3-wrap">
        <h1 className="pd3-title">{product.title}</h1>

        {/* ---------- Meta satırı ---------- */}
        <div className="pd3-meta">
          <div className="pd3-meta-l">
            <span className="pd3-by">by {product.brand}</span>
            <span className="pd3-stars">
              {[...Array(5)].map((_, i) => (
                <i key={i} className="bi bi-star-fill"></i>
              ))}
              <span>({product.reviews} reviews)</span>
            </span>
            <span className="pd3-sku">
              <b>SKU:</b> <em>{product.sku}</em>
            </span>
          </div>
          <div className="pd3-meta-r">
            <button className="pd3-act">
              <span className="pd3-act-ico"><i className="bi bi-suit-heart-fill"></i></span>
              Add to Wish list
            </button>
            <button className="pd3-act">
              <span className="pd3-act-ico"><i className="bi bi-intersect"></i></span>
              Add to Compare
            </button>
            <div className="pd3-share">
              <b>Share</b>
              <i className="bi bi-facebook"></i>
              <i className="bi bi-pinterest"></i>
              <i className="bi bi-twitter"></i>
              <i className="bi bi-instagram"></i>
            </div>
          </div>
        </div>

        <div className="pd3-top">
          {/* ---------- Sol: galeri + kategori ---------- */}
          <div className="pd3-left">
            <div className="pd3-gallery">
              <div className="pd3-thumbs">
                {product.images.map((src, i) => (
                  <button key={i} className="pd3-thumb" onClick={() => setActive(i)}>
                    <img src={src} alt="" />
                  </button>
                ))}
              </div>
              <div className="pd3-main">
                <span className="pd3-badge">-{product.discount}%</span>
                <ZoomImage src={product.images[active]} alt={product.title} />
              </div>
            </div>
            <div className="pd3-cat">
              <span><b>Category:</b><em>{product.category}</em></span>
              <span><b>Tags:</b><em>{product.tags}</em></span>
            </div>
          </div>

          {/* ---------- Sağ: orta kolon + sidebar ---------- */}
          <div className="pd3-right">
            <div className="pd3-center">
              <div className="pd3-price">
                ${product.price} <del>${product.oldPrice}</del>
              </div>
              <div className="pd3-bar">
                <div style={{ width: `${soldPct}%` }} />
              </div>
              <div className="pd3-sold">Sold: {product.sold}/{product.stock}</div>

              <ul className="pd3-feats">
                {product.features.map((f) => (
                  <li key={f}>{f}</li>
                ))}
              </ul>

              <div className="pd3-label pd3-mt-color">
                Color:<span>{product.colors[color].name}</span>
              </div>
              <div className="pd3-swatches">
                {product.colors.map((c, i) => (
                  <button
                    key={i}
                    disabled={c.disabled}
                    className={`pd3-swatch ${i === color ? "active" : ""}`}
                    onClick={() => setColor(i)}
                  >
                    <img src={c.img} alt={c.name} />
                  </button>
                ))}
              </div>

              <div className="pd3-label pd3-mt-style">
                Style:<span>{product.styles[style].label}</span>
              </div>
              <div className="pd3-opts style">
                {product.styles.map((s, i) => (
                  <button
                    key={s.label}
                    disabled={s.disabled}
                    className={`pd3-opt ${i === style ? "active" : ""}`}
                    onClick={() => setStyle(i)}
                  >
                    {s.label}
                  </button>
                ))}
              </div>

              <div className="pd3-label pd3-mt-size">
                Size:<span>{product.sizes[size].label.replace(" ", "")}</span>
              </div>
              <div className="pd3-opts size">
                {product.sizes.map((s, i) => (
                  <button
                    key={s.label}
                    disabled={s.disabled}
                    className={`pd3-opt ${i === size ? "active" : ""}`}
                    onClick={() => setSize(i)}
                  >
                    {s.label}
                  </button>
                ))}
              </div>

              <div className="pd3-label pd3-mt-qty">Quantity</div>
              <div className="pd3-buy-row">
                <div className="pd3-qty">
                  <button onClick={() => setQty((q) => Math.max(1, q - 1))}>
                    <i className="bi bi-dash-lg"></i>
                  </button>
                  <span>{qty}</span>
                  <button onClick={() => setQty((q) => q + 1)}>
                    <i className="bi bi-plus-lg"></i>
                  </button>
                </div>
                <button className="pd3-btn" onClick={buyNow}>Buy now</button>
              </div>
            </div>

            <aside className="pd3-side">
              <div className="pd3-perks">
                {perks.map((p) => (
                  <div className="pd3-perk" key={p.t}>
                    <i className={`bi ${p.icon}`}></i>
                    <div>
                      <div className="pd3-perk-t">{p.t}</div>
                      <div className="pd3-perk-s">{p.s}</div>
                    </div>
                  </div>
                ))}
              </div>
              <img className="pd3-banner-img" src={bgtopsell} alt="" />
            </aside>
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
              ${Number(fbtTotal.toFixed(2))} <span>({fbtSelected.length} items)</span>
            </div>
            <button className="pd-btn fbt-btn" onClick={addFbt}>Add To Cart</button>
          </div>
        </div>

        <ul className="fbt-list">
          {fbtItems.map((it, i) => (
            <li key={it.id} onClick={() => toggleChecked(it.id)}>
              <i className={`bi ${checked.includes(it.id) ? "bi-check2-square" : "bi-square"}`}></i>
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
            <button key={t} className={i === tab ? "active" : ""} onClick={() => setTab(i)}>
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
      {/* ← pd3-wrap burada kapanıyor */}

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

                    <img className="pc-img" src={item.img} alt={item.title} loading="lazy" />

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