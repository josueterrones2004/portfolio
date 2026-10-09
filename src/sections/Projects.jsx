import { motion } from "motion/react";

import Container from "../components/Container";
import ProjectCard from "../components/ProjectCard";
import { projects } from "../data/portfolio";

function Projects() {
  return (
    <section id="projects" className="relative overflow-hidden bg-[#131226] py-16 sm:py-24 lg:py-32">
      <div className="absolute inset-x-0 top-0 h-[4px] bg-[var(--lavender)] shadow-[0_0_24px_rgba(185,165,255,.4)]" />
      <div className="pointer-events-none absolute -left-48 top-[18%] h-[480px] w-[480px] rounded-full bg-[#2a2555] blur-[140px]" />
      <div className="pointer-events-none absolute -right-48 bottom-[15%] h-[520px] w-[520px] rounded-full bg-[#3b1f3f] blur-[150px]" />

      <Container className="relative max-w-[1580px]">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto max-w-[900px] text-center lg:mx-0 lg:grid lg:max-w-none lg:grid-cols-[0.8fr_1.2fr] lg:items-end lg:gap-20 lg:text-left"
        >
          <div>
            <div className="flex items-center justify-center gap-3 lg:justify-start">
              <span className="h-3 w-3 rounded-full bg-[var(--lavender)] shadow-[0_0_14px_rgba(185,165,255,.7)]" />
              <p className="text-[10px] font-black uppercase tracking-[0.28em] text-[var(--lavender)] sm:text-xs">Trabajos</p>
            </div>
          </div>

          <div>
            <h2 className="mt-5 max-w-[900px] text-[clamp(2.3rem,10vw,4.4rem)] font-black leading-[1.02] tracking-[-0.055em] text-white lg:mt-0">
              Proyectos que muestran
              <span className="block">lo que puedo <span className="text-[var(--cream)]">construir contigo.</span></span>
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-[15px] leading-7 text-[#cec7d8] sm:text-lg sm:leading-8 lg:mx-0 lg:mt-6">
              No son solo diseños: son productos funcionales con interfaces, lógica, datos, usuarios e integraciones reales.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="mt-10 flex items-center gap-4 sm:mt-14 sm:gap-5"
        >
          <span className="font-mono text-[10px] font-bold uppercase tracking-[0.22em] text-white/40 sm:text-xs sm:tracking-[0.25em]">Selección</span>
          <span className="h-px flex-1 bg-white/15" />
          <span className="font-mono text-[10px] font-bold text-[var(--lavender)] sm:text-xs">{String(projects.length).padStart(2, "0")} proyectos</span>
        </motion.div>

        <div className="mt-6 space-y-5 sm:mt-10 sm:space-y-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} index={index} {...project} />
          ))}
        </div>
      </Container>
    </section>
  );
}

export default Projects;
