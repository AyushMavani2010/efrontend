import CartTrolly from "../assets/icon/cart.svg"; // Ensure this is correct
import React, { FC } from "react";

interface IconProps {
  color?: string;
  size?: number;
}

const Cart: FC<IconProps> = ({ color, size }) => {
  return <CartTrolly width={size} height={size} fill={color} />; // Use fill for SVG colors
};

export default Cart;
