import React, { FC } from "react";
import SearchIcon from "../assets/icon/search.svg";

interface IconProps {
  color?: string;
  size?: number;
}
const Search: FC<IconProps> = ({ color, size }) => {
  return <SearchIcon width={size} height={size} color={color} />;
};

export default Search;
