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
import useTranslationsServer from "@/locales/serverHook";

export default async function ProjectCard({ project }: { project: Project }) {
  const t = await useTranslationsServer("Projects");
  return (
    <Card className="p-2">
      <CardHeader className="flex-col items-start pb-0">
        <h4 className="font-bold text-large">{project.name}</h4>
        <div className="flex justify-between w-full">
          <small className="text-default-500">{project.date}</small>

          <div className="flex justify-center gap-1">
            {Object.entries(project.technologies).map(([key, tech]) => (
              <Image
                key={key}
                src={"/" + allTechnologies[tech].src}
                width={20}
                height={20}
                alt="Technology used"
                title={allTechnologies[tech].name}
              />
            ))}
          </div>
        </div>
        <p className="text-sm">{t(`p${project.id}description`)}</p>
      </CardHeader>

      <CardBody className="overflow-visible">
        <div className="overflow-hidden inline-block rounded-md">
          <div
            style={{ backgroundImage: `url('${"/" + project.imgSrc}')` }}
            className="w-[100%] h-[12rem] max-sm:h-[18rem] bg-cover bg-top rounded-md hover:scale-110 transition-transform duration-250"
          ></div>
        </div>
      </CardBody>

      <CardFooter>
        <Link className="ml-auto" href={`/projects/${project.id}`}>
          <Button className="bg-black text-white">{t("seeDetails")}</Button>
        </Link>
      </CardFooter>
    </Card>
  );
}
