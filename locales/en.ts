export default {
  ChangeLocaleButton: {
    english: "English",
    portuguese: "Portuguese",
  },
  NavBar: {
    about: "About",
    mainProjects: "Main Projects",
    allProjects: "All Projects",
    contact: "Contact",
  },
  HomePage: {
    heroTitle: "Hello! I'm ",
    heroMyRole: "Full-stack developer!",
    heroDescription:
      "Over {yearsOfExperience} years of experience in the tech industry. I specialize in building web and mobile applications using technologies such as React, Flutter and Django.",
    heroResume: "My resume",
    highlightedProjectsSectionTitle: "Take a look at my highlighted projects!",
    seeAll: "See all",
    contactTitle: "Enjoyed my work? Let's work together!",
    contactDescription:
      "I'm always up for a chat. Give me a shout on social media.",
  },
  Projects: {
    takeALook: "Take a look at this project",
    allProjects: "These are all my projects",
    seeAll: "See all",
    seeDetails: "See details",
    p1description:
      "A barbershop website where the user can book an appointment and see a real time queue",
    p1detailedDescription: `
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
    p2description:
      "A mobile application to remind birthdays via push notifications and email",
    p2detailedDescription: `
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
    p3description:
      "A casual game, multiplatform, built with the flutter flame engine",
    p3detailedDescription: `
      <p class="text-base mt-2">Main Rules:</p>

      <ul class="list-disc list-inside">
        <li>Make the ball hit the bricks to earn more points</li>
        <li>If all bricks break, go to the next level</li>
        <li>The harder the brick, more is the probability to gain a power-up</li>
        <li>Power-ups can make an auxiliar ball show up, increase speed or enlarge the player stick</li>
      </ul>

      <p class="text-base text-justify mt-2">
        I built this game during a collage course with other two friends. It was a bit challenging, because even though I had experience with <em>Flutter</em>, I haven't used the flutter <em>Flame Engine</em> before.
      </p>

      <p class="text-base text-justify mt-2">
        The experience of building this game was awesome, on top of that I learned a lot with my friends when we gathered to discuss about the features, implementation details and suggestions.
      </p>
    `,
    p4description:
      "The portfolio website you're accessing that showcases my hard work",
    p4detailedDescription: `
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
    p5description:
      "A battleship game built with JavaScript to improve my logic and problem solving process",
    p5detailedDescription: `
      <p class="text-base mt-2">Main Functionalities:</p>

      <ul class="list-disc list-inside">
        <li>The player has a given number of attempts to sink a battleship</li>
        <li>A battleship consist of a number of cells, placed horizontally or vertically</li>
        <li>The player can click on a cell and then receive a feedback whether a battleship was hit or not</li>
      </ul>

      <p class="text-base text-justify mt-2">
        I love building games, because they're amusing to build and also pushes me to my limits of critical thinking
      </p>

      <p class="text-base text-justify mt-2">
        For technologies, I used <em>JavaScript</em>, <em>HTML</em> and <em>CSS</em>.
      </p>
    `,
    p6description: "An essencial social media fully functional",
    p6detailedDescription: `
      <p class="text-base mt-2">Main Functionalities:</p>

      <ul class="list-disc list-inside">
        <li>Make posts</li>
        <li>Follow other users</li>
        <li>Like posts of other users</li>
      </ul>

      <p class="text-base text-justify mt-2">
        I build this project curious to know how to structure a basic social media website
      </p>

      <p class="text-base text-justify mt-2">
        For technologies, I used <em>Python</em>, <em>Django</em>, <em>JavaScript</em>, <em>HTML</em> and <em>CSS</em>.
      </p>
    `,
  },
} as const;
