import { NavbarDemo } from "../shared/components/Header";

export default function About() {
  return (
    <div className="relative h-screen overflow-hidden">
      <NavbarDemo />
      <div className="flex flex-col justify-center items-center h-full text-white text-center -my-32">
        <h1 className="text-5xl font-bold mb-4 text-shadow-lg">About </h1>
        <p className="text-lg leading-relaxed tracking-wider text-shadow-lg mx-32 min-w-md max-w-3xl">
          Hi, I’m Yash! A software developer with a passion for building clean,
          intuitive, and efficient applications. I enjoy working across the
          stack, from creating responsive front-end interfaces with React and
          TailwindCSS to designing robust back-end systems with Node.js and
          Express.
        </p>
        <p className="text-lg leading-relaxed tracking-wider text-shadow-lg mx-32 mt-4 min-w-md max-w-3xl">
          I’ve also explored areas like{" "}
          <span className="font-medium">data analytics </span>
          and <span className="font-large"> AI-powered dashboards</span>, where
          I apply my skills to solve business problems and turn data into
          insights. My goal is to keep learning, share projects that showcase my
          growth, and contribute to building impactful software.
        </p>
      </div>
    </div>
  );
}
