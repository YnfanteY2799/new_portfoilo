"use client";
import { type RefObject, useEffect, useState } from "react";

/** PENDING: documentation */
export default function useEnterView({ current }: RefObject<HTMLDivElement | null>, rootMargin = "0px"): Boolean {
  // State
  const [isVisible, setState] = useState<boolean>(false);

  const intersecObj: IntersectionObserverInit = {
    root: null,
    rootMargin,
    threshold: 0.5,
  };

  // Effect
  useEffect(() => {
    if (current) {
      const observer = new IntersectionObserver(([{ isIntersecting }]) => setState(isIntersecting), intersecObj);
      observer.observe(current);
      return () => observer.unobserve(current);
    }
  }, []);

  return isVisible;
}
