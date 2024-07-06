import { Button } from "@nextui-org/react";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function Project({ params }: { params: { projectId: number } }) {
  const projectId = params.projectId;
  return (
    <main className="max-w-[1024px] mx-auto pt-8">
      <Link href="/projects/">
        <Button className="bg-black text-white">
          <ArrowLeft />
        </Button>
      </Link>

      <h1>Details page {projectId}</h1>
    </main>
  );
}
