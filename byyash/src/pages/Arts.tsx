import { NavbarDemo } from "../shared/components/Header";

export default function Arts() {
  return (
    <div className="relative h-screen overflow-hidden" >
      <NavbarDemo/>
      <div className="flex flex-col justify-center items-center h-full text-white text-center -my-32">
        <h1 className="text-5xl font-bold mb-4 text-shadow-lg">ARTS 👋</h1>
        <p className="text-xl max-w-xl text-shadow-lg">
          I bring ideas to life through code, motion, and creativity.
        </p>
      </div>
    </div>
  );
}