import { motion } from "motion/react";

function ProjectCard({
  index,
  title,
  description,
  technologies = [],
  demoUrl = "#",
  githubUrl = "#",
}) {
  const hasProjectUrl =
    demoUrl && demoUrl !== "#";

  const hasGithub =
    githubUrl && githubUrl !== "#";

  const number = String(
    index + 1,
  ).padStart(2, "0");

  return (
    <motion.article
      initial={{
        opacity: 0,
        y: 30,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.2,
      }}
      transition={{
        duration: 0.65,
        delay: index * 0.08,
        ease: [
          0.22,
          1,
          0.36,
          1,
        ],
      }}
      className="group relative border-t border-white/15 py-10 lg:py-14"
    >
      <div className="grid gap-8 lg:grid-cols-[90px_1fr_0.8fr] lg:gap-12">
        <div>
          <span className="font-mono text-sm text-white/35">
            {number}
          </span>
        </div>

        <div>
          <p className="mb-4 font-mono text-sm text-[var(--pink)]">
            {"<project />"}
          </p>

          <h3 className="max-w-2xl text-3xl font-black leading-tight tracking-[-0.045em] text-white transition-colors duration-300 group-hover:text-[var(--cream)] sm:text-4xl lg:text-5xl">
            {title}
          </h3>

          <p className="mt-6 max-w-2xl text-base leading-8 text-[var(--text-secondary)] sm:text-lg">
            {description}
          </p>

          <div className="mt-7 flex flex-wrap gap-x-5 gap-y-2">
            {technologies.map(
              (technology) => (
                <span
                  key={
                    technology
                  }
                  className="text-sm font-semibold text-white/55 transition-colors duration-300 group-hover:text-[var(--lavender)]"
                >
                  {
                    technology
                  }
                </span>
              ),
            )}
          </div>
        </div>

        <div className="flex items-end lg:justify-end">
          <div className="flex flex-wrap gap-3">
            {hasProjectUrl && (
              <a
                href={
                  demoUrl
                }
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-[var(--cream)] px-6 py-3 text-sm font-bold transition-all duration-300 hover:-translate-y-1 hover:bg-white"
                style={{
                  color:
                    "#111111",
                }}
              >
                Open Project ↗
              </a>
            )}

            {hasGithub && (
              <a
                href={
                  githubUrl
                }
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-white/20 px-6 py-3 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:border-[var(--pink)] hover:bg-[var(--pink)] hover:text-[#1d1d35]"
              >
                View Code ↗
              </a>
            )}
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute left-0 top-0 h-[2px] w-0 bg-gradient-to-r from-[var(--hot-pink)] via-[var(--pink)] to-[var(--cream)] transition-all duration-500 group-hover:w-full" />
    </motion.article>
  );
}

export default ProjectCard;