import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import HotDessert from "./components/HotDessert/HotDessert";
import Banner from "./components/Banner/Banner";
import PopularRecipe from "./components/popularRecipe/PopularRecipe";
import TestiMonial from "./components/TestiMonial/TestiMonial";
import Footer from "./components/Footer/Footer";

export default function App() {
  return (
    <div className="bg-white2 overflow-x-hidden text-dark">
      <div className="relative overflow-hidden">
        <Navbar />
        <Hero />
      </div>
      <HotDessert />
      <Banner />
      <PopularRecipe />
      <TestiMonial/>
      <Footer/>
    </div>
  );
}
