import { useEffect, useState } from "react";
import "../ProductCarousel.css";
import data from "../data";

const brandName = (b = "") =>
  b.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());

const discount = (p) =>
  Math.round(((p.prevprice - p.price) / p.prevprice) * 100);

// CSS'teki breakpoint'lerle aynı: <768 → 1, ≥768 → 2, ≥1200 → 3
function usePerView() {
  const get = () =>
    window.matchMedia("(min-width: 1200px)").matches
      ? 3
      : window.matchMedia("(min-width: 768px)").matches
        ? 2
        : 1;
  const [n, setN] = useState(get);
  useEffect(() => {
    const onResize = () => setN(get());
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);
  return n;
}

function ProductCard({ p }) {
  return (
    <div className="pc-card position-relative d-flex align-items-center gap-3 p-3 h-100">
      <span className="pc-badge">-{discount(p)}%</span>

      <img className="pc-img" src={p.img} alt={p.title} loading="lazy" />

      <div className="flex-grow-1">
        <div className="pc-brand">{brandName(p.brand)}</div>
        <h6 className="pc-title my-1">{p.title}</h6>

        <div className="pc-stars">
          {[1, 2, 3, 4, 5].map((s) => (
            <i
              key={s}
              className={`bi bi-star-fill ${s <= p.rating ? "" : "pc-star-off"}`}
            ></i>
          ))}
          <span className="pc-brand ms-1">({p.raters})</span>
        </div>

        <div className="mt-3">
          <span className="pc-price">${p.price}</span>
          <del className="pc-old ms-2">${p.prevprice}</del>
        </div>
      </div>
    </div>
  );
}

export default function ProductCarousel({ products = data }) {
  const perView = usePerView();
  const [i, setI] = useState(0);
  const max = Math.max(0, products.length - perView);
  const index = Math.min(i, max); // resize sonrası taşmayı engeller

  const prev = () => setI(index === 0 ? max : index - 1);
  const next = () => setI(index >= max ? 0 : index + 1);

  return (
    <div className="d-flex align-items-center gap-3 my-5">
      <button
        className="pc-arrow"
        type="button"
        onClick={prev}
        aria-label="Previous"
      >
        <i className="bi bi-chevron-left"></i>
      </button>

      <div className="pc-viewport">
        <div className="pc-track" style={{ "--i": index }}>
          {products.map((p) => (
            <div className="pc-item" key={p.id}>
              <ProductCard p={p} />
            </div>
          ))}
        </div>
      </div>

      <button
        className="pc-arrow"
        type="button"
        onClick={next}
        aria-label="Next"
      >
        <i className="bi bi-chevron-right"></i>
      </button>
    </div>
  );
}
