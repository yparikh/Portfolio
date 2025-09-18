import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../shared/components/ui/carousel";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../shared/components/ui/card";
import { Badge } from "../shared/components/ui/badge";
import Autoplay from "embla-carousel-autoplay";
import React from "react";
import { Button } from "../shared/components/ui/button";
import github from "../assets/github.svg";

export default function Projects() {
  const projectItems = [
    {
      title: "SPFitness",
      description:
        "Android Fitness and Health App for tracking and managing various fitness needs.",
      techStack: ["Java", "Android", "Google Firestore", "noSQL"],
      link: "https://github.com/yparikh/SPFitness",
    },
    {
      title: "Twitter Buzz Research Project",
      description:
        "ML Paper investigating which Algorithm would effectively predict engagement on Twitter/X.",
      techStack: [
        "Python",
        "Pyplot",
        "Pandas",
        "NumPy",
        "Scikit-Learn",
        "Seaborn",
      ],
      link: "https://github.com/yparikh/Twitter-Buzz-Research",
    },
    {
      title: "Multiclass Protein Research Paper",
      description: "ML Research Paper on Predicting Protein Classifications.",
      techStack: [
        "Python",
        "Pyplot",
        "Pandas",
        "NumPy",
        "Scikit-Learn",
        "Seaborn",
      ],
      link: "https://github.com/yparikh/Multiclass-Protein-Research",
    },
    {
      title: "Perspicacity",
      description:
        "AI-Powered Full-Stack Business Dashboard for working with financial data.",
      techStack: ["React", "Node.js", "Express", "Tailwind", "Axios"],
      link: "https://github.com/yparikh/Perspicacity",
    },
    {
      title: "Penny Pantry Website",
      description:
        "Dynamic SPA that provides business info and real-time lottery results for a small business.",
      techStack: ["React", "Next.js", "Python", "FastAPI", "PostgresSQL"],
      link: "https://github.com/yparikh/Penny-Pantry-Website",
    },
  ];

  const plugin = React.useRef(
    Autoplay({ delay: 5000, stopOnInteraction: true })
  );

  return (
    <>
      <div className="flex flex-col justify-center items-center h-full text-white text-center ">
        <h1 className="text-5xl font-bold mb-4 text-shadow-lg my-32 mb-32 ">
          Projects 👨‍💻
        </h1>

        <Carousel
          className="w-full max-w-sm"
          orientation="vertical"
          plugins={[plugin.current]}
          onMouseEnter={plugin.current.stop}
          onMouseLeave={plugin.current.reset}
          opts={{
            align: "start",
            loop: true,
          }}
        >
          <CarouselContent className="mt-1 h-[350px]">
            {projectItems.map((item, index) => (
              <CarouselItem key={index} className="-pl-1">
                <div className="p-1">
                  <Card>
                    <CardHeader>
                      <CardTitle> {item.title} </CardTitle>
                      <CardDescription> {item.description} </CardDescription>
                    </CardHeader>
                    <CardContent className="flex flex-wrap items-center justify-center gap-2 p-6">
                      <div>
                        {item.techStack.map((tech, i) => (
                          <Badge key={i} variant="secondary">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                      <br />
                      <Button variant="link">
                        <a
                          href={item.link}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <img src={github} alt="Github" className="w-8 h-8" />
                        </a>
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="text-black" />
          <CarouselNext className="text-black" />
        </Carousel>
      </div>
    </>
  );
}
