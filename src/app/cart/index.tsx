"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "@emotion/styled";

const Container = styled.div({
  maxWidth: "1000px",
  margin: "0 auto",
  padding: "20px",
});

const Header = styled.h1({
  textAlign: "center",
  fontSize: "2.5rem",
  fontWeight: "bold",
  marginBottom: "20px",
  color: "#333",
});

const Table = styled.table({
  width: "100%",
  borderCollapse: "collapse",
  marginTop: "20px",
});

const TableHeader = styled.th({
  borderBottom: "2px solid #ddd",
  padding: "15px",
  textAlign: "left",
  fontSize: "1.2rem",
  color: "#333",
});

const TableRow = styled.tr({
  borderBottom: "1px solid #ddd",
});

const TableCell = styled.td({
  padding: "15px",
  fontSize: "1rem",
  textAlign: "left",
});

const SmallImage = styled.img({
  width: "50px",
  height: "50px",
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

const CartPage = () => {
  const [data, setData] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    fetchCartData();
  }, []);

  const fetchCartData = () => {
    axios
      .get("http://localhost:4000/cart")
      .then((res) => {
        const cartData = res.data.data;
        setData(cartData);

        const total = cartData.reduce((sum: number, item: any) => {
          const price = parseFloat(item.price);
          return sum + price * item.quantity;
        }, 0);
        setTotalPrice(total);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const increaseQuantity = (item: any) => {
    const newQuantity = item.quantity + 1;
    updateQuantity(item._id, newQuantity);
  };

  const decreaseQuantity = (item: any) => {
    if (item.quantity > 1) {
      const newQuantity = item.quantity - 1;
      updateQuantity(item._id, newQuantity);
    }
  };

  const updateQuantity = (id: string, newQuantity: number) => {
    axios
      .put(`http://localhost:4000/cart/${id}`, { quantity: newQuantity })
      .then(() => {
        fetchCartData(); 
      })
      .catch((err) => console.log(err));
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

  return (
    <Container>
      <Header>Cart</Header>
      <Table>
        <thead>
          <TableRow>
            <TableHeader>Image</TableHeader>
            <TableHeader>Name</TableHeader>
            <TableHeader>Price</TableHeader>
            <TableHeader>Quantity</TableHeader>
            <TableHeader>Action</TableHeader>
            <TableHeader>Total</TableHeader>
          </TableRow>
        </thead>
        <tbody>
          {data.map((item: any) => (
            <TableRow key={item._id}>
              <TableCell>
                <SmallImage src={item.image} alt={item.name} />
              </TableCell>
              <TableCell>{item.name}</TableCell>
              <TableCell>{item.price}</TableCell>
              <TableCell>
                <QuantityButton onClick={() => decreaseQuantity(item)}>
                  -
                </QuantityButton>
                {item.quantity}
                <QuantityButton onClick={() => increaseQuantity(item)}>
                  +
                </QuantityButton>
              </TableCell>
              <TableCell>
                <RemoveButton onClick={() => handleDelete(item)}>
                  Remove
                </RemoveButton>
              </TableCell>
              <TableCell>{(item.price * item.quantity).toFixed(2)}</TableCell>
            </TableRow>
          ))}
        </tbody>
      </Table>

      <h2>Total Price: {totalPrice.toFixed(2)}</h2>
    </Container>
  );
};

export default CartPage;
