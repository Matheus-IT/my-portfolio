import { Button } from "@nextui-org/react";
import {
  ArrowLeft,
  GithubIcon,
  Globe,
  LucideArrowUpRightFromSquare,
} from "lucide-react";
import Link from "next/link";

export default function Project({ params }: { params: { projectId: number } }) {
  const projectId = params.projectId;
  return (
    <main className="max-w-[1024px] mx-auto pt-8">
      <div className="project-section">
        <Link href="/projects/">
          <Button className="bg-black text-white">
            <ArrowLeft />
          </Button>
        </Link>

        <h1>Details page {projectId}</h1>
      </div>

      <div className="see-more-section flex flex-col gap-2 p-4 rounded-lg w-fit">
        <span className="text-lg mb-1 font-bold">
          Take a look at this project
        </span>

        <Link href="/projects/" className="m-auto">
          <Button className="bg-black text-white flex justify-between w-[170px]">
            <Globe />
            <span>Live demo</span>
            <LucideArrowUpRightFromSquare />
          </Button>
        </Link>

        <Link href="/projects/" className="m-auto">
          <Button className="bg-black text-white flex justify-between w-[170px]">
            <GithubIcon />
            <span>Code</span>
            <LucideArrowUpRightFromSquare />
          </Button>
        </Link>
      </div>
    </main>
  );
}
