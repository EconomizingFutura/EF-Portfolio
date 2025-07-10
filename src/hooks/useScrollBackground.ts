"use client";

import { useEffect, RefObject } from "react";

interface UseScrollBackgroundProps {
  mainRef: RefObject<HTMLElement | null>;
  otherRef: RefObject<HTMLElement | null>;
  sectionColors: {
    default: string;
    scrolled: string;
  };
  setBackgroundColor: (color: string) => void;
}

export function useScrollBackground({
  mainRef,
  otherRef,
  sectionColors,
  setBackgroundColor,
}: UseScrollBackgroundProps) {
  useEffect(() => {
    const handleScroll = () => {
      const main = mainRef.current;
      const other = otherRef.current;

      if (main && other) {
        const otherRect = other.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        if (otherRect.top <= windowHeight * 0.3) {
          setBackgroundColor(sectionColors.scrolled);
        } else {
          setBackgroundColor(sectionColors.default);
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [mainRef, otherRef, sectionColors, setBackgroundColor]);
}
