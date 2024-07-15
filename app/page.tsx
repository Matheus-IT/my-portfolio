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
import { allProjects, allTechnologies } from "./data";
import Navbar from "./ui/navbar";
import Footer from "./ui/footer";
import SocialMediaIconButton from "./ui/socialMediaIconButton";
import { GithubIcon, InstagramIcon, LinkedinIcon } from "./ui/myIcons";

export default function Home() {
  const highlightedProjects = allProjects.slice(0, 3);

  return (
    <>
      <Navbar />
      <main className="max-w-[1024px] mx-auto">
        <section className="hero-section">
          <div className="hero-main-text">
            <em className="text-2xl">
              Hello! I&apos;m{" "}
              <span className="text-sky-700">Matheus Costa!</span>
            </em>
            <br />
            <span className="text-xl">Full-stack developer!</span>
            <p className="text-base mb-6">
              Over <strong>3 years of experience</strong> in the tech industry.
              I specialize in building web and mobile applications using
              technologies such as React, Flutter and Django.
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
              <Button className="bg-black text-white">My resume</Button>
            </div>
          </div>

          <Image
            width={500}
            height={500}
            alt="Hero image"
            src="images/hero-img.png"
          />
        </section>

        <section
          id="highlighted-project-section"
          className="highlighted-project-section"
        >
          <h1 className="text-xl mb-8 font-bold">
            Take a look at my highlighted projects
          </h1>

          <div className="flex gap-4 mb-8">
            {highlightedProjects.map((p, i) => (
              <Card key={i} className="flex-grow basis-0 p-2">
                <CardHeader className="flex-col items-start pb-0">
                  <h4 className="font-bold text-large">{p.name}</h4>
                  <div className="flex justify-between w-full">
                    <small className="text-default-500">{p.date}</small>

                    <div className="flex justify-center gap-1">
                      {Object.entries(p.technologies).map(([key, tech]) => (
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
                  <p className="text-sm">{p.description}</p>
                </CardHeader>

                <CardBody className="overflow-visible">
                  <Image alt="Card image" src={p.imgSrc} width={350} isZoomed />
                </CardBody>

                <CardFooter>
                  <Link className="ml-auto" href={`/projects/${p.id}`}>
                    <Button className="bg-black text-white">See details</Button>
                  </Link>
                </CardFooter>
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

        <section id="contact-section" className="contact-section">
          <Image
            className="rounded-full mb-8"
            width={100}
            src="images/me.jpeg"
            alt="My profile image"
          />

          <h1 className="text-xl mb-1 font-bold">
            Enjoyed my work? Let&apos;s work together!
          </h1>
          <p className="text-base mb-2">
            I&apos;m always up for a chat. Give me a shout on social media.
          </p>

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
