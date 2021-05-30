import * as React from 'react';
import Svg, { Path, Defs, Pattern, Use, Image } from 'react-native-svg';
function RicePackets1(props) {
  return (
    <Svg
      width={66}
      height={101}
      viewBox="0 0 66 101"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      {...props}
    >
      <Path fill="url(#prefix__pattern0)" d="M0 0h65.994v101H0z" />
      <Defs>
        <Pattern id="prefix__pattern0" patternContentUnits="objectBoundingBox" width={1} height={1}>
          <Use xlinkHref="#prefix__image0" transform="matrix(.0016 0 0 .00105 -.277 -.135)" />
        </Pattern>
        <Image
          id="prefix__image0"
          width={2304}
          height={4096}
        />
      </Defs>
    </Svg>
  );
}
export default RicePackets1;