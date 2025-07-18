import React from "react";
import { MeshGradient } from "@paper-design/shaders-react";

export function MeshGradientBackground() {
  return (
    <div className="absolute inset-0 -z-10">
    <MeshGradient
      speed={0.1}
      colors={["#31572c", "#4f772d", "#90a955", "#ecf39e"]}
      style={{ width: "100%", height: "100vh" }}
    />
    </div>
  );
}