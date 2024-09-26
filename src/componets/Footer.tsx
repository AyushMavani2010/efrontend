"use client";
import React from "react";
import styled from "@emotion/styled";
import logo from "../assets/images/Oasis (1).png";
import ArrowIcon from "./ArrowIcon";
import ArrowUp from "./ArrowUp";
import Image from "next/image";

const RootContainer = styled.div({
  padding: " 70px",
  backgroundColor: "rgba(16, 16, 16, 1)",
  "@media (max-width:1040px)": {
    padding: "50px",
  },
  "@media (max-width:768px)": {
    padding: "40px",
  },
});
const Button = styled.button({
  width: "56px",
  height: "56px",
  BgColor: "white",
  borderRadius: "50px",
  color: "black",
  border: "solid black 2px",
});
const Root = styled.div({
  display: "flex",
  justifyContent: "space-between",
  "@media (max-width:1040px)": {
    flexDirection: "column",
  },
});
const FirstSection = styled.div({
  display: "flex  ",
  justifyContent: "space-between",
  flexDirection: "column",
  "@media (max-width:1040px)": {
    flexDirection: "column",
    justifyContent: "space-between",
  },
});
const SecondSection = styled.div({
  display: "flex  ",
  flexDirection: "column",
  justifyContent: "end",
});
const FirstSectionText = styled.div({
  display: "flex",
  gap: 10,
  color: "white",
  "@media (max-width:1040px)": {
    marginTop: "50px",
    width: "auto",
  },
});
const FirstSectionLogo = styled.div({});
const LastHeading = styled.div({
  "@media (max-width:1040px)": {
    display: "flex",
    justifyContent: "end",
    marginTop: "50px",
  },
});
const LastSection = styled.div({
  display: "flex",
  justifyContent: "space-between",
  flexDirection: "column",
});
const Page = styled.a({
  color: "white",
  textDecoration: "none",
  alignItems: "flex-end",
});
const Heading = styled.p(() => ({
  fontSize: "13px",
  fontWeight: 400,
  color: "rgba(255, 255, 255, 1)",
}));
const Text = styled.p(() => ({
  fontSize: "20px",
  fontWeight: 400,
  color: "rgba(255, 255, 255, 1)",
}));
const UppButton = styled.a({});

const Footer = () => {
  return (
    <RootContainer>
      <Root>
        <FirstSection>
          <FirstSectionLogo>
            <Image src={logo} color="white" alt="" />
          </FirstSectionLogo>
          <FirstSectionText>
            <Page href="#">Home</Page>/<Page href="#">Blog</Page>/
            <Page href="#">Sale</Page>/<Page href="#">About us</Page>
          </FirstSectionText>
        </FirstSection>
        <SecondSection>
          <div style={{ marginTop: "50PX" }}>
            <Heading>Contact Us</Heading>
            <Text>+1 999 888-76-54</Text>
          </div>
          <div>
            <Heading style={{ fontSize: "14px" }}>Email</Heading>
            <Text style={{ fontSize: "14px" }}>hello@logoipsum.com</Text>
          </div>
        </SecondSection>
        <SecondSection>
          <div>
            <Heading>Address</Heading>
            <Text style={{ fontSize: "14px" }}>
              2118 Thornridge Cir. Syracuse, Connecticut 35624
            </Text>
          </div>
          <div>
            <Heading>Opening hours</Heading>
            <Text>9am—6pm</Text>
          </div>
        </SecondSection>
        <LastSection>
          <div style={{ justifyContent: "end", display: "flex" }}>
            <Page href="#">
              <Button>
                <ArrowUp color="black" size={25} />
              </Button>
            </Page>
          </div>
          <LastHeading>
            <Heading>© 2023 — Copyright</Heading>
          </LastHeading>
        </LastSection>
      </Root>
    </RootContainer>
  );
};

export default Footer;
