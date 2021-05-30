import * as React from 'react';
import Svg, { Path, Defs, Pattern, Use, Image } from 'react-native-svg';
function Flour(props) {
  return (
    <Svg
      width={50}
      height={39}
      viewBox="0 0 50 39"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      {...props}
    >
      <Path fill="url(#prefix__pattern0)" d="M0 0h50v38.235H0z" />
      <Defs>
        <Pattern id="prefix__pattern0" patternContentUnits="objectBoundingBox" width={1} height={1}>
          <Use xlinkHref="#prefix__image0" transform="matrix(.00328 0 0 .0043 -4.691 -3.5)" />
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
export default Flour;