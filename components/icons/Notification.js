import * as React from "react";

function SvgNotification(props) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 22 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#Notification_svg__clip0_1:2371)">
        <path
          d="M8.825 15.75v.448a2.177 2.177 0 002.179 2.177v0a2.178 2.178 0 002.178-2.177v-.447"
          stroke="#000"
          strokeWidth={1.5}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M16.212 15.75a1.796 1.796 0 001.796-1.796c0-.504-.2-.987-.556-1.344l-1.194-1.192V7.876a5.25 5.25 0 00-5.25-5.25v0a5.25 5.25 0 00-5.25 5.25v3.542L4.565 12.61c-.356.357-.556.84-.557 1.344v0a1.796 1.796 0 001.797 1.797h10.407z"
          stroke="#000"
          strokeWidth={1.5}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx={19.757} cy={1.75} r={1.75} fill="#FF000F" />
      </g>
      <defs>
        <clipPath id="Notification_svg__clip0_1:2371">
          <path
            fill="currentColor"
            transform="translate(.504)"
            d="M0 0h21v21H0z"
          />
        </clipPath>
      </defs>
    </svg>
  );
}

export default SvgNotification;
