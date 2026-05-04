import { Plus, Minus } from "lucide-react";

export default function QuantityControl({ value, onChange }) {
  return (
    <div className="flex flex-col items-center gap-2">
      <button
        onClick={() => onChange(value + 1)}
        className="w-9 h-9 rounded-full border border-white/50 text-white flex items-center justify-center
          hover:bg-white/20 transition-all duration-200 cursor-pointer"
      >
        <Plus size={16} />
      </button>
      <span
        className="text-white text-xl min-w-[24px] text-center leading-none"
        style={{ fontFamily: "'Bebas Neue', cursive", letterSpacing: 1 }}
      >
        {value}
      </span>
      <button
        onClick={() => onChange(Math.max(1, value - 1))}
        className="w-9 h-9 rounded-full border border-white/50 text-white flex items-center justify-center
          hover:bg-white/20 transition-all duration-200 cursor-pointer"
      >
        <Minus size={16} />
      </button>
    </div>
  );
}
