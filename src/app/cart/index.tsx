"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "@emotion/styled";

// Styling for the container
const Container = styled.div({
  maxWidth: "1000px",
  margin: "0 auto",
  padding: "20px",
});

// Styling for the cart header
const Header = styled.h1({
  textAlign: "center",
  fontSize: "2.5rem",
  fontWeight: "bold",
  marginBottom: "20px",
  color: "#333",
});

// Styling for the table
const Table = styled.table({
  width: "100%",
  borderCollapse: "collapse",
  marginTop: "20px",
});

// Styling for the table header cells
const TableHeader = styled.th({
  borderBottom: "2px solid #ddd",
  padding: "15px",
  textAlign: "left",
  fontSize: "1.2rem",
  color: "#333",
});

// Styling for the table rows
const TableRow = styled.tr({
  borderBottom: "1px solid #ddd",
});

// Styling for the table cells
const TableCell = styled.td({
  padding: "15px",
  fontSize: "1rem",
  textAlign: "left",
});

// Styling for the small image
const SmallImage = styled.img({
  width: "50px",
  height: "50px",
  objectFit: "cover",
  borderRadius: "8px",
});

// Styling for the remove button
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

const Page = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:2000/cart")
      .then((res) => {
        console.log("Cart Data:", res.data.data);
        setData(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleDelete = (item: any) => {
    axios
      .delete(`http://localhost:2000/cart/${item._id}`)
      .then(function (response) {
        console.log("delresponse", response.data.data);
        window.location.reload();
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  const total = 0;
  //   for (let i = 0; i <= data.length; i++) {

  //   }

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
          </TableRow>
        </thead>
        <tbody>
          {data.map((item: any) => (
            <TableRow key={item._id}>
              <TableCell>
                <SmallImage src={item.image} alt={item.name} />
              </TableCell>
              <TableCell>{item.name}</TableCell>
              <TableCell>${item.price}</TableCell>
              <TableCell>{item.quantity}</TableCell>
              <TableCell>
                <RemoveButton onClick={() => handleDelete(item)}>
                  Remove
                </RemoveButton>
              </TableCell>
            </TableRow>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default Page;
