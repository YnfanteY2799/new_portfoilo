"use client";
import { motion } from "framer-motion";
import { spawnFromRight } from "@/utils";
import Image from "next/image";

import type { ReactElement } from "react";
import type { IServiceCardProps } from "@/types";

export default function ServiceCard({ title, icon, click }: IServiceCardProps): ReactElement {
  return (
    <motion.div variants={spawnFromRight} className="w-full bg-primary p-[1px] rounded-[20px]">
      <motion.div
        animate={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-base-200 rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
      >
        <Image src={`/doodle/${icon}.svg`} alt={title} className="object-contain w-auto h-auto" width={120} height={120} />
        <h3 className="text-[20px] font-bold text-center hover:cursor-pointer hover:underline" onClick={() => click(title)}>
          {title}
        </h3>
      </motion.div>
    </motion.div>
  );
}
