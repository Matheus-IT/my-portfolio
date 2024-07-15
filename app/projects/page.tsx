import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Image,
  CardFooter,
} from "@nextui-org/react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Link from "next/link";
import { allProjects, allTechnologies } from "../data";
import Footer from "../ui/footer";
import ProjectCard from "../ui/projectCard";

export default function Projects() {
  return (
    <main className="max-w-[1024px] mx-auto pt-8">
      <Link href="/">
        <Button className="bg-black text-white">
          <ArrowLeft />
        </Button>
      </Link>

      <h1 className="text-xl text-center mb-8 font-bold">
        These are all my projects
      </h1>

      <div className="flex gap-4 mb-16">
        {allProjects.map((p, i) => (
          <ProjectCard key={p.id} project={p} />
        ))}
      </div>

      <Footer />
    </main>
  );
}
