import { jackets } from "../data/jackets";
export default function ColorDots({ current, onChange }) {
  return (
    <div className="flex gap-2 items-center">
      {jackets.map((j, i) => (
        <button
          key={j.id}
          onClick={() => onChange(i)}
          title={j.color}
          className={`rounded-full border-2 transition-all duration-200 cursor-pointer
            ${i === current
              ? "border-white scale-125"
              : "border-white/30 hover:scale-110"
            }`}
          style={{
            background: j.dot,
            width: 22,
            height: 22,
          }}
        />
      ))}
    </div>
  );
}