import type { ReactElement } from "react";
import type { IGenericIconSvg } from "@/types";

export default function GraphqlIcon({ size = 24, className }: IGenericIconSvg): ReactElement {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} className={className} height={size} viewBox="0 0 256 256">
      <g fill="none">
        <rect width="256" height="256" fill="#242938" rx="60" />
        <path fill="#E535AB" d="m47.862 176.192l7.342 4.239l81.793-141.665l-7.342-4.239l-81.793 141.665Z" />
        <path fill="#E535AB" d="M209.766 164.875H46.181v8.478h163.585v-8.478Z" />
        <path
          fill="#E535AB"
          d="m49.418 169.637l81.823 47.242l4.239-7.342l-81.823-47.242l-4.24 7.342Zm71.08-123.125l81.823 47.242l4.239-7.342l-81.823-47.242l-4.239 7.342Z"
        />
        <path fill="#E535AB" d="m49.44 86.38l4.24 7.342l81.823-47.242l-4.239-7.342L49.44 86.38Z" />
        <path
          fill="#E535AB"
          d="m119.02 38.767l81.792 141.665l7.342-4.239l-81.792-141.665l-7.342 4.24ZM61.145 80.758h-8.478v94.484h8.478V80.758Z"
        />
        <path fill="#E535AB" d="M203.331 80.758h-8.478v94.484h8.478V80.758Z" />
        <path fill="#E535AB" d="m126.095 206.877l3.703 6.414l71.164-41.088l-3.703-6.413l-71.164 41.087Z" />
        <path
          fill="#E535AB"
          d="M214.567 178c-4.903 8.529-15.833 11.44-24.362 6.537c-8.529-4.903-11.44-15.832-6.537-24.361c4.903-8.53 15.833-11.441 24.362-6.538c8.58 4.954 11.491 15.833 6.537 24.362ZM72.279 95.824c-4.903 8.529-15.833 11.441-24.362 6.538C39.388 97.459 36.477 86.529 41.38 78c4.903-8.53 15.832-11.44 24.362-6.537c8.529 4.954 11.44 15.832 6.537 24.361ZM41.431 178c-4.903-8.529-1.992-19.408 6.537-24.362c8.53-4.903 19.408-1.992 24.362 6.538c4.903 8.529 1.992 19.407-6.537 24.361c-8.58 4.903-19.459 1.992-24.362-6.537Zm142.288-82.176c-4.903-8.529-1.992-19.407 6.537-24.361c8.53-4.903 19.408-1.992 24.362 6.537c4.903 8.53 1.992 19.408-6.537 24.362c-8.529 4.903-19.459 1.991-24.362-6.538ZM127.999 228c-9.857 0-17.824-7.967-17.824-17.824c0-9.857 7.967-17.825 17.824-17.825c9.857 0 17.824 7.968 17.824 17.825c0 9.806-7.967 17.824-17.824 17.824Zm0-164.351c-9.857 0-17.824-7.968-17.824-17.825S118.142 28 127.999 28c9.857 0 17.824 7.967 17.824 17.824c0 9.857-7.967 17.825-17.824 17.825Z"
        />
      </g>
    </svg>
  );
}
