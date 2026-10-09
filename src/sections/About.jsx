import { motion } from "motion/react";
import Container from "../components/Container";
import { profile } from "../data/portfolio";

const principles = [
  {
    number: "01",
    title: "Primero, que se entienda",
    description:
      "Una web puede verse bien, pero también debe dejar claro qué haces, qué ofreces y cómo puede contactarte una persona interesada.",
    style: { background: "#2a192d", border: "#6b3454", accent: "var(--pink)" },
  },
  {
    number: "02",
    title: "Pensada para celular",
    description:
      "Muchos clientes llegarán desde redes sociales o mensajería, así que la experiencia móvil no es un extra: es parte central del proyecto.",
    style: { background: "#211c38", border: "#514385", accent: "var(--lavender)" },
  },
  {
    number: "03",
    title: "Que pueda crecer contigo",
    description:
      "Si después necesitas formularios, usuarios, una base de datos o nuevas funciones, la web puede evolucionar sin empezar otra vez desde cero.",
    style: { background: "#172b2b", border: "#376b63", accent: "var(--mint)" },
  },
];

function About() {
  return (
    <section id="about" className="relative overflow-hidden bg-[#1d1732] py-16 sm:py-24 lg:py-28">
      <div className="absolute inset-x-0 top-0 h-[4px] bg-[var(--pink)] shadow-[0_0_22px_rgba(255,143,185,.45)]" />
      <div className="pointer-events-none absolute right-[-160px] top-[80px] h-[420px] w-[420px] rounded-full bg-[#3d2045] blur-[120px]" />
      <div className="pointer-events-none absolute bottom-[-180px] left-[-130px] h-[460px] w-[460px] rounded-full bg-[#282451] blur-[130px]" />

      <Container className="max-w-[1500px]">
        <div className="grid gap-8 lg:grid-cols-[0.78fr_1.22fr] lg:items-center lg:gap-16 xl:gap-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            className="relative overflow-hidden rounded-[22px] border border-[#65405f] bg-[#2b203f] p-5 shadow-[0_35px_90px_-45px_rgba(0,0,0,.9)] sm:rounded-[30px] sm:p-9 lg:p-10"
          >
            <div className="absolute right-[-70px] top-[-80px] h-[190px] w-[190px] rounded-full bg-[#6d365f]" />
            <div className="absolute bottom-[-105px] left-[-90px] h-[210px] w-[210px] rounded-full bg-[#4a407f]" />

            <div className="relative text-center lg:text-left">
              <div className="flex items-center justify-center gap-3 lg:justify-start">
                <span className="h-3 w-3 rounded-full bg-[var(--pink)] shadow-[0_0_14px_rgba(255,143,185,.65)]" />
                <p className="text-[10px] font-black uppercase tracking-[0.28em] text-[var(--pink)] sm:text-xs sm:tracking-[0.3em]">Sobre mí</p>
              </div>

              <div className="mx-auto mt-4 h-[4px] w-24 rounded-full bg-gradient-to-r from-[var(--pink)] via-[var(--lavender)] to-[var(--cream)] sm:mt-5 sm:w-28 lg:mx-0" />

              <h2 className="mt-5 max-w-[520px] text-[clamp(2.1rem,9vw,3.35rem)] font-black leading-[1.02] tracking-[-0.055em] text-white sm:mt-6 lg:leading-[0.98]">
                Desarrollo web
                <span className="block">con contexto real.</span>
              </h2>

              <p className="mx-auto mt-5 max-w-lg text-[14px] font-medium leading-7 text-[#d7cee1] sm:mt-6 sm:text-base lg:mx-0">
                Soy ingeniero en sistemas y desarrollador web. Mi trabajo no se limita a hacer pantallas: también puedo encargarme de lógica, datos, integraciones y publicación.
              </p>

              <div className="mt-6 border-t border-[#735069] sm:mt-8">
                <ProfileRow label="Ubicación" value={getShortLocation(profile.location)} />
                <ProfileRow label="Experiencia" value={`${profile.professionalExperience} años`} />
                <ProfileRow label="Enfoque" value="Desarrollo web" last />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.65, delay: 0.06, ease: [0.22, 1, 0.36, 1] }}
            className="text-center lg:text-left"
          >
            <h3 className="mx-auto max-w-[900px] text-[clamp(2rem,9vw,3.8rem)] font-black leading-[1.04] tracking-[-0.05em] text-white lg:mx-0">
              No quiero venderte una web que solo <span className="text-[var(--pink)]">se vea bonita.</span>
            </h3>

            <div className="mx-auto mt-5 h-[4px] w-24 rounded-full bg-gradient-to-r from-[var(--pink)] to-[var(--cream)] sm:mt-7 sm:w-28 lg:mx-0" />

            <p className="mx-auto mt-5 max-w-3xl text-[14px] leading-7 text-[#ddd6e7] sm:mt-7 sm:text-lg sm:leading-9 lg:mx-0">
              La idea es construir algo que tenga sentido para tu negocio: que presente mejor tus servicios, sea fácil de usar desde celular y pueda crecer si más adelante necesitas funciones nuevas.
            </p>

            <p className="mx-auto mt-3 max-w-3xl text-[14px] leading-7 text-[#c9c0d4] sm:mt-4 sm:text-lg sm:leading-8 lg:mx-0">
              Si el proyecto necesita usuarios, bases de datos, autenticación, APIs o paneles, también puedo incorporarlo sin convertir la conversación en una clase de programación.
            </p>

            <div className="mt-5 flex flex-wrap justify-center gap-2 sm:mt-7 sm:gap-3 lg:justify-start">
              <Tag color="pink" text="Sitios responsivos" />
              <Tag color="lavender" text="Bases de datos" />
              <Tag color="cream" text="Integraciones" />
              <Tag color="mint" text="Soporte posterior" />
            </div>
          </motion.div>
        </div>

        <div className="mt-14 sm:mt-20 lg:mt-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="border-b border-[#534761] pb-6 text-center sm:pb-8 lg:text-left"
          >
            <p className="text-[10px] font-black uppercase tracking-[0.28em] text-[var(--lavender)] sm:text-xs sm:tracking-[0.3em]">Cómo pienso un proyecto</p>
            <h3 className="mx-auto mt-3 max-w-3xl text-[clamp(1.9rem,8vw,3rem)] font-black leading-[1.05] tracking-[-0.045em] text-white sm:mt-4 lg:mx-0">
              Tres ideas que guían
              <span className="block text-[var(--cream)]">la forma en que trabajo.</span>
            </h3>
          </motion.div>

          <div className="mt-6 grid gap-3 sm:mt-8 sm:gap-5 lg:grid-cols-3">
            {principles.map((principle, index) => (
              <motion.article
                key={principle.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.5, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
                className="relative overflow-hidden rounded-[20px] border p-5 shadow-[0_24px_55px_-35px_rgba(0,0,0,.8)] sm:rounded-[26px] sm:p-8"
                style={{ backgroundColor: principle.style.background, borderColor: principle.style.border }}
              >
                <div className="absolute inset-x-0 top-0 h-[4px] sm:h-[5px]" style={{ backgroundColor: principle.style.accent }} />
                <div className="flex items-center gap-4 sm:block">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full font-mono text-xs font-black text-[#17152b] sm:h-12 sm:w-12 sm:text-sm" style={{ backgroundColor: principle.style.accent }}>{principle.number}</div>
                  <h4 className="text-xl font-black tracking-[-0.04em] text-white sm:mt-7 sm:text-3xl">{principle.title}</h4>
                </div>
                <p className="mt-4 text-[14px] leading-7 text-[#ded6e5] sm:text-base sm:leading-8">{principle.description}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

function ProfileRow({ label, value, last = false }) {
  return (
    <div className={`flex items-center justify-between gap-4 py-3.5 sm:gap-6 sm:py-4 ${last ? "" : "border-b border-[#68536f]"}`}>
      <span className="text-[9px] font-black uppercase tracking-[0.2em] text-[#a89ab3] sm:text-[10px] sm:tracking-[0.24em]">{label}</span>
      <span className="text-right text-base font-black tracking-[-0.03em] text-white sm:text-lg">{value}</span>
    </div>
  );
}

function Tag({ color, text }) {
  const styles = {
    pink: "border-[var(--pink)] bg-[#2a192d] text-[var(--pink)]",
    lavender: "border-[var(--lavender)] bg-[#211c38] text-[var(--lavender)]",
    cream: "border-[var(--cream)] bg-[#2c241a] text-[var(--cream)]",
    mint: "border-[var(--mint)] bg-[#172b2b] text-[var(--mint)]",
  };

  return <span className={`rounded-full border-2 px-3 py-1.5 text-[10px] font-bold sm:px-4 sm:py-2 sm:text-xs ${styles[color]}`}>{text}</span>;
}

function getShortLocation(location) {
  return location.split(",")[0]?.trim() || location;
}

export default About;
