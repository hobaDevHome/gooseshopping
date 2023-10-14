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
import { products } from "../data";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <FlashSaleItems />
      <ProductSection title="Best Seller" list={products} />
      <HomeAdd />
      <Perks />
      <LatestNews />
      <Featured />
      <Footer />
    </div>
  );
};

export default Home;
