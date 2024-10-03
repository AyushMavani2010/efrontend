import React, { FC, useState } from "react";
import styled from "@emotion/styled";
import axios from "axios";
import { useSnackbar } from "@mui/base/useSnackbar";
import { ClickAwayListener } from "@mui/base/ClickAwayListener";
import { css, keyframes, styled as muiStyled } from "@mui/system";
import Cart from "./Cart";

interface GalleryProps {
  name: string;
  image?: any;
  price?: string;
  id: string;
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

const snackbarInRight = keyframes`
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0);
  }
`;

const TriggerButton = muiStyled("button")(
  ({ theme }) => `
  font-family: 'IBM Plex Sans', sans-serif;
  font-weight: 600;
  font-size: 0.875rem;
  line-height: 1.5;
  padding: 8px 16px;
  border-radius: 8px;
  color: white;
  transition: all 150ms ease;
  cursor: pointer;
  background: ${theme.palette.mode === "dark" ? "#000" : "#fff"};
  border: 1px solid ${theme.palette.mode === "dark" ? "#333" : "#ccc"};
  `
);

const CustomSnackbar = muiStyled("div")(
  ({ theme }) => css`
    position: fixed;
    z-index: 5500;
    display: flex;
    right: 16px;
    bottom: 16px;
    left: auto;
    justify-content: space-between;
    max-width: 560px;
    min-width: 300px;
    background-color: ${theme.palette.mode === "dark" ? "#000" : "#fff"};
    border-radius: 8px;
    padding: 0.75rem;
    color: ${theme.palette.mode === "dark" ? "#fff" : "#000"};
    font-family: "IBM Plex Sans", sans-serif;
    font-weight: 600;
    animation: ${snackbarInRight} 200ms;
    transition: transform 0.2s ease-out;
  `
);

const GalleryCard: FC<GalleryProps> = ({ name, image, price, id }) => {
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const { getRootProps, onClickAway } = useSnackbar({
    onClose: handleClose,
    open,
    autoHideDuration: 5000,
  });

  const addToCart = async () => {
    console.log("name", name);
    console.log("name", price);
    console.log("id", id);
    try {
      const response = await axios.post("http://localhost:4000/cart", {
        name,
        image: image.src,
        price,
        p_id: id,
      });
      console.log("Added to cart:", response.data);
      setOpen(true);
    } catch (error) {
      console.error("Error adding to cart:", error);
    }
  };

  return (
    <>
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

      {open ? (
        <ClickAwayListener onClickAway={onClickAway}>
          <CustomSnackbar {...getRootProps()}>
            Item added to cart successfully!
          </CustomSnackbar>
        </ClickAwayListener>
      ) : null}
    </>
  );
};

export default GalleryCard;
