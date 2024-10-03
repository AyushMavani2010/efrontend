"use client";
import styled from "@emotion/styled";
import React, { useEffect, useState } from "react";
import axios from "axios";
import GalleryCard from "../../componets/GalleryCard";
const RootContainer = styled.div({
  paddingBottom: "100px",
});
const CategoriesHeading = styled.p({
  fontSize: "39px",
  fontWeight: 600,
  "@media(max-width: 540px)": {
    fontSize: "29px",
  },
});

const Flex = styled.div({
  display: "flex",
  gap: 50,
  padding: "0px 0px 50px 0px",
  flexWrap: "wrap",
});

const FooterArea = styled.div({
  textAlign: "center",
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
const Button = styled.button({
  width: "150px",
  height: "50px",
  BgColor: "white",
  borderRadius: "50px",
  color: "black",
  border: "solid black 2px",
});

const FooterImage = styled.img(() => ({}));

const Product = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:4000/product")
      .then(function (response) {
        setData(response.data.data);
      })
      .catch(function (err) {
        console.log(err);
      });
    }, []);
    console.log("object", data);
  return (
    <RootContainer>
      <CategoriesHeading>Top Products</CategoriesHeading>

      <Flex>
        {data.map((item: any) => {
          const imageUrl = `http://localhost:4000/${item.image}`;
          return (
            <GalleryCard
              key={item._id}
              name={item.name}
              image={{ src: imageUrl }}
              price={item.price}
              id={item._id}
            />
          );
        })}
      </Flex>

      <FooterArea>
        <FooterText>Showing 20 of 48 results</FooterText>
        <hr style={{ minWidth: "200px", maxWidth: "200px" }} />

        <FooterButton>
          <Button>Shop more</Button>
        </FooterButton>
      </FooterArea>
    </RootContainer>
  );
};

export default Product;
