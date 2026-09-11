import {
  useEffect,
  useRef,
  useState,
} from "react";

import {
  AnimatePresence,
  motion,
} from "motion/react";

import { profile } from "../data/portfolio";

const navigation = [
  {
    number: "01",
    label: "Home",
    href: "#home",
  },
  {
    number: "02",
    label: "About",
    href: "#about",
  },
  {
    number: "03",
    label: "Projects",
    href: "#projects",
  },
  {
    number: "04",
    label: "Skills",
    href: "#skills",
  },
  {
    number: "05",
    label: "Timeline",
    href: "#timeline",
  },
  {
    number: "06",
    label: "Contact",
    href: "#contact",
  },
];

const quickNavigation = [
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

function Navbar() {
  const [menuOpen, setMenuOpen] =
    useState(false);

  const [menuOrigin, setMenuOrigin] =
    useState({
      x: 0,
      y: 0,
    });

  const navbarRef = useRef(null);
  const menuButtonRef = useRef(null);

  const navigationIdRef = useRef(0);
  const navigationTimeoutRef = useRef(null);
  const correctionTimeoutRef = useRef(null);
  const navigationFrameRef = useRef(null);
  const scrollEndHandlerRef = useRef(null);

  useEffect(() => {
    if (!menuOpen) {
      return undefined;
    }

    const html =
      document.documentElement;

    const body =
      document.body;

    const previousHtmlOverflow =
      html.style.overflow;

    const previousBodyOverflow =
      body.style.overflow;

    html.style.overflow = "hidden";
    body.style.overflow = "hidden";

    return () => {
      html.style.overflow =
        previousHtmlOverflow;

      body.style.overflow =
        previousBodyOverflow;
    };
  }, [menuOpen]);

  useEffect(() => {
    return () => {
      if (navigationTimeoutRef.current) {
        window.clearTimeout(
          navigationTimeoutRef.current,
        );
      }

      if (correctionTimeoutRef.current) {
        window.clearTimeout(
          correctionTimeoutRef.current,
        );
      }

      if (
        navigationFrameRef.current !== null
      ) {
        cancelAnimationFrame(
          navigationFrameRef.current,
        );
      }

      if (scrollEndHandlerRef.current) {
        window.removeEventListener(
          "scrollend",
          scrollEndHandlerRef.current,
        );
      }
    };
  }, []);

  const clearPendingNavigation = () => {
    if (navigationTimeoutRef.current) {
      window.clearTimeout(
        navigationTimeoutRef.current,
      );

      navigationTimeoutRef.current = null;
    }

    if (correctionTimeoutRef.current) {
      window.clearTimeout(
        correctionTimeoutRef.current,
      );

      correctionTimeoutRef.current = null;
    }

    if (
      navigationFrameRef.current !== null
    ) {
      cancelAnimationFrame(
        navigationFrameRef.current,
      );

      navigationFrameRef.current = null;
    }

    if (scrollEndHandlerRef.current) {
      window.removeEventListener(
        "scrollend",
        scrollEndHandlerRef.current,
      );

      scrollEndHandlerRef.current = null;
    }
  };

  // Use the hamburger center as the origin of the circular transition.
  const updateMenuOrigin = () => {
    if (!menuButtonRef.current) {
      return;
    }

    const rect =
      menuButtonRef.current.getBoundingClientRect();

    setMenuOrigin({
      x:
        rect.left +
        rect.width / 2,

      y:
        rect.top +
        rect.height / 2,
    });
  };

  const openMenu = () => {
    updateMenuOrigin();
    setMenuOpen(true);
  };

  const closeMenu = () => {
    updateMenuOrigin();
    setMenuOpen(false);
  };

  const toggleMenu = () => {
    if (menuOpen) {
      closeMenu();
    } else {
      openMenu();
    }
  };

  const getSectionDestination = (
    target,
    href,
  ) => {
    if (href === "#home") {
      return 0;
    }

    const navbarBottom =
      navbarRef.current
        ?.getBoundingClientRect()
        .bottom ?? 0;

    const targetTop =
      target.getBoundingClientRect().top +
      window.scrollY;

    return Math.max(
      targetTop -
        navbarBottom -
        20,
      0,
    );
  };

  const scrollToSection = (
    href,
    navigationId,
  ) => {
    const targetId =
      href.replace("#", "");

    const target =
      document.getElementById(targetId);

    if (!target) {
      return;
    }

    if (
      navigationId !==
      navigationIdRef.current
    ) {
      return;
    }

    const destination =
      getSectionDestination(
        target,
        href,
      );

    window.history.replaceState(
      null,
      "",
      href,
    );

    window.scrollTo({
      top: destination,
      left: 0,
      behavior: "smooth",
    });

    const correctPosition = () => {
      if (
        navigationId !==
        navigationIdRef.current
      ) {
        return;
      }

      const correctedDestination =
        getSectionDestination(
          target,
          href,
        );

      const difference =
        Math.abs(
          window.scrollY -
            correctedDestination,
        );

      if (difference > 2) {
        window.scrollTo({
          top: correctedDestination,
          left: 0,
          behavior: "instant",
        });
      }
    };

    if ("onscrollend" in window) {
      const handleScrollEnd = () => {
        if (
          scrollEndHandlerRef.current ===
          handleScrollEnd
        ) {
          scrollEndHandlerRef.current =
            null;
        }

        correctPosition();
      };

      scrollEndHandlerRef.current =
        handleScrollEnd;

      window.addEventListener(
        "scrollend",
        handleScrollEnd,
        {
          once: true,
        },
      );

      return;
    }

    correctionTimeoutRef.current =
      window.setTimeout(() => {
        correctionTimeoutRef.current =
          null;

        correctPosition();
      }, 900);
  };

  const navigateToSection = (
    event,
    href,
  ) => {
    event.preventDefault();

    clearPendingNavigation();

    navigationIdRef.current += 1;

    const navigationId =
      navigationIdRef.current;

    if (menuOpen) {
      closeMenu();

      navigationTimeoutRef.current =
        window.setTimeout(() => {
          navigationTimeoutRef.current =
            null;

          scrollToSection(
            href,
            navigationId,
          );
        }, 300);

      return;
    }

    navigationFrameRef.current =
      requestAnimationFrame(() => {
        navigationFrameRef.current =
          requestAnimationFrame(() => {
            navigationFrameRef.current =
              null;

            scrollToSection(
              href,
              navigationId,
            );
          });
      });
  };

  return (
    <>
      <header className="pointer-events-none fixed inset-x-0 top-0 z-[220] px-3 sm:px-5 lg:px-7">
        <div
          ref={navbarRef}
          className={`
            pointer-events-auto
            mx-auto
            mt-4
            flex
            h-[68px]
            w-full
            max-w-[1540px]
            items-center
            rounded-[22px]
            border
            px-3
            transition-all
            duration-300
            sm:px-4
            ${
              menuOpen
                ? "border-[#17152b]/15 bg-[var(--pink)]/75 shadow-none backdrop-blur-xl"
                : "border-white/[0.14] bg-[#111022]/72 shadow-[0_18px_60px_-22px_rgba(0,0,0,.85)] backdrop-blur-2xl"
            }
          `}
        >
          <a
            href="#home"
            onClick={(event) =>
              navigateToSection(
                event,
                "#home",
              )
            }
            aria-label="Go to home"
            className="group flex shrink-0 items-center gap-3"
          >
            <img
              src="/jt-favicon.svg"
              alt=""
              aria-hidden="true"
              className="h-10 w-10 shrink-0 object-contain transition-transform duration-300 group-hover:scale-105"
            />

            <div className="hidden min-w-0 md:block">
              <p
                className={`truncate text-sm font-black tracking-[-0.025em] transition-colors duration-300 ${
                  menuOpen
                    ? "text-[#17152b]"
                    : "text-white"
                }`}
              >
                {profile.name}
              </p>

              <p
                className={`mt-0.5 truncate text-[9px] font-bold uppercase tracking-[0.16em] transition-colors duration-300 ${
                  menuOpen
                    ? "text-[#17152b]/55"
                    : "text-white/35"
                }`}
              >
                {profile.role}
              </p>
            </div>
          </a>

          <nav className="ml-8 hidden flex-1 items-center justify-center gap-1 xl:flex">
            {quickNavigation.map(
              (item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(event) =>
                    navigateToSection(
                      event,
                      item.href,
                    )
                  }
                  className={`
                    rounded-full
                    px-4
                    py-2.5
                    text-[11px]
                    font-black
                    uppercase
                    tracking-[0.12em]
                    transition-all
                    duration-300
                    ${
                      menuOpen
                        ? "text-[#17152b]/65 hover:bg-[#17152b]/10 hover:text-[#17152b]"
                        : "text-white/45 hover:bg-white/[0.06] hover:text-white"
                    }
                  `}
                >
                  {item.label}
                </a>
              ),
            )}
          </nav>

          <div className="ml-auto flex shrink-0 items-center gap-2">
            <ExternalNavLink
              href={profile.github}
              label="GitHub"
              menuOpen={menuOpen}
              className="hidden lg:inline-flex"
            />

            <ExternalNavLink
              href={profile.linkedin}
              label="LinkedIn"
              menuOpen={menuOpen}
              className="hidden lg:inline-flex"
            />

            <span
              className={`hidden h-7 w-px lg:block ${
                menuOpen
                  ? "bg-[#17152b]/15"
                  : "bg-white/10"
              }`}
            />

            <a
              href="/Josue-Terrones-CV.pdf"
              download
              className={`
                hidden
                items-center
                gap-2
                rounded-full
                border
                px-5
                py-2.5
                text-[11px]
                font-black
                transition-all
                duration-300
                sm:inline-flex
                ${
                  menuOpen
                    ? "border-[#17152b]/20 bg-[#17152b]/5 text-[#17152b] hover:bg-[#17152b] hover:text-[var(--cream)]"
                    : "border-white/15 bg-white/[0.04] text-white hover:-translate-y-0.5 hover:border-[var(--cream)] hover:bg-[var(--cream)] hover:text-[#17152b]"
                }
              `}
            >
              Download CV

              <svg
                viewBox="0 0 24 24"
                fill="none"
                className="h-3.5 w-3.5"
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

            <span
              className={`hidden h-7 w-px sm:block ${
                menuOpen
                  ? "bg-[#17152b]/15"
                  : "bg-white/10"
              }`}
            />

            <button
              ref={menuButtonRef}
              type="button"
              onClick={toggleMenu}
              aria-label={
                menuOpen
                  ? "Close navigation menu"
                  : "Open navigation menu"
              }
              aria-expanded={menuOpen}
              className={`
                relative
                flex
                h-11
                w-11
                items-center
                justify-center
                rounded-[14px]
                transition-colors
                duration-300
                ${
                  menuOpen
                    ? "hover:bg-[#17152b]/10"
                    : "hover:bg-white/[0.07]"
                }
              `}
            >
              <span className="relative block h-7 w-8">
                <motion.span
                  animate={
                    menuOpen
                      ? {
                          rotate: 45,
                          y: 0,
                        }
                      : {
                          rotate: 0,
                          y: -5,
                        }
                  }
                  transition={{
                    duration:
                      menuOpen
                        ? 0.25
                        : 0.22,

                    ease: [
                      0.22,
                      1,
                      0.36,
                      1,
                    ],
                  }}
                  className={`absolute left-1/2 top-1/2 h-[3px] w-8 -translate-x-1/2 -translate-y-1/2 rounded-full ${
                    menuOpen
                      ? "bg-[#17152b]"
                      : "bg-white"
                  }`}
                />

                <motion.span
                  animate={
                    menuOpen
                      ? {
                          rotate: -45,
                          y: 0,
                        }
                      : {
                          rotate: 0,
                          y: 5,
                        }
                  }
                  transition={{
                    duration:
                      menuOpen
                        ? 0.25
                        : 0.22,

                    ease: [
                      0.22,
                      1,
                      0.36,
                      1,
                    ],
                  }}
                  className={`absolute left-1/2 top-1/2 h-[3px] w-8 -translate-x-1/2 -translate-y-1/2 rounded-full ${
                    menuOpen
                      ? "bg-[#17152b]"
                      : "bg-white"
                  }`}
                />
              </span>
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{
              clipPath: `circle(0px at ${menuOrigin.x}px ${menuOrigin.y}px)`,
            }}
            animate={{
              clipPath: `circle(150vmax at ${menuOrigin.x}px ${menuOrigin.y}px)`,

              transition: {
                duration: 0.68,

                ease: [
                  0.76,
                  0,
                  0.24,
                  1,
                ],
              },
            }}
            exit={{
              clipPath: `circle(0px at ${menuOrigin.x}px ${menuOrigin.y}px)`,

              transition: {
                duration: 0.27,

                ease: [
                  0.7,
                  0,
                  0.3,
                  1,
                ],
              },
            }}
            className="fixed inset-0 z-[210] overflow-y-auto bg-[var(--pink)] text-[#17152b]"
          >
            <div className="pointer-events-none absolute -left-52 -top-52 h-[650px] w-[650px] rounded-full bg-[var(--cream)]/35 blur-[130px]" />

            <div className="pointer-events-none absolute -bottom-56 right-[-180px] h-[720px] w-[720px] rounded-full bg-[var(--lavender)]/45 blur-[150px]" />

            <div className="pointer-events-none absolute left-[45%] top-[20%] h-[380px] w-[380px] rounded-full bg-white/10 blur-[130px]" />

            <div className="relative mx-auto flex min-h-[100svh] w-full max-w-[1600px] flex-col px-5 pb-8 pt-28 sm:px-8 sm:pt-32 lg:px-14 xl:px-16">
              <div className="grid flex-1 gap-14 lg:grid-cols-[1.35fr_0.65fr] lg:items-end lg:gap-20">
                <nav>
                  {navigation.map(
                    (
                      item,
                      index,
                    ) => (
                      <motion.a
                        key={item.label}
                        href={item.href}
                        onClick={(event) =>
                          navigateToSection(
                            event,
                            item.href,
                          )
                        }
                        initial={{
                          opacity: 0,
                          y: 28,
                        }}
                        animate={{
                          opacity: 1,
                          y: 0,
                        }}
                        transition={{
                          duration: 0.42,
                          delay:
                            0.12 +
                            index *
                              0.045,
                          ease: [
                            0.22,
                            1,
                            0.36,
                            1,
                          ],
                        }}
                        className="group flex items-center border-b border-[#17152b]/15 py-3 sm:py-4"
                      >
                        <span className="w-9 shrink-0 font-mono text-[10px] font-black text-[#17152b]/40 sm:w-12 sm:text-xs">
                          {item.number}
                        </span>

                        <span className="text-[clamp(2.7rem,6.3vw,6.6rem)] font-black leading-[0.9] tracking-[-0.065em] transition-all duration-300 group-hover:translate-x-3 group-hover:text-[var(--cream)]">
                          {item.label}
                        </span>

                        <span className="ml-auto hidden -translate-x-3 text-4xl font-black opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100 sm:block lg:text-5xl">
                          ↗
                        </span>
                      </motion.a>
                    ),
                  )}
                </nav>

                <motion.aside
                  initial={{
                    opacity: 0,
                    y: 25,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    duration: 0.5,
                    delay: 0.35,
                  }}
                  className="lg:pb-4"
                >
                  <div className="flex items-center gap-3">
                    <span className="relative flex h-3 w-3">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#17152b] opacity-20" />

                      <span className="relative inline-flex h-3 w-3 rounded-full bg-[#17152b]" />
                    </span>

                    <p className="text-xs font-black uppercase tracking-[0.2em]">
                      {profile.availability}
                    </p>
                  </div>

                  <div className="mt-8">
                    <p className="text-[10px] font-black uppercase tracking-[0.26em] text-[#17152b]/45">
                      Current profile
                    </p>

                    <p className="mt-3 text-2xl font-black leading-tight tracking-[-0.04em]">
                      Full Stack
                      <br />
                      Web Developer
                    </p>

                    <p className="mt-3 font-semibold text-[#17152b]/65">
                      Systems Engineering
                    </p>
                  </div>

                  <div className="mt-9 grid grid-cols-2 border-y border-[#17152b]/15">
                    <MenuStat
                      value={`${profile.programmingExperience} years`}
                      label="Programming"
                    />

                    <MenuStat
                      value={`${profile.professionalExperience} years`}
                      label="Professional"
                      bordered
                    />

                    <MenuStat
                      value={
                        profile.technologiesCount
                      }
                      label="Tech & Tools"
                    />

                    <MenuStat
                      value={
                        profile.projectsCount
                      }
                      label="Projects"
                      bordered
                    />
                  </div>

                  <div className="mt-8">
                    <p className="text-[10px] font-black uppercase tracking-[0.26em] text-[#17152b]/45">
                      Based in
                    </p>

                    <p className="mt-2 font-bold">
                      {profile.location}
                    </p>
                  </div>

                  <div className="mt-8 border-t border-[#17152b]/15 pt-7">
                    <p className="text-[10px] font-black uppercase tracking-[0.26em] text-[#17152b]/45">
                      Get in touch
                    </p>

                    <a
                      href={`mailto:${profile.email}`}
                      className="mt-3 block break-all text-base font-black transition-colors hover:text-[var(--cream)] sm:text-lg"
                    >
                      {profile.email}
                    </a>
                  </div>

                  <div className="mt-6 flex flex-wrap gap-3">
                    <MenuSocial
                      href={profile.github}
                      label="GitHub"
                    />

                    <MenuSocial
                      href={profile.linkedin}
                      label="LinkedIn"
                    />
                  </div>

                  <a
                    href="/Josue-Terrones-CV.pdf"
                    download
                    className="mt-6 inline-flex items-center gap-2 rounded-full border-2 border-[#17152b] px-5 py-3 text-sm font-black transition-all hover:bg-[#17152b] hover:text-[var(--cream)] sm:hidden"
                  >
                    Download CV

                    <span>↓</span>
                  </a>
                </motion.aside>
              </div>

              <motion.div
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: 1,
                }}
                transition={{
                  duration: 0.4,
                  delay: 0.48,
                }}
                className="mt-14 flex flex-col gap-3 border-t border-[#17152b]/15 pt-6 text-[10px] font-black uppercase tracking-[0.18em] text-[#17152b]/45 sm:flex-row sm:items-center sm:justify-between"
              >
                <span>
                  Josué Terrones — Portfolio
                </span>

                <span>
                  7 years programming · 2+ years professional
                </span>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function ExternalNavLink({
  href,
  label,
  menuOpen,
  className = "",
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className={`
        items-center
        gap-1.5
        rounded-full
        px-3.5
        py-2.5
        text-[10px]
        font-black
        uppercase
        tracking-[0.12em]
        transition-all
        duration-300
        ${className}
        ${
          menuOpen
            ? "text-[#17152b]/60 hover:bg-[#17152b]/10 hover:text-[#17152b]"
            : "text-white/40 hover:bg-white/[0.06] hover:text-[var(--lavender)]"
        }
      `}
    >
      {label}

      <span className="text-xs">
        ↗
      </span>
    </a>
  );
}

function MenuStat({
  value,
  label,
  bordered = false,
}) {
  return (
    <div
      className={`py-5 ${
        bordered
          ? "border-l border-[#17152b]/15 pl-5"
          : "pr-5"
      }`}
    >
      <p className="text-xl font-black tracking-[-0.04em]">
        {value}
      </p>

      <p className="mt-1 text-[9px] font-black uppercase tracking-[0.16em] text-[#17152b]/45">
        {label}
      </p>
    </div>
  );
}

function MenuSocial({
  href,
  label,
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="group inline-flex items-center gap-2 rounded-full border border-[#17152b]/25 px-4 py-2 text-xs font-black transition-all duration-300 hover:border-[#17152b] hover:bg-[#17152b] hover:text-[var(--cream)]"
    >
      {label}

      <span className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
        ↗
      </span>
    </a>
  );
}

export default Navbar;