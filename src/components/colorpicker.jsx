import { useState } from "react";

const COLORS = [
  { name: "Red", c: "#fa3a5f" },
  { name: "Green", c: "#5cc796" },
  { name: "Blue", c: "#16aef0" },
  { name: "Purple", c: "#a57bff" },
  { name: "Black", c: "#0f1f4e" },
  { name: "Gray", c: "#dde2f0", tick: "#4b5b7a" },
  { name: "Pink", c: "#ff8dc2" },
  { name: "Brown", c: "#a95c3b" },
  { name: "Yellow", c: "#ffd90f", tick: "#4b5b7a" },
];

export default function ColorPicker({ value, onChange }) {
  const [inner, setInner] = useState("Red");
  const selected = value ?? inner;
  const pick = (name) => (onChange ? onChange(name) : setInner(name));

  return (
    <div className="colors " role="radiogroup">
      {COLORS.map(({ name, c, tick }) => (
        <label className="color " key={name}>
          <input
            type="radio"
            name="color"
            checked={selected === name}
            onChange={() => pick(name)}
          />
          <span className="swatch" style={{ "--c": c, "--tick": tick }} />
          <span className="name">{name}</span>
        </label>
      ))}
      <style>{`
        .color input { position:absolute; opacity:0; pointer-events:none }
        .swatch { width:38px; height:38px; border-radius:50%; background:var(--c); display:grid; place-items:center; transition:transform .15s }
        .color:hover .swatch { transform:scale(1.08) }
        .swatch::after { content:""; width:6px; height:12px; border:solid var(--tick,#fff); border-width:0 2.5px 2.5px 0; transform:translateY(-1px) rotate(45deg) scale(0); transition:transform .15s }
        .color input:checked + .swatch::after { transform:translateY(-1px) rotate(45deg) scale(1) }
        .color input:focus-visible + .swatch { outline:2px solid #0f1f4e; outline-offset:3px }
        .name { font-size:14px; color:#4b5b7a }
      `}</style>
    </div>
  );
}
