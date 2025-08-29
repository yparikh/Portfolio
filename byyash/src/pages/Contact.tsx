import { NavbarDemo } from "../shared/components/Header";
import { Separator } from "../shared/components/ui/separator";
import { Button } from "../shared/components/ui/button";
import linkedin from "../assets/linkedin.svg";
import github from "../assets/github.svg";

export default function Contact() {
  return (
    <div className="relative h-screen overflow-hidden">
      <NavbarDemo />
      <div className="flex flex-col justify-center items-center h-full text-white text-center -my-32">
        <h1 className="text-5xl font-bold mb-4  text-shadow-lg">Get in Touch</h1>
        <Button
          variant="link"
          className="mt-4 text-3xl text-shadow-lg text-white"
        >
          <a
            href="mailto:yashparikh@byyash.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Email: yparikh@byyash.com
          </a>
        </Button>
        <div className="flex flex-wrap items-center my-8 gap-4 md:flex-row">
          <Button variant="link" size="icon">
            <a
              href="https://www.linkedin.com/in/yashparikh1/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={linkedin} alt="LinkedIn" />
            </a>
          </Button>
          <Button variant="link" size="icon">
            <a
              href="https://github.com/yparikh"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={github} alt="Github" className="w-8 h-8" />
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
}
