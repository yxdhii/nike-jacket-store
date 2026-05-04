import { useState } from "react";
import { sizes } from "../data/jackets";

export default function SizeSelector() {
  const [selected, setSelected] = useState("M");

  return (
    <div className="flex gap-2">
      {sizes.map((s) => (
        <button
          key={s}
          onClick={() => setSelected(s)}
          className={`w-8 h-8 rounded-full text-[10px] font-bold border transition-all duration-200 cursor-pointer
            ${selected === s
              ? "bg-white/25 border-white text-white"
              : "border-white/40 text-white/60 hover:border-white/70 hover:text-white/90 bg-transparent"
            }`}
          style={{ fontFamily: "'Barlow', sans-serif" }}
        >
          {s}
        </button>
      ))}
    </div>
  );
}
