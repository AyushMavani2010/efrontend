"use client";
import React, { FC, ReactNode } from "react";
import Slider from "../../componets/Slider";
import styled from "@emotion/styled";
import GalleryFImage from "../../assets/images/Gallery-Image.png";
import GallerySImage from "../../assets/images/Gallery-Image (1).png";
import GalleryTImage from "../../assets/images/Gallery-Image (2).png";
import GalleryFOImage from "../../assets/images/Gallery-Image (3).png";
import GalleryFFImage from "../../assets/images/Gallery-Image (4).png";
import GallerySIImage from "../../assets/images/Gallery-Image (5).png";
import GallerySEmage from "../../assets/images/Gallery-Image (6).png";
import GalleryEImage from "../../assets/images/Gallery-Image (7).png";
import GalleryNImage from "../../assets/images/Gallery-Image (8).png";
import SliderImage from "../../assets/images/bottom.png";

const Button = styled.button({
  width: "150px",
  height: "50px",
  BgColor: "white",
  borderRadius: "50px",
  color: "black",
  border: "solid black 2px",
});
const RootContainer = styled.div({
  paddingBottom: "100px",
});
const PhotoMain = styled.div({
  paddingTop: "50px",
  flex: 1,
});

const Flex = styled.div({
  display: "flex",
  gap: 50,
  "@media(max-width: 1320px)": {
    gap: 40,
  },
  "@media(max-width: 1140px)": {
    gap: 35,
  },
  "@media(max-width: 960px)": {
    gap: 30,
  },
  "@media(max-width: 720px)": {
    gap: 25,
  },
  "@media(max-width: 540px)": {
    gap: 20,
  },
});

const FooterArea = styled.div({
  textAlign: "center",
  paddingTop: "50px",
  flex: 1,
});
const FooterSlider = styled.div({
  "@media(max-width: 455px)": {
    Width: "100px",
  },
});

const FooterButton = styled.div({
  display: "flex",
  justifyContent: "center",
  padding: "30px 0px 0px 0px ",
});

const FooterText = styled.p(() => ({
  fontSize: "14px",
  fontWeight: 400,
  display: "flex",
  justifyContent: "center",
}));

const Gallery = () => {
  return (
    <RootContainer>
      <Slider />
      <FooterArea>
        <FooterText>Showing 20 of 48 results</FooterText>
        <FooterSlider>
          <hr style={{ minWidth: "200px", maxWidth: "200px" }} />
        </FooterSlider>
        <FooterButton>
          <Button>Shop more</Button>
        </FooterButton>
      </FooterArea>
    </RootContainer>
  );
};

export default Gallery;
