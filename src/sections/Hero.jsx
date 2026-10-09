import { motion } from "motion/react";

import Container from "../components/Container";

const benefits = [
  { value: "Móvil", label: "Adaptado a cualquier pantalla" },
  { value: "Claro", label: "Tu servicio se entiende rápido" },
  { value: "Directo", label: "Pensado para generar contactos" },
  { value: "A medida", label: "Sin plantillas genéricas" },
];

const services = [
  "Página para presentar tus servicios",
  "Catálogo, menú o portafolio",
  "Formularios y solicitudes de cotización",
  "Reservas, bases de datos y funciones personalizadas",
];

function Hero() {
  return (
    <section id="home" className="relative min-h-[100svh] overflow-hidden">
      <div className="pointer-events-none absolute -left-[18%] top-[3%] h-[440px] w-[440px] rounded-full bg-[var(--lavender)]/16 blur-[120px] sm:h-[620px] sm:w-[620px] sm:blur-[150px]" />
      <div className="pointer-events-none absolute -right-[28%] top-[8%] h-[480px] w-[480px] rounded-full bg-[var(--hot-pink)]/17 blur-[125px] sm:-right-[8%] sm:h-[720px] sm:w-[720px] sm:blur-[170px]" />
      <div className="pointer-events-none absolute bottom-[-24%] left-[25%] h-[360px] w-[360px] rounded-full bg-[var(--violet)]/10 blur-[120px] sm:h-[500px] sm:w-[500px] sm:blur-[150px]" />

      <Container className="relative z-[2] max-w-[1540px]">
        <div className="flex min-h-[100svh] items-center pb-10 pt-24 sm:pb-16 sm:pt-28 lg:pt-32">
          <div className="grid w-full items-center gap-10 lg:grid-cols-[1.08fr_.92fr] lg:gap-16 xl:gap-24">
            <motion.div
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="relative z-10 w-full max-w-[760px] text-center lg:text-left"
            >
              <div className="flex justify-center lg:justify-start">
                <div className="inline-flex items-center gap-3 rounded-full border border-[var(--mint)]/35 bg-[#111022]/90 px-3.5 py-2 shadow-[0_0_30px_-12px_rgba(143,240,197,.65)] backdrop-blur-xl sm:px-4">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--mint)] opacity-40" />
                    <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[var(--mint)] shadow-[0_0_12px_rgba(143,240,197,.8)]" />
                  </span>
                  <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-white sm:text-[11px] sm:tracking-[0.18em]">
                    Disponible para nuevos proyectos
                  </span>
                </div>
              </div>

              <div className="mt-5 sm:mt-7">
                <p className="mb-3 text-[10px] font-black uppercase tracking-[0.19em] text-[var(--lavender)] sm:mb-4 sm:text-xs sm:tracking-[0.22em]">
                  Desarrollo web para negocios y proyectos
                </p>

                <h1 className="mx-auto max-w-[720px] text-[clamp(2.2rem,9vw,5.2rem)] font-black leading-[1.02] tracking-[-0.05em] text-white sm:leading-[0.97] lg:mx-0">
                  <span className="block">Una página web</span>
                  <span className="block whitespace-nowrap">que sí le sirva</span>
                  <span className="relative mt-1 inline-block pb-3 bg-gradient-to-r from-[var(--lavender)] via-[var(--pink)] to-[var(--cream)] bg-clip-text text-transparent">
                    a tu negocio.
                    <span className="absolute -bottom-1 left-0 h-[3px] w-full rounded-full bg-gradient-to-r from-[var(--lavender)] via-[var(--pink)] to-[var(--cream)]" />
                  </span>
                </h1>
              </div>

              <p className="mx-auto mt-6 max-w-[560px] text-[15px] leading-7 text-[#ddd8e8] sm:mt-7 sm:text-[17px] sm:leading-8 lg:mx-0">
                Diseño sitios web claros, rápidos y adaptados a celular para presentar mejor tus servicios y facilitar que nuevos clientes te contacten.
              </p>

              <div className="mt-6 grid gap-3 sm:flex sm:flex-wrap sm:justify-center sm:gap-4 lg:justify-start">
                <a href="#contact" style={{ color: "#111111" }} className="group inline-flex min-h-12 w-full items-center justify-center gap-3 rounded-full bg-[var(--cream)] px-6 py-3.5 text-center text-sm font-black shadow-[0_14px_40px_-18px_rgba(255,230,154,.9)] transition-all duration-300 hover:-translate-y-1 hover:bg-white sm:w-auto sm:px-7">
                  Quiero una página web
                  <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                </a>
                <a href="#projects" className="group inline-flex min-h-12 w-full items-center justify-center gap-3 rounded-full border border-[var(--lavender)]/50 bg-[#1b1830] px-6 py-3.5 text-center text-sm font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:border-[var(--pink)] hover:bg-[var(--pink)] hover:text-[#17152b] sm:w-auto sm:px-7">
                  Ver trabajos
                  <span className="transition-transform duration-300 group-hover:translate-x-1">↗</span>
                </a>
              </div>

              <div className="mx-auto mt-7 grid max-w-[680px] grid-cols-2 overflow-hidden rounded-[18px] border border-white/15 bg-[#121022]/90 backdrop-blur-xl sm:mt-8 sm:grid-cols-4 lg:mx-0">
                {benefits.map((benefit, index) => (
                  <div key={benefit.label} className={`relative flex min-h-[86px] flex-col items-center justify-center px-3 py-4 text-center sm:min-h-[92px] ${index % 2 !== 0 ? "border-l border-white/15" : ""} ${index > 1 ? "border-t border-white/15 sm:border-t-0" : ""} ${index > 0 ? "sm:border-l sm:border-white/15" : "sm:border-l-0"}`}>
                    <span className={`absolute left-0 top-0 h-[3px] w-full ${index === 0 ? "bg-[var(--pink)]" : index === 1 ? "bg-[var(--lavender)]" : index === 2 ? "bg-[var(--cream)]" : "bg-[var(--mint)]"}`} />
                    <p className="text-base font-black leading-none tracking-[-0.035em] text-white sm:text-lg">{benefit.value}</p>
                    <p className="mt-2 max-w-[130px] text-[9px] font-bold uppercase leading-[1.45] tracking-[0.1em] text-[#bcb4cf]">{benefit.label}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 28, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="relative mx-auto w-full max-w-[620px] lg:mx-0"
            >
              <div className="overflow-hidden rounded-[26px] border border-white/15 bg-[#121022]/88 p-5 shadow-[0_28px_80px_-38px_rgba(0,0,0,.95)] backdrop-blur-xl sm:p-7 lg:p-8">
                <div className="flex items-center justify-between gap-4 border-b border-white/10 pb-5">
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-[0.18em] text-[var(--pink)]">Una solución pensada para ti</p>
                    <h2 className="mt-2 text-2xl font-black tracking-[-0.045em] text-white sm:text-3xl">¿Qué puedo construir?</h2>
                  </div>
                  <div className="hidden h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-[var(--lavender)]/25 bg-[var(--lavender)]/10 text-xl sm:flex">↗</div>
                </div>

                <div className="mt-5 space-y-3">
                  {services.map((service, index) => (
                    <div key={service} className="flex items-start gap-3 rounded-2xl border border-white/[0.08] bg-white/[0.035] p-4">
                      <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[var(--cream)] text-[11px] font-black text-[#17152b]">{String(index + 1).padStart(2, "0")}</span>
                      <p className="pt-1 text-sm font-semibold leading-6 text-[#ece8f4] sm:text-[15px]">{service}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-5 rounded-2xl border border-[var(--mint)]/20 bg-[var(--mint)]/[0.06] p-4 sm:p-5">
                  <p className="text-sm leading-6 text-[#d9e7df]">
                    <span className="font-black text-[var(--mint)]">No necesitas saber de tecnología.</span>{" "}
                    Tú me cuentas qué haces y qué necesitas; yo me encargo de convertirlo en una solución clara y lista para compartir.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Hero;
