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
  const hasProjectUrl = demoUrl && demoUrl !== "#";
  const hasGithub = githubUrl && githubUrl !== "#";
  const number = String(index + 1).padStart(2, "0");

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.6, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
      className="group relative overflow-hidden rounded-[22px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.03),rgba(255,255,255,0.015))] p-4 sm:rounded-[30px] sm:p-8 lg:p-10"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(185,165,255,0.10),transparent_35%),radial-gradient(circle_at_bottom_left,rgba(255,111,216,0.08),transparent_35%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      <div className="pointer-events-none absolute left-0 top-0 h-[2px] w-full bg-gradient-to-r from-[var(--hot-pink)] via-[var(--pink)] to-[var(--cream)] opacity-70" />

      <div className="relative grid gap-5 sm:gap-8 lg:grid-cols-[minmax(0,1fr)_560px] lg:gap-10">
        <div className="order-2 min-w-0 lg:order-1">
          <div className="mb-4 flex flex-wrap items-center gap-2.5 sm:mb-5 sm:gap-3">
            <span className="font-mono text-[11px] text-white/35 sm:text-sm">{number}</span>
            {badge && (
              <span className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[9px] font-black uppercase tracking-[0.12em] text-[var(--cream)] sm:px-3 sm:text-[11px] sm:tracking-[0.14em]">
                {badge}
              </span>
            )}
          </div>

          <h3 className="max-w-3xl text-[clamp(1.9rem,9vw,3rem)] font-black leading-[1.02] tracking-[-0.05em] text-white transition-colors duration-300 group-hover:text-[var(--cream)]">{title}</h3>
          <p className="mt-4 max-w-3xl text-[14px] leading-6 text-[var(--text-secondary)] sm:mt-5 sm:text-lg sm:leading-8">{description}</p>

          {status && (
            <div className="mt-5 rounded-[16px] border border-[var(--lavender)]/20 bg-[var(--lavender)]/8 px-4 py-3.5 sm:mt-6 sm:rounded-2xl sm:px-5 sm:py-4">
              <p className="font-mono text-[9px] font-bold uppercase tracking-[0.16em] text-[var(--lavender)] sm:text-[11px] sm:tracking-[0.18em]">Qué demuestra</p>
              <p className="mt-2 text-[13px] leading-6 text-white/72 sm:text-[15px] sm:leading-7">{status}</p>
            </div>
          )}

          {highlights.length > 0 && (
            <ul className="mt-5 space-y-2.5 sm:mt-7 sm:space-y-3">
              {highlights.slice(0, 3).map((highlight) => (
                <li key={highlight} className="flex items-start gap-3 text-[13px] leading-6 text-white/72 sm:text-[15px] sm:leading-7">
                  <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--lavender)] shadow-[0_0_10px_rgba(185,165,255,.8)]" />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          )}

          <div className="mt-5 flex flex-wrap gap-2 sm:mt-7 sm:gap-2.5">
            {technologies.slice(0, 5).map((technology) => (
              <span key={technology} className="rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-1.5 text-[10px] font-bold text-white/60 sm:px-3 sm:text-xs">{technology}</span>
            ))}
          </div>

          <div className="mt-6 grid gap-2.5 sm:mt-8 sm:flex sm:flex-wrap sm:gap-3">
            {hasProjectUrl && (
              <a href={demoUrl} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 w-full items-center justify-center rounded-full bg-[var(--cream)] px-5 py-3 text-sm font-bold transition-all duration-300 hover:-translate-y-1 hover:bg-white sm:w-auto sm:px-6" style={{ color: "#111111" }}>
                Ver proyecto ↗
              </a>
            )}
            {hasGithub && (
              <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 w-full items-center justify-center rounded-full border border-white/20 px-5 py-3 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:border-[var(--pink)] hover:bg-[var(--pink)] hover:text-[#1d1d35] sm:w-auto sm:px-6">
                Ver código ↗
              </a>
            )}
          </div>
        </div>

        <div className="order-1 flex items-center lg:order-2">
          <a href={hasProjectUrl ? demoUrl : githubUrl} target="_blank" rel="noopener noreferrer" className="block w-full">
            <div className="overflow-hidden rounded-[18px] border border-white/10 bg-[#121121] shadow-[0_20px_80px_rgba(0,0,0,0.35)] transition-all duration-500 group-hover:-translate-y-1 group-hover:border-white/15 sm:rounded-[28px]">
              <div className="flex items-center justify-between border-b border-white/10 px-3 py-2.5 sm:px-4 sm:py-3">
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-white/20 sm:h-2.5 sm:w-2.5" />
                  <span className="h-2 w-2 rounded-full bg-white/10 sm:h-2.5 sm:w-2.5" />
                  <span className="h-2 w-2 rounded-full bg-white/10 sm:h-2.5 sm:w-2.5" />
                </div>
                <span className="font-mono text-[9px] uppercase tracking-[0.14em] text-white/35 sm:text-[11px] sm:tracking-[0.18em]">Vista previa</span>
              </div>
              <div className="bg-[#0d0d18]">
                {image ? (
                  <img src={image} alt={imageAlt || `Vista previa de ${title}`} className="aspect-[16/10] w-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.01] sm:aspect-auto sm:object-contain" />
                ) : (
                  <div className="flex aspect-[16/9] items-center justify-center">
                    <span className="font-mono text-xs uppercase tracking-[0.22em] text-white/20">Vista previa</span>
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
