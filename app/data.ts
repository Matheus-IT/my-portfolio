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

const githubUsername = "Matheus-IT";

export type Project = {
  id: number;
  name: string;
  imgSrc: string;
  liveDemoLink: string;
  repositoryLink: string;
  date: string;
  technologies: number[];
};
export const allProjects: Project[] = [
  {
    id: 1,
    name: "Barbershop",
    imgSrc: "images/projects/barbershop1.png",
    liveDemoLink: "",
    repositoryLink: `https://github.com/${githubUsername}/capstone`,
    date: "10/2021", // Outubro 2021
    technologies: [1, 2, 3],
  },
  {
    id: 2,
    name: "Birthday Reminder",
    imgSrc: "images/projects/birthday-reminder1.png",
    liveDemoLink: "",
    repositoryLink: `https://github.com/${githubUsername}/birthday_app`,
    date: "05/2024", // Maio 2024
    technologies: [1, 2, 8, 9],
  },
  {
    id: 3,
    name: "Bounce breaker",
    imgSrc: "images/projects/bounce-breaker1.jpeg",
    liveDemoLink: "https://tvlas.github.io/bounce-breaker-mania",
    repositoryLink: `https://github.com/tvlas/bounce-breaker-mania`,
    date: "05/2024", // Maio 2024
    technologies: [8, 9],
  },
  {
    id: 4,
    name: "Portfolio",
    imgSrc: "images/projects/portfolio1.png",
    liveDemoLink: "",
    repositoryLink: `https://github.com/${githubUsername}/my-portfolio`,
    date: "07/2024", // Julho 2024
    technologies: [4, 5, 6],
  },
  {
    id: 5,
    name: "Battleship Game",
    imgSrc: "images/projects/battleship1.png",
    liveDemoLink: "https://matheus-it.github.io/battleship-game/",
    repositoryLink: `https://github.com/${githubUsername}/battleship-game`,
    date: "07/2020", // Julho 2020
    technologies: [3],
  },
];
