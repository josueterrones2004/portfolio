import { motion } from "motion/react";
import { useEffect, useState } from "react";

import Container from "../components/Container";
import CodeWindow from "../components/CodeWindow";
import { profile } from "../data/portfolio";

const stats = [
  {
    value: profile.technologiesCount,
    label: "Technologies & Tools",
  },
  {
    value: profile.projectsCount,
    label: "Projects",
  },
  {
    value: `${profile.programmingExperience} years`,
    label: "Programming Experience",
  },
  {
    value: `${profile.professionalExperience} years`,
    label: "Professional Experience",
  },
];

function Hero() {
  const [exploreVisible, setExploreVisible] =
    useState(true);

  useEffect(() => {
    let frameId = null;

    const updateExplore = () => {
      const threshold = Math.max(
        80,
        window.innerHeight * 0.1,
      );

      setExploreVisible(
        window.scrollY < threshold,
      );

      frameId = null;
    };

    // Keep scroll updates synchronized with the browser's render cycle.
    const requestUpdate = () => {
      if (frameId !== null) return;

      frameId = requestAnimationFrame(
        updateExplore,
      );
    };

    updateExplore();

    window.addEventListener(
      "scroll",
      requestUpdate,
      {
        passive: true,
      },
    );

    window.addEventListener(
      "resize",
      requestUpdate,
    );

    return () => {
      window.removeEventListener(
        "scroll",
        requestUpdate,
      );

      window.removeEventListener(
        "resize",
        requestUpdate,
      );

      if (frameId !== null) {
        cancelAnimationFrame(frameId);
      }
    };
  }, []);

  const scrollToAbout = () => {
    const aboutSection =
      document.getElementById("about");

    if (!aboutSection) return;

    setExploreVisible(false);

    const top =
      aboutSection.getBoundingClientRect().top +
      window.scrollY;

    window.scrollTo({
      top,
      behavior: "smooth",
    });
  };

  return (
    <section
      id="home"
      className="relative min-h-[100svh] overflow-hidden"
    >
      <div className="pointer-events-none absolute -left-[10%] top-[2%] h-[620px] w-[620px] rounded-full bg-[var(--lavender)]/16 blur-[150px]" />

      <div className="pointer-events-none absolute -right-[8%] top-[3%] h-[720px] w-[720px] rounded-full bg-[var(--hot-pink)]/17 blur-[170px]" />

      <div className="pointer-events-none absolute bottom-[-30%] left-[35%] h-[500px] w-[500px] rounded-full bg-[var(--violet)]/10 blur-[150px]" />

      <Container className="relative z-[2] max-w-[1580px]">
        <div className="flex min-h-[100svh] items-center py-14">
          <div className="grid w-full items-center gap-16 lg:grid-cols-2 lg:gap-24 xl:gap-32">
            <motion.div
              initial={{
                opacity: 0,
                x: -30,
              }}
              animate={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                duration: 0.75,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="relative z-10 w-full max-w-[760px] justify-self-center lg:justify-self-end"
            >
              <div className="flex flex-wrap items-center gap-3">
                <div className="inline-flex items-center gap-3 rounded-full border border-[var(--mint)]/40 bg-[#111022] px-4 py-2 shadow-[0_0_30px_-12px_rgba(143,240,197,.65)]">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--mint)] opacity-40" />

                    <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[var(--mint)] shadow-[0_0_12px_rgba(143,240,197,.8)]" />
                  </span>

                  <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-white">
                    {profile.availability}
                  </span>
                </div>

                <span className="hidden h-[2px] w-8 bg-[var(--lavender)] sm:block" />

                <span className="text-[11px] font-black uppercase tracking-[0.22em] text-[var(--lavender)]">
                  {profile.role}
                </span>
              </div>

              <div className="mt-6">
                <p className="mb-3 font-mono text-sm font-bold text-[var(--pink)]">
                  {"<developer />"}
                </p>

                <h1 className="text-[clamp(3.1rem,4.7vw,5.25rem)] font-black leading-[0.91] tracking-[-0.067em] text-white">
                  <span className="block">
                    I build digital
                  </span>

                  <span className="block">
                    experiences that
                  </span>

                  <span className="relative inline-block bg-gradient-to-r from-[var(--lavender)] via-[var(--pink)] to-[var(--cream)] bg-clip-text text-transparent">
                    stand out.

                    <span className="absolute -bottom-2 left-0 h-[3px] w-full bg-gradient-to-r from-[var(--lavender)] via-[var(--pink)] to-[var(--cream)]" />
                  </span>
                </h1>
              </div>

              <p className="mt-8 max-w-[710px] text-base leading-8 text-[#ddd8e8] sm:text-[17px]">
                I turn ideas into modern, scalable web
                applications, working across frontend,
                backend, databases and APIs while keeping
                every experience{" "}
                <span className="font-bold text-white">
                  clean, intentional and carefully crafted.
                </span>
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="#projects"
                  style={{
                    color: "#111111",
                  }}
                  className="group inline-flex items-center gap-3 rounded-full bg-[var(--cream)] px-7 py-3.5 text-sm font-black shadow-[0_14px_40px_-18px_rgba(255,230,154,.9)] transition-all duration-300 hover:-translate-y-1 hover:bg-white"
                >
                  View Projects

                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    ↗
                  </span>
                </a>

                <a
                  href="/Josue-Terrones-CV.pdf"
                  download
                  className="group inline-flex items-center gap-3 rounded-full border border-[var(--lavender)]/50 bg-[#1b1830] px-7 py-3.5 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:border-[var(--pink)] hover:bg-[var(--pink)] hover:text-[#17152b]"
                >
                  Download CV

                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    className="h-4 w-4 transition-transform duration-300 group-hover:translate-y-0.5"
                  >
                    <path
                      d="M12 4v11m0 0 4-4m-4 4-4-4M5 19h14"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
              </div>

              <div className="mt-9 grid w-full grid-cols-2 overflow-hidden rounded-[18px] border border-white/15 bg-[#121022] sm:grid-cols-4">
                {stats.map((stat, index) => (
                  <div
                    key={stat.label}
                    className={`relative flex min-h-[92px] flex-col items-center justify-center px-3 py-4 text-center sm:min-h-[98px] ${
                      index > 0
                        ? "sm:border-l sm:border-white/15"
                        : ""
                    }`}
                  >
                    <span
                      className={`absolute left-0 top-0 h-[3px] w-full ${
                        index === 0
                          ? "bg-[var(--pink)]"
                          : index === 1
                            ? "bg-[var(--lavender)]"
                            : index === 2
                              ? "bg-[var(--cream)]"
                              : "bg-[var(--mint)]"
                      }`}
                    />

                    <p
                      className={`font-black leading-none tracking-[-0.045em] text-white ${
                        index >= 2
                          ? "text-lg sm:text-xl"
                          : "text-xl sm:text-2xl"
                      }`}
                    >
                      {stat.value}
                    </p>

                    <p className="mt-2 max-w-[125px] text-center text-[9px] font-bold uppercase leading-[1.45] tracking-[0.13em] text-[#bcb4cf]">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{
                opacity: 0,
                x: 35,
                scale: 0.97,
              }}
              animate={{
                opacity: 1,
                x: 0,
                scale: 1,
              }}
              transition={{
                duration: 0.85,
                delay: 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="relative w-full max-w-[720px] justify-self-center lg:justify-self-start"
            >
              <div className="pointer-events-none absolute -inset-20 -z-10">
                <div className="absolute left-[8%] top-[2%] h-[320px] w-[320px] rounded-full bg-[var(--lavender)]/18 blur-[110px]" />

                <div className="absolute bottom-[-5%] right-[0%] h-[360px] w-[360px] rounded-full bg-[var(--hot-pink)]/20 blur-[120px]" />
              </div>

              <div className="mb-4 hidden justify-end sm:flex">
                <div className="inline-flex items-center gap-2 rounded-full border border-[var(--mint)]/35 bg-[#111022] px-4 py-2 text-[11px] font-bold text-white shadow-[0_0_25px_-10px_rgba(143,240,197,.6)]">
                  <span className="h-2 w-2 rounded-full bg-[var(--mint)] shadow-[0_0_10px_rgba(143,240,197,.8)]" />

                  development environment
                </div>
              </div>

              <CodeWindow />
            </motion.div>
          </div>
        </div>
      </Container>

      <button
        type="button"
        onClick={scrollToAbout}
        aria-label="Explore About section"
        aria-hidden={!exploreVisible}
        tabIndex={exploreVisible ? 0 : -1}
        className={`
          group
          absolute
          bottom-5
          left-1/2
          z-20
          hidden
          -translate-x-1/2
          flex-col
          items-center
          transition-opacity
          duration-500
          ease-out
          lg:flex
          ${
            exploreVisible
              ? "pointer-events-auto opacity-100"
              : "pointer-events-none opacity-0"
          }
        `}
      >
        <span className="text-[10px] font-black uppercase tracking-[0.34em] text-[var(--cream)]">
          Explore
        </span>

        <span className="mt-3 flex h-9 w-9 items-center justify-center rounded-full border border-[var(--pink)] bg-[#151329] text-lg font-black text-[var(--pink)] shadow-[0_0_22px_-8px_rgba(255,143,185,.9)] transition-all duration-300 group-hover:border-[var(--cream)] group-hover:bg-[var(--cream)] group-hover:text-[#17152b]">
          <motion.span
            animate={{
              y: [0, 4, 0],
            }}
            transition={{
              duration: 1.3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            ↓
          </motion.span>
        </span>
      </button>
    </section>
  );
}

export default Hero;