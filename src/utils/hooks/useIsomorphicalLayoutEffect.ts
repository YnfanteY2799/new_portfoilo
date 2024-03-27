import { useEffect, useLayoutEffect } from "react";

export default function useIsomorphicLayoutEffect(): Function {
  return typeof window !== "undefined" ? useLayoutEffect : useEffect;
}
