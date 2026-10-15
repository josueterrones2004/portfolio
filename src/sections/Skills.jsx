import { motion } from "motion/react";

import Container from "../components/Container";
import { skills } from "../data/portfolio";

const categories = [
  {
    number: "01",
    label: "Frontend",
    description:
      "Modern interfaces, responsive systems and interactive browser experiences.",
    technologies: [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "Bootstrap",
      "Canvas API",
      "Web Audio API",
    ],
    accent: "var(--pink)",
    background: "#301927",
    border: "#6f3854",
  },
  {
    number: "02",
    label: "Backend & Runtime",
    description:
      "Application logic, APIs, server-side development and asynchronous workflows.",
    technologies: [
      "Node.js",
      "Express",
      "Laravel",
      "PHP",
      "Python",
      "C#",
      "AsyncIO",
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
      "Relational and document data, persistence, authentication and managed services.",
    technologies: [
      "MySQL",
      "SQL Server",
      "Supabase",
      "SQLite",
      "MongoDB",
      "SQL",
      "Azure AI Speech",
    ],
    accent: "var(--mint)",
    background: "#182c2a",
    border: "#35665e",
  },
  {
    number: "04",
    label: "Media & Integrations",
    description:
      "Speech synthesis, low-latency audio pipelines and third-party service integration.",
    technologies: [
      "Edge TTS",
      "Speech Synthesis APIs",
      "FFmpeg",
      "Audio Streaming",
      "Real-Time Audio Processing",
      "API Integration",
    ],
    accent: "#83d8ff",
    background: "#17273a",
    border: "#315d7b",
  },
  {
    number: "05",
    label: "Tools & Deployment",
    description:
      "Version control, development environments and production deployment workflows.",
    technologies: [
      "Git",
      "GitHub",
      "Linux",
      "Postman",
      "VS Code",
      "Vercel",
      "GitHub Pages",
    ],
    accent: "var(--lavender)",
    background: "#211d3a",
    border: "#504887",
  },
  {
    number: "06",
    label: "Product Engineering",
    description:
      "The practices I use to take features from implementation through delivery and iteration.",
    technologies: [
      "Authentication",
      "Responsive Design",
      "CRUD Applications",
      "Role-Based Access Control",
      "Web Performance Optimization",
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
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
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
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
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
                <span className="text-[var(--pink)]">stack.</span>
              </span>
            </h2>

            <p className="mt-6 max-w-3xl text-base leading-8 text-[#d4cbd9] sm:text-lg">
              Technologies and workflows I use across full-stack web development, Python, data, cloud services, real-time media, deployment and performance.
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            duration: 0.6,
            delay: 0.08,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mt-16 grid gap-4 border-b border-[#584454] pb-8 sm:grid-cols-2 lg:grid-cols-[1fr_auto_auto] lg:items-end lg:gap-5"
        >
          <div className="sm:col-span-2 lg:col-span-1">
            <p className="text-xs font-black uppercase tracking-[0.3em] text-[var(--lavender)]">
              Stack Breakdown
            </p>
            <h3 className="mt-4 text-3xl font-black tracking-[-0.045em] text-white sm:text-4xl">
              Tools I use to build and ship products.
            </h3>
          </div>

          <SkillStat value={skills.length} label="Technologies & skills" />
          <SkillStat value={categories.length} label="Focused areas" />
        </motion.div>

        <div className="mt-8 grid gap-5 lg:grid-cols-2">
          {categories.map((category, index) => (
            <motion.article
              key={category.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.22 }}
              transition={{
                duration: 0.55,
                delay: (index % 2) * 0.06,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="relative flex min-h-full flex-col overflow-hidden rounded-[26px] border p-7 sm:p-8 lg:p-9"
              style={{
                backgroundColor: category.background,
                borderColor: category.border,
              }}
            >
              <div
                className="absolute inset-x-0 top-0 h-[4px]"
                style={{ backgroundColor: category.accent }}
              />

              <div className="flex items-start justify-between gap-5">
                <div>
                  <p
                    className="font-mono text-xs font-black uppercase tracking-[0.2em]"
                    style={{ color: category.accent }}
                  >
                    Area {category.number}
                  </p>

                  <h4 className="mt-3 text-2xl font-black tracking-[-0.04em] text-white sm:text-3xl">
                    {category.label}
                  </h4>
                </div>

                <span
                  className="flex h-11 min-w-11 items-center justify-center rounded-full border font-mono text-xs font-black"
                  style={{
                    color: category.accent,
                    borderColor: category.border,
                    backgroundColor: "#151121",
                  }}
                >
                  {String(category.technologies.length).padStart(2, "0")}
                </span>
              </div>

              <p className="mt-5 max-w-xl text-sm leading-7 text-[#d1c8d6] sm:text-base">
                {category.description}
              </p>

              <div className="mt-7 flex flex-wrap gap-2.5">
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
            </motion.article>
          ))}
        </div>
      </Container>
    </section>
  );
}

function SkillStat({ value, label }) {
  return (
    <div className="rounded-[18px] border border-white/10 bg-[#151121] px-5 py-4 sm:min-w-[180px]">
      <p className="text-2xl font-black tracking-[-0.045em] text-white">
        {String(value).padStart(2, "0")}
      </p>
      <p className="mt-1 text-[10px] font-black uppercase tracking-[0.18em] text-white/40">
        {label}
      </p>
    </div>
  );
}

export default Skills;
