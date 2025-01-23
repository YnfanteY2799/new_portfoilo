"use client";

import { Button, type ButtonProps } from "@heroui/react";

import type { ReactNode } from "react";

export default function FixedButton(props: ButtonProps): ReactNode {
  return <Button {...props} />;
}
