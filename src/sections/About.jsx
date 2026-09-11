import { motion } from "motion/react";
import Container from "../components/Container";
import { profile } from "../data/portfolio";

const principles = [
  {
    number: "01",
    title: "Clean development",
    description:
      "I care about writing code that stays understandable, organized and maintainable as a project grows.",
    style: {
      background: "#2a192d",
      border: "#6b3454",
      accent: "var(--pink)",
    },
  },
  {
    number: "02",
    title: "Thoughtful experiences",
    description:
      "A good interface should not only look good. It should feel intuitive, responsive and pleasant to use.",
    style: {
      background: "#211c38",
      border: "#514385",
      accent: "var(--lavender)",
    },
  },
  {
    number: "03",
    title: "Continuous learning",
    description:
      "I enjoy exploring new tools, improving my workflow and finding better ways to solve problems.",
    style: {
      background: "#172b2b",
      border: "#376b63",
      accent: "var(--mint)",
    },
  },
];

function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#1d1732] py-20 sm:py-24 lg:py-28"
    >
      <div className="absolute inset-x-0 top-0 h-[4px] bg-[var(--pink)] shadow-[0_0_22px_rgba(255,143,185,.45)]" />

      <div className="pointer-events-none absolute right-[-160px] top-[80px] h-[420px] w-[420px] rounded-full bg-[#3d2045] blur-[120px]" />

      <div className="pointer-events-none absolute bottom-[-180px] left-[-130px] h-[460px] w-[460px] rounded-full bg-[#282451] blur-[130px]" />

      <Container className="max-w-[1580px]">
        <div className="grid gap-10 lg:grid-cols-[0.78fr_1.22fr] lg:items-center lg:gap-16 xl:gap-20">
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
            className="relative overflow-hidden rounded-[30px] border border-[#65405f] bg-[#2b203f] p-8 shadow-[0_35px_90px_-45px_rgba(0,0,0,.9)] sm:p-9 lg:p-10"
          >
            <div className="absolute right-[-70px] top-[-80px] h-[190px] w-[190px] rounded-full bg-[#6d365f]" />

            <div className="absolute bottom-[-105px] left-[-90px] h-[210px] w-[210px] rounded-full bg-[#4a407f]" />

            <div className="relative">
              <div className="flex items-center gap-3">
                <span className="h-3 w-3 rounded-full bg-[var(--pink)] shadow-[0_0_14px_rgba(255,143,185,.65)]" />

                <p className="text-xs font-black uppercase tracking-[0.3em] text-[var(--pink)]">
                  About / Profile
                </p>
              </div>

              <div className="mt-5 h-[4px] w-28 rounded-full bg-gradient-to-r from-[var(--pink)] via-[var(--lavender)] to-[var(--cream)]" />

              <h2 className="mt-6 max-w-[520px] text-4xl font-black leading-[0.98] tracking-[-0.055em] text-white sm:text-5xl lg:text-[3.35rem]">
                More than just
                <span className="block">
                  writing code.
                </span>
              </h2>

              <p className="mt-6 max-w-lg text-base font-medium leading-7 text-[#d7cee1]">
                I enjoy building digital products that feel useful,
                polished and carefully crafted.
              </p>

              <div className="mt-8 border-t border-[#735069]">
                <ProfileRow
                  label="Based in"
                  value={getShortLocation(profile.location)}
                />

                <ProfileRow
                  label="Programming"
                  value={`${profile.programmingExperience} years`}
                />

                <ProfileRow
                  label="Professional"
                  value={`${profile.professionalExperience} years`}
                  last
                />
              </div>
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
          >
            <p className="font-mono text-sm font-bold text-[var(--pink)]">
              {"<about_me />"}
            </p>

            <h3 className="mt-5 max-w-[900px] text-4xl font-black leading-[1.05] tracking-[-0.05em] text-white sm:text-5xl lg:text-[3.8rem]">
              I like working where{" "}
              <span className="text-[var(--pink)]">
                engineering
              </span>{" "}
              and{" "}
              <span className="text-[var(--cream)]">
                visual design
              </span>{" "}
              meet.
            </h3>

            <div className="mt-7 h-[4px] w-28 rounded-full bg-gradient-to-r from-[var(--pink)] to-[var(--cream)]" />

            <p className="mt-7 max-w-3xl text-base leading-8 text-[#ddd6e7] sm:text-lg sm:leading-9">
              I&apos;ve been programming for{" "}
              <span className="font-bold text-white">
                {profile.programmingExperience} years
              </span>
              , starting with a Technical Degree in Programming and
              later continuing into{" "}
              <span className="font-bold text-[var(--lavender)]">
                Systems Engineering
              </span>
              .
            </p>

            <p className="mt-4 max-w-3xl text-base leading-8 text-[#c9c0d4] sm:text-lg">
              Alongside my studies, I&apos;ve gained{" "}
              <span className="font-bold text-white">
                {profile.professionalExperience} years
              </span>{" "}
              of professional experience building production web
              applications, APIs and responsive interfaces.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <Tag
                color="pink"
                text={profile.location}
              />

              <Tag
                color="lavender"
                text="Systems Engineering"
              />

              <Tag
                color="cream"
                text="Full Stack Development"
              />
            </div>

            <div className="mt-8 border-t border-[#55445f] pt-7">
              <p className="mb-5 text-[10px] font-black uppercase tracking-[0.26em] text-white/40">
                Academic path
              </p>

              <div className="grid gap-3 sm:grid-cols-[1fr_auto_1fr] sm:items-center">
                <EducationStep
                  period={profile.technicalDegreePeriod}
                  title={profile.technicalDegree}
                  school={profile.technicalSchool}
                  color="var(--pink)"
                />

                <div className="hidden items-center sm:flex">
                  <span className="h-px w-8 bg-gradient-to-r from-[var(--pink)] to-[var(--lavender)]" />

                  <span className="ml-1 text-sm font-black text-[var(--lavender)]">
                    →
                  </span>
                </div>

                <EducationStep
                  period={profile.educationPeriod}
                  title={profile.education}
                  school={profile.university}
                  color="var(--lavender)"
                />
              </div>
            </div>
          </motion.div>
        </div>

        <div className="mt-20 lg:mt-24">
          <motion.div
            initial={{
              opacity: 0,
              y: 24,
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
            className="flex flex-col gap-6 border-b border-[#534761] pb-8 lg:flex-row lg:items-end lg:justify-between"
          >
            <div>
              <p className="text-xs font-black uppercase tracking-[0.3em] text-[var(--lavender)]">
                How I approach development
              </p>

              <h3 className="mt-4 max-w-3xl text-3xl font-black tracking-[-0.045em] text-white sm:text-4xl lg:text-5xl">
                Three principles behind
                <span className="block text-[var(--cream)]">
                  the way I build.
                </span>
              </h3>
            </div>

            <p className="max-w-lg text-sm leading-7 text-[#c9c0d4] lg:text-right">
              Clean foundations, thoughtful experiences and constant
              improvement guide the decisions I make throughout a
              project.
            </p>
          </motion.div>

          <div className="mt-8 grid gap-5 lg:grid-cols-3">
            {principles.map((principle, index) => (
              <motion.article
                key={principle.number}
                initial={{
                  opacity: 0,
                  y: 24,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.25,
                }}
                transition={{
                  duration: 0.55,
                  delay: index * 0.08,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="relative overflow-hidden rounded-[26px] border p-7 shadow-[0_24px_55px_-35px_rgba(0,0,0,.8)] sm:p-8"
                style={{
                  backgroundColor: principle.style.background,
                  borderColor: principle.style.border,
                }}
              >
                <div
                  className="absolute inset-x-0 top-0 h-[5px]"
                  style={{
                    backgroundColor: principle.style.accent,
                  }}
                />

                <div
                  className="flex h-12 w-12 items-center justify-center rounded-full font-mono text-sm font-black text-[#17152b]"
                  style={{
                    backgroundColor: principle.style.accent,
                  }}
                >
                  {principle.number}
                </div>

                <h4 className="mt-7 text-2xl font-black tracking-[-0.04em] text-white sm:text-3xl">
                  {principle.title}
                </h4>

                <p className="mt-4 text-base leading-8 text-[#ded6e5]">
                  {principle.description}
                </p>

                <div className="mt-7">
                  <span className="font-mono text-xs font-bold text-[#9f94aa]">
                    principle_{principle.number}
                  </span>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

function ProfileRow({
  label,
  value,
  last = false,
}) {
  return (
    <div
      className={`flex items-center justify-between gap-6 py-4 ${
        last
          ? ""
          : "border-b border-[#68536f]"
      }`}
    >
      <span className="text-[10px] font-black uppercase tracking-[0.24em] text-[#a89ab3]">
        {label}
      </span>

      <span className="text-right text-lg font-black tracking-[-0.03em] text-white">
        {value}
      </span>
    </div>
  );
}

function EducationStep({
  period,
  title,
  school,
  color,
}) {
  return (
    <div className="rounded-[18px] border border-[#4d4059] bg-[#181427] px-5 py-4">
      <p
        className="font-mono text-[10px] font-bold"
        style={{
          color,
        }}
      >
        {period}
      </p>

      <h4 className="mt-2 text-base font-black tracking-[-0.025em] text-white">
        {title}
      </h4>

      <p className="mt-1 text-xs text-[#aaa1b5]">
        {school}
      </p>
    </div>
  );
}

function Tag({ color, text }) {
  const styles = {
    pink:
      "border-[var(--pink)] bg-[#2a192d] text-[var(--pink)]",

    lavender:
      "border-[var(--lavender)] bg-[#211c38] text-[var(--lavender)]",

    cream:
      "border-[var(--cream)] bg-[#2c241a] text-[var(--cream)]",
  };

  return (
    <span
      className={`rounded-full border-2 px-4 py-2 text-xs font-bold ${styles[color]}`}
    >
      {text}
    </span>
  );
}

function getShortLocation(location) {
  return (
    location.split(",")[0]?.trim() ||
    location
  );
}

export default About;