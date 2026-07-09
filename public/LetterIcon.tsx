import * as React from "react"
import { SVGProps } from "react"
const LetterIcon = ({ width = 20, height = 20, fill, ...props }: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
	// viewBox="0 0 20 16"
    fill="none"
    {...props}
  >
    <path
      fill={fill || "#000"}
      d="M2 16c-.55 0-1.02-.196-1.413-.588A1.926 1.926 0 0 1 0 14V2C0 1.45.196.98.588.587A1.926 1.926 0 0 1 2 0h16c.55 0 1.02.196 1.413.588C19.803.979 20 1.45 20 2v12c0 .55-.196 1.02-.587 1.412A1.926 1.926 0 0 1 18 16H2Zm8-7L2 4v10h16V4l-8 5Zm0-2 8-5H2l8 5ZM2 4V2v12V4Z"
    />
  </svg>
)
export default LetterIcon
