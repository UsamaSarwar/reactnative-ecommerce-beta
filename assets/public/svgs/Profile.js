import * as React from "react";
import Svg, { Path } from "react-native-svg";

function Profile(props) {
  return (
    <Svg
      width={16}
      height={21}
      viewBox="0 0 16 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M0 17.575c0-2.722 3.685-3.4 8-3.4 4.339 0 8 .7 8 3.425 0 2.725-3.685 3.4-8 3.4-4.338 0-8-.7-8-3.425zM2.706 6.291A5.294 5.294 0 118 11.583a5.275 5.275 0 01-5.294-5.292z"
        fill="#B4B4B4"
      />
    </Svg>
  );
}

export default Profile;
