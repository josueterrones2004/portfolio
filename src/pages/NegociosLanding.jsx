const WHATSAPP_URL =
  "https://wa.me/523334541455?text=Hola%20Josu%C3%A9%2C%20vi%20tu%20p%C3%A1gina%20para%20negocios%20y%20quiero%20cotizar%20una%20web.";

const services = [
  {
    icon: "▣",
    title: "Diseño a tu medida",
    text: "Una web alineada a tu negocio, clara y fácil de usar desde celular.",
  },
  {
    icon: "≡",
    title: "Servicios y precios",
    text: "Toda tu información importante organizada en un solo lugar.",
  },
  {
    icon: "↗",
    title: "Contacto directo",
    text: "WhatsApp, formularios, redes, ubicación y llamadas a la acción claras.",
  },
  {
    icon: "●",
    title: "Ubicación y horarios",
    text: "Integra Google Maps, horarios y los datos que más preguntan tus clientes.",
  },
  {
    icon: "▧",
    title: "Galería o catálogo",
    text: "Muestra productos, trabajos, menú, servicios o proyectos de forma visual.",
  },
  {
    icon: "⚙",
    title: "Funciones extra",
    text: "Reservas, bases de datos, paneles o funciones a medida si las necesitas.",
  },
];

const process = [
  {
    number: "1",
    title: "Hablamos de tu idea",
    text: "Me cuentas qué necesitas y vemos qué opción tiene más sentido para tu negocio.",
  },
  {
    number: "2",
    title: "Desarrollo y revisión",
    text: "Construyo la página y te voy mostrando avances para que puedas opinar en el proceso.",
  },
  {
    number: "3",
    title: "Publicación y soporte",
    text: "La dejamos en línea y puedo seguir ayudándote con cambios o mejoras después.",
  },
];

function BrowserFrame({ image, title }) {
  return (
    <div className="overflow-hidden rounded-[24px] border border-white/10 bg-[#0d0d18] shadow-[0_28px_80px_rgba(0,0,0,.35)]">
      <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
        <div className="flex gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/10" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/10" />
        </div>
        <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-white/25">{title}</span>
      </div>
      <img src={image} alt={title} className="block w-full object-cover object-top" loading="lazy" decoding="async" />
    </div>
  );
}

