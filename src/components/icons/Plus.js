import Svg, { Path } from "react-native-svg";
import { counterButtonSize } from "../../utils/Constants";

const Plus = ({ size }) => {
  const length = size - 16;
  return (
    <Svg
      width={length}
      height={length}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11 5v6H5v2h6v6h2v-6h6v-2h-6V5h-2z"
        fill="#9B9B9B"
      />
    </Svg>
  );
};

export default Plus;
