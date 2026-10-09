export const profile = {
  name: "Josué Terrones",
  role: "Software Developer | Full Stack Web Development",
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
    "I build and deploy modern web applications across frontend, backend, databases and external APIs, with a focus on practical products, maintainable code and polished user experiences.",
};

export const skills = [
  "React",
  "Next.js",
  "JavaScript",
  "TypeScript",
  "HTML5",
  "CSS3",
  "Tailwind CSS",
  "Bootstrap",

  "Laravel",
  "PHP",
  "Node.js",
  "Express",
  "REST APIs",

  "MySQL",
  "SQL Server",
  "Supabase",
  "SQL",

  "C#",
  "Python",

  "Git",
  "GitHub",
  "Postman",
  "VS Code",
  "Linux",
  "Vercel",

  "AI-Assisted Software Development",
];

export const projects = [
  {
    title: "MediaTracker",
    badge: "Pre-Alpha",
    status:
      "Currently in pre-alpha. Some flows still have bugs, several features are still being refined, and there are pending improvements and content/admin tools planned for upcoming iterations.",
    description:
      "A full-stack media tracking platform for movies, TV series, books and games, featuring authentication, user profiles, personal libraries, reviews, activity tracking and external media API integrations.",
    highlights: [
      "Authentication, profiles and personal libraries",
      "External media API integrations and dynamic artwork",
      "Reviews, activity tracking and social features",
    ],
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Supabase",
      "REST APIs",
      "Vercel",
    ],
    demoUrl:
      "https://media-tracker-five-swart.vercel.app/",
    githubUrl:
      "https://github.com/josueterrones2004/media-tracker",
    image:
      "/projects/media-tracker-home.png",
    imageAlt:
      "MediaTracker home page preview",
  },

  {
    title: "DevBoard",
    badge: "Live Demo",
    status:
      "A full-stack task and workspace application focused on productivity flows, dashboard visibility and project organization.",
    description:
      "A full-stack project and task management platform with secure authentication, project workspaces, Kanban workflows, task assignment, filtering and responsive dashboards.",
    highlights: [
      "Workspace dashboard and project overview",
      "Kanban-style task organization and filtering",
      "Responsive interface for project and task management",
    ],
    technologies: [
      "React",
      "TypeScript",
      "Node.js",
      "Express",
      "MongoDB",
      "Tailwind CSS",
    ],
    demoUrl:
      "https://devboard-five-lovat.vercel.app/",
    githubUrl:
      "https://github.com/josueterrones2004/devboard",
    image:
      "/projects/devboard-dashboard.png",
    imageAlt:
      "DevBoard dashboard preview",
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
      "Continued strengthening my full-stack profile through modern web development, deployed personal products and AI-assisted software development workflows.",
    technologies: [
      "React",
      "Next.js",
      "TypeScript",
      "Supabase",
      "AI-Assisted Development",
    ],
  },
];