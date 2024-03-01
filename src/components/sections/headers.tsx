"use client";
import { CaretRight } from "@phosphor-icons/react";
import { TextVariants } from "@/utils";
import { motion } from "framer-motion";
import Link from "next/link";

import type { ISectionHeadProps } from "@/types";
import type { ReactNode } from "react";

export default function SectionHeader({ Head, SubHead, MoreDetails }: ISectionHeadProps): ReactNode {
  return (
    <motion.div variants={TextVariants}>
      <p className="sm:text-[18px] text-[14px] text-primary text-xl uppercase tracking-wider font-local">
        {SubHead}
      </p>
      <div className="flex flex-row">
        <h2 className="font-black md:text-[60px] sm:text-[50px] text-[30px] text-5xl z-0 flex font-local">
          {Head}
          {MoreDetails !== undefined && (
            <Link href={MoreDetails} className="flex pl-[15px] pt-2">
              <CaretRight width={60} height={40} />
            </Link>
          )}
        </h2>
      </div>
    </motion.div>
  );
}
