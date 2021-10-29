import * as React from "react";

function SvgMenu(props) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 23 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <rect x={0.08} width={22.08} height={2.462} rx={1.231} fill="#C4C4C4" />
      <rect
        x={0.08}
        y={6.769}
        width={22.08}
        height={2.462}
        rx={1.231}
        fill="#C4C4C4"
      />
      <rect
        x={0.08}
        y={13.539}
        width={22.08}
        height={2.462}
        rx={1.231}
        fill="#C4C4C4"
      />
    </svg>
  );
}

export default SvgMenu;
