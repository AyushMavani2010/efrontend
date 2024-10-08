"use client";
import React, { useState } from "react";
import styled from "@emotion/styled";
import ArrowRight from "./ArrowIcon";
import Cart from "./Cart";
import MenuIcon from "./Menu";
import Button from "./button/Button";
import { useRouter } from "next/navigation";
import { useCart } from "../componets/CartContext"; 

const Trolly = styled.button({
  width: "50px",
  height: "50px",
  backgroundColor: "rgba(248, 247, 251, 1)",
  borderRadius: "50%",
  marginRight: "20px",
  border: "none",
  "@media (max-width: 768px)": {
    display: "none",
  },
});

const HeaderButton = styled.div({
  "@media (max-width: 768px)": {
    display: "none",
  },
});

const MenuIconWrapper = styled.div({
  display: "none",
  "@media (max-width: 768px)": {
    display: "block",
  },
});

const Flex = styled.div({
  display: "flex",
  alignItems: "center",
});

const DropdownMenu = styled.ul({
  position: "absolute",
  top: "0px",
  left: "50%",
  transform: "translateX(-50%)",
  backgroundColor: "white",
  listStyle: "none",
  padding: "10px 20px",
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  borderRadius: "10px",
  display: "flex",
  flexDirection: "column",
  gap: "10px",
  "@media (min-width: 768px)": {
    display: "none",
  },
});

const StyledLink = styled.a({
    textDecoration: "none",
    color: "black",
  });
  
const ClientHeader = () => {
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const { cartItems } = useCart();
  const CartLength = cartItems.length;
  const router = useRouter();

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };    

  return (
    <Flex>
      <Trolly onClick={() => router.push("/cart")}>
        <Cart size={20} />
        {CartLength}
      </Trolly>
      <HeaderButton>
        <Button
          width="150px"
          height="50px"
          BgColor="rgb(124, 113, 223 )"
          borderRadius="50px"
          icon={<ArrowRight size={20} color="white" />}
          name="Get started"
          color="white"
          border="none"
        />
      </HeaderButton>
      <MenuIconWrapper onClick={toggleDropdown}>
        <MenuIcon size={30} color="black" />
      </MenuIconWrapper>
      {dropdownVisible && (
        <DropdownMenu>
          <li>
            <StyledLink href="/">Home</StyledLink>
          </li>
          <li>
            <StyledLink href="/shop">Shop</StyledLink>
          </li>
          <li>
            <StyledLink href="#">Categories</StyledLink>
          </li>
          <li>
            <StyledLink href="#">Blog</StyledLink>
          </li>
        </DropdownMenu>
      )}
    </Flex>
  );
};

export default ClientHeader;
