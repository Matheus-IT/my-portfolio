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
import { allProjects, allTechnologies } from "../../data";
import Footer from "../../ui/footer";
import ProjectCard from "../../ui/projectCard";

export default function Projects() {
  return (
    <main className="max-w-[1024px] mx-auto pt-8">
      <Link href="/" className="max-sm:m-2 max-xl:m-4">
        <Button className="bg-black text-white">
          <ArrowLeft />
        </Button>
      </Link>

      <h1 className="text-xl text-center mb-8 max-sm:m-2 max-sm:my-4 max-xl:m-4 font-bold">
        These are all my projects
      </h1>

      <div className="grid grid-cols-3 max-sm:grid-cols-1 max-md:grid-cols-2 gap-4 mb-16 max-sm:m-2 max-xl:m-4">
        {allProjects.map((p, i) => (
          <ProjectCard key={p.id} project={p} />
        ))}
      </div>

      <Footer />
    </main>
  );
}
