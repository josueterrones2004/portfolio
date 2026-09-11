import { motion } from "motion/react";

import Container from "../components/Container";
import {
  profile,
  skills,
} from "../data/portfolio";

const categories = [
  {
    number: "01",
    label: "Frontend",
    description:
      "Technologies I use to build responsive interfaces, reusable components and polished user experiences.",
    technologies: [
      "React",
      "JavaScript",
      "TypeScript",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "Bootstrap",
      "jQuery",
    ],
    accent: "var(--pink)",
    background: "#301927",
    border: "#6f3854",
  },
  {
    number: "02",
    label: "Backend",
    description:
      "Server-side technologies for application logic, APIs and full-stack web development.",
    technologies: [
      "Laravel",
      "PHP",
      "Node.js",
      "Express",
      "REST APIs",
    ],
    accent: "var(--cream)",
    background: "#2c241a",
    border: "#66542c",
  },
  {
    number: "03",
    label: "Databases",
    description:
      "Relational and document databases used to structure, query and persist application data.",
    technologies: [
      "MySQL",
      "SQL Server",
      "MongoDB",
      "SQL",
    ],
    accent: "var(--mint)",
    background: "#182c2a",
    border: "#35665e",
  },
  {
    number: "04",
    label: "Programming",
    description:
      "Additional programming experience outside my primary web development stack.",
    technologies: [
      "C#",
    ],
    accent: "var(--lavender)",
    background: "#211d3a",
    border: "#504887",
  },
  {
    number: "05",
    label: "Tools & Workflow",
    description:
      "Tools and environments I use for development, testing, version control and day-to-day workflow.",
    technologies: [
      "Git",
      "GitHub",
      "Postman",
      "VS Code",
      "Linux",
    ],
    accent: "#ff9fc5",
    background: "#2a192d",
    border: "#663753",
  },
];

const capabilities = [
  "Responsive UI",
  "Reusable Components",
  "API Integration",
  "Performance Optimization",
  "Agile",
];

const technologyColors = [
  "var(--pink)",
  "var(--cream)",
  "var(--mint)",
  "var(--lavender)",
];

