import { Button, Card, CardBody, CardHeader, Image } from "@nextui-org/react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Projects() {
  const allProjects = [
    {
      name: "Barbershop",
      imgSrc: "images/projects/barbershop1.png",
      description:
        "A barbershop website where the user can book an appointment and see a real time queue",
      date: "Oct 2021",
      technologies: [
        { name: "django", src: "images/django-plain.svg" },
        { name: "javascript", src: "images/javascript-original.svg" },
      ],
    },
    {
      name: "Birthday Reminder",
      imgSrc: "images/projects/birthday-reminder1.png",
      description: "A simple app to remind birthdays via push notifications",
      date: "May 2024",
      technologies: [{ name: "flutter", src: "images/flutter-original.svg" }],
    },
    {
      name: "Portfolio",
      imgSrc: "images/projects/portfolio1.png",
      description:
        "The portfolio website you're accessing that showcases my hard work",
      date: "Oct 2021",
      technologies: [{ name: "nextjs", src: "images/nextjs-original.svg" }],
    },
  ];
  return (
    <main className="max-w-[1024px] mx-auto">
      <section
        id="highlighted-project-section"
        className="highlighted-project-section"
      >
        <h1 className="text-xl mb-8 font-bold">These are all my projects</h1>

        <div className="flex gap-4 mb-8">
          {allProjects.map((p, i) => (
            <Card key={i} className="flex-grow basis-0 p-2">
              <CardHeader className="flex-col items-start pb-0">
                <h4 className="font-bold text-large">{p.name}</h4>
                <div className="flex justify-between w-full">
                  <small className="text-default-500">{p.date}</small>

                  <div className="flex justify-center gap-1">
                    {p.technologies.map((tech, i) => (
                      <Image
                        key={i}
                        src={tech.src}
                        width={20}
                        alt="Technology used"
                        title={tech.name}
                      />
                    ))}
                  </div>
                </div>
                <p className="text-sm">{p.description}</p>
              </CardHeader>
              <CardBody className="overflow-visible">
                <Image alt="Card image" src={p.imgSrc} width={350} isZoomed />
              </CardBody>
            </Card>
          ))}
        </div>

        <div className="flex justify-center">
          <Link href="/projects">
            <Button className="bg-black text-white">
              See all
              <ArrowRight />
            </Button>
          </Link>
        </div>
      </section>
    </main>
  );
}
