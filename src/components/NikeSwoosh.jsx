export default function NikeSwoosh({ className = "", opacity = 1 }) {
  return (
    <svg
      viewBox="0 0 200 130"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={{ opacity }}
    >
      <path
        d="M18 92 Q62 18 192 8 Q118 52 8 102 Z"
        fill="white"
      />
    </svg>
  );
}