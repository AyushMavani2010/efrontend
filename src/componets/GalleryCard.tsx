import React, { FC } from "react";
import styled from "@emotion/styled";
import axios from "axios";
import Cart from "./Cart";

interface GalleryProps {
  name: string;
  image?: any;
  price?: string;
  id?: string;
}

const RootContainer = styled.div(() => ({
  display: "flex",
  flex: 1,
  gap: 50,
}));

const ImageBackGround = styled.div(() => ({
  display: "flex",
  backgroundColor: "rgba(243, 244, 247, 1)",
  flex: 1,
}));

const HeadingMain = styled.div(() => ({
  display: "flex",
  justifyContent: "space-between",
}));

const CardMain = styled.div({
  flex: 1,
});

const Color = styled.div(() => ({
  backgroundColor: "rgba(213, 133, 68, 1)",
  borderRadius: "50%",
  width: "16px",
  height: "16px",
  border: "1px solid black",
  gap: "5px",
}));

const HeadingText = styled.p(() => ({
  fontSize: "22px",
  fontWeight: 500,
}));

const HeadingPrice = styled.p(() => ({
  fontSize: "22px",
  fontWeight: 500,
}));

const Image = styled.img(() => ({
  flex: 1,
}));

const PriceBackGround = styled.button(() => ({
  display: "flex",
  backgroundColor: "rgba(248, 247, 251, 1)",
  borderRadius: "50px",
  fontSize: "22px",
  border: "none",
}));

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

const GalleryCard: FC<GalleryProps> = ({ name, image, price, id }) => {
  const addToCart = async () => {
    try {
      const response = await axios.post("http://localhost:4000/cart", {
        id,
        name,
        image: image.src,
        price,
      });
      window.location.reload();
      console.log("Added to cart:", response.data);
    } catch (error) {
      console.error("Error adding to cart:", error);
    }
  };

  return (
    <RootContainer>
      <CardMain>
        <ImageBackGround>
          <Image src={image.src}></Image>
        </ImageBackGround>
        <HeadingMain>
          <HeadingText>{name}</HeadingText>
          <div>
            <HeadingPrice>
              <PriceBackGround>{price}</PriceBackGround>
            </HeadingPrice>
          </div>
        </HeadingMain>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <Color />
          <button
            onClick={addToCart}
            style={{ border: "none", backgroundColor: "white" }}
          >
            <Cart size={20} />
          </button>
        </div>
      </CardMain>
    </RootContainer>
  );
};

export default GalleryCard;
