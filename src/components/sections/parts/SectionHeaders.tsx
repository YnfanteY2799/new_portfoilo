"use client";
import { CaretRight } from "@phosphor-icons/react";
import { TextVariants, cn } from "@/utils";
import { motion } from "framer-motion";
import Link from "next/link";

import type { ISectionHeadProps } from "@/types";
import type { ReactNode } from "react";

export default function SectionHeader({ head, subHead, moreDetails }: ISectionHeadProps): ReactNode {
  return (
    <motion.div variants={TextVariants}>
      <p className="sm:text-[18px] text-[14px] text-primary text-xl uppercase tracking-wider font-local">{subHead}</p>
      <div className={`flex flex-row ${moreDetails ? "hover:underline" : ""}`}>
        <h2
          className={cn(
            "font-black md:text-[55px] sm:text-[50px] text-[30px] text-5xl z-0 flex font-local",
            moreDetails ? "hover:underline" : ""
          )}
        >
          {head}
          {moreDetails && (
            <Link href={moreDetails} className="flex pl-4 pt-2">
              <CaretRight width={60} height={40} />
            </Link>
          )}
        </h2>
      </div>
    </motion.div>
  );
}
