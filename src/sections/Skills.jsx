import { motion } from "motion/react";
import Container from "../components/Container";

const services = [
  {
    number: "01",
    symbol: "↗",
    label: "Sitios web",
    description:
      "Una presencia web clara y profesional para presentar tu negocio, tus servicios y facilitar que nuevos clientes te encuentren.",
    capabilities: ["Landing pages", "Negocios", "Profesionales"],
    accent: "var(--pink)",
  },
  {
    number: "02",
    symbol: "+",
    label: "Funciones a medida",
    description:
      "Si tu proyecto necesita algo más que información estática, puedo desarrollar funciones específicas para tu forma de trabajar.",
    capabilities: ["Formularios", "Reservas", "Cotizaciones"],
    accent: "var(--cream)",
  },
  {
    number: "03",
    symbol: "⌁",
    label: "Bases de datos",
    description:
      "Tu sitio también puede guardar y gestionar información: clientes, registros, cuentas, contenido o datos de tu negocio.",
    capabilities: ["Datos", "Usuarios", "Registros"],
    accent: "var(--mint)",
  },
  {
    number: "04",
    symbol: "↑",
    label: "Publicación",
    description:
      "Me encargo de dejar tu proyecto publicado, funcionando correctamente y preparado para que puedas compartirlo.",
    capabilities: ["Hosting", "Dominio", "Despliegue"],
    accent: "var(--lavender)",
  },
  {
    number: "05",
    symbol: "∞",
    label: "Soporte y mejoras",
    description:
      "También puedo ayudarte después de publicar: corregir problemas, mejorar el sitio o agregar nuevas funciones.",
    capabilities: ["Mantenimiento", "Correcciones", "Mejoras"],
    accent: "#ff9fc5",
  },
];

function Skills() {
  return (
    <section id="skills" className="relative overflow-hidden bg-[#1b1325] py-16 sm:py-24 lg:py-32">
      <div className="absolute inset-x-0 top-0 h-[4px] bg-[var(--cream)] shadow-[0_0_24px_rgba(255,230,154,.35)]" />
      <div className="pointer-events-none absolute -left-52 top-[8%] h-[480px] w-[480px] rounded-full bg-[#432039]/70 blur-[150px]" />
      <div className="pointer-events-none absolute -right-52 bottom-[5%] h-[520px] w-[520px] rounded-full bg-[#292557]/65 blur-[160px]" />

      <Container className="relative max-w-[1480px]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto max-w-[860px] text-center"
        >
          <div className="flex items-center justify-center gap-3">
            <span className="h-3 w-3 rounded-full bg-[var(--cream)] shadow-[0_0_14px_rgba(255,230,154,.65)]" />
            <p className="text-[10px] font-black uppercase tracking-[0.28em] text-[var(--cream)] sm:text-xs">Servicios</p>
          </div>

          <h2 className="mt-5 text-[clamp(2.3rem,10vw,4.7rem)] font-black leading-[1.02] tracking-[-0.055em] text-white">
            Soluciones web
            <span className="block">que se adaptan a <span className="text-[var(--pink)]">tu proyecto.</span></span>
          </h2>

          <p className="mx-auto mt-5 max-w-[690px] text-[15px] leading-7 text-[#d4cbd9] sm:mt-6 sm:text-lg sm:leading-8">
            Desde una página sencilla hasta una solución con usuarios, bases de datos, integraciones y soporte después de publicarla.
          </p>
        </motion.div>

        <div className="mt-10 grid gap-3 sm:mt-14 sm:gap-5 lg:grid-cols-2">
          {services.map((service, index) => {
            const isLast = index === services.length - 1;

            return (
              <motion.article
                key={service.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: index * 0.04, ease: [0.22, 1, 0.36, 1] }}
                className={`relative overflow-hidden rounded-[20px] border border-white/[0.10] bg-[#171321]/92 p-5 shadow-[0_20px_55px_-35px_rgba(0,0,0,.9)] backdrop-blur-xl sm:rounded-[24px] sm:p-7 lg:p-8 ${isLast ? "lg:col-span-2" : ""}`}
              >
                <span className="absolute inset-x-0 top-0 h-[3px]" style={{ backgroundColor: service.accent }} />

                <div className={isLast ? "lg:grid lg:grid-cols-[0.9fr_1.15fr] lg:items-center lg:gap-16" : ""}>
                  <div>
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-[11px] font-black" style={{ color: service.accent }}>{service.number}</span>
                      <span className="h-px flex-1 bg-white/10" />
                      <div className="flex h-9 w-9 items-center justify-center rounded-[12px] border border-white/10 bg-white/[0.035] text-base font-black" style={{ color: service.accent }}>{service.symbol}</div>
                    </div>

                    <h3 className="mt-5 text-[clamp(1.65rem,7.5vw,2.5rem)] font-black leading-[1.04] tracking-[-0.045em] text-white">{service.label}</h3>
                    <p className="mt-3 max-w-[600px] text-[14px] leading-6 text-[#d5ced9] sm:mt-4 sm:text-base sm:leading-7">{service.description}</p>
                  </div>

                  <div className={isLast ? "mt-5 lg:mt-0" : "mt-5"}>
                    <div className="flex flex-wrap gap-2">
                      {service.capabilities.map((capability) => (
                        <span key={capability} className="rounded-full border border-white/[0.09] bg-white/[0.035] px-3 py-1.5 text-[10px] font-bold text-[#dcd7e2] sm:px-3.5 sm:py-2 sm:text-xs">
                          {capability}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.08 }}
          className="mt-8 rounded-[22px] border border-[var(--cream)]/20 bg-[#21192b] p-5 text-center sm:mt-12 sm:p-8 lg:flex lg:items-center lg:justify-between lg:gap-10 lg:text-left"
        >
          <div>
            <p className="text-[9px] font-black uppercase tracking-[0.2em] text-[var(--cream)] sm:text-[10px] sm:tracking-[0.22em]">¿No sabes exactamente qué necesitas?</p>
            <h3 className="mx-auto mt-3 max-w-[720px] text-xl font-black leading-snug tracking-[-0.035em] text-white sm:text-3xl lg:mx-0">
              Cuéntame cómo funciona tu negocio y vemos qué tendría sentido construir.
            </h3>
          </div>
          <a href="#contact" style={{ color: "#17152b" }} className="mt-5 inline-flex min-h-12 w-full shrink-0 items-center justify-center gap-3 rounded-full bg-[var(--cream)] px-6 py-3 text-sm font-black transition-all duration-300 hover:-translate-y-1 hover:bg-white sm:w-auto lg:mt-0">
            Hablemos <span>→</span>
          </a>
        </motion.div>
      </Container>
    </section>
  );
}

export default Skills;
