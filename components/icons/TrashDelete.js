import * as React from "react";

function SvgTrashDelete(props) {
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
        d="M15.541 21H8.46a2.25 2.25 0 01-2.244-2.077L5.25 6.375h13.5l-.965 12.548A2.25 2.25 0 0115.54 21v0zM20 6.375H4M9.188 3h5.624a1.125 1.125 0 011.126 1.125v2.25H8.061v-2.25A1.125 1.125 0 019.188 3v0z"
        stroke="#000"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13.969 10.875V16.5M10.031 10.875V16.5"
        stroke="#FF000F"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default SvgTrashDelete;
