"use client";
import { type RefObject, useEffect, useState } from "react";

/** PENDING: documentation */
export default function useEnterView(incomingRef: RefObject<HTMLDivElement | null>, rootMargin = "0px"): Boolean {
  // State
  const [isVisible, setState] = useState<boolean>(false);

  const intersecObj: IntersectionObserverInit = {
    root: null,
    rootMargin,
    threshold: 0.5,
  };

  // Effect
  useEffect(() => {
    const curr = incomingRef.current;
    if (curr) {
      const observer = new IntersectionObserver(([{ isIntersecting }]) => setState(() => isIntersecting), intersecObj);
      observer.observe(curr);
      return () => observer.unobserve(curr);
    }
  }, []);

  return isVisible;
}
