import { motion } from "motion/react";

import Container from "../components/Container";
import {
  profile,
  timeline,
} from "../data/portfolio";

const typeStyles = {
  Education: {
    accent: "var(--lavender)",
    background: "#211d3a",
    border: "#514887",
  },

  Professional: {
    accent: "var(--pink)",
    background: "#2a192d",
    border: "#6b3858",
  },

  "Professional Growth": {
    accent: "var(--cream)",
    background: "#2b241a",
    border: "#66542c",
  },

  Milestone: {
    accent: "var(--cream)",
    background: "#2c241a",
    border: "#66542c",
  },

  Growth: {
    accent: "var(--mint)",
    background: "#172b2b",
    border: "#376b63",
  },

  Current: {
    accent: "var(--mint)",
    background: "#172b2b",
    border: "#376b63",
  },
};

function Timeline() {
  const beforeParallel = timeline.filter(
    (item) => Number(item.year) < 2023,
  );

  const education2023 = timeline.find(
    (item) =>
      item.year === "2023" &&
      item.type === "Education",
  );

  const professional2023 = timeline.find(
    (item) =>
      item.year === "2023" &&
      item.type === "Professional",
  );

  const afterParallel = timeline.filter(
    (item) => Number(item.year) > 2023,
  );

  return (
    <section
      id="timeline"
      className="relative overflow-hidden bg-[#151321] py-24 sm:py-28 lg:py-32"
    >
      <div className="absolute inset-x-0 top-0 h-[4px] bg-[var(--mint)] shadow-[0_0_24px_rgba(143,240,197,.35)]" />

      <div className="pointer-events-none absolute -left-52 top-[15%] h-[500px] w-[500px] rounded-full bg-[#233c3d] blur-[160px]" />

      <div className="pointer-events-none absolute -right-52 bottom-[10%] h-[520px] w-[520px] rounded-full bg-[#382044] blur-[160px]" />

      <Container className="relative max-w-[1580px]">
        <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:items-end lg:gap-24">
          <motion.div
            initial={{
              opacity: 0,
              x: -25,
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
              duration: 0.65,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <div className="flex items-center gap-3">
              <span className="h-3 w-3 rounded-full bg-[var(--mint)] shadow-[0_0_14px_rgba(143,240,197,.65)]" />

              <p className="text-xs font-black uppercase tracking-[0.3em] text-[var(--mint)]">
                Timeline / Journey
              </p>
            </div>

            <p className="mt-5 font-mono text-sm font-bold text-[var(--pink)]">
              {"<experience />"}
            </p>
          </motion.div>

          <motion.div
            initial={{
              opacity: 0,
              x: 25,
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
              duration: 0.65,
              delay: 0.08,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <h2 className="max-w-[950px] text-4xl font-black leading-[1.02] tracking-[-0.055em] text-white sm:text-5xl lg:text-[4.25rem]">
              Education and professional
              <span className="block">
                experience{" "}
                <span className="text-[var(--mint)]">
                  growing together.
                </span>
              </span>
            </h2>

            <p className="mt-6 max-w-3xl text-base leading-8 text-[#d1cad7] sm:text-lg">
              From my first programming studies in 2019 to Systems
              Engineering and professional web development, each stage
              has added another layer to the way I build software
              today.
            </p>
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
            amount: 0.3,
          }}
          transition={{
            duration: 0.6,
          }}
          className="mt-16 grid overflow-hidden rounded-[24px] border border-[#3d3a4b] bg-[#11101c] sm:grid-cols-2 lg:grid-cols-4"
        >
          <Summary
            value={`${profile.programmingExperience} years`}
            label="Programming Experience"
            color="var(--cream)"
          />

          <Summary
            value={`${profile.professionalExperience} years`}
            label="Professional Experience"
            color="var(--pink)"
            bordered
          />

          <Summary
            value="2019"
            label="Programming Education"
            color="var(--lavender)"
            bordered
          />

          <Summary
            value="2023"
            label="Professional Career"
            color="var(--mint)"
          />
        </motion.div>

        <div className="relative mt-20">
          <div className="space-y-8">
            {beforeParallel.map(
              (item, index) => (
                <TimelineEvent
                  key={`${item.year}-${item.title}`}
                  item={item}
                  index={index}
                  connectNext
                />
              ),
            )}

            {education2023 &&
              professional2023 && (
                <ParallelYear
                  education={education2023}
                  professional={professional2023}
                  connectNext={
                    afterParallel.length > 0
                  }
                />
              )}

            {afterParallel.map(
              (item, index) => (
                <TimelineEvent
                  key={`${item.year}-${item.title}`}
                  item={item}
                  index={
                    beforeParallel.length +
                    index +
                    2
                  }
                  connectNext={
                    index <
                    afterParallel.length - 1
                  }
                />
              ),
            )}
          </div>
        </div>

        <motion.div
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.6,
          }}
          className="mt-16 flex items-center gap-5"
        >
          <span className="font-mono text-xs font-bold uppercase tracking-[0.22em] text-[var(--mint)]">
            Still building
          </span>

          <span className="h-px flex-1 bg-[#454052]" />

          <span className="font-mono text-xs text-white/35">
            next chapter loading...
          </span>
        </motion.div>
      </Container>
    </section>
  );
}

