"use client";
import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";
import { useRouter } from "next/navigation";

const Container = styled.div({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100vh",
  backgroundColor: "#f5f5f5",
});

const PaymentForm = styled.div({
  width: "600px",
  padding: "40px",
  backgroundColor: "#fff",
  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
  borderRadius: "8px",
});

const Header = styled.h1({
  fontSize: "1.8rem",
  fontWeight: "bold",
  marginBottom: "20px",
  textAlign: "center",
  color: "#333",
});

const Label = styled.label({
  display: "block",
  fontSize: "1rem",
  marginBottom: "8px",
  color: "#555",
});

const Input = styled.input({
  width: "100%",
  padding: "10px",
  marginBottom: "20px",
  borderRadius: "4px",
  border: "1px solid #ccc",
  fontSize: "1rem",
});

const Button = styled.button({
  width: "100%",
  padding: "12px",
  backgroundColor: "#000",
  color: "#fff",
  fontSize: "1.2rem",
  fontWeight: "bold",
  borderRadius: "4px",
  border: "none",
  cursor: "pointer",
  ":hover": {
    backgroundColor: "#333",
  },
});

const TotalsContainer = styled.div({
  marginTop: "20px",
  padding: "20px",
  backgroundColor: "#f9f9f9",
  border: "1px solid #ddd",
  borderRadius: "8px",
});

const TotalsRow = styled.div({
  display: "flex",
  justifyContent: "space-between",
  fontSize: "1.1rem",
  padding: "10px 0",
});

const TotalsLabel = styled.div({
  color: "#333",
});

const TotalsValue = styled.div({
  fontWeight: "bold",
});

const PaymentPage = () => {
  const [cardNumber, setCardNumber] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvv, setCvv] = useState("");
  const [billingAddress, setBillingAddress] = useState("");
  const [totalPrice, setTotalPrice] = useState(0);
  const router = useRouter();

  useEffect(() => {
    const query = new URLSearchParams(window.location.search);
    const total = query.get("total");
    const userId = query.get("userId");
    if (total) {
      setTotalPrice(Number(total));
    }
  }, []);

  const handlePaymentSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const paymentData = {
      cardNumber,
      expiryDate,
      cvv,
      billingAddress,
      totalPrice,
    };

    try {
      const response = await fetch("http://localhost:4000/payment", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(paymentData),
      });

      if (response.ok) {
        const result = await response.json();
        alert("Payment Successful!");

        const userId = new URLSearchParams(window.location.search).get(
          "userId"
        );

        const deleteCartResponse = await fetch(
          `http://localhost:4000/cart/${userId}`,
          {
            method: "DELETE",
          }
        );

        setCardNumber("");
        setExpiryDate("");
        setCvv("");
        setBillingAddress("");
        setTotalPrice(0);
      } else {
        alert("Payment failed. Please try again.");
      }
    } catch (error) {
      console.error("Error processing payment:", error);
      alert("An error occurred. Please try again later.");
    }
  };

  return (
    <Container>
      <PaymentForm>
        <form onSubmit={handlePaymentSubmit}>
          <Header>Payment Details</Header>

          <Label>Card Number</Label>
          <Input
            type="text"
            value={cardNumber}
            onChange={(e) => setCardNumber(e.target.value)}
            placeholder="Enter card number"
          />

          <Label>Expiry Date</Label>
          <Input
            type="text"
            value={expiryDate}
            onChange={(e) => setExpiryDate(e.target.value)}
            placeholder="MM/YY"
          />

          <Label>CVV</Label>
          <Input
            type="text"
            value={cvv}
            onChange={(e) => setCvv(e.target.value)}
            placeholder="CVV"
          />

          <Label>Billing Address</Label>
          <Input
            type="text"
            value={billingAddress}
            onChange={(e) => setBillingAddress(e.target.value)}
            placeholder="Enter billing address"
          />

          <TotalsContainer>
            <TotalsRow>
              <TotalsLabel>Total Price</TotalsLabel>
              <TotalsValue>₹{totalPrice.toFixed(2)}</TotalsValue>
            </TotalsRow>
          </TotalsContainer>

          <Button type="submit">Pay Now</Button>
        </form>
      </PaymentForm>
    </Container>
  );
};

export default PaymentPage;
