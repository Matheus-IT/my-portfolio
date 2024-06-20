import Image from "next/image";

export default function Home() {
  return (
    <main className="flex items-center justify-center max-w-[1024px] mx-auto">
      <section className="hero-section">
        <h1 className="hero-main-text">
          Hello! I&apos;m <span className="text-sky-950">Matheus Costa</span>.{" "}
          <br /> I&apos;m a full-stack developer!
        </h1>

        <div className="flex justify-center gap-2">
          <Image
            height="40"
            width="40"
            alt="Matheus-React"
            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/dart/dart-original.svg"
          ></Image>

          <Image
            height="40"
            width="40"
            alt="Matheus-React"
            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/flutter/flutter-original.svg"
          ></Image>

          <Image
            height="40"
            width="40"
            alt="Matheus-React"
            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg"
          ></Image>

          <Image
            height="40"
            width="40"
            alt="Matheus-React"
            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nextjs/nextjs-original.svg"
          ></Image>

          <Image
            height="40"
            width="40"
            alt="Matheus-Javascript"
            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg"
          ></Image>

          <Image
            height="40"
            width="40"
            alt="Matheus-Jquery"
            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/jquery/jquery-original.svg"
          ></Image>

          <Image
            height="40"
            width="40"
            alt="Matheus-Typescript"
            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg"
          ></Image>

          <Image
            height="40"
            width="40"
            alt="Matheus-Django"
            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/django/django-plain.svg"
          ></Image>

          <Image
            height="40"
            width="40"
            alt="Matheus-Python"
            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg"
          ></Image>

          <Image
            height="40"
            width="40"
            alt="Matheus-Docker"
            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original.svg"
          ></Image>
        </div>
      </section>
    </main>
  );
}
