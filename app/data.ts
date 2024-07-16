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
  description: string;
  detailedDescription: string;
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
    description:
      "A barbershop website where the user can book an appointment and see a real time queue",
    detailedDescription: `
      <p class="text-base mt-2">Main Functionalities:</p>

      <ul class="list-disc list-inside">
        <li><strong>Showcase</strong> products and services of a barbershop/hair salon</li>
        <li>User authentication for <strong>booking appointments</strong> in advance</li>
        <li><strong>Real-time queue</strong> to inform customers of the best times to visit</li>
      </ul>

      <p class="text-base text-justify mt-2">
        Using the knowledge acquired throughout the course <em>CS50</em>, the project aimed to create a <strong>responsive website</strong> for a barbershop/hair salon. The focus was on enhancing the user interface and experience for both mobile and desktop users.
      </p>

      <p class="text-base text-justify mt-2">
        A good user experience in a barbershop/hair salon goes beyond just having a nice website. From personal experience, a significant amount of time is often spent waiting for a haircut. To address this, a <strong>real-time queue system</strong> was developed, which clients can access and is managed by the hairstylist. This system allows busy individuals to check the current wait time and choose the most convenient time to visit the salon.
      </p>
    `,
    date: "Oct 2021",
    technologies: [1, 2, 3],
  },
  {
    id: 2,
    name: "Birthday Reminder",
    imgSrc: "images/projects/birthday-reminder1.png",
    liveDemoLink: "",
    repositoryLink: `https://github.com/${githubUsername}/birthday_app`,
    description:
      "A mobile application to remind birthdays via push notifications",
    detailedDescription: `
      <p class="text-base mt-2">Main Functionalities:</p>

      <ul class="list-disc list-inside">
        <li><strong>User authentication</strong> for cataloging a list of birthdays to receive notifications</li>
        <li>Birthday notifications via <strong>push notifications</strong></li>
        <li>Birthday notifications via <strong>email</strong></li>
      </ul>

      <p class="text-base text-justify mt-2">
        Using the knowledge acquired in college, I developed this app to <strong>help my church</strong> by reminding the birthdays of members.
      </p>

      <p class="text-base text-justify mt-2">
        The application is currently in <strong>successful and active use</strong>, and marked my first experience as the product manager of my own application, allowing me to communicate directly with the client.
      </p>

      <p class="text-base text-justify mt-2">
        The solution comprises a mobile app built with <em>Flutter</em> and an API designed with <em>Django REST framework</em>.
      </p>
    `,
    date: "May 2024",
    technologies: [1, 2, 8, 9],
  },
  {
    id: 3,
    name: "Bounce breaker",
    imgSrc: "images/projects/bounce-breaker1.jpeg",
    liveDemoLink: "https://github.com/tvlas/bounce-breaker-mania",
    repositoryLink: `https://github.com/tvlas/bounce-breaker-mania`,
    description:
      "A casual game, multiplatform, built with the flutter flame engine",
    detailedDescription: `
      <p class="text-base mt-2">Main Rules:</p>

      <ul class="list-disc list-inside">
        <li>Make the ball hit the bricks to earn more points</li>
        <li>If all bricks break, go to the next level</li>
        <li>The harder the brick, more is the probability to gain a powerup</li>
        <li>Powerups can make an auxiliar ball show up, increase speed or enlarge the player stick</li>
      </ul>

      <p class="text-base text-justify mt-2">
        I built this game during a collage course with other two friends. It was a bit challenging, because even though I had experience with <em>Flutter</em>, I haven't used the flutter <em>Flame Engine</em> before.
      </p>

      <p class="text-base text-justify mt-2">
        The experience of building this game was awesome, on top of that I learned a lot with my friends when we gathered to discuss about the features, implementation details and suggestions.
      </p>
    `,
    date: "May 2024",
    technologies: [8, 9],
  },
  {
    id: 4,
    name: "Portfolio",
    imgSrc: "images/projects/portfolio1.png",
    liveDemoLink: "",
    repositoryLink: `https://github.com/${githubUsername}/my-portfolio`,
    description:
      "The portfolio website you're accessing that showcases my hard work",
    detailedDescription: `
      <p class="text-base mt-2">Main Functionalities:</p>

      <ul class="list-disc list-inside">
        <li>Main page that <strong>showcases my experience</strong>, technologies I work with, main side projects I built, and a contact section</li>
        <li>Overview of <strong>all interesting projects</strong> I built to learn and apply my knowledge</li>
        <li><strong>Detailed page</strong> to learn more about a specific project, access the repository, and see a live demo</li>
      </ul>

      <p class="text-base text-justify mt-2">
        My portfolio was built strategically to present who I am, what I do, and what I believe in terms of software development.
      </p>

      <p class="text-base text-justify mt-2">
        For technologies, I used <em>Next.js</em> with <em>TypeScript</em> and <em>Tailwind CSS</em>.
      </p>
    `,
    date: "Jul 2024",
    technologies: [4, 5, 6],
  },
];
