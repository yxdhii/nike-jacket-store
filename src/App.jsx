import { useState } from "react";
import { jackets } from "./data/jackets";
import JacketSlide from "./components/JacketSlide";

export default function App() {
  const [current, setCurrent] = useState(0);

  return (
    <div className="w-full h-full">
      <JacketSlide
        jacket={jackets[current]}
        currentIndex={current}
        onChangeIndex={setCurrent}
      />
    </div>
  );
}
