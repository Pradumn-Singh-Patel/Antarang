import * as React from 'react';
import Svg, { Path, Defs, Pattern, Use, Image } from 'react-native-svg';
function Mask(props) {
  return (
    <Svg
      width={38}
      height={45}
      viewBox="0 0 38 45"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      {...props}
    >
      <Path fill="url(#prefix__pattern0)" d="M0 0h37.559v44.035H0z" />
      <Defs>
        <Pattern id="prefix__pattern0" patternContentUnits="objectBoundingBox" width={1} height={1}>
          <Use xlinkHref="#prefix__image0" transform="matrix(.00385 0 0 .00328 -1.517 -2.397)" />
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
export default Mask;