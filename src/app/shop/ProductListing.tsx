"use client";

import React, { useRef } from "react";
import styled from "@emotion/styled";
import OwlCarousel from "react-owl-carousel2";
import "react-owl-carousel2/lib/styles.css";
import ArrowLeft from "../../componets/ArrowLeft";
import ArrowRight from "../../componets/ArrowIcon";
import { ProductData } from "../../database/index";
import GalleryCard from "../../componets/GalleryCard";

const RootContainer = styled.div({
  paddingBottom: "100px",
  position: "relative",
});

const HeaderContainer = styled.div({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  marginBottom: "20px",
  position: "relative",
  paddingBottom: "30px",
});

const CategoriesHeading = styled.p({
  fontSize: "39px",
  fontWeight: 600,
  margin: 0,
  "@media(max-width: 540px)": {
    fontSize: "29px",
  },
});

const Button = styled.button({
  width: "46px",
  height: "46px",
  backgroundColor: "white",
  borderRadius: "50px",
  color: "black",
  border: "solid black 2px",
});

const options = {
  margin: 50,
  responsiveClass: true,
  nav: false,
  dots: false,
  loop: true,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 2,
    },
    1000: {
      items: 3,
    },
    1200: {
      items: 4,
    },
    1820: {
      items: 5,
    },
  },
};

const ProductListing = () => {
  const carouselRef = useRef<any>(null);

  const next = () => {
    if (carouselRef.current) {
      carouselRef.current.next();
    }
  };

  const prev = () => {
    if (carouselRef.current) {
      carouselRef.current.prev();
    }
  };

  return (
    <RootContainer>
      <HeaderContainer>
        <CategoriesHeading>People Also Viewed</CategoriesHeading>
        <div className="custom-nav-container">
          <Button className="owl-prev" onClick={prev}>
            <ArrowLeft size={20} />
          </Button>
          <Button className="owl-next" onClick={next}>
            <ArrowRight size={20} />
          </Button>
        </div>
      </HeaderContainer>
      <OwlCarousel options={options} ref={carouselRef}>
        {ProductData.map((item: any, index: any) => (
          <div className="item" key={index}>
            <GalleryCard
              image={item.image}
              name={item.name}
              price={item.price}
            />
          </div>
        ))}
      </OwlCarousel>
    </RootContainer>
  );
};

export default ProductListing;
