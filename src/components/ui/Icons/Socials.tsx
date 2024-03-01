import { CodewarsIcon, DevIcon, FreelanceIcon, LeetCodeIcon, MalIcon, UpWorkIcon } from "@/components";
import { GithubLogo } from "@phosphor-icons/react/dist/ssr";

import type { ReactNode } from "react";
import type { ICommonIconProps } from "@/types";

export default function SocialIcons({ name, size, className }: ICommonIconProps): ReactNode {
  switch (name.toLocaleLowerCase()) {
    case "codewars":
      return <CodewarsIcon className={className} size={size} />;
    case "devtols":
      return <DevIcon className={className} size={size} />;
    case "freelance":
      return <FreelanceIcon className={className} size={size} />;
    case "leetcode":
      return <LeetCodeIcon className={className} size={size} />;
    case "mal":
      return <MalIcon className={className} size={size} />;
    case "upwork":
      return <UpWorkIcon className={className} size={size} />;
    case "github":
      return <GithubLogo className={className} size={size ?? 24} />;
    default:
      return <></>;
  }
}
