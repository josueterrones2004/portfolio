import { useEffect, useState } from "react";
import { motion } from "motion/react";

const SHOW_AFTER = 700;

function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let frameId = null;

    const updateVisibility = () => {
      setVisible(window.scrollY > SHOW_AFTER);
      frameId = null;
    };

    const handleScroll = () => {
      if (frameId !== null) return;

      frameId = requestAnimationFrame(
        updateVisibility,
      );
    };

    updateVisibility();

    window.addEventListener(
      "scroll",
      handleScroll,
      {
        passive: true,
      },
    );

    return () => {
      window.removeEventListener(
        "scroll",
        handleScroll,
      );

      if (frameId !== null) {
        cancelAnimationFrame(frameId);
      }
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="Back to top"
      aria-hidden={!visible}
      tabIndex={visible ? 0 : -1}
      className={`
        group
        fixed
        bottom-[clamp(1.5rem,2vw,2rem)]
        right-[clamp(1.5rem,2vw,2rem)]
        z-[80]
        flex
        h-9
        w-9
        items-center
        justify-center
        rounded-full
        border
        border-[var(--pink)]
        bg-[#151329]
        text-lg
        font-black
        text-[var(--pink)]
        shadow-[0_0_22px_-8px_rgba(255,143,185,.9)]
        transition-[opacity,background-color,border-color,color,box-shadow]
        duration-300
        hover:border-[var(--cream)]
        hover:bg-[var(--cream)]
        hover:text-[#17152b]
        ${
          visible
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }
      `}
    >
      <motion.span
        animate={{
          y: [0, -4, 0],
        }}
        transition={{
          duration: 1.3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="block"
      >
        ↑
      </motion.span>
    </button>
  );
}

export default BackToTop;