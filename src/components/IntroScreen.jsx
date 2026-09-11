import {
  useLayoutEffect,
  useState,
} from "react";

import {
  AnimatePresence,
  motion,
} from "motion/react";

import { profile } from "../data/portfolio";

const INTRO_DURATION = 1500;

function IntroScreen() {
  const [visible, setVisible] = useState(true);

  useLayoutEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });

    // Lock the entire document while the intro is visible.
    const html = document.documentElement;
    const body = document.body;

    const previousHtmlOverflow =
      html.style.overflow;

    const previousBodyOverflow =
      body.style.overflow;

    const previousBodyPosition =
      body.style.position;

    const previousBodyWidth =
      body.style.width;

    const previousBodyTop =
      body.style.top;

    html.style.overflow = "hidden";

    body.style.overflow = "hidden";
    body.style.position = "fixed";
    body.style.width = "100%";
    body.style.top = "0px";

    const timer = window.setTimeout(() => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "instant",
      });

      setVisible(false);
    }, INTRO_DURATION);

    return () => {
      window.clearTimeout(timer);

      html.style.overflow =
        previousHtmlOverflow;

      body.style.overflow =
        previousBodyOverflow;

      body.style.position =
        previousBodyPosition;

      body.style.width =
        previousBodyWidth;

      body.style.top =
        previousBodyTop;

      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "instant",
      });
    };
  }, []);

  // Unlock scrolling only after the exit animation has fully completed.
  const handleExitComplete = () => {
    const html = document.documentElement;
    const body = document.body;

    html.style.overflow = "";
    body.style.overflow = "";
    body.style.position = "";
    body.style.width = "";
    body.style.top = "";

    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  };

  return (
    <AnimatePresence
      onExitComplete={handleExitComplete}
    >
      {visible && (
        <motion.div
          initial={{
            opacity: 1,
          }}
          exit={{
            opacity: 0,
          }}
          transition={{
            duration: 0.42,
            ease: [0.76, 0, 0.24, 1],
          }}
          className="fixed inset-0 z-[999] flex items-center justify-center overflow-hidden bg-[#17152b]"
        >
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(145deg,#201c3c_0%,#17152b_46%,#22152d_100%)]" />

          <motion.div
            initial={{
              opacity: 0,
              scale: 0.9,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="pointer-events-none absolute -left-[12%] top-[-20%] h-[650px] w-[650px] rounded-full bg-[var(--lavender)]/20 blur-[150px]"
          />

          <motion.div
            initial={{
              opacity: 0,
              scale: 0.9,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            transition={{
              duration: 0.8,
              delay: 0.08,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="pointer-events-none absolute -right-[10%] bottom-[-25%] h-[700px] w-[700px] rounded-full bg-[var(--hot-pink)]/20 blur-[160px]"
          />

          <motion.div
            initial={{
              scaleX: 0,
            }}
            animate={{
              scaleX: 1,
            }}
            transition={{
              duration: 0.75,
              delay: 0.1,
              ease: [0.76, 0, 0.24, 1],
            }}
            className="absolute left-0 right-0 top-1/2 h-px origin-center bg-gradient-to-r from-transparent via-[var(--pink)]/25 to-transparent"
          />

          <div className="relative flex flex-col items-center">
            <motion.div
              initial={{
                opacity: 0,
                scale: 0.76,
                filter: "blur(12px)",
              }}
              animate={{
                opacity: 1,
                scale: 1,
                filter: "blur(0px)",
              }}
              transition={{
                duration: 0.65,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="relative"
            >
              <motion.div
                animate={{
                  scale: [1, 1.07, 1],
                  opacity: [0.28, 0.5, 0.28],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute inset-[-55px] -z-10 rounded-full bg-[var(--pink)]/20 blur-[60px]"
              />

              <span className="bg-gradient-to-r from-[var(--lavender)] via-[var(--pink)] to-[var(--cream)] bg-clip-text text-[clamp(5rem,14vw,10rem)] font-black leading-none tracking-[-0.09em] text-transparent">
                JT
              </span>
            </motion.div>

            <motion.div
              initial={{
                width: 0,
              }}
              animate={{
                width: 84,
              }}
              transition={{
                duration: 0.45,
                delay: 0.42,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="mt-7 h-[3px] rounded-full bg-gradient-to-r from-[var(--lavender)] via-[var(--pink)] to-[var(--cream)]"
            />

            <motion.div
              initial={{
                opacity: 0,
                y: 10,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.45,
                delay: 0.55,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="mt-6 text-center"
            >
              <p className="text-sm font-black uppercase tracking-[0.28em] text-white">
                {profile.name}
              </p>

              <p className="mt-2 text-[10px] font-bold uppercase tracking-[0.24em] text-[var(--lavender)]">
                {profile.role}
              </p>
            </motion.div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 h-[4px] bg-[#111022]">
            <motion.div
              initial={{
                scaleX: 0,
              }}
              animate={{
                scaleX: 1,
              }}
              transition={{
                duration: INTRO_DURATION / 1000,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="h-full origin-left bg-gradient-to-r from-[var(--lavender)] via-[var(--pink)] to-[var(--cream)]"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default IntroScreen;