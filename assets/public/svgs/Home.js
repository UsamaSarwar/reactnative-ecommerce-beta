import * as React from "react";
import Svg, { Path } from "react-native-svg";

function Home(props) {
  return (
    <Svg
      width={22}
      height={22}
      viewBox="0 0 22 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M8.157 19.675v-3.071a1.426 1.426 0 011.424-1.419h2.886a1.424 1.424 0 011.433 1.419v3.076a1.225 1.225 0 001.2 1.224h1.924a3.456 3.456 0 003.476-3.438v0-8.724a2.438 2.438 0 00-.962-1.9l-6.58-5.253a3.18 3.18 0 00-3.944 0L2.462 6.847A2.42 2.42 0 001.5 8.751v8.714a3.456 3.456 0 003.473 3.439H6.9a1.235 1.235 0 001.241-1.229v0"
        stroke="#200E32"
        strokeWidth={1.5}
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default Home;
