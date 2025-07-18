import { MeshGradientBackground } from "./ui/mesh-gradient";
import { NavbarDemo } from "./Header";

export default function Landing() {
  return (
    <div className="relative h-screen overflow-hidden" >
      <MeshGradientBackground />
      <NavbarDemo/>
      <div className="flex flex-col justify-center items-center h-full text-white text-center -my-32">
        <h1 className="text-5xl font-bold mb-4">Welcome to My Site</h1>
        <p className="text-xl max-w-xl">
          Beautiful gradient backgrounds made easy.
        </p>
      </div>
    </div>
  );
}
