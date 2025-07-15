import React from "react";
import { useState } from "react";
import { BackgroundGradientAnimation } from "../components/ui/background-gradient-animation";

export function Landing() {
  const [count, setCount] = useState(0);
  return (
    <BackgroundGradientAnimation>
      <div className="absolute z-50 inset-0 flex items-center justify-center text-white font-bold px-4 pointer-events-none text-3xl text-center md:text-4xl lg:text-7xl">
        <p className="bg-clip-text text-transparent drop-shadow-2xl bg-gradient-to-b from-white/80 to-white/20">
          <h1>Vite + React</h1>
          <div className="card">
            <button onClick={() => setCount((count) => count + 1)}>
              count is {count}
            </button>
            <p>
              Edit <code>src/App.tsx</code> and save to test HMR
              <h1 className="text-4xl font-bold text-red-500">
                Tailwind is working!
              </h1>
            </p>
          </div>
          <p className="read-the-docs">
            Click on the Vite and React logos to learn more
          </p>
        </p>
      </div>
    </BackgroundGradientAnimation>
  );
}
