import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Featured from "../components/Featured";
import LatestNews from "../components/LatestNews";
import Perks from "../components/Perks";
import HomeAdd from "../components/HomeAdd";
import ProductSection from "../components/ProductSection";
import Hero from "../components/Hero";
import FlashSaleItems from "../components/FlashSaleItems";

const Home = ({ products }) => {
  return (
    <div>
      <Navbar active="Home" />
      <Hero />
      <FlashSaleItems products={products.slice(0, 3)} />

      <ProductSection title="Best Seller" list={products.slice(5, 9)} />
      <HomeAdd />
      <Perks />
      <LatestNews />
      <Featured />
      <Footer />
    </div>
  );
};

export default Home;
