import React from "react";
import ProductDetails from "../../../components/products/productDetails";
import Footer from "../../../components/footer/footer";
import Nav from "../../../components/nav";
import Header from "../../../components/header";
import Breadcrum from "../../../components/products/breadcrum";

const Details = () => {
  return (
    <>
      <div className="bg-white pb-0 sm:pb-0 lg:pb-0 mx-auto max-w-screen-2xl px-4 md:px-8">
        <Header />
      </div>
      {/* <Breadcrum/> */}

      <ProductDetails />
      <Footer />
    </>
  );
};

export default Details;
