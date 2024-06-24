import { Button, Card, CardBody, CardHeader, Image } from "@nextui-org/react";
import { ArrowRight } from "lucide-react";

export default function Home() {
  const highlightedProjects = [
    {
      name: "Barbershop",
      imgSrc: "images/projects/barbershop1.png",
      description:
        "A barbershop website where the user can book an appointment and see a real time queue",
      date: "Oct 2021",
    },
    {
      name: "Birthday Reminder",
      imgSrc: "images/projects/birthday-reminder1.png",
      description: "A simple app to remind birthdays via push notifications",
      date: "May 2024",
    },
    {
      name: "Barbershop",
      imgSrc: "images/projects/barbershop1.png",
      description:
        "A barbershop website where the user can book an appointment and see a real time queue",
      date: "Oct 2021",
    },
  ];

  return (
    <main className="max-w-[1024px] mx-auto">
      <section className="hero-section">
        <div className="hero-main-text">
          <em className="text-2xl">
            Hello! I&apos;m <span className="text-sky-700">Matheus Costa!</span>
          </em>
          <br />
          <span className="text-xl">Full-stack developer!</span>
          <p className="text-base mb-6">
            Over 3 years of experience in the tech industry. I specialize in
            building web and mobile applications using technologies such as
            React, Flutter and Django.
          </p>
          <div className="flex justify-center gap-2 mb-8">
            <Image
              height="40"
              width="40"
              radius="none"
              alt="Matheus-React"
              src="images/dart-original.svg"
            ></Image>

            <Image
              height="40"
              width="40"
              radius="none"
              alt="Matheus-React"
              src="images/flutter-original.svg"
            ></Image>

            <Image
              height="40"
              width="40"
              radius="none"
              alt="Matheus-React"
              src="images/react-original.svg"
            ></Image>

            <Image
              height="40"
              width="40"
              radius="none"
              alt="Matheus-React"
              src="images/nextjs-original.svg"
            ></Image>

            <Image
              height="40"
              width="40"
              radius="none"
              alt="Matheus-Javascript"
              src="images/javascript-original.svg"
            ></Image>

            <Image
              height="40"
              width="40"
              radius="none"
              alt="Matheus-Jquery"
              src="images/jquery-original.svg"
            ></Image>

            <Image
              height="40"
              width="40"
              radius="none"
              alt="Matheus-Typescript"
              src="images/typescript-original.svg"
            ></Image>

            <Image
              height="40"
              width="40"
              radius="none"
              alt="Matheus-Django"
              src="images/django-plain.svg"
            ></Image>

            <Image
              height="40"
              width="40"
              radius="none"
              alt="Matheus-Python"
              src="images/python-original.svg"
            ></Image>

            <Image
              height="40"
              width="40"
              radius="none"
              alt="Matheus-Docker"
              src="images/docker-original.svg"
            ></Image>
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

      <section className="highlighted-project-section">
        <h1 className="text-xl mb-4 font-bold">
          Take a look at my highlighted projects
        </h1>

        <div className="flex gap-4 mb-4">
          {highlightedProjects.map((p, i) => (
            <Card key={i} className="p-2">
              <CardHeader className="flex-col items-start">
                <h4 className="font-bold text-large">{p.name}</h4>
                <small className="text-default-500">{p.date}</small>
                <p className="text-sm">{p.description}</p>
              </CardHeader>
              <CardBody className="overflow-visible">
                <Image
                  alt="Card image"
                  src={p.imgSrc}
                  height={350}
                  className="object-cover"
                />
              </CardBody>
            </Card>
          ))}
        </div>

        <div className="flex justify-center">
          <Button className="bg-black text-white">
            See all
            <ArrowRight />
          </Button>
        </div>
      </section>
    </main>
  );
}
