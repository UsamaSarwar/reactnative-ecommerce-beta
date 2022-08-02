import * as React from "react";
import Svg, { G, Circle, Path, Defs } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: filter */

function Add(props) {
  return (
    <Svg
      width={44}
      height={44}
      viewBox="0 0 44 44"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G filter="url(#filter0_d_442_1908)">
        <Circle cx={22} cy={18} r={18} fill="#000DAE" />
      </G>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M21 11v6h-6v2h6v6h2v-6h6v-2h-6v-6h-2z"
        fill="#fff"
      />
      <Defs></Defs>
    </Svg>
  );
}

export default Add;
