import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Featured from "../components/Featured";
import LatestNews from "../components/LatestNews";
import Perks from "../components/Perks";
import HomeAdd from "../components/HomeAdd";
import BestSeller from "../components/BestSeller";
import Hero from "../components/Hero";
import FlashSaleItems from "../components/FlashSaleItems";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <FlashSaleItems />
      <BestSeller />
      <HomeAdd />
      <Perks />
      <LatestNews />
      <Featured />
      <Footer />
    </div>
  );
};

export default Home;
