import { motion } from "motion/react";

import Container from "../components/Container";

const categories = [
  {
    number: "01",
    label: "Frontend",
    description:
      "Interfaces, component systems and responsive product experiences.",
    technologies: [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "Bootstrap",
    ],
    accent: "var(--pink)",
    background: "#301927",
    border: "#6f3854",
  },
  {
    number: "02",
    label: "Backend",
    description:
      "Application logic, REST APIs and full-stack web development.",
    technologies: [
      "Node.js",
      "Express",
      "Laravel",
      "PHP",
      "REST APIs",
    ],
    accent: "var(--cream)",
    background: "#2c241a",
    border: "#66542c",
  },
  {
    number: "03",
    label: "Data & Services",
    description:
      "Application data, authentication and backend services.",
    technologies: [
      "Supabase",
      "MySQL",
      "SQL Server",
      "SQL",
    ],
    accent: "var(--mint)",
    background: "#182c2a",
    border: "#35665e",
  },
  {
    number: "04",
    label: "Tools & Deployment",
    description:
      "Version control, development environments, API testing and deployment.",
    technologies: [
      "Git",
      "GitHub",
      "Linux",
      "Postman",
      "VS Code",
      "Vercel",
    ],
    accent: "var(--lavender)",
    background: "#211d3a",
    border: "#504887",
  },
  {
    number: "05",
    label: "Development Workflow",
    description:
      "How I move from idea to implementation, iteration and delivery.",
    technologies: [
      "Authentication",
      "API Integration",
      "Responsive Design",
      "CRUD Applications",
      "AI-Assisted Software Development",
    ],
    accent: "#ff9fc5",
    background: "#2a192d",
    border: "#663753",
  },
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
              My current
              <span className="block">
                development{" "}
                <span className="text-[var(--pink)]">
                  stack.
                </span>
              </span>
            </h2>

            <p className="mt-6 max-w-3xl text-base leading-8 text-[#d4cbd9] sm:text-lg">
              Technologies and workflows I use to build and ship full-stack products — from interface development and APIs to data, deployment and iteration.
            </p>
          </motion.div>
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
            delay: 0.08,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mt-16 flex flex-col gap-6 border-b border-[#584454] pb-8 sm:flex-row sm:items-end sm:justify-between"
        >
          <div>
            <p className="text-xs font-black uppercase tracking-[0.3em] text-[var(--lavender)]">
              Stack Breakdown
            </p>

            <h3 className="mt-4 text-3xl font-black tracking-[-0.045em] text-white sm:text-4xl">
              Tools I use to build and ship products.
            </h3>
          </div>

          <span className="font-mono text-xs text-white/35">
            05 focused areas
          </span>
        </motion.div>

        <div className="mt-8 space-y-5">
          {categories.map((category, index) => (
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
                delay: index * 0.06,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="relative overflow-hidden rounded-[24px] border"
              style={{
                backgroundColor: category.background,
                borderColor: category.border,
              }}
            >
              <div
                className="absolute bottom-0 left-0 top-0 w-[5px]"
                style={{
                  backgroundColor: category.accent,
                }}
              />

              <div className="grid gap-8 p-7 sm:p-8 lg:grid-cols-[80px_0.55fr_0.9fr_1.5fr] lg:items-center lg:px-10 lg:py-9">
                <span
                  className="font-mono text-sm font-black"
                  style={{
                    color: category.accent,
                  }}
                >
                  {category.number}
                </span>

                <h4 className="text-2xl font-black tracking-[-0.04em] text-white sm:text-3xl">
                  {category.label}
                </h4>

                <p className="max-w-lg text-sm leading-7 text-[#d1c8d6] sm:text-base">
                  {category.description}
                </p>

                <div className="flex flex-wrap gap-2.5 lg:justify-end">
                  {category.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="rounded-full border px-4 py-2 text-xs font-bold"
                      style={{
                        color: category.accent,
                        borderColor: category.border,
                        backgroundColor: "#151121",
                      }}
                    >
                      {technology}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default Skills;
