import Svg, { Path } from "react-native-svg";

const BackIcon = () => {
  return (
    <Svg
      width={10}
      height={16}
      viewBox="0 0 10 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        d="M8.5 14.904l-7-7 7-7"
        stroke="#200E32"
        strokeWidth={1.5}
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export default BackIcon;
