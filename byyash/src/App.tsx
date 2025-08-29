import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Landing from "./pages/Landing";
import Projects from "./pages/Projects";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/Error";
import { MeshGradientBackground } from "./shared/components/ui/mesh-gradient";

function AppRoutes() {

  const location = useLocation();

  // Pick colors based on the route
  const colorMap: Record<string, string[]> = {
    "/": ["#081c15", "#2d6a4f", "#40916c", "#344e41"], // Landing
    "/projects": ["#001c55", "#0a2472", "#0e6ba8", "#a6e1fa"],
    "/about": ["#ac46a1", "#973aa8", "#6d23b6", "#571089"],
    "/contact": ["#C1521E", "#D37331", "#E59444", "#F7B557" ]
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
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
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
