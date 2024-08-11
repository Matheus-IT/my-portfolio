import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Chip,
  Image,
} from "@nextui-org/react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { allProjects, allTechnologies } from "../data";
import Navbar from "../ui/navbar";
import Footer from "../ui/footer";
import SocialMediaIconButton from "../ui/socialMediaIconButton";
import { GithubIcon, InstagramIcon, LinkedinIcon } from "../ui/myIcons";
import ProjectCard from "../ui/projectCard";
import { useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations("HomePage");
  const highlightedProjects = allProjects.slice(0, 3);
  const yearsOfExperience = getYearsOfExperience();

  function getYearsOfExperience() {
    const startDate = new Date("2021-02-01");
    const today = new Date();
    return today.getFullYear() - startDate.getFullYear();
  }

  return (
    <>
      <Navbar />
      <main className="max-w-[1024px] mx-auto">
        <section className="hero-section flex items-center max-md:flex-col-reverse lg:my-[7rem]">
          <div className="hero-main-text grow-[3] basis-0 p-8 max-sm:p-4 max-sm:m-2 max-xl:m-4">
            <em className="text-2xl">
              {t("heroTitle")}
              <span className="text-sky-700">Matheus Costa!</span>
            </em>
            <br />
            <span className="text-xl">{t("heroMyRole")}</span>
            <p className="text-base mb-6">
              {t("heroDescription", {
                yearsOfExperience: yearsOfExperience,
              })}
            </p>
            <div className="flex justify-center gap-2 mb-8">
              {Object.entries(allTechnologies).map(([key, tech]) => (
                <Image
                  key={key}
                  height="40"
                  width="40"
                  radius="none"
                  alt="Image of a technology I use"
                  src={tech.src}
                ></Image>
              ))}
            </div>

            <div className="flex justify-center">
              <Link href="my-cv.pdf" target="_blank">
                <Button className="bg-black text-white">
                  {t("heroResume")}
                </Button>
              </Link>
            </div>
          </div>

          <div className="grow-[2] basis-0 max-sm:w-[16rem]">
            <Image
              width={500}
              height={500}
              alt="Hero image"
              src="images/hero-img.png"
            />
          </div>
        </section>

        <section
          id="highlighted-project-section"
          className="highlighted-project-section flex flex-col justify-center items-center p-4 max-sm:m-2 max-xl:m-4"
        >
          <h1 className="text-xl mb-8 font-bold">
            {t("highlightedProjectsSectionTitle")}
          </h1>

          <div className="grid grid-cols-3 max-lg:grid-cols-2 max-sm:grid-cols-1 gap-4 mb-8">
            {highlightedProjects.map((p, i) => (
              <ProjectCard key={p.id} project={p} />
            ))}
          </div>

          <div className="flex justify-center">
            <Link href="/projects">
              <Button className="bg-black text-white">
                {t("seeAll")}
                <ArrowRight />
              </Button>
            </Link>
          </div>
        </section>

        <section
          id="contact-section"
          className="contact-section flex flex-col justify-center items-center h-[28rem] md:my-16 max-sm:m-2 max-sm:my-8 max-xl:m-4 p-4 max-sm:text-center"
        >
          <Image
            className="rounded-full mb-8"
            width={100}
            src="images/me.jpeg"
            alt="My profile image"
          />

          <h1 className="text-xl mb-1 font-bold">{t("contactTitle")}</h1>
          <p className="text-base mb-2">{t("contactDescription")}</p>

          <div className="flex gap-2 justify-center">
            <SocialMediaIconButton href="https://github.com/Matheus-IT">
              <GithubIcon />
            </SocialMediaIconButton>

            <SocialMediaIconButton href="https://www.linkedin.com/in/matheus-tech/">
              <LinkedinIcon />
            </SocialMediaIconButton>

            <SocialMediaIconButton href="https://www.instagram.com/matheus_tech_/">
              <InstagramIcon />
            </SocialMediaIconButton>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}
