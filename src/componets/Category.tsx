"use client";
import styled from "@emotion/styled";
import React, { FC } from "react";
import Button from "./button/Button";
import ArrowRight from "./ArrowIcon";
import Cart from "../../src/app/home/Cart";
import { useRouter } from 'next/navigation'

interface CategoriesProps {
  name?: string;
  image?: any;
  width?: string;
  style?: string;
}

const RootContainer = styled.div({
  display: "flex",
  backgroundColor: "rgba(243, 244, 247, 1)",
  justifyContent: "space-between",
  alignItems: "center",
  "@media(max-width: 960px)": {
    justifyContent: "center",
  },
});

const Heading = styled.p(() => ({
  fontSize: "2vw",
  fontWeight: 600,
  "@media(max-width:1050px)": {
    fontSize: "20px",
  },
  "@media(max-width:768px)": {
    fontSize: "15px",
  },
}));

const RootText = styled.div({
  marginLeft: "100px",
  "@media(max-width: 1240px)": {
    marginLeft: "45px",
  },
  "@media(max-width: 1050px)": {
    marginLeft: "35px",
  },
  "@media(max-width: 960px)": {
    marginLeft: "25px",
    textAlign: "center",
  },
  "@media(max-width: 768px)": {
    marginLeft: "20px",
  },
});

const RootImage = styled.div(() => ({
  marginLeft: "100px",
  "@media(max-width: 960px)": {
    marginLeft: "0",
    marginTop: "20px",
  },
}));

const Image = styled.img(() => ({
  "@media(max-width: 1700px)": {
    width: "100%",
  },
}));

const Category: FC<CategoriesProps> = ({ name, image, width, style }) => {

  const router = useRouter()
  return (
    <RootContainer>
      <RootText>
        <div style={{ justifyContent: "space-between" }}>
          <Heading>{name}</Heading>
          <div>
            <Button
              width="150px"
              height="50px"
              BgColor="rgba(243, 244, 247, 1)"
              borderRadius="50px"
              icon={<ArrowRight size={20} />}
              name="Shop now"
              color="rgba(104, 106, 116, 1)"
              border="solid black 2px"
              onClick={() => router.push("/shop")}
            />
          </div>
        </div>
      </RootText>
      <RootImage>
        <Image src={image.src} width={width} />
      </RootImage>
    </RootContainer>
  );
};

export default Category;
