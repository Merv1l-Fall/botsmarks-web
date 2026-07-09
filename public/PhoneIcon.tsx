import * as React from "react"
import { SVGProps } from "react"
const PhoneIcon = ({ width = 16, height = 20, fill, ...props }: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    fill="none"
    {...props}
  >
    <path
      stroke={fill || "#000"}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2.5}
      d="M1.352 5.21a16.03 16.03 0 0 0 11.546 11.546c2.141.545 3.96-1.296 3.96-3.506v-1c0-.552-.449-.995-.999-1.05a10 10 0 0 1-2.656-.639l-1.519 1.52a12.05 12.05 0 0 1-5.657-5.657l1.52-1.52a10 10 0 0 1-.64-2.656c-.054-.55-.497-.998-1.049-.998h-1c-2.208 0-4.05 1.819-3.505 3.96"
    />
  </svg>
)
export default PhoneIcon
