"use client";
import { type ReactNode } from "react";

export default function ComponentName(): ReactNode {
  return (
    <div
      style={{
        transform: "translateZ(75px)",
        transformStyle: "preserve-3d",
      }}
      className="absolute inset-4 grid place-content-center rounded-xl bg-white shadow-lg"
    >
      <p
        style={{
          transform: "translateZ(50px)",
        }}
        className="text-center text-2xl font-bold"
      ></p>
    </div>
  );
}
