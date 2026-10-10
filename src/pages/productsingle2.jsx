import { useContext, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CardContext } from "../context/cartContext"; 
import s22ultra from "../assets/s22ultra.jpg";
import s22ultra2 from "../assets/s22ultra2.jpg";
import s22ultra3 from "../assets/s22ultra3.jpg";
import s22ultra4 from "../assets/s22ultra4.jpg";
import s22ultra5 from "../assets/s22ultra5.jpg";
const product = {
  id: 202,
  title:
    "Samsung Galaxy S22 Ultra, 8K Camera & Video, Brightest Display Screen, S Pen Pro",
  brand: "Ecom Tech",
  price: 2856.3,
  oldPrice: 3225.6,
  discount: 17,
  reviews: 65,
  sold: 135,
  stock: 320,
  image: "/img/s22-1.png",
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
  styles: [{ label: "S22 Ultra", disabled: true }, { label: "S22" }],
  sizes: [
    { label: "1GB", disabled: true },
    { label: "512 GB" },
    { label: "256 GB" },
  ],
  sku: "iphone12pro128",
  category: "Smartphones",
  tags: "Blue, Smartphone",
};

function ZoomImage({ src, alt, scale = 2.5 }) {
  const imgRef = useRef(null);
  const onMove = (e) => {
    const r = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - r.left) / r.width) * 100;
    const y = ((e.clientY - r.top) / r.height) * 100;
    imgRef.current.style.transformOrigin = `${x}% ${y}%`;
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

export default function ProductPage2() {
  const { addToCard } = useContext(CardContext);
  const navigate = useNavigate();

  const [active, setActive] = useState(0);
  const [color, setColor] = useState(4);
  const [style, setStyle] = useState(1);
  const [size, setSize] = useState(1);
  const [qty, setQty] = useState(1);

  const soldPct = Math.min(100, (product.sold / product.stock) * 100);

  const addProduct = () => {
    for (let i = 0; i < qty; i++) addToCard(product);
  };
  const buyNow = () => {
    addProduct();
    navigate("/checkout"); // route'unu düzelt
  };

  return (
    <div className="pd2-wrap">
      <div className="pd2-top">
        {/* ---------- Thumbs ---------- */}
        <div className="pd2-thumbs">
          {product.images.map((src, i) => (
            <button key={i} className="pd2-thumb" onClick={() => setActive(i)}>
              <img src={src} alt="" />
            </button>
          ))}
        </div>

        {/* ---------- Main image ---------- */}
        <div className="pd2-main">
          <span className="pd2-badge">-{product.discount}%</span>
          <ZoomImage src={product.images[active]} alt={product.title} />
        </div>

        {/* ---------- Info ---------- */}
        <div className="pd2-info">
          <h1 className="pd2-title">{product.title}</h1>

          <div className="pd2-meta">
            <div>
              <div className="pd2-by">by {product.brand}</div>
              <div className="pd2-stars">
                {[...Array(5)].map((_, i) => (
                  <i key={i} className="bi bi-star-fill"></i>
                ))}
                <span>({product.reviews} reviews)</span>
              </div>
            </div>
            <div className="pd2-actions">
              <button className="pd2-act">
                <span className="pd2-act-ico">
                  <i className="bi bi-suit-heart-fill"></i>
                </span>
                Add to Wish list
              </button>
              <button className="pd2-act">
                <span className="pd2-act-ico">
                  <i className="bi bi-intersect"></i>
                </span>
                Add to Compare
              </button>
            </div>
          </div>

          <div className="pd2-cols">
            {/* ===== LEFT ===== */}
            <div className="pd2-left">
              <div className="pd2-price">
                ${product.price} <del>${product.oldPrice}</del>
              </div>

              <div className="pd2-bar">
                <div
                  className="pd2-bar-fill"
                  style={{ width: `${soldPct}%` }}
                />
              </div>
              <div className="pd2-sold">
                Sold: {product.sold}/{product.stock}
              </div>

              <ul className="pd2-feats">
                {product.features.map((f) => (
                  <li key={f}>{f}</li>
                ))}
              </ul>

              <div className="pd2-meta2">
                <div className="pd2-meta2-col1">
                  <div>
                    <b>SKU:</b>
                    <span>{product.sku}</span>
                  </div>
                  <div>
                    <b>Category:</b>
                    <span>{product.category}</span>
                  </div>
                  <div>
                    <b>Tags:</b>
                    <span>{product.tags}</span>
                  </div>
                </div>
                <div>
                  <div>
                    <b>Free Delivery</b>
                  </div>
                  <div>
                    <span>Available for all locations.</span>
                  </div>
                  <div>
                    <span>Delivery Options &amp; Info</span>
                  </div>
                </div>
              </div>

              <div className="pd2-share">
                <b>Share</b>
                <i className="bi bi-facebook"></i>
                <i className="bi bi-pinterest"></i>
                <i className="bi bi-twitter"></i>
                <i className="bi bi-instagram"></i>
              </div>
            </div>

            {/* ===== RIGHT CARD ===== */}
            <aside className="pd2-card">
              <div className="pd2-label">
                Color:<span>{product.colors[color].name}</span>
              </div>
              <div className="pd2-swatches">
                {product.colors.map((c, i) => (
                  <button
                    key={i}
                    disabled={c.disabled}
                    className={`pd2-swatch ${i === color ? "active" : ""}`}
                    onClick={() => setColor(i)}
                  >
                    <img src={c.img} alt={c.name} />
                  </button>
                ))}
              </div>

              <div className="pd2-label pd2-sec">
                Style:<span>{product.styles[style].label}</span>
              </div>
              <div className="pd2-opts style">
                {product.styles.map((s, i) => (
                  <button
                    key={s.label}
                    disabled={s.disabled}
                    className={`pd2-opt ${i === style ? "active" : ""}`}
                    onClick={() => setStyle(i)}
                  >
                    {s.label}
                  </button>
                ))}
              </div>

              <div className="pd2-label pd2-sec">
                Size:<span>{product.sizes[size].label.replace(" ", "")}</span>
              </div>
              <div className="pd2-opts size">
                {product.sizes.map((s, i) => (
                  <button
                    key={s.label}
                    disabled={s.disabled}
                    className={`pd2-opt ${i === size ? "active" : ""}`}
                    onClick={() => setSize(i)}
                  >
                    {s.label}
                  </button>
                ))}
              </div>

              <div className="pd2-qty-row">
                <span className="pd2-label">Quantity</span>
                <div className="pd2-qty">
                  <button onClick={() => setQty((q) => Math.max(1, q - 1))}>
                    <i className="bi bi-dash-lg"></i>
                  </button>
                  <span>{qty}</span>
                  <button onClick={() => setQty((q) => q + 1)}>
                    <i className="bi bi-plus-lg"></i>
                  </button>
                </div>
              </div>

              <button className="pd2-btn" onClick={addProduct}>
                Add to cart
              </button>
              <button className="pd2-btn primary" onClick={buyNow}>
                Buy now
              </button>
            </aside>
          </div>
        </div>
      </div>
    </div>
  );
}