function Skills() {
  return (
    <section
      id="skills"
      className="relative overflow-hidden bg-[#1b1325] py-24 sm:py-28 lg:py-32"
    >
      <div className="absolute inset-x-0 top-0 h-[4px] bg-[var(--cream)] shadow-[0_0_24px_rgba(255,230,154,.35)]" />

      <div className="pointer-events-none absolute -left-52 top-[8%] h-[480px] w-[480px] rounded-full bg-[#432039] blur-[150px]" />

      <div className="pointer-events-none absolute -right-52 bottom-[5%] h-[520px] w-[520px] rounded-full bg-[#292557] blur-[160px]" />

      <Container className="relative max-w-[1580px]">
        <div className="grid gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:items-end lg:gap-24">
          <motion.div
            initial={{
              opacity: 0,
              x: -25,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              amount: 0.25,
            }}
            transition={{
              duration: 0.65,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <div className="flex items-center gap-3">
              <span className="h-3 w-3 rounded-full bg-[var(--cream)] shadow-[0_0_14px_rgba(255,230,154,.65)]" />

              <p className="text-xs font-black uppercase tracking-[0.3em] text-[var(--cream)]">
                Skills / Stack
              </p>
            </div>

            <p className="mt-5 font-mono text-sm font-bold text-[var(--pink)]">
              {"<technologies />"}
            </p>
          </motion.div>

          <motion.div
            initial={{
              opacity: 0,
              x: 25,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              amount: 0.25,
            }}
            transition={{
              duration: 0.65,
              delay: 0.08,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <h2 className="max-w-[900px] text-4xl font-black leading-[1.02] tracking-[-0.055em] text-white sm:text-5xl lg:text-[4.4rem]">
              Technologies behind
              <span className="block">
                the things I{" "}
                <span className="text-[var(--pink)]">
                  build.
                </span>
              </span>
            </h2>

            <p className="mt-6 max-w-3xl text-base leading-8 text-[#d4cbd9] sm:text-lg">
              My stack covers frontend development, backend systems,
              databases, programming languages and the tools I use
              throughout the development process.
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{
            opacity: 0,
            y: 22,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.25,
          }}
          transition={{
            duration: 0.6,
            delay: 0.1,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mt-16 grid overflow-hidden rounded-[28px] border border-[#51354b] bg-[#26172b] lg:grid-cols-[0.3fr_1.7fr]"
        >
          <div className="relative flex min-h-[260px] flex-col justify-between overflow-hidden border-b border-[#51354b] p-8 lg:border-b-0 lg:border-r lg:p-10">
            <div className="absolute -bottom-20 -right-14 h-[210px] w-[210px] rounded-full bg-[#61304e]" />

            <div className="relative">
              <p className="text-xs font-black uppercase tracking-[0.28em] text-[var(--pink)]">
                Current stack
              </p>

              <p className="mt-4 font-mono text-xs text-white/45">
                skills.length
              </p>
            </div>

            <div className="relative">
              <div className="flex items-end gap-4">
                <span className="text-[clamp(5rem,9vw,8.5rem)] font-black leading-[0.75] tracking-[-0.09em] text-white">
                  {skills.length}
                </span>
              </div>

              <p className="mt-5 max-w-[150px] text-xs font-black uppercase leading-[1.6] tracking-[0.16em] text-[#c5bacb]">
                Technologies & Tools
              </p>
            </div>
          </div>

          <div className="relative flex min-h-[260px] items-center overflow-hidden p-8 lg:p-10">
            <div className="pointer-events-none absolute right-[-80px] top-[-100px] h-[300px] w-[300px] rounded-full bg-[var(--pink)]/10 blur-[100px]" />

            <div className="relative flex w-full flex-wrap items-baseline gap-x-6 gap-y-5">
              {skills.map(
                (technology, index) => {
                  const color =
                    technologyColors[
                      index %
                        technologyColors.length
                    ];

                  const isPrimary =
                    index < 8;

                  return (
                    <motion.span
                      key={technology}
                      initial={{
                        opacity: 0,
                        y: 14,
                      }}
                      whileInView={{
                        opacity: 1,
                        y: 0,
                      }}
                      viewport={{
                        once: true,
                      }}
                      transition={{
                        duration: 0.4,
                        delay:
                          index * 0.025,
                      }}
                      className={`font-black leading-none tracking-[-0.045em] ${
                        isPrimary
                          ? index % 3 === 0
                            ? "text-3xl sm:text-4xl lg:text-[2.75rem]"
                            : "text-2xl sm:text-3xl lg:text-[2.25rem]"
                          : "text-xl sm:text-2xl lg:text-[1.7rem]"
                      }`}
                      style={{
                        color,
                      }}
                    >
                      {technology}
                    </motion.span>
                  );
                },
              )}
            </div>
          </div>
        </motion.div>

        <div className="mt-24 flex items-end justify-between gap-8 border-b border-[#584454] pb-8">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.3em] text-[var(--lavender)]">
              Breakdown
            </p>

            <h3 className="mt-4 text-3xl font-black tracking-[-0.045em] text-white sm:text-4xl">
              How the stack is organized.
            </h3>
          </div>

          <span className="hidden font-mono text-xs text-white/35 sm:block">
            05 categories / {skills.length} technologies & tools
          </span>
        </div>

        <div className="mt-8 space-y-5">
          {categories.map(
            (category, index) => (
              <motion.article
                key={category.label}
                initial={{
                  opacity: 0,
                  y: 24,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.25,
                }}
                transition={{
                  duration: 0.55,
                  delay:
                    index * 0.06,
                  ease: [
                    0.22,
                    1,
                    0.36,
                    1,
                  ],
                }}
                className="relative overflow-hidden rounded-[24px] border"
                style={{
                  backgroundColor:
                    category.background,
                  borderColor:
                    category.border,
                }}
              >
                <div
                  className="absolute bottom-0 left-0 top-0 w-[5px]"
                  style={{
                    backgroundColor:
                      category.accent,
                  }}
                />

                <div className="grid gap-8 p-7 sm:p-8 lg:grid-cols-[80px_0.55fr_0.9fr_1.5fr] lg:items-center lg:px-10 lg:py-9">
                  <span
                    className="font-mono text-sm font-black"
                    style={{
                      color:
                        category.accent,
                    }}
                  >
                    {category.number}
                  </span>

                  <h4 className="text-2xl font-black tracking-[-0.04em] text-white sm:text-3xl">
                    {category.label}
                  </h4>

                  <p className="max-w-lg text-sm leading-7 text-[#d1c8d6] sm:text-base">
                    {
                      category.description
                    }
                  </p>

                  <div className="flex flex-wrap gap-2.5 lg:justify-end">
                    {category.technologies.map(
                      (technology) => (
                        <span
                          key={technology}
                          className="rounded-full border px-4 py-2 text-xs font-bold"
                          style={{
                            color:
                              category.accent,
                            borderColor:
                              category.border,
                            backgroundColor:
                              "#151121",
                          }}
                        >
                          {technology}
                        </span>
                      ),
                    )}
                  </div>
                </div>
              </motion.article>
            ),
          )}
        </div>

        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.3,
          }}
          transition={{
            duration: 0.6,
          }}
          className="mt-16 rounded-[26px] border border-[#3f3a50] bg-[#151321] p-7 sm:p-8 lg:p-10"
        >
          <div className="grid gap-8 lg:grid-cols-[0.65fr_1.35fr] lg:items-center">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.28em] text-[var(--mint)]">
                Development capabilities
              </p>

              <h3 className="mt-4 text-2xl font-black tracking-[-0.04em] text-white sm:text-3xl">
                Beyond the technology names.
              </h3>
            </div>

            <div className="flex flex-wrap gap-3 lg:justify-end">
              {capabilities.map(
                (capability) => (
                  <span
                    key={capability}
                    className="rounded-full border border-[#376b63] bg-[#172b2b] px-4 py-2.5 text-xs font-bold text-[var(--mint)]"
                  >
                    {capability}
                  </span>
                ),
              )}
            </div>
          </div>
        </motion.div>

        <div className="mt-12 flex flex-col gap-4 border-t border-[#584454] pt-7 text-xs font-bold uppercase tracking-[0.18em] text-white/40 sm:flex-row sm:items-center sm:justify-between">
          <span>
            {profile.programmingExperience} years programming experience
          </span>

          <span className="text-[var(--pink)]">
            {profile.professionalExperience} years professional experience
          </span>
        </div>
      </Container>
    </section>
  );
}

export default Skills;