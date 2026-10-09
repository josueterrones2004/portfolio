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
    <section id="about" className="relative overflow-hidden bg-[#1d1732] py-20 sm:py-24 lg:py-28">
      <div className="absolute inset-x-0 top-0 h-[4px] bg-[var(--pink)] shadow-[0_0_22px_rgba(255,143,185,.45)]" />
      <div className="pointer-events-none absolute right-[-160px] top-[80px] h-[420px] w-[420px] rounded-full bg-[#3d2045] blur-[120px]" />
      <div className="pointer-events-none absolute bottom-[-180px] left-[-130px] h-[460px] w-[460px] rounded-full bg-[#282451] blur-[130px]" />

      <Container className="max-w-[1500px]">
        <div className="grid gap-10 lg:grid-cols-[0.78fr_1.22fr] lg:items-center lg:gap-16 xl:gap-20">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.25 }} transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }} className="relative overflow-hidden rounded-[30px] border border-[#65405f] bg-[#2b203f] p-7 shadow-[0_35px_90px_-45px_rgba(0,0,0,.9)] sm:p-9 lg:p-10">
            <div className="absolute right-[-70px] top-[-80px] h-[190px] w-[190px] rounded-full bg-[#6d365f]" />
            <div className="absolute bottom-[-105px] left-[-90px] h-[210px] w-[210px] rounded-full bg-[#4a407f]" />

            <div className="relative">
              <div className="flex items-center gap-3">
                <span className="h-3 w-3 rounded-full bg-[var(--pink)] shadow-[0_0_14px_rgba(255,143,185,.65)]" />
                <p className="text-xs font-black uppercase tracking-[0.3em] text-[var(--pink)]">Sobre mí</p>
              </div>

              <div className="mt-5 h-[4px] w-28 rounded-full bg-gradient-to-r from-[var(--pink)] via-[var(--lavender)] to-[var(--cream)]" />

              <h2 className="mt-6 max-w-[520px] text-4xl font-black leading-[0.98] tracking-[-0.055em] text-white sm:text-5xl lg:text-[3.35rem]">
                Desarrollo web
                <span className="block">con contexto real.</span>
              </h2>

              <p className="mt-6 max-w-lg text-base font-medium leading-7 text-[#d7cee1]">
                Soy ingeniero en sistemas y desarrollador web. Mi trabajo no se limita a hacer pantallas: también puedo encargarme de lógica, datos, integraciones y publicación.
              </p>

              <div className="mt-8 border-t border-[#735069]">
                <ProfileRow label="Ubicación" value={getShortLocation(profile.location)} />
                <ProfileRow label="Experiencia" value={`${profile.professionalExperience} años`} />
                <ProfileRow label="Enfoque" value="Desarrollo web" last />
              </div>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.25 }} transition={{ duration: 0.7, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}>
            <p className="font-mono text-sm font-bold text-[var(--pink)]">{"<sobre_mi />"}</p>

            <h3 className="mt-5 max-w-[900px] text-4xl font-black leading-[1.05] tracking-[-0.05em] text-white sm:text-5xl lg:text-[3.8rem]">
              No quiero venderte una web que solo <span className="text-[var(--pink)]">se vea bonita.</span>
            </h3>

            <div className="mt-7 h-[4px] w-28 rounded-full bg-gradient-to-r from-[var(--pink)] to-[var(--cream)]" />

            <p className="mt-7 max-w-3xl text-base leading-8 text-[#ddd6e7] sm:text-lg sm:leading-9">
              La idea es construir algo que tenga sentido para tu negocio: que presente mejor tus servicios, sea fácil de usar desde celular y pueda crecer si más adelante necesitas funciones nuevas.
            </p>

            <p className="mt-4 max-w-3xl text-base leading-8 text-[#c9c0d4] sm:text-lg">
              Si el proyecto necesita algo más técnico —usuarios, bases de datos, autenticación, APIs o paneles— también puedo incorporarlo sin convertir la conversación en una clase de programación.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <Tag color="pink" text="Sitios responsivos" />
              <Tag color="lavender" text="Bases de datos" />
              <Tag color="cream" text="Integraciones" />
              <Tag color="mint" text="Soporte posterior" />
            </div>
          </motion.div>
        </div>

        <div className="mt-20 lg:mt-24">
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }} className="flex flex-col gap-6 border-b border-[#534761] pb-8 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.3em] text-[var(--lavender)]">Cómo pienso un proyecto</p>
              <h3 className="mt-4 max-w-3xl text-3xl font-black tracking-[-0.045em] text-white sm:text-4xl lg:text-5xl">
                Tres ideas que guían
                <span className="block text-[var(--cream)]">la forma en que trabajo.</span>
              </h3>
            </div>
          </motion.div>

          <div className="mt-8 grid gap-5 lg:grid-cols-3">
            {principles.map((principle, index) => (
              <motion.article key={principle.number} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.25 }} transition={{ duration: 0.55, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }} className="relative overflow-hidden rounded-[26px] border p-7 shadow-[0_24px_55px_-35px_rgba(0,0,0,.8)] sm:p-8" style={{ backgroundColor: principle.style.background, borderColor: principle.style.border }}>
                <div className="absolute inset-x-0 top-0 h-[5px]" style={{ backgroundColor: principle.style.accent }} />
                <div className="flex h-12 w-12 items-center justify-center rounded-full font-mono text-sm font-black text-[#17152b]" style={{ backgroundColor: principle.style.accent }}>{principle.number}</div>
                <h4 className="mt-7 text-2xl font-black tracking-[-0.04em] text-white sm:text-3xl">{principle.title}</h4>
                <p className="mt-4 text-base leading-8 text-[#ded6e5]">{principle.description}</p>
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
    <div className={`flex items-center justify-between gap-6 py-4 ${last ? "" : "border-b border-[#68536f]"}`}>
      <span className="text-[10px] font-black uppercase tracking-[0.24em] text-[#a89ab3]">{label}</span>
      <span className="text-right text-lg font-black tracking-[-0.03em] text-white">{value}</span>
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
  return <span className={`rounded-full border-2 px-4 py-2 text-xs font-bold ${styles[color]}`}>{text}</span>;
}

function getShortLocation(location) {
  return location.split(",")[0]?.trim() || location;
}

export default About;
