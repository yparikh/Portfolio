import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Landing from "./pages/Landing";
import Dev from "./pages/Dev";
import Arts from "./pages/Arts";
import NotFound from "./pages/Error";
import { MeshGradientBackground } from "./shared/components/ui/mesh-gradient";
function AppRoutes() {

  const location = useLocation();

  // Pick colors based on the route
  const colorMap: Record<string, string[]> = {
    "/": ["#081c15", "#2d6a4f", "#40916c", "#344e41"], // Landing
    "/dev": ["#001c55", "#0a2472", "#0e6ba8", "#a6e1fa"],
    "/art": ["#ac46a1", "#973aa8", "#6d23b6", "#571089"],
  };

  const currentColors = colorMap[location.pathname] || colorMap["/"];

  return (
    <>
    <MeshGradientBackground
        colors={currentColors}
        keyProp={location.pathname}
      />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/dev" element={<Dev />} />
        <Route path="/art" element={<Arts />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}
