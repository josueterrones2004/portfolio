import { motion } from "motion/react";

function ProjectCard({
  index,
  title,
  badge,
  status,
  description,
  highlights = [],
  technologies = [],
  demoUrl = "#",
  githubUrl = "#",
  image,
  imageAlt = "",
}) {
  const hasProjectUrl =
    demoUrl && demoUrl !== "#";

  const hasGithub =
    githubUrl && githubUrl !== "#";

  const number = String(index + 1).padStart(
    2,
    "0",
  );

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
        amount: 0.18,
      }}
      transition={{
        duration: 0.65,
        delay: index * 0.08,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="group relative overflow-hidden rounded-[30px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.03),rgba(255,255,255,0.015))] p-6 sm:p-8 lg:p-10"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(185,165,255,0.10),transparent_35%),radial-gradient(circle_at_bottom_left,rgba(255,111,216,0.08),transparent_35%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

      <div className="pointer-events-none absolute left-0 top-0 h-[2px] w-full bg-gradient-to-r from-[var(--hot-pink)] via-[var(--pink)] to-[var(--cream)] opacity-70" />

      <div className="relative grid gap-8 lg:grid-cols-[minmax(0,1fr)_560px] lg:gap-10">
        <div className="min-w-0">
          <div className="mb-5 flex flex-wrap items-center gap-3">
            <span className="font-mono text-sm text-white/35">
              {number}
            </span>

            <span className="font-mono text-xs font-bold uppercase tracking-[0.22em] text-[var(--pink)]">
              {"<project />"}
            </span>

            {badge && (
              <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] font-black uppercase tracking-[0.14em] text-[var(--cream)]">
                {badge}
              </span>
            )}
          </div>

          <h3 className="max-w-3xl text-3xl font-black leading-[1.02] tracking-[-0.05em] text-white transition-colors duration-300 group-hover:text-[var(--cream)] sm:text-4xl lg:text-5xl">
            {title}
          </h3>

          <p className="mt-5 max-w-3xl text-base leading-8 text-[var(--text-secondary)] sm:text-lg">
            {description}
          </p>

          {status && (
            <div className="mt-6 rounded-2xl border border-[var(--lavender)]/20 bg-[var(--lavender)]/8 px-5 py-4">
              <p className="font-mono text-[11px] font-bold uppercase tracking-[0.18em] text-[var(--lavender)]">
                Project status
              </p>

              <p className="mt-2 text-sm leading-7 text-white/72 sm:text-[15px]">
                {status}
              </p>
            </div>
          )}

          {highlights.length > 0 && (
            <ul className="mt-7 space-y-3">
              {highlights.map((highlight) => (
                <li
                  key={highlight}
                  className="flex items-start gap-3 text-sm leading-7 text-white/72 sm:text-[15px]"
                >
                  <span className="mt-3 h-1.5 w-1.5 rounded-full bg-[var(--lavender)] shadow-[0_0_10px_rgba(185,165,255,.8)]" />

                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          )}

          <div className="mt-8 flex flex-wrap gap-2.5">
            {technologies.map((technology) => (
              <span
                key={technology}
                className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs font-bold text-white/60 transition-all duration-300 group-hover:border-white/15 group-hover:text-[var(--lavender)]"
              >
                {technology}
              </span>
            ))}
          </div>

          <div className="mt-9 flex flex-wrap gap-3">
            {hasProjectUrl && (
              <a
                href={demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-[var(--cream)] px-6 py-3 text-sm font-bold transition-all duration-300 hover:-translate-y-1 hover:bg-white"
                style={{
                  color: "#111111",
                }}
              >
                Open Project ↗
              </a>
            )}

            {hasGithub && (
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-white/20 px-6 py-3 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:border-[var(--pink)] hover:bg-[var(--pink)] hover:text-[#1d1d35]"
              >
                View Code ↗
              </a>
            )}
          </div>
        </div>

        <div className="flex items-center">
          <a
            href={hasProjectUrl ? demoUrl : githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full"
          >
            <div className="overflow-hidden rounded-[28px] border border-white/10 bg-[#121121] shadow-[0_20px_80px_rgba(0,0,0,0.35)] transition-all duration-500 group-hover:-translate-y-1 group-hover:border-white/15">
              <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
                <div className="flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
                  <span className="h-2.5 w-2.5 rounded-full bg-white/10" />
                  <span className="h-2.5 w-2.5 rounded-full bg-white/10" />
                </div>

                <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-white/35">
                  Preview
                </span>
              </div>

              <div className="bg-[#0d0d18]">
                {image ? (
                  <img
                    src={image}
                    alt={imageAlt || `${title} preview`}
                    loading="lazy"
                    decoding="async"
                    fetchPriority="low"
                    className="w-full object-contain transition-transform duration-700 group-hover:scale-[1.01]"
                  />
                ) : (
                  <div className="flex aspect-[16/9] items-center justify-center">
                    <span className="font-mono text-xs uppercase tracking-[0.22em] text-white/20">
                      Project preview
                    </span>
                  </div>
                )}
              </div>
            </div>
          </a>
        </div>
      </div>
    </motion.article>
  );
}

export default ProjectCard;
