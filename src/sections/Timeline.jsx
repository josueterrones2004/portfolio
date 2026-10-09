import { motion } from "motion/react";

import Container from "../components/Container";

const steps = [
  {
    number: "01",
    title: "Me cuentas qué necesitas",
    description:
      "Partimos de tu negocio, tus servicios y el objetivo de la página. No necesitas llegar con una especificación técnica.",
    details: ["Objetivo", "Público", "Contenido"],
    accent: "var(--pink)",
  },
  {
    number: "02",
    title: "Definimos la solución",
    description:
      "Aterrizamos qué páginas, funciones, formularios, datos o integraciones hacen falta y qué no vale la pena complicar.",
    details: ["Alcance", "Funciones", "Prioridades"],
    accent: "var(--lavender)",
  },
  {
    number: "03",
    title: "Diseño y desarrollo",
    description:
      "Construyo la solución con foco en claridad, móvil, velocidad y una experiencia que tenga sentido para tus clientes.",
    details: ["Diseño", "Desarrollo", "Responsive"],
    accent: "var(--cream)",
  },
  {
    number: "04",
    title: "Revisión contigo",
    description:
      "Te muestro el avance, ajustamos textos, detalles visuales y comportamiento antes de publicar.",
    details: ["Pruebas", "Ajustes", "Validación"],
    accent: "var(--mint)",
  },
  {
    number: "05",
    title: "Publicación y soporte",
    description:
      "Dejo el sitio listo para compartir y, si lo necesitas, puedo seguir apoyándote con cambios, correcciones y nuevas funciones.",
    details: ["Publicación", "Soporte", "Mejoras"],
    accent: "var(--pink)",
  },
];

function Timeline() {
  return (
    <section id="timeline" className="relative overflow-hidden bg-[#151321] py-24 sm:py-28 lg:py-32">
      <div className="absolute inset-x-0 top-0 h-[4px] bg-[var(--mint)] shadow-[0_0_24px_rgba(143,240,197,.35)]" />
      <div className="pointer-events-none absolute -left-52 top-[15%] h-[500px] w-[500px] rounded-full bg-[#233c3d] blur-[160px]" />
      <div className="pointer-events-none absolute -right-52 bottom-[10%] h-[520px] w-[520px] rounded-full bg-[#382044] blur-[160px]" />

      <Container className="relative max-w-[1500px]">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.25 }} transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }} className="mx-auto max-w-[900px] text-center">
          <div className="flex items-center justify-center gap-3">
            <span className="h-3 w-3 rounded-full bg-[var(--mint)] shadow-[0_0_14px_rgba(143,240,197,.65)]" />
            <p className="text-xs font-black uppercase tracking-[0.3em] text-[var(--mint)]">Proceso</p>
          </div>
          <p className="mt-5 font-mono text-sm font-bold text-[var(--pink)]">{"<como_trabajamos />"}</p>
          <h2 className="mt-7 text-4xl font-black leading-[1.02] tracking-[-0.055em] text-white sm:text-5xl lg:text-[4.4rem]">
            De una idea a una web
            <span className="block">lista para <span className="text-[var(--mint)]">usar y compartir.</span></span>
          </h2>
          <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-[#d1cad7] sm:text-lg">
            Un proceso simple, sin tecnicismos innecesarios y con espacio para revisar antes de publicar.
          </p>
        </motion.div>

        <div className="relative mx-auto mt-16 max-w-[1080px]">
          <div className="absolute bottom-10 left-[23px] top-10 hidden w-px bg-white/10 sm:block" />

          <div className="space-y-4 sm:space-y-5">
            {steps.map((step, index) => (
              <motion.article key={step.number} initial={{ opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.55, delay: index * 0.05, ease: [0.22, 1, 0.36, 1] }} className="relative sm:pl-16">
                <div className="absolute left-0 top-8 z-10 hidden h-12 w-12 items-center justify-center rounded-full border-[5px] border-[#151321] bg-[#11101c] font-mono text-xs font-black sm:flex" style={{ color: step.accent, boxShadow: `0 0 18px ${step.accent}33` }}>{step.number}</div>

                <div className="relative overflow-hidden rounded-[24px] border border-white/10 bg-[#11101c]/90 p-5 sm:p-7 lg:grid lg:grid-cols-[0.72fr_1fr_auto] lg:items-center lg:gap-10 lg:p-8">
                  <span className="absolute inset-y-0 left-0 w-[4px]" style={{ backgroundColor: step.accent }} />

                  <div className="pl-1">
                    <div className="mb-3 flex items-center gap-3 sm:hidden">
                      <span className="font-mono text-xs font-black" style={{ color: step.accent }}>{step.number}</span>
                      <span className="h-px flex-1 bg-white/10" />
                    </div>
                    <h3 className="text-2xl font-black tracking-[-0.04em] text-white sm:text-3xl">{step.title}</h3>
                  </div>

                  <p className="mt-4 text-sm leading-7 text-[#d7d0dd] sm:text-base lg:mt-0">{step.description}</p>

                  <div className="mt-5 flex flex-wrap gap-2 lg:mt-0 lg:max-w-[220px] lg:justify-end">
                    {step.details.map((detail) => (
                      <span key={detail} className="rounded-full border border-white/10 bg-white/[0.035] px-3 py-1.5 text-[11px] font-bold" style={{ color: step.accent }}>{detail}</span>
                    ))}
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>

        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="mx-auto mt-14 flex max-w-[1080px] items-center gap-5">
          <span className="font-mono text-xs font-bold uppercase tracking-[0.22em] text-[var(--mint)]">Sin complicaciones</span>
          <span className="h-px flex-1 bg-[#454052]" />
          <span className="hidden font-mono text-xs text-white/35 sm:block">idea · desarrollo · revisión · publicación · soporte</span>
        </motion.div>
      </Container>
    </section>
  );
}

export default Timeline;
