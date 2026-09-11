import { useEffect, useState } from "react";
import { motion } from "motion/react";

import {
  profile,
  skills,
} from "../data/portfolio";

function CodeWindow() {
  const [skillIndex, setSkillIndex] =
    useState(0);

  const [text, setText] =
    useState("");

  const [deleting, setDeleting] =
    useState(false);

  useEffect(() => {
    const currentSkill =
      skills[skillIndex];

    let timeout;

    if (
      !deleting &&
      text === currentSkill
    ) {
      timeout = setTimeout(() => {
        setDeleting(true);
      }, 1300);
    } else if (
      deleting &&
      text === ""
    ) {
      setDeleting(false);

      setSkillIndex(
        (current) =>
          (current + 1) %
          skills.length,
      );
    } else {
      timeout = setTimeout(
        () => {
          setText((current) =>
            deleting
              ? current.slice(0, -1)
              : currentSkill.slice(
                  0,
                  current.length + 1,
                ),
          );
        },
        deleting ? 45 : 80,
      );
    }

    return () => {
      clearTimeout(timeout);
    };
  }, [
    text,
    deleting,
    skillIndex,
  ]);

  return (
    <div className="relative w-full max-w-[680px]">
      <div className="pointer-events-none absolute -inset-8 -z-10 rounded-[36px] bg-[radial-gradient(circle_at_65%_35%,rgba(255,95,158,.16),transparent_55%)] blur-3xl" />

      <div className="overflow-hidden rounded-[26px] border border-white/[0.16] bg-[#111022]/95 shadow-[0_35px_100px_-35px_rgba(0,0,0,.85)] backdrop-blur-2xl">
        <div className="relative flex h-[58px] items-center border-b border-white/10 bg-white/[0.025] px-4 sm:px-5">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04]">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              className="h-4 w-4"
            >
              <path
                d="M5 7 10 12 5 17"
                stroke="var(--cream)"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />

              <path
                d="M12 17h7"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </div>

          <div className="absolute left-1/2 flex -translate-x-1/2 items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-2 sm:px-4">
            <span className="h-2 w-2 rounded-full bg-[var(--cream)] shadow-[0_0_12px_rgba(255,230,154,.5)]" />

            <span className="text-[10px] font-semibold text-white/70 sm:text-[11px]">
              JavaScript
            </span>
          </div>

          <div className="ml-auto flex items-center gap-2 sm:gap-2.5">
            <span className="h-2.5 w-2.5 rounded-full bg-[var(--hot-pink)]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[var(--cream)]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[var(--lavender)]" />
          </div>
        </div>

        <div className="relative h-[50px] border-b border-white/10 bg-[#151329]">
          <div className="absolute bottom-0 left-4 flex h-[41px] items-center gap-2.5 rounded-t-xl border-x border-t border-white/10 bg-[#111022] px-4 sm:left-5">
            <span className="h-2 w-2 rounded-full bg-[var(--pink)] shadow-[0_0_10px_rgba(255,143,185,.45)]" />

            <span className="text-[11px] font-semibold text-white/80">
              developer.js
            </span>

            <span className="ml-2 text-xs text-white/20">
              ×
            </span>

            <span className="absolute inset-x-0 bottom-0 h-[2px] bg-gradient-to-r from-[var(--hot-pink)] via-[var(--pink)] to-[var(--cream)]" />
          </div>
        </div>

        <div className="relative overflow-x-hidden px-3 py-6 sm:px-5">
          <div className="pointer-events-none absolute right-[-120px] top-[-100px] h-[300px] w-[300px] rounded-full bg-[var(--lavender)]/[0.045] blur-[90px]" />

          <div className="relative font-mono text-[10px] leading-[1.9] min-[480px]:text-[11px] sm:text-[12px] lg:text-[13px]">
            <CodeLine number={1}>
              <span className="text-[var(--lavender)]">
                const
              </span>

              <span className="text-white">
                {" developer "}
              </span>

              <span className="text-[var(--pink)]">
                =
              </span>

              <span className="text-white">
                {" {"}
              </span>
            </CodeLine>

            <CodeLine number={2}>
              <Property name="name">
                &quot;{profile.name}&quot;
              </Property>
            </CodeLine>

            <CodeLine number={3}>
              <Property name="role">
                &quot;{profile.role}&quot;
              </Property>
            </CodeLine>

            <CodeLine number={4}>
              <Property name="location">
                &quot;{profile.location}&quot;
              </Property>
            </CodeLine>

            <CodeLine number={5}>
              <span className="text-white">
                {"  "}
              </span>

              <span className="text-[var(--pink)]">
                programmingExperience
              </span>

              <span className="text-white/40">
                :{" "}
              </span>

              <span className="text-[var(--lavender)]">
                &quot;
                {profile.programmingExperience} years
                &quot;
              </span>

              <span className="text-white">
                ,
              </span>
            </CodeLine>

            <CodeLine number={6}>
              <span className="text-white">
                {"  "}
              </span>

              <span className="text-[var(--pink)]">
                professionalExperience
              </span>

              <span className="text-white/40">
                :{" "}
              </span>

              <span className="text-[var(--cream)]">
                &quot;
                {profile.professionalExperience} years
                &quot;
              </span>

              <span className="text-white">
                ,
              </span>
            </CodeLine>

            <CodeLine number={7}>
              <span className="text-white">
                {"  "}
              </span>

              <span className="text-[var(--pink)]">
                technologies
              </span>

              <span className="text-white/40">
                :{" "}
              </span>

              <span className="text-[var(--lavender)]">
                {profile.technologiesCount}
              </span>

              <span className="text-white">
                ,
              </span>
            </CodeLine>

            <CodeLine number={8}>
              <Property name="operatingSystem">
                &quot;Linux&quot;
              </Property>
            </CodeLine>

            <CodeLine number={9}>
              <span className="text-white">
                {"  "}
              </span>

              <span className="text-[var(--pink)]">
                status
              </span>

              <span className="text-white/40">
                :{" "}
              </span>

              <span className="text-[var(--mint)]">
                &quot;Available&quot;
              </span>

              <span className="text-white">
                ,
              </span>
            </CodeLine>

            <div className="relative rounded-md">
              <motion.div
                animate={{
                  opacity: [
                    0.3,
                    0.55,
                    0.3,
                  ],
                }}
                transition={{
                  duration: 2.2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute inset-y-0 left-0 right-0 rounded-md border-l-2 border-[var(--pink)] bg-gradient-to-r from-[var(--pink)]/[0.07] to-transparent"
              />

              <div className="relative">
                <CodeLine number={10}>
                  <span className="text-white">
                    {"  "}
                  </span>

                  <span className="text-[var(--pink)]">
                    skill
                  </span>

                  <span className="text-white/40">
                    :{" "}
                  </span>

                  <span className="text-[var(--mint)]">
                    &quot;
                    {text}

                    <motion.span
                      animate={{
                        opacity: [
                          1,
                          0,
                          1,
                        ],
                      }}
                      transition={{
                        duration: 0.75,
                        repeat: Infinity,
                      }}
                      className="inline-block text-[var(--cream)]"
                    >
                      |
                    </motion.span>
                    &quot;
                  </span>

                  <span className="text-white">
                    ,
                  </span>
                </CodeLine>
              </div>
            </div>

            <CodeLine number={11}>
              <span className="text-white">
                {"};"}
              </span>
            </CodeLine>
          </div>
        </div>

        <div className="flex h-10 items-center justify-between border-t border-white/[0.08] bg-[#0d0c1a] px-4 font-mono text-[9px] text-white/30 sm:px-5 sm:text-[10px]">
          <div className="flex items-center gap-3 sm:gap-4">
            <span>Ln 10</span>
            <span>UTF-8</span>
          </div>

          <div className="flex items-center gap-3 sm:gap-4">
            <span>JavaScript</span>

            <span className="flex items-center gap-2 text-white/55">
              <span className="h-1.5 w-1.5 rounded-full bg-[var(--mint)] shadow-[0_0_8px_rgba(143,240,197,.6)]" />

              Ready
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

function CodeLine({
  number,
  children,
}) {
  return (
    <div className="flex min-h-[25px] min-w-0">
      <span className="mr-3 w-5 shrink-0 select-none text-right text-white/20 sm:mr-5">
        {number}
      </span>

      <span className="min-w-0 whitespace-pre-wrap break-words sm:whitespace-pre">
        {children}
      </span>
    </div>
  );
}

function Property({
  name,
  children,
}) {
  return (
    <>
      <span className="text-white">
        {"  "}
      </span>

      <span className="text-[var(--pink)]">
        {name}
      </span>

      <span className="text-white/40">
        :{" "}
      </span>

      <span className="text-[var(--cream)]">
        {children}
      </span>

      <span className="text-white">
        ,
      </span>
    </>
  );
}

export default CodeWindow;