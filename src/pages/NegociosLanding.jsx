const WHATSAPP_URL =
  "https://wa.me/523334541455?text=Hola%20Josu%C3%A9%2C%20vi%20tu%20p%C3%A1gina%20para%20negocios%20y%20quiero%20cotizar%20una%20web.";

const services = [
  "Sitio informativo",
  "Catálogo o menú",
  "Reservas o formularios",
  "Base de datos",
  "Funciones a medida",
  "Soporte después de publicar",
];

const process = [
  ["01", "Me cuentas qué haces", "Vemos qué información necesita encontrar un cliente y qué quieres lograr con la página."],
  ["02", "Te propongo una solución", "Sin meter funciones innecesarias. Definimos algo claro, útil y que tenga sentido para tu negocio."],
  ["03", "La construyo y la publicamos", "La revisamos juntos, hacemos ajustes y queda lista para compartir desde tus redes o WhatsApp."],
];

function NegociosLanding() {
  return (
    <div className="min-h-screen bg-[#17152b] text-white">
      <header className="border-b border-white/10 bg-[#17152b]">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-8">
          <a href="/" className="flex items-center gap-3">
            <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-xs font-black text-[var(--pink)]">
              JT
            </span>
            <div>
              <p className="text-sm font-black leading-none">Josué Terrones</p>
              <p className="mt-1 text-[10px] font-bold uppercase tracking-[0.14em] text-white/40">
                Desarrollo web
              </p>
            </div>
          </a>

          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-white/15 px-4 py-2 text-xs font-bold text-white/80 transition-colors hover:border-[var(--mint)]/50 hover:text-white"
          >
            Contacto
          </a>
        </div>
      </header>

      <main>
        <section className="px-5 pb-16 pt-14 sm:px-8 sm:pb-24 sm:pt-20 lg:pb-28 lg:pt-24">
          <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[minmax(0,1.25fr)_minmax(320px,.75fr)] lg:items-end lg:gap-14">
            <div>
              <p className="text-[11px] font-black uppercase tracking-[0.22em] text-[var(--lavender)]">
                Páginas web para negocios y proyectos
              </p>

              <h1 className="mt-5 max-w-4xl text-[clamp(3rem,9vw,6.8rem)] font-black leading-[0.94] tracking-[-0.06em]">
                Una web clara para que tu negocio
                <span className="block text-[var(--pink)]">se entienda mejor.</span>
              </h1>

              <p className="mt-6 max-w-2xl text-base leading-7 text-[var(--text-secondary)] sm:text-lg sm:leading-8">
                Si hoy tus clientes dependen de publicaciones, mensajes y enlaces sueltos, puedo ayudarte a reunir todo en un sitio simple, rápido y pensado para celular.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-12 items-center justify-center rounded-full bg-[var(--cream)] px-6 py-3 text-sm font-black text-[#151421] transition-transform hover:-translate-y-0.5"
                >
                  Quiero cotizar una web
                </a>
                <a
                  href="/#projects"
                  className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/15 px-6 py-3 text-sm font-bold text-white/75 transition-colors hover:border-white/30 hover:text-white"
                >
                  Ver trabajos
                </a>
              </div>
            </div>

            <aside className="rounded-[26px] border border-white/10 bg-[#201d38] p-5 sm:p-6">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-[var(--mint)]">
                Puede ser algo sencillo
              </p>
              <div className="mt-5 space-y-3">
                {[
                  "Servicios y precios",
                  "Horarios y ubicación",
                  "Botón directo a WhatsApp",
                  "Galería o catálogo",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 border-b border-white/8 pb-3 last:border-b-0 last:pb-0"
                  >
                    <span className="h-2 w-2 shrink-0 rounded-full bg-[var(--pink)]" />
                    <span className="text-sm text-white/75">{item}</span>
                  </div>
                ))}
              </div>
              <p className="mt-5 text-xs leading-6 text-white/40">
                Y si después necesitas reservas, base de datos o funciones más específicas, también puede crecer contigo.
              </p>
            </aside>
          </div>
        </section>

        <section className="border-y border-white/8 bg-[#100f20] px-5 py-14 sm:px-8 sm:py-18">
          <div className="mx-auto max-w-6xl">
            <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
              <div>
                <p className="text-[11px] font-black uppercase tracking-[0.22em] text-[var(--cream)]">
                  Qué puedo hacer
                </p>
                <h2 className="mt-4 text-3xl font-black leading-tight tracking-[-0.04em] sm:text-4xl">
                  No necesitas una web enorme. Necesitas una que te sirva.
                </h2>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                {services.map((service) => (
                  <div
                    key={service}
                    className="rounded-2xl border border-white/10 bg-white/[0.025] px-4 py-4 text-sm font-bold text-white/72"
                  >
                    {service}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="px-5 py-16 sm:px-8 sm:py-24">
          <div className="mx-auto max-w-6xl">
            <div className="max-w-2xl">
              <p className="text-[11px] font-black uppercase tracking-[0.22em] text-[var(--lavender)]">
                Cómo trabajamos
              </p>
              <h2 className="mt-4 text-3xl font-black tracking-[-0.04em] sm:text-5xl">
                Directo y sin complicaciones.
              </h2>
            </div>

            <div className="mt-9 grid gap-4 lg:grid-cols-3">
              {process.map(([number, title, text]) => (
                <article
                  key={number}
                  className="rounded-[24px] border border-white/10 bg-[#201d38] p-5 sm:p-6"
                >
                  <p className="font-mono text-xs text-white/30">{number}</p>
                  <h3 className="mt-8 text-xl font-black tracking-[-0.03em] sm:text-2xl">
                    {title}
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-[var(--text-secondary)]">
                    {text}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="px-5 pb-20 sm:px-8 sm:pb-28">
          <div className="mx-auto max-w-6xl">
            <div className="rounded-[28px] border border-[var(--pink)]/20 bg-[#201d38] px-5 py-8 sm:px-8 sm:py-10 lg:flex lg:items-center lg:justify-between lg:gap-10 lg:px-10">
              <div className="max-w-2xl">
                <p className="text-[11px] font-black uppercase tracking-[0.22em] text-[var(--pink)]">
                  Si tienes una idea, la vemos
                </p>
                <h2 className="mt-3 text-3xl font-black leading-tight tracking-[-0.04em] sm:text-4xl">
                  Cuéntame qué necesitas y te digo qué tendría sentido construir.
                </h2>
                <p className="mt-4 text-sm leading-7 text-[var(--text-secondary)]">
                  Sin compromiso y sin necesidad de saber términos técnicos.
                </p>
              </div>

              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-7 inline-flex min-h-12 w-full items-center justify-center rounded-full bg-[var(--mint)] px-6 py-3 text-sm font-black text-[#151421] transition-transform hover:-translate-y-0.5 sm:w-auto lg:mt-0"
              >
                Escribirme por WhatsApp
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 px-5 py-7 sm:px-8">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 text-xs text-white/35 sm:flex-row sm:items-center sm:justify-between">
          <p>Josué Terrones · Desarrollo web</p>
          <a href="/" className="font-bold text-white/55 hover:text-white">
            Ver portafolio completo →
          </a>
        </div>
      </footer>
    </div>
  );
}

export default NegociosLanding;
