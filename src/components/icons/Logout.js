import Svg, { Path } from "react-native-svg";

const Logout = (props) => {
  return (
    <Svg
      width={21}
      height={21}
      viewBox="0 0 21 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M13.016 6.293V5.36a3.685 3.685 0 00-3.685-3.685H4.456A3.685 3.685 0 00.772 5.36v11.13a3.685 3.685 0 003.684 3.685h4.885a3.675 3.675 0 003.675-3.674v-.943M19.809 10.925H7.768M16.881 8.01l2.928 2.915-2.928 2.916"
        stroke="#200E32"
        strokeWidth={1.5}
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export default Logout;
