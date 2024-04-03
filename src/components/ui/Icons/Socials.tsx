import { InstagramLogo, LinkedinLogo } from "@phosphor-icons/react/dist/ssr";
import {
  DevIcon,
  MalIcon,
  GithubIcon,
  UpWorkIcon,
  TwitterIcon,
  LeetCodeIcon,
  CodewarsIcon,
  FreelanceIcon,
} from "@/components";

import type { ReactNode } from "react";
import type { ICommonIconProps } from "@/types";

export default function SocialIcons({ name = "", size, className }: ICommonIconProps): ReactNode {
  switch (name.toLocaleLowerCase()) {
    case "codewars":
      return <CodewarsIcon className={className} size={size} />;
    case "instagram":
      return <InstagramLogo className={className} size={size ?? 24} />;
    case "linkedin":
      return <LinkedinLogo className={className} size={size ?? 24} />;
    case "devtols":
      return <DevIcon className={className} size={size} />;
    case "freelance":
      return <FreelanceIcon className={className} size={size} />;
    case "leetcode":
      return <LeetCodeIcon className={className} size={size} />;
    case "mal":
    case "myanimelist":
      return <MalIcon className={className} size={size} />;
    case "upwork":
      return <UpWorkIcon className={className} size={size} />;
    case "github":
      return <GithubIcon className={className} size={size} />;
    case "twitter":
      return <TwitterIcon className={className} size={size} />;
    default:
      return <></>;
  }
}
