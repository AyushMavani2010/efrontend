"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "@emotion/styled";
import { useRouter } from "next/navigation";

// Styled components for layout
const Container = styled.div({
  display: "flex",
  justifyContent: "space-between",
  maxWidth: "1200px",
  margin: "0 auto",
  padding: "20px",
});

const LeftSection = styled.div({
  width: "65%",
});

const RightSection = styled.div({
  width: "30%",
  padding: "20px",
  border: "1px solid #ddd",
  borderRadius: "8px",
  backgroundColor: "#f9f9f9",
});

const Header = styled.h1({
  fontSize: "2rem",
  fontWeight: "bold",
  marginBottom: "20px",
  color: "#333",
});

const Table = styled.table({
  width: "100%",
  borderCollapse: "collapse",
});

const TableHeader = styled.th({
  borderBottom: "2px solid #ddd",
  padding: "15px",
  textAlign: "left",
  fontSize: "1.1rem",
  color: "#333",
});

const TableRow = styled.tr({
  borderBottom: "1px solid #ddd",
});

const TableCell = styled.td({
  padding: "15px",
  fontSize: "1rem",
});

const SmallImage = styled.img({
  width: "80px",
  height: "80px",
  objectFit: "cover",
  borderRadius: "8px",
});

const RemoveButton = styled.button({
  padding: "8px 12px",
  fontSize: "1rem",
  borderRadius: "4px",
  backgroundColor: "#ff5252",
  color: "#fff",
  border: "none",
  cursor: "pointer",
  ":hover": {
    backgroundColor: "#ff3333",
  },
});

const QuantityButton = styled.button({
  padding: "5px",
  fontSize: "1.2rem",
  margin: "0 5px",
  cursor: "pointer",
  backgroundColor: "#f1f1f1",
  border: "1px solid #ccc",
});

const TotalsContainer = styled.div({
  marginTop: "20px",
});

const TotalsRow = styled.div({
  display: "flex",
  justifyContent: "space-between",
  padding: "10px 0",
  fontSize: "1rem",
});

const TotalsLabel = styled.div({
  color: "#333",
});

const TotalsValue = styled.div({
  fontWeight: "bold",
});

const ProceedButton = styled.button({
  marginTop: "20px",
  padding: "12px",
  width: "100%",
  fontSize: "1.2rem",
  fontWeight: "bold",
  color: "#fff",
  backgroundColor: "#000",
  border: "none",
  cursor: "pointer",
  ":hover": {
    backgroundColor: "#333",
  },
});

const CartPage = () => {
  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    fetchCartData();
  }, []);

  const fetchCartData = () => {
    axios
      .get("http://localhost:4000/cart")
      .then((res) => {
        const cartData = res.data.data;

        const groupedItems = cartData.reduce((acc: any, item: any) => {
          const existingItem = acc.find((i: any) => i.p_id === item.p_id);

          if (existingItem) {
            existingItem.quantity += 1;
          } else {
            acc.push({ ...item, quantity: 1 });
          }

          return acc;
        }, []);

        setData(groupedItems);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleDelete = (item: any) => {
    axios
      .delete(`http://localhost:4000/cart/${item._id}`)
      .then(() => {
        fetchCartData();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleIncrement = (itemId: string) => {
    setData((prevData) =>
      prevData.map((item) =>
        item._id === itemId ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const handleDecrement = (itemId: string) => {
    setData((prevData) =>
      prevData.map((item) =>
        item._id === itemId && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const calculateTotalPrice = () => {
    return data.reduce((sum, item) => sum + item.price * item.quantity, 0);
  };

  const router = useRouter();

  return (
    <Container>
      {/* Left Section: Shopping Cart */}
      <LeftSection>
        <Header>Shopping cart</Header>
        <Table>
          <thead>
            <TableRow>
              <TableHeader>Product</TableHeader>
              <TableHeader>Price</TableHeader>
              <TableHeader>Quantity</TableHeader>
              <TableHeader>Subtotal</TableHeader>
            </TableRow>
          </thead>
          <tbody>
            {data.map((item) => (
              <TableRow key={item._id}>
                <TableCell>
                  <SmallImage src={item.image} alt={item.name} />
                  {item.name}
                </TableCell>
                <TableCell>₹{Number(item.price || 0).toFixed(2)}</TableCell>
                <TableCell>
                  <QuantityButton onClick={() => handleDecrement(item._id)}>
                    -
                  </QuantityButton>
                  {item.quantity}
                  <QuantityButton onClick={() => handleIncrement(item._id)}>
                    +
                  </QuantityButton>
                </TableCell>
                <TableCell>
                  ₹{(Number(item.price || 0) * item.quantity).toFixed(2)}
                </TableCell>
              </TableRow>
            ))}
          </tbody>
        </Table>
      </LeftSection>

      {/* Right Section: Cart Totals */}
      <RightSection>
        <Header>Cart totals</Header>
        <TotalsContainer>
          <TotalsRow>
            <TotalsLabel>Subtotal</TotalsLabel>
            <TotalsValue>₹{calculateTotalPrice().toFixed(2)}</TotalsValue>
          </TotalsRow>
          <TotalsRow>
            <TotalsLabel>Shipping</TotalsLabel>
            <TotalsValue>Free shipping</TotalsValue>
          </TotalsRow>
          <TotalsRow>
            <TotalsLabel>Total</TotalsLabel>
            <TotalsValue>₹{calculateTotalPrice().toFixed(2)}</TotalsValue>
          </TotalsRow>
          <ProceedButton onClick={() => router.push("/payment")}>
            Proceed to checkout
          </ProceedButton>
        </TotalsContainer>
      </RightSection>
    </Container>
  );
};

export default CartPage;
