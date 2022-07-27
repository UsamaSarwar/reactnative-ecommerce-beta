import * as React from "react";
import Svg, { Mask, Rect, G } from "react-native-svg";

function Chip(props) {
  return (
    <Svg
      width={32}
      height={24}
      viewBox="0 0 32 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Mask
        id="a"
        style={{
          maskType: "alpha",
        }}
        maskUnits="userSpaceOnUse"
        x={0}
        y={0}
        width={32}
        height={24}
      >
        <Rect width={32} height={24} rx={8} fill="#FFBA49" />
      </Mask>
      <G mask="url(#a)">
        <Rect width={32} height={24} rx={8} fill="#FFBA49" />
        <Rect
          x={-6}
          y={2}
          width={20}
          height={7}
          rx={2.5}
          stroke="#D29634"
          strokeWidth={0.3}
        />
        <Rect
          x={-6}
          y={9}
          width={20}
          height={7}
          rx={2.5}
          stroke="#D29634"
          strokeWidth={0.3}
        />
        <Rect
          x={-6}
          y={16}
          width={20}
          height={7}
          rx={2.5}
          stroke="#D29634"
          strokeWidth={0.3}
        />
        <Rect
          x={19}
          y={2}
          width={20}
          height={7}
          rx={2.5}
          stroke="#D29634"
          strokeWidth={0.3}
        />
        <Rect
          x={19}
          y={9}
          width={20}
          height={7}
          rx={2.5}
          stroke="#D29634"
          strokeWidth={0.3}
        />
        <Rect
          x={19}
          y={16}
          width={20}
          height={7}
          rx={2.5}
          stroke="#D29634"
          strokeWidth={0.3}
        />
      </G>
    </Svg>
  );
}

export default Chip;
