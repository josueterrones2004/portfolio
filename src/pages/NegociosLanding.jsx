const WHATSAPP_URL =
  "https://wa.me/523334541455?text=Hola%20Josu%C3%A9%2C%20vi%20tu%20p%C3%A1gina%20para%20negocios%20y%20quiero%20cotizar%20una%20web.";

const problems = [
  "Toda tu información está repartida entre Facebook, WhatsApp y Maps.",
  "Tus clientes preguntan lo mismo: precios, horarios, ubicación o servicios.",
  "Tu negocio se ve bien en redes, pero no tiene un lugar propio donde presentar todo.",
];

const benefits = [
  {
    number: "01",
    title: "Se entiende rápido",
    text: "Una página clara para que tus clientes sepan qué haces, cuánto ofreces y cómo contactarte.",
  },
  {
    number: "02",
    title: "Pensada para celular",
    text: "La mayoría de tus clientes llegará desde redes sociales. La experiencia se diseña primero para móvil.",
  },
  {
    number: "03",
    title: "Contacto directo",
    text: "Botones a WhatsApp, ubicación, formularios o cotización para convertir visitas en conversaciones.",
  },
  {
    number: "04",
    title: "Puede crecer contigo",
    text: "Desde una web sencilla hasta catálogo, reservas, bases de datos o funciones a medida cuando las necesites.",
  },
];

const includes = [
  "Diseño adaptado a tu negocio",
  "Versión para celular y computadora",
  "Botón directo a WhatsApp",
  "Servicios, horarios, precios o catálogo",
  "Ubicación, redes y datos de contacto",
  "Publicación y configuración inicial",
];

