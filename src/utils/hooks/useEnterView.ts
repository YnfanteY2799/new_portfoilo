"use client";
import { RefObject, useEffect, useState } from "react";

/**
 * peding documentation
 */
export default function useEnterView(element?: RefObject<HTMLDivElement | null>, rootMargin?: string): Boolean {
  // State
  const [isVisible, setState] = useState<boolean>(false);

  //   Effect
  useEffect(() => {
    const curr = element?.current;
    if (curr) {
      const observer = new IntersectionObserver(([entry]) => setState(entry.isIntersecting), { rootMargin });
      observer.observe(curr);
      return () => observer.unobserve(curr);
    }
  }, []);

  return isVisible;
}
