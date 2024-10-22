import { useEffect, useState } from "react";

import { breakpoints, Breakpoints } from "../core/constants/breakpoints";

export function useBreakpoints() {
  const [currentBreakpoint, setCurrentBreakpoint] =
    useState<Breakpoints>("base");

  useEffect(() => {
    const updateBreakpoint = () => {
      const width = window.innerWidth;
      let newBreakpoint = "base";

      for (const [key, value] of Object.entries(breakpoints)) {
        if (width >= value) {
          newBreakpoint = key;
        }
      }

      setCurrentBreakpoint(newBreakpoint as Breakpoints);
    };

    updateBreakpoint(); // Set initial breakpoint
    window.addEventListener("resize", updateBreakpoint);

    return () => {
      window.removeEventListener("resize", updateBreakpoint);
    };
  }, []);

  return currentBreakpoint;
}
