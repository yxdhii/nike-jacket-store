import { jackets } from "../data/jackets";

export default function ThumbnailStrip({ current, onChange }) {
  return (
    <div className="absolute top-5 right-5 z-30 flex flex-col gap-2">
      {jackets.map((j, i) => (
        <button
          key={j.id}
          onClick={() => onChange(i)}
          className={`w-14 h-14 rounded-xl overflow-hidden border-2 transition-all duration-300 cursor-pointer
            ${i === current
              ? "border-white opacity-100 scale-105"
              : "border-transparent opacity-50 hover:opacity-80"
            }`}
          style={{ background: "#111" }}
        >
          <img
            src={j.image}
            alt={j.color}
            className="w-full h-full object-cover"
          />
        </button>
      ))}
    </div>
  );
}
