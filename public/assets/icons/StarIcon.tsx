import React from "react";
import type { SVGProps } from "react";

export function StarIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="currentColor"
        d="m12.001.63l2.903 8.35l8.839.181l-7.045 5.341l2.56 8.462L12 17.914l-7.256 5.05l2.56-8.462L.26 9.161l8.839-.18z"
      ></path>
    </svg>
  );
}
