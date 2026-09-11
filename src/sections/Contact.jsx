import { motion } from "motion/react";

import Container from "../components/Container";
import { profile } from "../data/portfolio";

function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#1d1424] py-24 sm:py-28 lg:py-32"
    >
      <div className="absolute inset-x-0 top-0 h-[4px] bg-[var(--pink)] shadow-[0_0_24px_rgba(255,143,185,.4)]" />

      <div className="pointer-events-none absolute -left-52 top-[5%] h-[500px] w-[500px] rounded-full bg-[#4a2342] blur-[160px]" />

      <div className="pointer-events-none absolute -right-52 bottom-[-15%] h-[560px] w-[560px] rounded-full bg-[#33275e] blur-[170px]" />

      <Container className="relative max-w-[1580px]">
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
            amount: 0.3,
          }}
          transition={{
            duration: 0.6,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="flex items-center gap-3"
        >
          <span className="h-3 w-3 rounded-full bg-[var(--pink)] shadow-[0_0_14px_rgba(255,143,185,.7)]" />

          <p className="text-xs font-black uppercase tracking-[0.3em] text-[var(--pink)]">
            Contact / Let&apos;s Talk
          </p>
        </motion.div>

        <div className="mt-10 grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-end lg:gap-20">
          <motion.div
            initial={{
              opacity: 0,
              x: -30,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              amount: 0.25,
            }}
            transition={{
              duration: 0.7,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <p className="font-mono text-sm font-bold text-[var(--lavender)]">
              {"<get_in_touch />"}
            </p>

            <h2 className="mt-6 max-w-[950px] text-[clamp(3.4rem,6.2vw,6.6rem)] font-black leading-[0.92] tracking-[-0.065em] text-white">
              Let&apos;s build
              <span className="block">
                something{" "}
                <span className="bg-gradient-to-r from-[var(--pink)] via-[var(--lavender)] to-[var(--cream)] bg-clip-text text-transparent">
                  worth using.
                </span>
              </span>
            </h2>

            <p className="mt-8 max-w-2xl text-base leading-8 text-[#d6cdda] sm:text-lg">
              I&apos;m open to opportunities where I can contribute
              across frontend and backend development, keep growing
              professionally and help turn ideas into polished web
              applications.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <a
                href={`mailto:${profile.email}`}
                className="group inline-flex items-center gap-4 rounded-full bg-[var(--cream)] px-7 py-4 text-sm font-black transition-all duration-300 hover:-translate-y-1 hover:bg-white"
                style={{
                  color: "#17152b",
                }}
              >
                Send me an email

                <span className="text-lg transition-transform duration-300 group-hover:translate-x-1">
                  ↗
                </span>
              </a>

              <a
                href="/Josue-Terrones-CV.pdf"
                download
                className="group inline-flex items-center gap-3 rounded-full border border-[var(--lavender)]/55 bg-[#171322] px-7 py-4 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:border-[var(--lavender)] hover:bg-[#211b38]"
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
          </motion.div>

          <motion.div
            initial={{
              opacity: 0,
              x: 30,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              amount: 0.25,
            }}
            transition={{
              duration: 0.7,
              delay: 0.08,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative overflow-hidden rounded-[30px] border border-[#63415e] bg-[#271a2c] p-7 sm:p-8 lg:p-9"
          >
            <div className="pointer-events-none absolute -right-24 -top-24 h-[240px] w-[240px] rounded-full bg-[#673450] blur-[10px]" />

            <div className="relative">
              <div className="flex items-center gap-3">
                <span className="relative flex h-3 w-3">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--mint)] opacity-35" />

                  <span className="relative inline-flex h-3 w-3 rounded-full bg-[var(--mint)] shadow-[0_0_12px_rgba(143,240,197,.75)]" />
                </span>

                <span className="text-xs font-black uppercase tracking-[0.2em] text-[var(--mint)]">
                  {profile.availability}
                </span>
              </div>

              <div className="mt-9">
                <p className="text-[10px] font-black uppercase tracking-[0.24em] text-white/40">
                  Email
                </p>

                <a
                  href={`mailto:${profile.email}`}
                  className="mt-3 block break-all text-xl font-black tracking-[-0.03em] text-white transition-colors duration-300 hover:text-[var(--pink)] sm:text-2xl"
                >
                  {profile.email}
                </a>
              </div>

              <div className="mt-8 border-t border-[#60475e] pt-7">
                <p className="text-[10px] font-black uppercase tracking-[0.24em] text-white/40">
                  Based in
                </p>

                <p className="mt-2 text-lg font-black text-white">
                  {profile.location}
                </p>
              </div>

              <div className="mt-7 grid grid-cols-2 overflow-hidden rounded-[18px] border border-white/10 bg-[#171322]">
                <div className="border-r border-white/10 p-5 text-center">
                  <p className="text-xl font-black text-[var(--cream)]">
                    {profile.programmingExperience} years
                  </p>

                  <p className="mt-2 text-[9px] font-bold uppercase leading-[1.5] tracking-[0.15em] text-white/45">
                    Programming
                    <br />
                    Experience
                  </p>
                </div>

                <div className="p-5 text-center">
                  <p className="text-xl font-black text-[var(--pink)]">
                    {profile.professionalExperience} years
                  </p>

                  <p className="mt-2 text-[9px] font-bold uppercase leading-[1.5] tracking-[0.15em] text-white/45">
                    Professional
                    <br />
                    Experience
                  </p>
                </div>
              </div>

              <div className="mt-8">
                <p className="text-[10px] font-black uppercase tracking-[0.24em] text-white/40">
                  Find me online
                </p>

                <div className="mt-4 grid grid-cols-2 gap-3">
                  <SocialLink
                    href={profile.github}
                    label="GitHub"
                    color="var(--lavender)"
                  />

                  <SocialLink
                    href={profile.linkedin}
                    label="LinkedIn"
                    color="var(--pink)"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>

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
          }}
          className="mt-20 flex flex-col gap-5 border-t border-[#60475e] pt-8 sm:flex-row sm:items-center sm:justify-between"
        >
          <div>
            <p className="text-sm font-black text-white">
              Full Stack Web Developer
            </p>

            <p className="mt-1 text-sm text-white/45">
              Systems Engineering · Tonalá, Jalisco, México
            </p>
          </div>

          <p className="font-mono text-xs font-bold text-[var(--pink)]">
            {"status: available;"}
          </p>
        </motion.div>
      </Container>
    </section>
  );
}

function SocialLink({
  href,
  label,
  color,
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="group flex items-center justify-between rounded-[16px] border border-white/10 bg-[#171322] px-5 py-4 transition-all duration-300 hover:-translate-y-1 hover:border-white/25"
    >
      <span
        className="text-sm font-black"
        style={{
          color,
        }}
      >
        {label}
      </span>

      <span
        className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
        style={{
          color,
        }}
      >
        ↗
      </span>
    </a>
  );
}

export default Contact;