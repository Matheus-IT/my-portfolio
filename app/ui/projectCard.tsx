import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Image,
} from "@nextui-org/react";
import { Project, allTechnologies } from "../data";
import Link from "next/link";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <Card className="flex-grow basis-0 p-2">
      <CardHeader className="flex-col items-start pb-0">
        <h4 className="font-bold text-large">{project.name}</h4>
        <div className="flex justify-between w-full">
          <small className="text-default-500">{project.date}</small>

          <div className="flex justify-center gap-1">
            {Object.entries(project.technologies).map(([key, tech]) => (
              <Image
                key={key}
                src={allTechnologies[tech].src}
                width={20}
                alt="Technology used"
                title={allTechnologies[tech].name}
              />
            ))}
          </div>
        </div>
        <p className="text-sm">{project.description}</p>
      </CardHeader>

      <CardBody className="overflow-visible">
        <Image alt="Card image" src={project.imgSrc} width={350} isZoomed />
      </CardBody>

      <CardFooter>
        <Link className="ml-auto" href={`/projects/${project.id}`}>
          <Button className="bg-black text-white">See details</Button>
        </Link>
      </CardFooter>
    </Card>
  );
}
