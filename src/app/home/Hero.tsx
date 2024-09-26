"use client";
import React from "react";
import styled from "@emotion/styled";
import HeroImage from "../../assets/images/image.png";
import Image from "next/image";

const RootContainer = styled.div({
  padding: "100px 0px",
});
const HeroTextMain = styled.div({
  textAlign: "center",
});
const HeroFirstText = styled.p({
  fontSize: "18px",
  fontWeight: 500,
  display: "flex",
  flex: 1,
  justifyContent: "center",
  "@media (max-width: 768px)": {
    fontSize: "18px",
  },
});
const HeroSecText = styled.p({
  fontSize: "49px",
  fontWeight: 700,

  "@media (max-width: 425px)": {
    fontSize: "25px",
  },
  "@media (max-width: 768px)": {
    fontSize: "25px",
  },
});
const HeroThirdText = styled.p({
  fontSize: "20px",
  fontWeight: 400,
  "@media (max-width: 425px)": {
    fontSize: "16px",
  },
  "@media (max-width: 768px)": {
    fontSize: "16px",
  },
  width: "auto",
});
const HeroMainImage = styled.div({
  display: "flex",
  flex: 1,
});
const Hero = () => {
  return (
    <RootContainer>
      <HeroTextMain>
        <HeroFirstText>FURNITURE STORE</HeroFirstText>
        <HeroSecText>
          Discover the Artistry of Modern <br />
          Contemporary Furniture
        </HeroSecText>
        <HeroThirdText>
          Experience the elegance and functionality of cutting-edge design where
          luxury meets innovation in every piece for <br /> ultimate relaxation
        </HeroThirdText>
      </HeroTextMain>
      <HeroMainImage>
        <Image
          src={HeroImage}
          alt=""
          style={{ width: "100%", height: "auto" }}
        />
      </HeroMainImage>
    </RootContainer>
  );
};

export default Hero;
