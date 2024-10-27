import * as React from "react"
const Filtericons = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={16}
    fill="none"
    {...props}
  >
    <g clipPath="url(#a)">
      <path
        fill="#02111A"
        d="M1.111 0C.505 0 0 .505 0 1.111v1.373c0 1.021.47 1.987 1.27 2.619l.003.001L5.778 8.62v6.715a.667.667 0 0 0 1.054.542l3.11-2.222a.668.668 0 0 0 .28-.543V8.62l4.505-3.515.002-.001A3.335 3.335 0 0 0 16 2.484V1.111C16 .505 15.495 0 14.889 0H1.11Zm.222 1.333h13.334v1.151c0 .613-.28 1.191-.762 1.57l-4.76 3.713a.667.667 0 0 0-.256.527v4.474l-1.778 1.27V8.294a.667.667 0 0 0-.257-.527L2.095 4.055a1.997 1.997 0 0 1-.762-1.57V1.332Z"
      />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0h16v16H0z" />
      </clipPath>
    </defs>
  </svg>
)
export default Filtericons
