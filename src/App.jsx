import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import HotDessert from "./components/HotDessert/HotDessert";

export default function App() {
  return (
    <div className="bg-white2 overflow-x-hidden text-dark">
      <div className="relative overflow-hidden">
        <Navbar />
        <Hero />
      </div>
      <HotDessert/>
    </div>
  );
}
