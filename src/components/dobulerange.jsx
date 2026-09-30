import { useRef, useState } from "react";

export default function DoubleRange({
  min = 0,
  max = 100,
  step = 1,
  gap = 0,
  value,
  onChange,
}) {
  const [inner, setInner] = useState([min, max]);
  const [lo, hi] = value ?? inner;
  const track = useRef(null);
  const drag = useRef(null);

  const set = (v) => (onChange ? onChange(v) : setInner(v));
  const pct = (n) => ((n - min) / (max - min)) * 100;
  const clamp = (n, a, b) => Math.min(Math.max(n, a), b);
  const snap = (n) =>
    clamp(Math.round((n - min) / step) * step + min, min, max);
  const update = (which, n) =>
    which === "lo"
      ? set([clamp(n, min, hi - gap), hi])
      : set([lo, clamp(n, lo + gap, max)]);

  const move = (e) => {
    if (!drag.current) return;
    const r = track.current.getBoundingClientRect();
    update(
      drag.current,
      snap(min + clamp((e.clientX - r.left) / r.width, 0, 1) * (max - min)),
    );
  };

  const thumb = (which, val, z) => ({
    className: "dr-thumb",
    role: "slider",
    tabIndex: 0,
    "aria-valuenow": val,
    style: { left: `${pct(val)}%`, zIndex: z },
    onPointerDown: (e) => {
      e.currentTarget.setPointerCapture(e.pointerId);
      drag.current = which;
    },
    onPointerMove: move,
    onPointerUp: () => (drag.current = null),
    onKeyDown: (e) => {
      const d = {
        ArrowLeft: -step,
        ArrowDown: -step,
        ArrowRight: step,
        ArrowUp: step,
      }[e.key];
      if (d) {
        e.preventDefault();
        update(which, val + d);
      }
    },
  });

  return (
    <div className="dr">
      <div className="dr-track" ref={track}>
        <div
          className="dr-fill"
          style={{ left: `${pct(lo)}%`, right: `${100 - pct(hi)}%` }}
        />
        <div {...thumb("lo", lo, lo > (min + max) / 2 ? 3 : 1)} />
        <div {...thumb("hi", hi, 2)} />
      </div>
      <style>{`
        .dr { max-width:420px; padding:0 11px; touch-action:none }
        .dr-track { position:relative; height:6px; background:#ddd; border-radius:3px; margin:8px 0 }
        .dr-fill { position:absolute; top:0; bottom:0; background:#2563eb; border-radius:3px }
        .dr-thumb { position:absolute; top:50%; width:22px; height:22px; border-radius:50%; background:#fff; border:2px solid #2563eb; transform:translate(-50%,-50%); cursor:grab; box-sizing:border-box }
        .dr-thumb:active { cursor:grabbing }
        .dr-thumb:focus-visible { outline:2px solid #2563eb; outline-offset:3px }
      `}</style>
    </div>
  );
}
