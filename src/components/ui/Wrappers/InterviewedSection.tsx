"use client";
import { type ReactNode, useRef, useEffect, useState } from "react";
import type { InterviewedBaseDivProps } from "@/types";

export default function InterviewedSection({ children, className, id }: InterviewedBaseDivProps): ReactNode {
  // State
  const [isVisible, setIsVisible] = useState(false);

  // Base Ref
  const InterviewedRef = useRef(null);

  useEffect(() => {
    const currInterviewed = InterviewedRef.current;
    if (currInterviewed) {
      const observer = new IntersectionObserver(([{ isIntersecting }]) => setIsVisible(isIntersecting), {
        root: null,
        threshold: 0.5,
        rootMargin: "0px",
      });
      observer.observe(currInterviewed);
      return () => observer.unobserve(currInterviewed);
    }
  }, []);

  console.log({ isVisible, id });

  return (
    <div className={className} ref={InterviewedRef} id={id}>
      {children}
    </div>
  );
}
