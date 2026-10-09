import { motion } from "motion/react";

import Container from "../components/Container";
import { profile } from "../data/portfolio";

const whatsappUrl =
  "https://wa.me/523334541455?text=Hola%20Josu%C3%A9%2C%20quiero%20cotizar%20un%20proyecto%20web.";

function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden bg-[#1d1424] py-16 sm:py-24 lg:py-32">
      <div className="absolute inset-x-0 top-0 h-[4px] bg-[var(--pink)] shadow-[0_0_24px_rgba(255,143,185,.4)]" />
      <div className="pointer-events-none absolute -left-52 top-[5%] h-[500px] w-[500px] rounded-full bg-[#4a2342] blur-[160px]" />
      <div className="pointer-events-none absolute -right-52 bottom-[-15%] h-[560px] w-[560px] rounded-full bg-[#33275e] blur-[170px]" />

      <Container className="relative max-w-[1500px]">
        <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-end lg:gap-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            className="text-center lg:text-left"
          >
            <div className="flex items-center justify-center gap-3 lg:justify-start">
              <span className="h-3 w-3 rounded-full bg-[var(--pink)] shadow-[0_0_14px_rgba(255,143,185,.7)]" />
              <p className="text-[10px] font-black uppercase tracking-[0.28em] text-[var(--pink)] sm:text-xs sm:tracking-[0.3em]">Contacto</p>
            </div>

            <h2 className="mx-auto mt-5 max-w-[950px] text-[clamp(2.6rem,12vw,6.2rem)] font-black leading-[0.98] tracking-[-0.06em] text-white sm:mt-6 sm:leading-[0.94] lg:mx-0">
              Cuéntame qué
              <span className="block">quieres <span className="bg-gradient-to-r from-[var(--pink)] via-[var(--lavender)] to-[var(--cream)] bg-clip-text text-transparent">construir.</span></span>
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-[15px] leading-7 text-[#d6cdda] sm:mt-8 sm:text-lg sm:leading-8 lg:mx-0">
              No necesitas saber qué tecnología usar. Cuéntame qué hace tu negocio y qué quieres lograr; desde ahí podemos definir una solución.
            </p>

            <div className="mt-5 flex flex-wrap justify-center gap-2 sm:mt-7 sm:gap-3 lg:justify-start">
              <RoleTag text="Sitios web" />
              <RoleTag text="Bases de datos" />
              <RoleTag text="Funciones a medida" />
              <RoleTag text="Soporte" />
            </div>

            <div className="mx-auto mt-6 grid max-w-[430px] gap-3 sm:mt-9 sm:flex sm:max-w-none sm:flex-wrap sm:justify-center sm:gap-4 lg:mx-0 lg:justify-start">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex min-h-12 w-full items-center justify-center gap-3 rounded-full bg-[var(--mint)] px-6 py-3.5 text-sm font-black transition-all duration-300 hover:-translate-y-1 hover:bg-white sm:w-auto sm:px-7 sm:py-4"
                style={{ color: "#17152b" }}
              >
                Escribirme por WhatsApp
                <span className="text-lg transition-transform duration-300 group-hover:translate-x-1">↗</span>
              </a>

              <a
                href={`mailto:${profile.email}?subject=Quiero%20cotizar%20un%20proyecto%20web`}
                className="group inline-flex min-h-12 w-full items-center justify-center gap-3 rounded-full bg-[var(--cream)] px-6 py-3.5 text-sm font-black transition-all duration-300 hover:-translate-y-1 hover:bg-white sm:w-auto sm:px-7 sm:py-4"
                style={{ color: "#17152b" }}
              >
                Escribirme por correo
                <span className="text-lg transition-transform duration-300 group-hover:translate-x-1">↗</span>
              </a>

              <a href="#projects" className="group inline-flex min-h-12 w-full items-center justify-center gap-3 rounded-full border border-[var(--lavender)]/55 bg-[#171322] px-6 py-3.5 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:border-[var(--lavender)] hover:bg-[#211b38] sm:w-auto sm:px-7 sm:py-4">
                Ver trabajos
                <span className="transition-transform duration-300 group-hover:translate-x-1">↗</span>
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.65, delay: 0.06, ease: [0.22, 1, 0.36, 1] }}
            className="relative overflow-hidden rounded-[22px] border border-[#63415e] bg-[#271a2c] p-5 sm:rounded-[30px] sm:p-8 lg:p-9"
          >
            <div className="pointer-events-none absolute -right-24 -top-24 h-[240px] w-[240px] rounded-full bg-[#673450] blur-[10px]" />

            <div className="relative">
              <div className="flex items-center justify-center gap-3 lg:justify-start">
                <span className="relative flex h-3 w-3">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--mint)] opacity-35" />
                  <span className="relative inline-flex h-3 w-3 rounded-full bg-[var(--mint)] shadow-[0_0_12px_rgba(143,240,197,.75)]" />
                </span>
                <span className="text-[10px] font-black uppercase tracking-[0.18em] text-[var(--mint)] sm:text-xs sm:tracking-[0.2em]">{profile.availability}</span>
              </div>

              <div className="mt-6 text-center sm:mt-9 lg:text-left">
                <p className="text-[9px] font-black uppercase tracking-[0.2em] text-white/40 sm:text-[10px] sm:tracking-[0.24em]">Correo</p>
                <a href={`mailto:${profile.email}`} className="mt-2 block break-all text-lg font-black tracking-[-0.03em] text-white transition-colors duration-300 hover:text-[var(--pink)] sm:mt-3 sm:text-2xl">{profile.email}</a>
              </div>

              <div className="mt-6 border-t border-[#60475e] pt-6 text-center sm:mt-8 sm:pt-7 lg:text-left">
                <p className="text-[9px] font-black uppercase tracking-[0.2em] text-white/40 sm:text-[10px] sm:tracking-[0.24em]">Cómo empezar</p>
                <p className="mt-2 text-base font-black text-white sm:mt-3 sm:text-lg">Cuéntame tu idea en pocas palabras.</p>
                <p className="mt-2 text-[13px] leading-6 text-white/50 sm:text-sm sm:leading-7">Qué hace tu negocio, qué te gustaría que pudiera hacer la página y si ya tienes contenido o una web actual.</p>
              </div>

              <div className="mt-6 grid grid-cols-2 overflow-hidden rounded-[16px] border border-white/10 bg-[#171322] sm:mt-7 sm:rounded-[18px]">
                <div className="border-r border-white/10 p-4 text-center sm:p-5">
                  <p className="text-lg font-black text-[var(--cream)] sm:text-xl">A medida</p>
                  <p className="mt-2 text-[8px] font-bold uppercase leading-[1.5] tracking-[0.13em] text-white/45 sm:text-[9px] sm:tracking-[0.15em]">Sin plantillas<br />genéricas</p>
                </div>
                <div className="p-4 text-center sm:p-5">
                  <p className="text-lg font-black text-[var(--pink)] sm:text-xl">Soporte</p>
                  <p className="mt-2 text-[8px] font-bold uppercase leading-[1.5] tracking-[0.13em] text-white/45 sm:text-[9px] sm:tracking-[0.15em]">Después de<br />publicar</p>
                </div>
              </div>

              <div className="mt-6 sm:mt-8">
                <p className="text-center text-[9px] font-black uppercase tracking-[0.2em] text-white/40 sm:text-[10px] sm:tracking-[0.24em] lg:text-left">También puedes conocerme aquí</p>
                <div className="mt-3 grid grid-cols-2 gap-2.5 sm:mt-4 sm:gap-3">
                  <SocialLink href={profile.github} label="GitHub" color="var(--lavender)" />
                  <SocialLink href={profile.linkedin} label="LinkedIn" color="var(--pink)" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}

function RoleTag({ text }) {
  return <span className="rounded-full border border-[var(--lavender)]/30 bg-[#171322] px-3 py-1.5 text-[10px] font-bold text-[var(--lavender)] sm:px-4 sm:py-2 sm:text-xs">{text}</span>;
}

function SocialLink({ href, label, color }) {
  return (
    <a href={href} target="_blank" rel="noreferrer" className="group flex items-center justify-between rounded-[14px] border border-white/10 bg-[#171322] px-4 py-3 transition-all duration-300 hover:-translate-y-1 hover:border-white/25 sm:rounded-[16px] sm:px-5 sm:py-4">
      <span className="text-xs font-black sm:text-sm" style={{ color }}>{label}</span>
      <span className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" style={{ color }}>↗</span>
    </a>
  );
}

export default Contact;