function NegociosLanding() {
  return (
    <div className="min-h-screen text-white">
      <header className="sticky top-0 z-40 border-b border-white/10 bg-[#17152b]/92 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8 lg:px-10">
          <a href="/" className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/12 bg-white/5 text-sm font-black text-[var(--pink)]">
              JT
            </span>
            <div>
              <p className="text-sm font-black leading-none">Josué Terrones</p>
              <p className="mt-1 text-[10px] font-bold uppercase tracking-[0.16em] text-white/45">
                Desarrollo web
              </p>
            </div>
          </a>

          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-[var(--mint)] px-4 py-2.5 text-xs font-black text-[#12121c] transition-transform hover:-translate-y-0.5 sm:px-5 sm:text-sm"
          >
            Cotizar por WhatsApp
          </a>
        </div>
      </header>

      <main>
        <section className="relative overflow-hidden px-5 pb-20 pt-16 sm:px-8 sm:pb-28 sm:pt-24 lg:px-10 lg:pb-32 lg:pt-28">
          <div className="pointer-events-none absolute left-[-12%] top-[-20%] h-72 w-72 rounded-full bg-[var(--lavender)]/12 blur-[90px] sm:h-[520px] sm:w-[520px]" />
          <div className="pointer-events-none absolute right-[-12%] top-[18%] h-72 w-72 rounded-full bg-[var(--hot-pink)]/12 blur-[100px] sm:h-[500px] sm:w-[500px]" />

          <div className="relative mx-auto max-w-7xl">
            <div className="max-w-5xl">
              <span className="inline-flex rounded-full border border-[var(--mint)]/25 bg-[var(--mint)]/8 px-3 py-1.5 text-[10px] font-black uppercase tracking-[0.16em] text-[var(--mint)] sm:text-xs">
                Para negocios y proyectos
              </span>

              <h1 className="mt-6 max-w-5xl text-[clamp(3rem,10vw,7.5rem)] font-black leading-[0.92] tracking-[-0.065em]">
                Tu negocio ya está en internet.
                <span className="mt-2 block text-[var(--pink)]">
                  Haz que se vea profesional.
                </span>
              </h1>

              <p className="mt-7 max-w-3xl text-base leading-7 text-[var(--text-secondary)] sm:text-xl sm:leading-9">
                Creo páginas web claras, rápidas y pensadas para celular para que tus clientes encuentren tus servicios, horarios, ubicación y contacto sin tener que buscar entre publicaciones viejas.
              </p>

              <div className="mt-8 flex max-w-xl flex-col gap-3 sm:flex-row">
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-13 flex-1 items-center justify-center rounded-full bg-[var(--cream)] px-6 py-4 text-center text-sm font-black text-[#141421] transition-transform hover:-translate-y-1"
                >
                  Quiero una página web
                </a>
                <a
                  href="/#projects"
                  className="inline-flex min-h-13 flex-1 items-center justify-center rounded-full border border-white/15 bg-white/[0.035] px-6 py-4 text-center text-sm font-bold text-white transition-all hover:border-[var(--lavender)]/50 hover:bg-white/[0.06]"
                >
                  Ver trabajos
                </a>
              </div>

              <div className="mt-8 flex flex-wrap gap-2">
                {["Móvil", "WhatsApp", "A medida", "Publicación incluida"].map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/10 bg-white/[0.035] px-3 py-2 text-[11px] font-bold text-white/60"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="border-y border-white/8 bg-white/[0.025] px-5 py-16 sm:px-8 sm:py-20 lg:px-10">
          <div className="mx-auto max-w-7xl">
            <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[var(--lavender)] sm:text-xs">
              ¿Te suena familiar?
            </p>
            <div className="mt-7 grid gap-4 md:grid-cols-3">
              {problems.map((problem) => (
                <div
                  key={problem}
                  className="rounded-[24px] border border-white/10 bg-[#1b1830]/70 p-5 sm:p-6"
                >
                  <span className="text-2xl text-[var(--pink)]">→</span>
                  <p className="mt-5 text-base font-bold leading-7 text-white/85 sm:text-lg">
                    {problem}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="px-5 py-20 sm:px-8 sm:py-28 lg:px-10">
          <div className="mx-auto max-w-7xl">
            <div className="max-w-3xl">
              <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[var(--cream)] sm:text-xs">
                La idea es simple
              </p>
              <h2 className="mt-4 text-[clamp(2.4rem,7vw,5rem)] font-black leading-[0.95] tracking-[-0.055em]">
                Que tus clientes encuentren todo sin complicarse.
              </h2>
            </div>

            <div className="mt-10 grid gap-4 md:grid-cols-2">
              {benefits.map((benefit) => (
                <article
                  key={benefit.number}
                  className="rounded-[26px] border border-white/10 bg-white/[0.028] p-6 sm:p-8"
                >
                  <p className="font-mono text-xs text-white/30">{benefit.number}</p>
                  <h3 className="mt-7 text-2xl font-black tracking-[-0.035em] sm:text-3xl">
                    {benefit.title}
                  </h3>
                  <p className="mt-4 max-w-xl text-sm leading-7 text-[var(--text-secondary)] sm:text-base">
                    {benefit.text}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="px-5 pb-20 sm:px-8 sm:pb-28 lg:px-10">
          <div className="mx-auto grid max-w-7xl overflow-hidden rounded-[30px] border border-white/10 bg-[#201d38]/70 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="border-b border-white/10 p-6 sm:p-9 lg:border-b-0 lg:border-r lg:p-12">
              <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[var(--mint)] sm:text-xs">
                Una web útil
              </p>
              <h2 className="mt-4 text-3xl font-black leading-tight tracking-[-0.045em] sm:text-5xl">
                Sin venderte cosas que no necesitas.
              </h2>
              <p className="mt-5 text-sm leading-7 text-[var(--text-secondary)] sm:text-base">
                Primero definimos qué necesita tu negocio y construimos desde ahí. Puede ser algo sencillo o crecer después con funciones más avanzadas.
              </p>
            </div>

            <div className="p-6 sm:p-9 lg:p-12">
              <p className="text-sm font-black">Puede incluir:</p>
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {includes.map((item) => (
                  <div
                    key={item}
                    className="flex min-h-14 items-center gap-3 rounded-2xl border border-white/8 bg-white/[0.035] px-4 py-3"
                  >
                    <span className="h-2 w-2 shrink-0 rounded-full bg-[var(--pink)]" />
                    <span className="text-sm leading-6 text-white/72">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="px-5 pb-20 sm:px-8 sm:pb-28 lg:px-10">
          <div className="mx-auto max-w-7xl">
            <div className="rounded-[30px] border border-[var(--pink)]/20 bg-[linear-gradient(135deg,rgba(255,143,185,.10),rgba(185,165,255,.07))] p-6 text-center sm:p-10 lg:p-14">
              <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[var(--pink)] sm:text-xs">
                ¿Tienes un negocio?
              </p>
              <h2 className="mx-auto mt-4 max-w-4xl text-[clamp(2.4rem,7vw,5.5rem)] font-black leading-[0.94] tracking-[-0.055em]">
                Cuéntame qué quieres mejorar y vemos qué te conviene.
              </h2>
              <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-[var(--text-secondary)] sm:text-base">
                No necesitas saber de tecnología. Cuéntame qué haces y qué te gustaría que tus clientes pudieran encontrar o hacer en tu página.
              </p>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mx-auto mt-8 inline-flex min-h-14 w-full max-w-md items-center justify-center rounded-full bg-[var(--mint)] px-6 py-4 text-sm font-black text-[#12121c] transition-transform hover:-translate-y-1"
              >
                Escribirme por WhatsApp
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 px-5 py-8 sm:px-8 lg:px-10">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 text-sm text-white/45 sm:flex-row sm:items-center sm:justify-between">
          <p>Josué Terrones · Desarrollo web para negocios</p>
          <a href="/" className="font-bold text-white/65 hover:text-white">
            Ver portafolio completo →
          </a>
        </div>
      </footer>
    </div>
  );
}

export default NegociosLanding;
