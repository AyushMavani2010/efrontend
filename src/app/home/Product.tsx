"use client";
import styled from "@emotion/styled";
import GalleryCard from "../../componets/GalleryCard";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";
import { ProductData } from "@/src/database";

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

  // Fetch data from backend
  useEffect(() => {
    axios
      .get("http://localhost:5000/product")
      .then(function (response) {
        setData(response.data.data);
      })
      .catch(function (err) {
        console.log(err);
      });
  }, []);

  return (
    <RootContainer>
      <CategoriesHeading>Top Products</CategoriesHeading>
      <div>
        <Flex>
          {data.map((item: any) => {
            // Prepend the server URL to the image path
            const imageUrl = `http://localhost:5000/${item.image}`;
            return (
              <div key={item._id}>
                <h2 className="font-bold text-base sm:text-xl my-2">
                  {item.name}
                </h2>
                <p className="font-medium text-xs sm:text-base w-full">
                  {item.email}
                </p>
                <p className="md:mt-5 text-xs sm:text-base">{item.city}</p>
                <p className="font-bold text-lg">{item.state}</p>
                <Image
                  src={imageUrl}
                  alt={item.name}
                  width={100}
                  height={100}
                />
              </div>
            );
          })}
        </Flex>
      </div>
      <div>
        <Flex>
          {ProductData.map((item: any, index: any) => (
            <GalleryCard
              key={index}
              image={item.image}
              name={item.name}
              price={item.price}
            />
          ))}
        </Flex>
        u
      </div>

      <FooterArea>
        <FooterText>
          Showing {data.length} of {data.length} results
        </FooterText>
        <hr style={{ minWidth: "200px", maxWidth: "200px" }} />
        <FooterButton>
          <Button>Shop more</Button>
        </FooterButton>
      </FooterArea>
    </RootContainer>
  );
};

export default Product;
