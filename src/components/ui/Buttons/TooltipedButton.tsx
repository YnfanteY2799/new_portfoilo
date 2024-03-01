"use client";

import { Button, Tooltip } from "@nextui-org/react";
import { SocialsIcons } from "@/components";
import Link from "next/link";

import type { ITooltipButton } from "@/types";
import type { ReactNode } from "react";

export default function TooltipedButton({ link, name, position, ...btn }: ITooltipButton): ReactNode {
  return (
    <Tooltip placement={position} content={name} color={btn.color}>
      <Link href={link ?? ""} rel="noopener noreferrer" target="_blank">
        <Button {...btn}>
          <SocialsIcons name={name ?? ""} />
        </Button>
      </Link>
    </Tooltip>
  );
}
