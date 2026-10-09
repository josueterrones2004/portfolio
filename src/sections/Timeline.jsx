import { motion } from "motion/react";

import Container from "../components/Container";
import { profile, timeline } from "../data/portfolio";

const selectedTitles = [
  "Technical Degree in Programming",
  "Systems Engineering",
  "Web Developer at SEYTU",
  "Engineering & Full Stack Growth",
];

const typeStyles = {
  Education: {
    accent: "var(--lavender)",
    background: "#211d3a",
    border: "#514887",
  },
  Professional: {
    accent: "var(--pink)",
    background: "#2a192d",
    border: "#6b3858",
  },
  Growth: {
    accent: "var(--mint)",
    background: "#172b2b",
    border: "#376b63",
  },
};

function Timeline() {
  const selected = selectedTitles
    .map((title) => timeline.find((item) => item.title === title))
    .filter(Boolean);

  return (
    <section
      id="timeline"
      className="relative overflow-hidden bg-[#151321] py-24 sm:py-28 lg:py-32"
    >
      <div className="absolute inset-x-0 top-0 h-[4px] bg-[var(--mint)] shadow-[0_0_24px_rgba(143,240,197,.35)]" />
      <div className="pointer-events-none absolute -left-52 top-[15%] h-[500px] w-[500px] rounded-full bg-[#233c3d] blur-[160px]" />
      <div className="pointer-events-none absolute -right-52 bottom-[10%] h-[520px] w-[520px] rounded-full bg-[#382044] blur-[160px]" />

      <Container className="relative max-w-[1580px]">
        <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:items-end lg:gap-24">
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="flex items-center gap-3">
              <span className="h-3 w-3 rounded-full bg-[var(--mint)] shadow-[0_0_14px_rgba(143,240,197,.65)]" />
              <p className="text-xs font-black uppercase tracking-[0.3em] text-[var(--mint)]">
                Timeline / Journey
              </p>
            </div>

            <p className="mt-5 font-mono text-sm font-bold text-[var(--pink)]">
              {"<experience />"}
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
            <h2 className="max-w-[950px] text-4xl font-black leading-[1.02] tracking-[-0.055em] text-white sm:text-5xl lg:text-[4.25rem]">
              The milestones that shaped
              <span className="block">
                my current{" "}
                <span className="text-[var(--mint)]">software profile.</span>
              </span>
            </h2>

            <p className="mt-6 max-w-3xl text-base leading-8 text-[#d1cad7] sm:text-lg">
              A shorter view of the path that matters most today: programming
              education, Systems Engineering, professional web development and
              current full-stack product work.
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mt-16 grid overflow-hidden rounded-[24px] border border-[#3d3a4b] bg-[#11101c] sm:grid-cols-3"
        >
          <Summary
            value={`${profile.professionalExperience} years`}
            label="Professional Experience"
            color="var(--pink)"
          />
          <Summary
            value="Systems"
            label="Engineering Graduate"
            color="var(--lavender)"
            bordered
          />
          <Summary
            value="Full Stack"
            label="Current Focus"
            color="var(--mint)"
            bordered
          />
        </motion.div>

        <div className="relative mt-20 space-y-7">
          {selected.map((item, index) => (
            <TimelineEvent
              key={`${item.year}-${item.title}`}
              item={item}
              index={index}
              connectNext={index < selected.length - 1}
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 flex items-center gap-5"
        >
          <span className="font-mono text-xs font-bold uppercase tracking-[0.22em] text-[var(--mint)]">
            Current direction
          </span>
          <span className="h-px flex-1 bg-[#454052]" />
          <span className="font-mono text-xs text-white/35">
            software development · full stack · product work
          </span>
        </motion.div>
      </Container>
    </section>
  );
}

function TimelineEvent({ item, index, connectNext = false }) {
  const style = typeStyles[item.type] || typeStyles.Growth;

  return (
    <motion.article
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.6,
        delay: index * 0.05,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="relative grid gap-5 pl-14 sm:pl-20 lg:grid-cols-[190px_1fr]"
    >
      {connectNext && (
        <div className="absolute bottom-[-28px] left-[19px] top-[42px] w-[2px] bg-[#393548] sm:left-[31px]" />
      )}

      <div
        className="absolute left-[10px] top-8 z-10 h-5 w-5 rounded-full border-[5px] border-[#151321] sm:left-[22px]"
        style={{
          backgroundColor: style.accent,
          boxShadow: `0 0 18px ${style.accent}`,
        }}
      />

      <div className="pt-7">
        <p
          className="text-4xl font-black tracking-[-0.055em] sm:text-5xl"
          style={{ color: style.accent }}
        >
          {item.year}
        </p>
        <p className="mt-2 font-mono text-xs text-white/40">{item.period}</p>
      </div>

      <div
        className="relative overflow-hidden rounded-[26px] border p-7 sm:p-8 lg:p-9"
        style={{
          backgroundColor: style.background,
          borderColor: style.border,
        }}
      >
        <div
          className="absolute inset-y-0 left-0 w-[5px]"
          style={{ backgroundColor: style.accent }}
        />

        <p
          className="text-[10px] font-black uppercase tracking-[0.22em]"
          style={{ color: style.accent }}
        >
          {item.type}
        </p>

        <h3 className="mt-4 text-3xl font-black tracking-[-0.045em] text-white sm:text-4xl">
          {item.title}
        </h3>

        <p className="mt-2 text-sm font-bold" style={{ color: style.accent }}>
          {item.organization}
        </p>

        <p className="mt-5 max-w-3xl text-base leading-8 text-[#d7d0dd]">
          {item.description}
        </p>

        <div className="mt-6 flex flex-wrap gap-2.5">
          {item.technologies.map((technology) => (
            <span
              key={technology}
              className="rounded-full border bg-[#11101c] px-4 py-2 text-xs font-bold"
              style={{
                color: style.accent,
                borderColor: style.border,
              }}
            >
              {technology}
            </span>
          ))}
        </div>
      </div>
    </motion.article>
  );
}

function Summary({ value, label, color, bordered = false }) {
  return (
    <div className={`p-6 text-center sm:p-7 ${bordered ? "sm:border-l sm:border-[#3d3a4b]" : ""}`}>
      <p className="text-2xl font-black tracking-[-0.045em]" style={{ color }}>
        {value}
      </p>
      <p className="mt-2 text-[9px] font-bold uppercase tracking-[0.15em] text-white/45">
        {label}
      </p>
    </div>
  );
}

export default Timeline;
