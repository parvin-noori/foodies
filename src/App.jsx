import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";

export default function App() {
  return (
    <div className="bg-white2 overflow-x-hidden">
      <div className="relative overflow-hidden">
        <Navbar />
        <Hero />
      </div>
    </div>
  );
}
