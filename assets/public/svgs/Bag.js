import * as React from "react"
import Svg, { Path } from "react-native-svg"

function Bag(props) {
  return (
    <Svg
      width={21}
      height={22}
      viewBox="0 0 21 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M14.514 20.5H6.166c-3.065 0-5.419-1.108-4.751-5.565l.778-6.041c.408-2.225 1.831-3.076 3.076-3.076h10.178c1.263 0 2.6.915 3.076 3.076l.778 6.041c.567 3.954-1.721 5.565-4.787 5.565zM14.651 5.598a4.32 4.32 0 00-4.32-4.32 4.32 4.32 0 00-4.339 4.32M13.297 10.102h-.046M7.466 10.102H7.42"
        stroke="#B4B4B4"
        strokeWidth={1.5}
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

export default Bag;
