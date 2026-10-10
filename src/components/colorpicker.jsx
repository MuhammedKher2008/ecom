const COLORS = [
  { name: "Red", hex: "#e53935", tick: "#fff" },
  { name: "Blue", hex: "#1e88e5", tick: "#fff" },
  { name: "Green", hex: "#43a047", tick: "#fff" },
  { name: "Black", hex: "#111", tick: "#fff" },
  { name: "White", hex: "#fff", tick: "#111" },
];

export default function ColorPicker({ value = [], onChange }) {
  return (
    <div className="colors d-flex flex-wrap gap-3">
      {COLORS.map(({ name, hex, tick }) => (
        <label
          className="color d-flex align-items-center gap-2"
          key={name}
          style={{ position: "relative", cursor: "pointer" }}
        >
          <input
            type="checkbox"
            checked={value.includes(name)}
            onChange={() => onChange(name)}
          />
          <span
            className="swatch"
            style={{ "--c": hex, "--tick": tick, border: "1px solid #DDE4F0" }}
          />
          <span className="name">{name}</span>
        </label>
      ))}
      {/* mevcut <style> bloğunu aynen bırak */}
    </div>
  );
}