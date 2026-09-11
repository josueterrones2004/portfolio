import { useEffect, useRef, useState } from "react";

function OverlayScrollbar() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [thumbHeight, setThumbHeight] = useState(80);
  const [active, setActive] = useState(false);
  const [hovered, setHovered] = useState(false);

  const timeoutRef = useRef(null);

  useEffect(() => {
    let frameId = null;

    const updateScrollbar = () => {
      const viewportHeight = window.innerHeight;

      const documentHeight =
        document.documentElement.scrollHeight;

      const maxScroll =
        documentHeight - viewportHeight;

      const progress =
        maxScroll > 0
          ? window.scrollY / maxScroll
          : 0;

      const calculatedThumbHeight =
        documentHeight > viewportHeight
          ? (viewportHeight / documentHeight) *
            viewportHeight
          : viewportHeight;

      setScrollProgress(
        Math.min(Math.max(progress, 0), 1),
      );

      setThumbHeight(
        Math.max(calculatedThumbHeight, 52),
      );

      frameId = null;
    };

    const requestUpdate = () => {
      if (frameId !== null) return;

      frameId = requestAnimationFrame(
        updateScrollbar,
      );
    };

    const handleScroll = () => {
      // Show the thumb temporarily while the page is scrolling.
      setActive(true);

      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }

      timeoutRef.current = setTimeout(() => {
        setActive(false);
      }, 650);

      requestUpdate();
    };

    const handleResize = () => {
      requestUpdate();
    };

    updateScrollbar();

    window.addEventListener(
      "scroll",
      handleScroll,
      {
        passive: true,
      },
    );

    window.addEventListener(
      "resize",
      handleResize,
    );

    return () => {
      window.removeEventListener(
        "scroll",
        handleScroll,
      );

      window.removeEventListener(
        "resize",
        handleResize,
      );

      if (frameId !== null) {
        cancelAnimationFrame(frameId);
      }

      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const availableTrack =
    window.innerHeight - thumbHeight - 12;

  const thumbTop =
    6 + scrollProgress * availableTrack;

  const visible = active || hovered;

  return (
    <div
      className="pointer-events-auto fixed right-0 top-0 z-[500] hidden h-screen w-[14px] lg:block"
      onMouseEnter={() => {
        setHovered(true);
      }}
      onMouseLeave={() => {
        setHovered(false);
      }}
    >
      {/* Show the track only while the scrollbar area is hovered. */}
      <div
        className={`absolute inset-0 transition-all duration-200 ${
          hovered
            ? "bg-[#111018]/65 backdrop-blur-sm"
            : "bg-transparent"
        }`}
      />

      <div
        className={`absolute right-[3px] w-[6px] rounded-full transition-[opacity,width,background-color] duration-200 ${
          visible
            ? "opacity-100"
            : "opacity-0"
        } ${
          hovered
            ? "w-[7px] bg-white/65"
            : "bg-white/50"
        }`}
        style={{
          height: `${thumbHeight}px`,
          transform: `translateY(${thumbTop}px)`,
        }}
      />
    </div>
  );
}

export default OverlayScrollbar;