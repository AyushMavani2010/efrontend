import styled from "@emotion/styled";
import React, { FC } from "react";
interface GalleryProps {
  name: string;
  image?: any;
  price?: string;
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
  flex:1
}));
const PriceBackGround = styled.button(() => ({
  display: "flex",
  backgroundColor: "rgba(248, 247, 251, 1)",
  borderRadius: "50px",
  fontSize: "22px",
  border: "none",
}));

const GalleryCard: FC<GalleryProps> = ({ name, image, price }) => {
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
        <Color />
      </CardMain>
    </RootContainer>
  );
};

export default GalleryCard;
