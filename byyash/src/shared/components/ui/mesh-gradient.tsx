import React, { useEffect, useState } from "react";
import { MeshGradient } from "@paper-design/shaders-react";
import { motion, AnimatePresence } from "framer-motion";

export function MeshGradientBackground({
  colors,
  keyProp,
}: {
  colors: string[];
  keyProp: string; // this is route pathname
}) {
  const [prevColors, setPrevColors] = useState(colors);

  // Whenever the route changes, update the prevColors after a delay
  useEffect(() => {
    const timeout = setTimeout(() => {
      setPrevColors(colors);
    }, 500); // transition duration
    return () => clearTimeout(timeout);
  }, [colors]);

  return (
    <div className="absolute inset-0 -z-10">
      {/* Previous gradient fading out */}
      <motion.div
        key={keyProp + "-prev"}
        className="absolute inset-0"
        initial={{ opacity: 1 }}
        animate={{ opacity: 0 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
      >
        <MeshGradient
          colors={prevColors}
          speed={0.4}
          style={{
            width: "100%",
            height: "100vh",
            minWidth: "100%",
            minHeight: "100vh",
            position: "absolute",
            top: 0,
            left: 0,
          }}
        />
      </motion.div>

      {/* New gradient fading in */}
      <motion.div
        key={keyProp}
        className="absolute inset-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
      >
        <MeshGradient
          colors={colors}
          speed={0.4}
          style={{
            width: "100%",
            height: "100vh",
            minWidth: "100%",
            minHeight: "100vh",
            position: "absolute",
            top: 0,
            left: 0,
          }}
        />
      </motion.div>
    </div>
  );
}
