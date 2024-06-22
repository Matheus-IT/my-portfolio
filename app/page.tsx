import { Button, Image } from "@nextui-org/react";

export default function Home() {
  return (
    <main className="flex items-center justify-center max-w-[1024px] mx-auto">
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
              alt="Matheus-React"
              src="images/dart-original.svg"
            ></Image>

            <Image
              height="40"
              width="40"
              alt="Matheus-React"
              src="images/flutter-original.svg"
            ></Image>

            <Image
              height="40"
              width="40"
              alt="Matheus-React"
              src="images/react-original.svg"
            ></Image>

            <Image
              height="40"
              width="40"
              alt="Matheus-React"
              src="images/nextjs-original.svg"
            ></Image>

            <Image
              height="40"
              width="40"
              alt="Matheus-Javascript"
              src="images/javascript-original.svg"
            ></Image>

            <Image
              height="40"
              width="40"
              alt="Matheus-Jquery"
              src="images/jquery-original.svg"
            ></Image>

            <Image
              height="40"
              width="40"
              alt="Matheus-Typescript"
              src="images/typescript-original.svg"
            ></Image>

            <Image
              height="40"
              width="40"
              alt="Matheus-Django"
              src="images/django-plain.svg"
            ></Image>

            <Image
              height="40"
              width="40"
              alt="Matheus-Python"
              src="images/python-original.svg"
            ></Image>

            <Image
              height="40"
              width="40"
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
    </main>
  );
}
