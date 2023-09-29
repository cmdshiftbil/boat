import * as React from "react";

function CubeSide(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={108}
      height={124}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M106.332 92.218V31.407L53.665 1 1 31.407v60.81l52.664 30.41 52.668-30.41z"
        fill="#1A1E1F"
      />
      <path d="M1 92.22l52.665-30.407V1" fill="#1A1E1F" />
      <path
        d="M1 92.22l52.665-30.407V1"
        stroke="#AA8455"
        strokeWidth={1.695}
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M106.331 92.219L53.665 61.812z" fill="#1A1E1F" />
      <path
        d="M106.331 92.219L53.665 61.812"
        stroke="#AA8455"
        strokeWidth={1.695}
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M53.665 122.626l52.666-30.407V31.406L53.665 1 1 31.406V92.22l52.665 30.407z"
        fill="#1A1E1F"
        stroke="#AA8455"
        strokeWidth={1.695}
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M1 31.406l52.665 30.406 52.666-30.406" fill="#1A1E1F" />
      <path
        d="M1 31.406l52.665 30.406 52.666-30.406"
        stroke="#AA8455"
        strokeWidth={1.695}
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M53.666 122.625V61.812z" fill="#1A1E1F" />
      <path
        d="M53.666 122.625V61.812"
        stroke="#AA8455"
        strokeWidth={1.695}
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default CubeSide;
