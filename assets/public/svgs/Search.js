import * as React from "react"
import Svg, { Path } from "react-native-svg"

function Search(props) {
  return (
    <Svg
      width={20}
      height={20}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M20 9.4a9.518 9.518 0 01-9.611 9.4 9.7 9.7 0 01-6-2.06l-3.126 3.048-.083.07a.753.753 0 01-.964-.071.713.713 0 010-1.024l3.092-3.014A9.25 9.25 0 01.777 9.4 9.518 9.518 0 0110.389 0 9.518 9.518 0 0120 9.4zm-1.48 0a8.052 8.052 0 00-8.131-7.951A8.052 8.052 0 002.257 9.4a8.052 8.052 0 008.132 7.951A8.052 8.052 0 0018.52 9.4z"
        fill="#B4B4B4"
      />
    </Svg>
  )
}

export default Search;
