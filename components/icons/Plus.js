import * as React from "react";

function SvgPlus(props) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M6.805 9.195H2.667V6.784h4.138V2.667h2.411v4.117h4.117v2.41H9.216v4.14h-2.41v-4.14z"
        fill="#FF000F"
      />
    </svg>
  );
}

export default SvgPlus;
