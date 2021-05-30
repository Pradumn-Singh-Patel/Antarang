import * as React from 'react';
import Svg, { Path, Defs, Pattern, Use, Image } from 'react-native-svg';
function RicePackets2(props) {
  return (
    <Svg
      width={69}
      height={87}
      viewBox="0 0 69 87"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      {...props}
    >
      <Path fill="url(#prefix__pattern0)" d="M0 0h69v86.159H0z" />
      <Defs>
        <Pattern id="prefix__pattern0" patternContentUnits="objectBoundingBox" width={1} height={1}>
          <Use xlinkHref="#prefix__image0" transform="matrix(.00106 0 0 .00085 -.186 -1.232)" />
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
export default RicePackets2;