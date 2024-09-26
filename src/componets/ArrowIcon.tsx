import ArrowRight from "../assets/icon/arrow-right.svg";
import React, { FC } from "react";

interface IconProps {
  color?: string;
  size?: number;
}

const ArrowIcon: FC<IconProps> = ({ color, size }) => {
  return <ArrowRight width={size} height={size} color={color} />;
};

export default ArrowIcon;
