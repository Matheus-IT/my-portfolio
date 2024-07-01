interface InnerDict {
  [key: string]: string;
}
type AllTechs = {
  [key: number]: InnerDict;
};

export const allTechnologies: AllTechs = {
  1: { name: "python", src: "images/python-original.svg" },
  2: { name: "django", src: "images/django-plain.svg" },
  3: { name: "javascript", src: "images/javascript-original.svg" },
  4: { name: "typescript", src: "images/typescript-original.svg" },
  5: { name: "react", src: "images/react-original.svg" },
  6: { name: "nextjs", src: "images/nextjs-original.svg" },
  7: { name: "jquery", src: "images/jquery-original.svg" },
  8: { name: "dart", src: "images/dart-original.svg" },
  9: { name: "flutter", src: "images/flutter-original.svg" },
  10: { name: "docker", src: "images/docker-original.svg" },
};

export const allProjects = [
  {
    name: "Barbershop",
    imgSrc: "images/projects/barbershop1.png",
    description:
      "A barbershop website where the user can book an appointment and see a real time queue",
    date: "Oct 2021",
    technologies: [1, 2, 3],
  },
  {
    name: "Birthday Reminder",
    imgSrc: "images/projects/birthday-reminder1.png",
    description: "A simple app to remind birthdays via push notifications",
    date: "May 2024",
    technologies: [8, 9],
  },
  {
    name: "Portfolio",
    imgSrc: "images/projects/portfolio1.png",
    description:
      "The portfolio website you're accessing that showcases my hard work",
    date: "Oct 2021",
    technologies: [4, 5, 6],
  },
];