function NegociosLanding() {
  return (
    <div className="min-h-screen bg-[#11101d] text-white">
      <header className="sticky top-0 z-50 border-b border-white/[0.06] bg-[#11101d]/92 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8 lg:px-10">
          <a href="/" className="flex items-center gap-3">
            <span className="text-xl font-black tracking-[0.16em] text-white">JT.</span>
            <span className="hidden text-[10px] font-bold uppercase tracking-[0.18em] text-white/35 sm:inline">Desarrollo web</span>
          </a>

          <nav className="hidden items-center gap-8 text-sm text-white/55 lg:flex">
            <a href="#servicios" className="transition-colors hover:text-white">Servicios</a>
            <a href="#ejemplos" className="transition-colors hover:text-white">Ejemplos</a>
            <a href="#proceso" className="transition-colors hover:text-white">Proceso</a>
          </nav>

          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-[var(--lavender)] px-4 py-2.5 text-xs font-black text-[#17152b] shadow-[0_8px_24px_rgba(185,165,255,.18)] transition-transform hover:-translate-y-0.5 sm:px-5 sm:text-sm"
          >
            Cotizar por WhatsApp
          </a>
        </div>
      </header>

      <main>
        <section className="relative overflow-hidden border-b border-white/[0.05]">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_75%_30%,rgba(142,124,255,.12),transparent_28%),radial-gradient(circle_at_20%_10%,rgba(255,143,185,.07),transparent_24%)]" />

          <div className="relative mx-auto grid max-w-7xl gap-12 px-5 py-14 sm:px-8 sm:py-20 lg:grid-cols-[0.92fr_1.08fr] lg:items-center lg:gap-16 lg:px-10 lg:py-24">
            <div className="max-w-2xl">
              <p className="text-[10px] font-black uppercase tracking-[0.26em] text-[var(--lavender)] sm:text-xs">
                Páginas web para negocios y proyectos
              </p>

              <h1 className="mt-5 text-[clamp(3.2rem,7vw,6.8rem)] font-black leading-[0.94] tracking-[-0.065em] text-white">
                Tu negocio,
                <span className="block text-[var(--lavender)]">en un solo lugar.</span>
              </h1>

              <p className="mt-6 max-w-xl text-base leading-7 text-white/62 sm:text-lg sm:leading-8">
                Una página web clara, rápida y pensada para convertir visitas en clientes. Toda tu información, servicios y contacto en un sitio profesional y fácil de usar.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-12 items-center justify-center rounded-full bg-[var(--lavender)] px-6 py-3 text-sm font-black text-[#17152b] transition-transform hover:-translate-y-0.5"
                >
                  Cotizar por WhatsApp →
                </a>
                <a
                  href="#ejemplos"
                  className="inline-flex min-h-12 items-center justify-center rounded-full px-5 py-3 text-sm font-bold text-[var(--lavender)] transition-colors hover:text-white"
                >
                  Ver ejemplos ↓
                </a>
              </div>

              <div className="mt-8 grid gap-3 text-xs text-white/50 sm:grid-cols-3">
                <span>⚡ Carga rápida</span>
                <span>▣ Optimizada para celular</span>
                <span>◈ Soporte después de entregar</span>
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-3xl lg:max-w-none">
              <div className="absolute -inset-6 -z-10 rounded-[40px] bg-[var(--lavender)]/8 blur-3xl" />

              <div className="relative ml-auto w-[92%] rotate-[-1.5deg]">
                <BrowserFrame image="/projects/media-tracker-home.png" title="Vista de proyecto" />
              </div>

              <div className="absolute -bottom-7 right-0 w-[32%] min-w-[115px] rotate-[2deg] sm:-bottom-10 sm:w-[27%]">
                <div className="overflow-hidden rounded-[28px] border-[5px] border-[#0a0a10] bg-[#0a0a10] shadow-[0_24px_60px_rgba(0,0,0,.55)]">
                  <img
                    src="/projects/media-tracker-home.png"
                    alt="Vista móvil de proyecto web"
                    className="aspect-[9/16] w-full object-cover object-left-top"
                    loading="eager"
                    decoding="async"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="servicios" className="px-5 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-24">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-8 lg:grid-cols-[1fr_.75fr] lg:items-end">
              <div>
                <h2 className="text-[clamp(2rem,5vw,3.8rem)] font-black tracking-[-0.05em]">¿Qué puedo hacer por tu negocio?</h2>
                <p className="mt-3 text-sm text-white/45 sm:text-base">Páginas web sencillas o más completas, según lo que necesites.</p>
              </div>
              <p className="max-w-xl text-sm leading-7 text-white/45 lg:justify-self-end">
                Desde una página informativa hasta funciones más avanzadas, todo pensado para que sea útil, rápido y fácil de administrar.
              </p>
            </div>

            <div className="mt-9 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {services.map((service) => (
                <article
                  key={service.title}
                  className="rounded-[22px] border border-white/[0.07] bg-[#171624] p-5 transition-transform duration-300 hover:-translate-y-1 sm:p-6"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--lavender)]/10 text-lg font-black text-[var(--lavender)]">
                    {service.icon}
                  </div>
                  <h3 className="mt-5 text-base font-black">{service.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-white/45">{service.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="ejemplos" className="border-y border-white/[0.05] bg-[#0f0f19] px-5 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-24">
          <div className="mx-auto max-w-7xl">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <h2 className="text-[clamp(2rem,5vw,3.6rem)] font-black tracking-[-0.05em]">Ejemplos de proyectos</h2>
                <p className="mt-3 text-sm text-white/45 sm:text-base">Algunos ejemplos de sitios y plataformas que he desarrollado.</p>
              </div>
              <a href="/#projects" className="text-sm font-bold text-[var(--lavender)] hover:text-white">Ver más proyectos →</a>
            </div>

            <div className="mt-9 grid gap-6 lg:grid-cols-2">
              <article>
                <BrowserFrame image="/projects/media-tracker-home.png" title="MediaTracker" />
                <h3 className="mt-4 text-base font-black">Plataforma web</h3>
                <p className="mt-1 text-sm text-white/42">Autenticación, base de datos, perfiles y contenido dinámico.</p>
              </article>

              <article>
                <BrowserFrame image="/projects/devboard-dashboard.png" title="DevBoard" />
                <h3 className="mt-4 text-base font-black">Dashboard web</h3>
                <p className="mt-1 text-sm text-white/42">Interfaz moderna, organización de información y experiencia responsive.</p>
              </article>
            </div>
          </div>
        </section>

        <section id="proceso" className="px-5 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-24">
          <div className="mx-auto max-w-7xl">
            <h2 className="text-[clamp(2rem,5vw,3.6rem)] font-black tracking-[-0.05em]">Un proceso simple</h2>
            <p className="mt-3 text-sm text-white/45 sm:text-base">Así es como trabajamos, desde la idea hasta la publicación.</p>

            <div className="relative mt-10 grid gap-8 lg:grid-cols-3 lg:gap-10">
              <div className="absolute left-0 right-0 top-6 hidden h-px bg-white/10 lg:block" />
              {process.map((step) => (
                <article key={step.number} className="relative">
                  <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full border border-[var(--lavender)]/25 bg-[#242039] text-sm font-black text-white">
                    {step.number}
                  </div>
                  <h3 className="mt-6 text-lg font-black">{step.title}</h3>
                  <p className="mt-2 max-w-sm text-sm leading-7 text-white/45">{step.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="px-5 pb-20 sm:px-8 sm:pb-24 lg:px-10 lg:pb-28">
          <div className="mx-auto grid max-w-7xl overflow-hidden rounded-[28px] border border-white/[0.08] bg-[#171624] lg:grid-cols-[1fr_.8fr]">
            <div className="p-6 sm:p-8 lg:p-10">
              <p className="text-[10px] font-black uppercase tracking-[0.22em] text-[var(--lavender)]">¿Listo para empezar?</p>
              <h2 className="mt-4 max-w-2xl text-[clamp(2rem,5vw,3.8rem)] font-black leading-[1.02] tracking-[-0.05em]">
                Cuéntame qué tienes en mente.
              </h2>
              <p className="mt-4 max-w-xl text-sm leading-7 text-white/50 sm:text-base">
                Puedo orientarte sin compromiso y decirte qué opción se adapta mejor a tu negocio.
              </p>
              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-12 items-center justify-center rounded-full bg-[var(--lavender)] px-6 py-3 text-sm font-black text-[#17152b]"
                >
                  Cotizar por WhatsApp →
                </a>
                <a href="/" className="inline-flex min-h-12 items-center justify-center rounded-full px-5 py-3 text-sm font-bold text-[var(--lavender)] hover:text-white">
                  Ver mi portafolio →
                </a>
              </div>
            </div>

            <div className="relative min-h-[230px] overflow-hidden border-t border-white/[0.06] bg-[radial-gradient(circle_at_60%_30%,rgba(142,124,255,.22),transparent_34%),linear-gradient(135deg,#0e0d16,#17152b_55%,#242039)] lg:min-h-full lg:border-l lg:border-t-0">
              <div className="absolute bottom-8 left-8 right-8 h-px bg-white/10" />
              <div className="absolute bottom-9 left-[18%] h-20 w-28 rounded-t-lg border border-white/10 bg-[#0a0a10] shadow-[0_0_40px_rgba(142,124,255,.08)]" />
              <div className="absolute bottom-9 right-[18%] h-12 w-8 rounded-t-full bg-[#1f2b25]" />
              <div className="absolute bottom-9 right-[12%] h-20 w-1 bg-[#241b18]" />
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/[0.06] px-5 py-7 sm:px-8 lg:px-10">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 text-xs text-white/30 sm:flex-row sm:items-center sm:justify-between">
          <p>Josué Terrones · Desarrollo web</p>
          <p>Guadalajara, Jalisco · México</p>
        </div>
      </footer>
    </div>
  );
}

export default NegociosLanding;
