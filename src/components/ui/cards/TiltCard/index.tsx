"use client";
import BaseTilt from "../../Wrappers/BaseTilt";

import type { ReactNode } from "react";

export default function TiltCard(): ReactNode {
  return (
    <BaseTilt className="relative h-96 w-72 rounded-xl">
      <div
        style={{ transform: "translateZ(75px)", transformStyle: "preserve-3d" }}
        className="absolute inset-4 grid place-content-center rounded-xl bg-red-600 shadow-lg"
      >
        <p style={{ transform: "translateZ(50px)" }} className="text-center text-2xl font-bold">
          XD
        </p>
      </div>
    </BaseTilt>
  );
}
