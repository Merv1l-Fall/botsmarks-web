import * as React from "react"
import { SVGProps } from "react"
const Logo = ({ width = 61, height = 36, fill, ...props }: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    viewBox="15 0 5 36"
    fill="none"
    {...props}
  >
    <path
      fill={fill || "#000"}
      fillRule="evenodd"
      stroke="#000"
      d="M.5 34V.5H3L17.5 5h5L35 .5h2.5l.5 35H17V35l3-.5s4.5-1.5 4-6.5-4.5-5.5-4-6 4-2 4-4.5-3.5-4.5-3.5-4.5-11-.5-11.5 0-3 22.5-3 22.5H.5V34Zm34.5-.5h-4.5s1.5-2.5 1.5-6-4-6.5-4-6.5 3-2 4-6-5.5-6.5-5.5-6.5H5v25H3v-27h32v27Z"
      clipRule="evenodd"
    />
    <circle cx={14.5} cy={28} r={4.5} fill={fill || "#000"} />
    <ellipse cx={16} cy={18} fill={fill || "#000"} rx={3} ry={2.5} />
  </svg>
)
export default Logo
