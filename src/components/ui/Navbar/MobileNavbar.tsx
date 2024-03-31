"use client";
import { IMovileNavbarProps } from "@/types";
import type { ReactNode } from "react";

export default function MobileNavbar({ options }: IMovileNavbarProps): ReactNode {
  return <div className="md:hidden flex gap-2">MobileNavbar</div>;
}
