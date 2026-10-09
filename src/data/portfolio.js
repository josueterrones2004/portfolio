export const profile = {
  name: "Josué Terrones",
  role: "Desarrollo web para negocios",
  location: "Tonalá, Jalisco, México",
  availability: "Disponible para nuevos proyectos",

  programmingExperience: "7",
  professionalExperience: "2+",

  get technologiesCount() {
    return skills.length;
  },

  get projectsCount() {
    return projects.length;
  },

  education: "Ingeniería en Sistemas",
  university: "Universidad Latinoamericana (ULA)",
  educationPeriod: "2023–2026",

  technicalDegree: "Técnico en Programación",
  technicalSchool: "CECyTE Jalisco",
  technicalDegreePeriod: "2019–2022",

  email: "josuetalvizo@gmail.com",

  github: "https://github.com/josueterrones2004",
  linkedin: "https://www.linkedin.com/in/josueterrones2004/",

  intro:
    "Diseño y desarrollo sitios web claros, rápidos y adaptados a celular, desde páginas informativas hasta soluciones con bases de datos, usuarios e integraciones.",
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
    badge: "Producto web",
    status:
      "Proyecto en evolución activa. Sirve como ejemplo de una aplicación completa con cuentas, perfiles, datos persistentes, actividad e integraciones externas.",
    description:
      "Plataforma para organizar películas, series, libros y videojuegos. Incluye cuentas de usuario, perfiles, bibliotecas personales, reseñas, actividad e integración con servicios externos.",
    highlights: [
      "Cuentas, perfiles y bibliotecas personales",
      "Integración con APIs externas y contenido dinámico",
      "Reseñas, actividad y funciones sociales",
    ],
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Supabase",
      "REST APIs",
      "Vercel",
    ],
    demoUrl: "https://media-tracker-five-swart.vercel.app/",
    githubUrl: "https://github.com/josueterrones2004/media-tracker",
    image: "/projects/media-tracker-home.png",
    imageAlt: "Vista previa de MediaTracker",
  },

  {
    title: "DevBoard",
    badge: "Demo funcional",
    status:
      "Aplicación completa orientada a organización de trabajo, tableros, tareas y seguimiento de proyectos.",
    description:
      "Plataforma para gestionar proyectos y tareas con autenticación, espacios de trabajo, flujo Kanban, asignación, filtros y paneles responsivos.",
    highlights: [
      "Panel general y organización de proyectos",
      "Tareas estilo Kanban con filtros y estados",
      "Interfaz responsiva para escritorio y móvil",
    ],
    technologies: [
      "React",
      "TypeScript",
      "Node.js",
      "Express",
      "MongoDB",
      "Tailwind CSS",
    ],
    demoUrl: "https://devboard-five-lovat.vercel.app/",
    githubUrl: "https://github.com/josueterrones2004/devboard",
    image: "/projects/devboard-dashboard.png",
    imageAlt: "Vista previa de DevBoard",
  },
];

export const timeline = [];
