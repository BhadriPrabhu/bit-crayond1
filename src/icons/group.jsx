import * as React from "react"
const Group = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={40}
    height={40}
    fill="#30AF89"
    {...props}
  >
    <g fill="#30AF89" fillRule="evenodd" clipPath="url(#a)" clipRule="evenodd"> {/* Changed to red */}
      <path d="M25.556 11.685A10 10 0 0 0 20 10V0A20 20 0 1 1 0 20h10a10 10 0 1 0 15.556-8.315Z" />
      <path d="M10 0A10 10 0 0 1 0 10v10A20 20 0 0 0 20 0H10Z" />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0h40v40H0z" />
      </clipPath>
    </defs>
  </svg>
)
export default Group

