import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import Dev from "./pages/Dev";
import Arts from "./pages/Arts";
import NotFound from "./pages/A";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/dev" element={<Dev />} />
        <Route path="/arts" element={<Arts />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
