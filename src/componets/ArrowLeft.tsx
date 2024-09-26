import  Arrowleft  from "../assets/icon/arrow-left@2x.svg";
import React, { FC } from "react";

interface IconProps {
  color?: string;
  size?: number;
}

const ArrowLeft: FC<IconProps> = ({ color, size }) => {
  return <Arrowleft width={size} height={size} color={color} />;
};

export default ArrowLeft;
