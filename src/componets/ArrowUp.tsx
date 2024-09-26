import ArrowRight from "../assets/icon/arrow-up.svg";
import React, { FC } from "react";

interface IconProps {
  color?: string;
  size?: number;
}

const ArrowUp: FC<IconProps> = ({ color, size }) => {
  return <ArrowRight width={size} height={size} color={color} />;
};

export default ArrowUp;