function ParallelYear({
  education,
  professional,
  connectNext,
}) {
  return (
    <motion.article
      initial={{
        opacity: 0,
        y: 30,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.18,
      }}
      transition={{
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="relative pl-14 sm:pl-20"
    >
      {connectNext && (
        <div className="absolute bottom-[-32px] left-[19px] top-[42px] w-[2px] bg-[#393548] sm:left-[31px]" />
      )}

      <div className="absolute left-[8px] top-8 z-10 flex h-6 w-6 items-center justify-center rounded-full border-[5px] border-[#151321] bg-white sm:left-[20px]">
        <span className="h-2 w-2 rounded-full bg-[var(--pink)]" />
      </div>

      <div className="mb-7 flex flex-col gap-3 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <p className="text-5xl font-black tracking-[-0.06em] text-white sm:text-6xl">
            2023
          </p>

          <p className="mt-2 font-mono text-xs font-bold uppercase tracking-[0.22em] text-[var(--cream)]">
            Two paths begin in parallel
          </p>
        </div>

        <p className="max-w-lg text-sm leading-7 text-white/45 lg:text-right">
          Systems Engineering and professional web development became
          part of the same journey.
        </p>
      </div>

      <div className="relative mb-6 hidden h-12 lg:block">
        <div className="absolute left-1/2 top-0 h-5 w-[2px] -translate-x-1/2 bg-white/20" />

        <div className="absolute left-1/4 right-1/4 top-5 h-[2px] bg-gradient-to-r from-[var(--lavender)] via-white/30 to-[var(--pink)]" />

        <div className="absolute left-1/4 top-5 h-7 w-[2px] bg-[var(--lavender)]" />

        <div className="absolute right-1/4 top-5 h-7 w-[2px] bg-[var(--pink)]" />
      </div>

      <div className="grid gap-5 lg:grid-cols-2">
        <ParallelCard
          item={education}
          label="Academic Path"
          accent="var(--lavender)"
          background="#211d3a"
          border="#514887"
        />

        <ParallelCard
          item={professional}
          label="Professional Path"
          accent="var(--pink)"
          background="#2a192d"
          border="#6b3858"
        />
      </div>

      <div className="mt-6 flex items-center gap-4">
        <span className="h-px flex-1 bg-gradient-to-r from-[var(--lavender)] to-white/10" />

        <span className="font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-white/40">
          learning + production
        </span>

        <span className="h-px flex-1 bg-gradient-to-r from-white/10 to-[var(--pink)]" />
      </div>
    </motion.article>
  );
}

function ParallelCard({
  item,
  label,
  accent,
  background,
  border,
}) {
  return (
    <div
      className="relative overflow-hidden rounded-[28px] border p-7 sm:p-8 lg:p-9"
      style={{
        backgroundColor: background,
        borderColor: border,
      }}
    >
      <div
        className="absolute inset-y-0 left-0 w-[5px]"
        style={{
          backgroundColor: accent,
        }}
      />

      <div className="flex items-start justify-between gap-6">
        <div>
          <p
            className="text-[10px] font-black uppercase tracking-[0.24em]"
            style={{
              color: accent,
            }}
          >
            {label}
          </p>

          <p className="mt-2 font-mono text-xs text-white/35">
            {item.period}
          </p>
        </div>

        <span
          className="h-3 w-3 rounded-full"
          style={{
            backgroundColor: accent,
            boxShadow: `0 0 14px ${accent}`,
          }}
        />
      </div>

      <h3 className="mt-7 text-3xl font-black tracking-[-0.045em] text-white sm:text-4xl">
        {item.title}
      </h3>

      <p
        className="mt-3 text-sm font-bold"
        style={{
          color: accent,
        }}
      >
        {item.organization}
      </p>

      <p className="mt-6 text-base leading-8 text-[#d7d0dd]">
        {item.description}
      </p>

      <div className="mt-7 flex flex-wrap gap-2.5">
        {item.technologies.map(
          (technology) => (
            <span
              key={technology}
              className="rounded-full border bg-[#11101c] px-4 py-2 text-xs font-bold"
              style={{
                color: accent,
                borderColor: border,
              }}
            >
              {technology}
            </span>
          ),
        )}
      </div>
    </div>
  );
}

function TimelineEvent({
  item,
  index,
  connectNext = false,
}) {
  const style =
    typeStyles[item.type] ||
    typeStyles.Current;

  return (
    <motion.article
      initial={{
        opacity: 0,
        y: 28,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.2,
      }}
      transition={{
        duration: 0.6,
        delay: index * 0.035,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="relative grid gap-5 pl-14 sm:pl-20 lg:grid-cols-[190px_1fr]"
    >
      {/* Draw the connector only when another event follows. */}
      {connectNext && (
        <div className="absolute bottom-[-32px] left-[19px] top-[42px] w-[2px] bg-[#393548] sm:left-[31px]" />
      )}

      <div
        className="absolute left-[10px] top-8 z-10 h-5 w-5 rounded-full border-[5px] border-[#151321] sm:left-[22px]"
        style={{
          backgroundColor: style.accent,
          boxShadow: `0 0 18px ${style.accent}`,
        }}
      />

      <div className="pt-7">
        <p
          className="text-4xl font-black tracking-[-0.055em] sm:text-5xl"
          style={{
            color: style.accent,
          }}
        >
          {item.year}
        </p>

        <p className="mt-2 font-mono text-xs text-white/40">
          {item.period}
        </p>

        <span
          className="mt-4 inline-block rounded-full border px-3 py-1.5 text-[10px] font-black uppercase tracking-[0.18em]"
          style={{
            color: style.accent,
            borderColor: style.border,
            backgroundColor:
              style.background,
          }}
        >
          {item.type}
        </span>
      </div>

      <div
        className="rounded-[26px] border p-7 sm:p-8 lg:p-10"
        style={{
          backgroundColor:
            style.background,
          borderColor:
            style.border,
        }}
      >
        <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <div
              className="mb-6 h-[4px] w-16 rounded-full"
              style={{
                backgroundColor:
                  style.accent,
              }}
            />

            <h3 className="text-2xl font-black tracking-[-0.04em] text-white sm:text-3xl lg:text-4xl">
              {item.title}
            </h3>

            <p
              className="mt-3 text-sm font-bold"
              style={{
                color: style.accent,
              }}
            >
              {item.organization}
            </p>
          </div>

          <span className="font-mono text-xs text-white/30">
            event_
            {String(index + 1).padStart(
              2,
              "0",
            )}
          </span>
        </div>

        <p className="mt-6 max-w-4xl text-base leading-8 text-[#d7d0dd] sm:text-lg">
          {item.description}
        </p>

        <div className="mt-7 flex flex-wrap gap-2.5">
          {item.technologies.map(
            (technology) => (
              <span
                key={technology}
                className="rounded-full border bg-[#11101c] px-4 py-2 text-xs font-bold"
                style={{
                  color: style.accent,
                  borderColor:
                    style.border,
                }}
              >
                {technology}
              </span>
            ),
          )}
        </div>
      </div>
    </motion.article>
  );
}

function Summary({
  value,
  label,
  color,
  bordered = false,
}) {
  return (
    <div
      className={`relative flex min-h-[108px] flex-col items-center justify-center px-6 py-6 text-center ${
        bordered
          ? "border-t border-[#3d3a4b] sm:border-l sm:border-t-0"
          : ""
      }`}
    >
      <div
        className="absolute inset-x-0 top-0 h-[3px]"
        style={{
          backgroundColor: color,
        }}
      />

      <p
        className="text-2xl font-black tracking-[-0.045em] sm:text-3xl"
        style={{
          color,
        }}
      >
        {value}
      </p>

      <p className="mt-2 max-w-[150px] text-[10px] font-bold uppercase leading-[1.5] tracking-[0.16em] text-white/45">
        {label}
      </p>
    </div>
  );
}

export default Timeline;