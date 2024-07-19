import { allProjects, allTechnologies } from "@/app/data";
import Footer from "@/app/ui/footer";
import { Button, Image as NextUiImage } from "@nextui-org/react";

import {
  ArrowLeft,
  GithubIcon,
  Globe,
  LucideArrowUpRightFromSquare,
} from "lucide-react";
import Link from "next/link";

export default function Project({ params }: { params: { projectId: number } }) {
  const projectId = params.projectId;
  const project = allProjects.find((p) => p.id == projectId)!;

  return (
    <>
      <main className=" max-w-[1024px] mx-auto pt-8">
        <div className="flex gap-4 items-start mb-16 max-md:flex-col max-sm:m-2 max-xl:m-4">
          <div className="project-section relative rounded-lg">
            <Link className="absolute left-2 top-2 z-20" href="/projects/">
              <Button className="bg-black text-white border border-white border-solid">
                <ArrowLeft />
              </Button>
            </Link>

            <div
              style={{ backgroundImage: `url('${"/" + project.imgSrc}')` }}
              className={`w-[100%] h-[28rem] bg-cover bg-top rounded-t-md`}
            ></div>

            <div className="p-6">
              <div className="flex justify-between">
                <small>{project.date}</small>
                <div className="flex justify-center gap-1">
                  {project.technologies.map((tech, i) => (
                    <NextUiImage
                      key={i}
                      src={"../" + allTechnologies[tech].src}
                      width={20}
                      alt="Technology used"
                      title={allTechnologies[tech].name}
                    />
                  ))}
                </div>
              </div>

              <h1 className="text-2xl">{project.name}</h1>

              <p
                dangerouslySetInnerHTML={{
                  __html: project.detailedDescription,
                }}
              ></p>
            </div>
          </div>

          <div className="see-more-section flex flex-col gap-2 p-4 rounded-lg max-md:w-full lg:min-w-[fit-content] max-md:text-center">
            <span className="text-lg mb-1 font-bold">
              Take a look at this project
            </span>

            <div className="flex flex-col justify-center items-center gap-2 max-md:flex-row">
              {project.liveDemoLink == "" ? (
                <Button
                  className="bg-black text-white flex justify-between w-[170px]"
                  isDisabled
                >
                  <Globe />
                  <span>Live demo</span>
                  <LucideArrowUpRightFromSquare />
                </Button>
              ) : (
                <Link href={project.liveDemoLink} target="_blank">
                  <Button className="bg-black text-white flex justify-between w-[170px]">
                    <Globe />
                    <span>Live demo</span>
                    <LucideArrowUpRightFromSquare />
                  </Button>
                </Link>
              )}

              <Link href={project.repositoryLink} target="_blank">
                <Button className="bg-black text-white flex justify-between w-[170px]">
                  <GithubIcon />
                  <span>Code</span>
                  <LucideArrowUpRightFromSquare />
                </Button>
              </Link>
            </div>
          </div>
        </div>

        <Footer />
      </main>
    </>
  );
}
