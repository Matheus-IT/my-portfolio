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
      </section>
    </main>
  );
}
