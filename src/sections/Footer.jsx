import { motion } from "motion/react";

import Container from "../components/Container";
import { profile } from "../data/portfolio";

const navigation = [
  {
    label: "Home",
    href: "#home",
  },
  {
    label: "About",
    href: "#about",
  },
  {
    label: "Projects",
    href: "#projects",
  },
  {
    label: "Skills",
    href: "#skills",
  },
  {
    label: "Timeline",
    href: "#timeline",
  },
  {
    label: "Contact",
    href: "#contact",
  },
];

function Footer() {
  const currentYear =
    new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-[#0d0c18]">
      <div className="absolute inset-x-0 top-0 h-[4px] bg-[var(--lavender)] shadow-[0_0_24px_rgba(185,165,255,.35)]" />

      <div className="pointer-events-none absolute -left-40 top-[-180px] h-[420px] w-[420px] rounded-full bg-[#332650] blur-[150px]" />

      <div className="pointer-events-none absolute -right-40 bottom-[-220px] h-[480px] w-[480px] rounded-full bg-[#4a203b] blur-[160px]" />

      <Container className="relative max-w-[1580px]">
        <div className="grid gap-14 py-16 sm:py-20 lg:grid-cols-[1.1fr_0.9fr] lg:items-end lg:gap-20">
          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.4,
            }}
            transition={{
              duration: 0.6,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <div className="flex items-center gap-3">
              <span className="h-2.5 w-2.5 rounded-full bg-[var(--pink)] shadow-[0_0_12px_rgba(255,143,185,.65)]" />

              <p className="text-[10px] font-black uppercase tracking-[0.28em] text-[var(--pink)]">
                End of portfolio
              </p>
            </div>

            <div className="mt-7 flex items-center gap-8">
              <div className="flex shrink-0 items-center">
                <span className="block text-[clamp(5rem,9vw,8.5rem)] font-black leading-[1.05] tracking-[-0.08em] text-[var(--lavender)]">
                  J
                </span>

                <span className="block text-[clamp(5rem,9vw,8.5rem)] font-black leading-[1.05] tracking-[-0.08em] text-[var(--pink)]">
                  T
                </span>
              </div>

              <div className="hidden sm:block">
                <p className="text-xl font-black tracking-[-0.035em] text-white">
                  {profile.name}
                </p>

                <p className="mt-1 text-sm font-semibold text-white/45">
                  {profile.role}
                </p>
              </div>
            </div>

            <div className="mt-4 sm:hidden">
              <p className="text-xl font-black tracking-[-0.035em] text-white">
                {profile.name}
              </p>

              <p className="mt-1 text-sm font-semibold text-white/45">
                {profile.role}
              </p>
            </div>

            <p className="mt-6 max-w-xl text-base leading-7 text-[#aaa2b5]">
              Building modern web applications
              across frontend, backend and everything
              that connects them.
            </p>
          </motion.div>

          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.4,
            }}
            transition={{
              duration: 0.6,
              delay: 0.08,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="grid gap-10 sm:grid-cols-2"
          >
            <div>
              <p className="text-[10px] font-black uppercase tracking-[0.25em] text-white/35">
                Navigate
              </p>

              <nav className="mt-5 flex flex-col items-start gap-2">
                {navigation.map(
                  (item, index) => (
                    <a
                      key={item.label}
                      href={item.href}
                      className="group flex items-center gap-3 py-1 text-sm font-bold text-white/65 transition-colors duration-300 hover:text-white"
                    >
                      <span className="font-mono text-[9px] text-white/20 transition-colors duration-300 group-hover:text-[var(--pink)]">
                        {String(
                          index + 1,
                        ).padStart(2, "0")}
                      </span>

                      <span>
                        {item.label}
                      </span>
                    </a>
                  ),
                )}
              </nav>
            </div>

            <div>
              <p className="text-[10px] font-black uppercase tracking-[0.25em] text-white/35">
                Connect
              </p>

              <div className="mt-5 flex flex-col items-start gap-3">
                <FooterLink
                  href={profile.github}
                  label="GitHub"
                />

                <FooterLink
                  href={profile.linkedin}
                  label="LinkedIn"
                />

                <a
                  href={`mailto:${profile.email}`}
                  className="group flex items-center gap-2 text-sm font-bold text-white/65 transition-colors duration-300 hover:text-[var(--cream)]"
                >
                  Email

                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    ↗
                  </span>
                </a>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="grid gap-5 border-t border-white/10 py-7 text-[10px] font-bold uppercase tracking-[0.16em] text-white/30 sm:grid-cols-3 sm:items-center">
          <span>
            © {currentYear} {profile.name}
          </span>

          <span className="sm:text-center">
            React · Tailwind CSS
          </span>

          <span className="sm:text-right">
            Tonalá, Jalisco, México
          </span>
        </div>
      </Container>

      <div className="h-[5px] w-full bg-gradient-to-r from-[var(--lavender)] via-[var(--pink)] to-[var(--cream)]" />
    </footer>
  );
}

function FooterLink({
  href,
  label,
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="group flex items-center gap-2 text-sm font-bold text-white/65 transition-colors duration-300 hover:text-[var(--lavender)]"
    >
      {label}

      <span className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
        ↗
      </span>
    </a>
  );
}

export default Footer;