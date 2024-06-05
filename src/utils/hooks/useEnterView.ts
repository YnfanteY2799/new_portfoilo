"use client";
import { type RefObject, useEffect, useState } from "react";

/** PENDING: documentation */
export default function useEnterView({ current }: RefObject<HTMLDivElement | null>, rootMargin?: string): Boolean {
  // State
  const [isVisible, setState] = useState<boolean>(false);

  // Effect
  useEffect(() => {
    if (current) {
      const observer = new IntersectionObserver(([entry]) => setState(entry.isIntersecting), { rootMargin });
      observer.observe(current);
      return () => observer.unobserve(current);
    }
  }, []);

  return isVisible;
}
