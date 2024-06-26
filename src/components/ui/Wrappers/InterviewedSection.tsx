"use client";
import { type ReactNode, useRef, useEffect, useState } from "react";
import { useRouter } from "@/utils";

import type { InterviewedBaseDivProps } from "@/types";

export default function InterviewedSection({ children, className, id }: InterviewedBaseDivProps): ReactNode {
  // State
  const [isVisible, setIsVisible] = useState(false);

  // Base Ref
  const interviewedRef = useRef(null);

  // Hooks
  const { push } = useRouter();

  useEffect(() => {
    const currInterviewed = interviewedRef.current;
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

  useEffect(() => {
    // @ts-expect-error
    if (isVisible) push(`#${id}`);
  }, [isVisible]);

  return (
    <div className={className} ref={interviewedRef} id={id}>
      {children}
    </div>
  );
}
