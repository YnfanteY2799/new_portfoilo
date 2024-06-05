"use client";
import { useEffect, useState } from "react";
import { getHash } from "../functions.ts";

export default function useHash(): string | undefined {
  // State
  const [hash, setHash] = useState<string | undefined>(getHash());

  // Function
  const handleHashChange = () => setHash(() => getHash());

  // Effects
  useEffect(() => {
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  return hash;
}
