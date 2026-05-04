import { useState, useEffect } from "react";
import NikeSwoosh from "./NikeSwoosh";
import Navbar from "./Navbar";
import ThumbnailStrip from "./ThumbnailStrip";
import ColorDots from "./ColorDots";
import SizeSelector from "./SizeSelector";
import QuantityControl from "./QuantityControl";
import { ShoppingBag } from "lucide-react";

export default function JacketSlide({ jacket, currentIndex, onChangeIndex }) {
  const [qty, setQty] = useState(1);
  const [animKey, setAnimKey] = useState(0);
  const [imgVisible, setImgVisible] = useState(true);

  // Volver a activar la animación de escala de la chaqueta al cambiar
  useEffect(() => {
    setImgVisible(false);
    const t = setTimeout(() => {
      setAnimKey((k) => k + 1);
      setImgVisible(true);
    }, 120);
    return () => clearTimeout(t);
  }, [currentIndex]);

  return (
    <div
      className="relative w-full h-full overflow-hidden transition-all duration-700"
      style={{ background: jacket.bg }}
    >
      {/* marca de agua */}
      <div className="absolute -right-16 -bottom-16 w-[480px] h-[480px] pointer-events-none select-none">
        <NikeSwoosh opacity={0.07} className="w-full h-full" />
      </div>

      {/* Logo de Nike */}
      <div className="absolute top-7 left-8 z-30">
        <img
          src="/logo-nike.png"
          alt="Nike"
          className="w-12 brightness-0 invert opacity-95"
        />
      </div>

      {/* Navbar */}
      <Navbar />

      {/* miniaturas de las chaquetas */}
      <ThumbnailStrip current={currentIndex} onChange={onChangeIndex} />

      
      <div
        key={`text-${currentIndex}`}
        className="absolute left-9 top-1/2 -translate-y-1/2 z-20 max-w-[200px]"
        style={{ animation: "fadeSlideIn 0.55s ease forwards" }}
      >
        <h1
          className="text-white leading-none"
          style={{
            fontFamily: "'Bebas Neue', cursive",
            fontSize: 54,
            letterSpacing: 1,
            textShadow: "0 4px 24px rgba(0,0,0,0.18)",
          }}
        >
          Wear your<br />Style with<br />Comfort
        </h1>

        <p
          className="text-white/55 mt-4 leading-relaxed"
          style={{ fontFamily: "'Barlow', sans-serif", fontSize: 11, fontWeight: 300 }}
        >
          {jacket.description}
        </p>

        
        <div className="mt-5">
          <span
            className="text-white/40 uppercase tracking-widest"
            style={{ fontFamily: "'Barlow', sans-serif", fontSize: 9, fontWeight: 600 }}
          >
            Color
          </span>
          <p
            className="text-white font-semibold mt-0.5"
            style={{ fontFamily: "'Barlow', sans-serif", fontSize: 13 }}
          >
            {jacket.color}
          </p>
        </div>

        
        <div className="mt-4">
          <span
            className="text-white/40 uppercase tracking-widest"
            style={{ fontFamily: "'Barlow', sans-serif", fontSize: 9, fontWeight: 600 }}
          >
            Size
          </span>
          <div className="mt-2">
            <SizeSelector />
          </div>
        </div>
      </div>

      
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        
        <div
          className="absolute"
          style={{
            bottom: "18%",
            left: "50%",
            transform: "translateX(-50%)",
            width: 240,
            height: 28,
            background: "rgba(0,0,0,0.22)",
            borderRadius: "50%",
            filter: "blur(12px)",
            animation: "glowPulse 3.5s ease-in-out infinite",
          }}
        />
        {imgVisible && (
          <img
            key={animKey}
            src={jacket.image}
            alt={jacket.name}
            className="relative z-10 select-none"
            style={{
              width: 340,
              height: 340,
              objectFit: "contain",
              filter: "drop-shadow(0 28px 56px rgba(0,0,0,0.32))",
              animation: "float 3.5s ease-in-out infinite, scaleIn 0.45s ease forwards",
              marginLeft: 20,
            }}
            draggable={false}
          />
        )}
      </div>

      
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-3">
        <span
          className="text-white"
          style={{ fontFamily: "'Bebas Neue', cursive", fontSize: 46, letterSpacing: 2 }}
        >
          ${jacket.price.toFixed(2)}
        </span>
        <ColorDots current={currentIndex} onChange={onChangeIndex} />
      </div>

      
      <div className="absolute right-9 bottom-8 z-20 flex flex-col items-center gap-4">
        <QuantityControl value={qty} onChange={setQty} />

        <button
          className="flex items-center gap-2 bg-white text-black font-bold rounded-full px-6 py-3 text-sm
            hover:-translate-y-1 hover:shadow-2xl transition-all duration-200 active:scale-95 cursor-pointer"
          style={{ fontFamily: "'Barlow', sans-serif", boxShadow: "0 8px 28px rgba(0,0,0,0.22)" }}
        >
          <ShoppingBag size={15} />
          Buy Now
        </button>
      </div>

      
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-18px); }
        }
        @keyframes glowPulse {
          0%, 100% { opacity: 0.6; transform: translateX(-50%) scaleX(1); }
          50% { opacity: 0.22; transform: translateX(-50%) scaleX(0.75); }
        }
        @keyframes fadeSlideIn {
          0% { opacity: 0; transform: translate(0, -50%) translateX(28px); }
          100% { opacity: 1; transform: translate(0, -50%) translateX(0); }
        }
        @keyframes scaleIn {
          0% { opacity: 0; transform: scale(0.82); }
          100% { opacity: 1; transform: scale(1); }
        }
      `}</style>
    </div>
  );
}
