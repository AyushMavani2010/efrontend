import React from "react";
// import Header from "../home/Header";
import Hero from "./Hero";
import ProductListing from "./ProductListing";
import Product from "./Product";
import Slider from "./Slider";
import Header from "@/src/componets/Header";
import Footer from "@/src/componets/Footer";

const shop = () => {
  return (
    <>
      <Hero />
      <Slider />
      <Product />
      {/* <ProductListing /> */}
    </>
  );
};

export default shop;
