import MenuIcon  from "../assets/icon/menu.svg";
import React, { FC } from "react";

interface IconProps {
  color?: string;
  size?: number;
}

const Menu: FC<IconProps> = ({ color, size }) => {
  return <MenuIcon width={size} height={size} color={color} />;
};

export default Menu;
