const links = ["Products", "About", "Category", "Contact"];

export default function Navbar() {
  return (
    <nav
      className="absolute top-6 left-1/2 -translate-x-1/2 z-30 flex gap-1 rounded-full px-2 py-1.5"
      style={{ background: "rgba(255,255,255,0.18)", backdropFilter: "blur(14px)" }}
    >
      {links.map((link) => (
        <button
          key={link}
          className={`text-xs font-semibold px-4 py-1.5 rounded-full transition-all duration-200 font-body cursor-pointer
            ${link === "Products"
              ? "bg-white text-black"
              : "text-white/75 hover:text-white hover:bg-white/20"
            }`}
          style={{ fontFamily: "'Barlow', sans-serif" }}
        >
          {link}
        </button>
      ))}
    </nav>
  );
}
