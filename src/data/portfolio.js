export const profile = {
  name: "Josué Terrones",
  role: "Full Stack Web Developer",
  location: "Tonalá, Jalisco, México",
  availability: "Available for opportunities",

  programmingExperience: "7",
  professionalExperience: "2+",

  get technologiesCount() {
    return skills.length;
  },

  get projectsCount() {
    return projects.length;
  },

  education: "Systems Engineering",
  university: "Universidad Latinoamericana (ULA)",
  educationPeriod: "2023–2026",

  technicalDegree: "Technical Degree in Programming",
  technicalSchool: "CECyTE Jalisco",
  technicalDegreePeriod: "2019–2022",

  email: "josuetalvizo@gmail.com",

  github:
    "https://github.com/josueterrones2004",

  linkedin:
    "https://www.linkedin.com/in/josueterrones2004/",

  intro:
    "I build modern, scalable and carefully crafted web applications with a focus on clean development and thoughtful user experiences.",
};

export const skills = [
  "React",
  "JavaScript",
  "TypeScript",
  "HTML5",
  "CSS3",
  "Tailwind CSS",
  "Bootstrap",
  "jQuery",

  "Laravel",
  "PHP",
  "Node.js",
  "Express",
  "REST APIs",

  "MySQL",
  "SQL Server",
  "MongoDB",
  "SQL",

  "C#",
  "Python",

  "Git",
  "GitHub",
  "Postman",
  "VS Code",
  "Linux",
];

export const projects = [
  {
    title: "DevBoard",
    description:
      "A full-stack project and task management platform with secure authentication, project workspaces, Kanban workflows, task assignment, filtering and responsive dashboards.",
    technologies: [
      "React",
      "TypeScript",
      "Node.js",
      "Express",
      "MongoDB",
      "Tailwind CSS",
    ],
    demoUrl: "#",
    githubUrl:
      "https://github.com/josueterrones2004/devboard",
  },

  {
    title: "Portfolio",
    description:
      "A personal developer portfolio built to present my experience, technical skills and selected full-stack projects through a responsive and animated interface.",
    technologies: [
      "React",
      "JavaScript",
      "Tailwind CSS",
      "Motion",
      "Vite",
    ],
    demoUrl: "#",
    githubUrl:
      "https://github.com/josueterrones2004/portfolio",
  },
];

export const timeline = [
  {
    year: "2019",
    period: "2019 — 2022",
    title: "Technical Degree in Programming",
    type: "Education",
    organization: "CECyTE Jalisco",
    description:
      "Started my formal programming education at CECyTE Jalisco, where I built the foundations that led me into software development and web technologies.",
    technologies: [
      "Programming",
      "HTML5",
      "CSS3",
      "JavaScript",
    ],
  },

  {
    year: "2022",
    period: "2022",
    title: "Programming Degree Completed",
    type: "Milestone",
    organization: "CECyTE Jalisco",
    description:
      "Completed my Technical Degree in Programming after three years of formal study, establishing the foundation for my next stage in software development and engineering.",
    technologies: [
      "JavaScript",
      "SQL",
      "MySQL",
      "Git",
    ],
  },

  {
    year: "2023",
    period: "2023 — 2026",
    title: "Systems Engineering",
    type: "Education",
    organization:
      "Universidad Latinoamericana (ULA)",
    description:
      "Continued my academic path with a Systems Engineering degree at Universidad Latinoamericana, combining university studies with increasingly advanced software development work.",
    technologies: [
      "Systems Engineering",
      "Software Development",
      "Programming",
      "Databases",
    ],
  },

  {
    year: "2023",
    period: "Jun 2023 — Nov 2025",
    title: "Web Developer at SEYTU",
    type: "Professional",
    organization: "SEYTU",
    description:
      "Began my professional career as a Web Developer, developing and maintaining production web applications using Laravel, JavaScript and MySQL while also integrating REST APIs for internal systems.",
    technologies: [
      "Laravel",
      "JavaScript",
      "MySQL",
      "REST APIs",
    ],
  },

  {
    year: "2024",
    period: "2024",
    title: "Full Stack Production Work",
    type: "Professional",
    organization: "SEYTU",
    description:
      "Expanded my responsibilities across production applications, building responsive user interfaces, reusable components and new application features while working with Git and Agile development practices.",
    technologies: [
      "Laravel",
      "JavaScript",
      "REST APIs",
      "Git",
      "Agile",
    ],
  },

  {
    year: "2025",
    period: "2025",
    title: "Performance & Maintainability",
    type: "Professional",
    organization: "SEYTU",
    description:
      "Focused increasingly on application quality and performance, contributing to improvements that reduced page load times by 25% while continuing to maintain and extend production systems.",
    technologies: [
      "Performance Optimization",
      "Laravel",
      "MySQL",
      "REST APIs",
    ],
  },

  {
    year: "2026",
    period: "2026",
    title: "Engineering & Full Stack Growth",
    type: "Growth",
    organization:
      "Systems Engineering + Personal Development",
    description:
      "Reached seven years of programming experience while continuing to strengthen my full-stack profile through Systems Engineering, modern web technologies and increasingly polished personal projects.",
    technologies: [
      "React",
      "Node.js",
      "TypeScript",
      "Tailwind CSS",
      "Python",
    ],
  },
];