import * as React from "react";

function SvgDisable(props) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M0 12C0 5.373 5.373 0 12 0s12 5.373 12 12-5.373 12-12 12S0 18.627 0 12z"
        fill="#FFF2F3"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8 8l8 8-8-8z"
        fill="#EEE"
      />
      <path
        d="M8 8l8 8M16 8l-8 8"
        stroke="#FF000F"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default SvgDisable;
