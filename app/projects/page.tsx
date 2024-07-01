import { Button, Card, CardBody, CardHeader, Image } from "@nextui-org/react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { allProjects, allTechnologies } from "../data";

export default function Projects() {
  return (
    <main className="max-w-[1024px] mx-auto">
      <h1 className="text-xl text-center my-8 font-bold">
        These are all my projects
      </h1>

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
                      src={allTechnologies[tech].src}
                      width={20}
                      alt="Technology used"
                      title={allTechnologies[tech].name}
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
    </main>
  );
}
