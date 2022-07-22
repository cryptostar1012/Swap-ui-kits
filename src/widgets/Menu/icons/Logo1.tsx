import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

interface LogoProps extends SvgProps {
  isDark: boolean;
}

const Logo1: React.FC<LogoProps> = ({ isDark, ...props }) => {
  // const textColor = isDark ? "#FFFFFF" : "#000000";
  return (
    <>
      <Svg viewBox="0 0 56 56" {...props}>
        <g clipPath="url(#clip0)">
          <path d="M42.8285 51.1608C50.7281 46.2417 55.9864 37.6152 55.9864 27.777C55.9864 12.4624 43.2646 0.0556641 27.5623 0.0556641C19.4931 0.0556641 12.1993 3.32698 7.0379 8.58531H29.7432C39.3875 8.58531 47.2387 16.2426 47.2387 25.6446C47.2387 33.423 41.8592 40.0141 34.5169 42.0496L42.8285 51.1608ZM16.0521 34.3196H29.7916C34.4926 34.3196 38.297 30.4182 38.3455 25.6446C38.3455 20.8466 34.5168 16.9453 29.8158 16.9453H2.11874C0.737517 20.2893 -0.0136719 23.9483 -0.0136719 27.8012C-0.0136719 43.4066 12.3688 56.0556 27.6592 56.0556C29.937 56.0556 32.1663 55.7648 34.2745 55.2317L16.0521 34.3196Z" fill="url(#paint0_linear)" />
        </g>
        <defs>
          <linearGradient id="paint0_linear" x1="27.9864" y1="0.0556641" x2="27.9864" y2="56.0556" gradientUnits="userSpaceOnUse">
            <stop stopColor="#5F47EE" />
            <stop offset="1" stopColor="#89FFE3" />
          </linearGradient>
          <clipPath id="clip0">
            <rect width="56" height="56" fill="white" />
          </clipPath>
        </defs>
      </Svg>
    </>
  );
};

export default Logo1;