import Svg, { Path } from "react-native-svg";

const Minus = ({ size }) => {
  const length = size - 16;
  return (
    <Svg
      width={length}
      height={length}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path fill="#9B9B9B" d="M5 12H19V14H5z" />
    </Svg>
  );
};

export default Minus;
