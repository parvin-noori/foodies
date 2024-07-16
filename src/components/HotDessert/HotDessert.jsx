import React from "react";
import { slideUp } from "../Hero/Hero";
import { motion } from "framer-motion";
import Food1 from "../../assets/imgs/food.png";
import Food2 from "../../assets/imgs/food2-plate.png";
import Food3 from "../../assets/imgs/banner.png";

const HotDessertData = [
  {
    id: 1,
    title: "Hot cake",
    img: Food1,
    delay: 0.4,
    price: "$5.99",
  },
  {
    id: 2,
    title: "Hot cake",
    img: Food2,
    delay: 0.8,
    price: "$5.99",
  },
  {
    id: 3,
    title: "Hot cake",
    img: Food3,
    delay: 1.2,
    price: "$5.99",
  },
];

export default function HotDessert() {
  return (
    <div className="container py-12">
      {/* heading secion  */}
      <motion.h3
        variants={slideUp(0)}
        initial="hidden"
        whileInView="show"
        className="font-semibold text-darkGreen uppercase py-8 text-2xl"
      >
        hot dessert
      </motion.h3>

      {/* grid section  */}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {HotDessertData.map((item) => (
          <motion.div
          variants={slideUp(item.delay)}
          initial="hidden"
          whileInView="show"
            key={item.id}
            className="flex items-center gap-3 bg-white/50 shadow-md p-3 group"
          >
            <img
              src={item.img}
              alt={item.title}
              className="w-24 img-shadow roundned-full group-hover:scale-125 transition-all duration-700 group-hover:rotate-[50deg]"
            />
            <div>
              <h3 className="font-semibold text-xl">{item.title}</h3>
              <p className="font-semibold text-xl text-yellow-500">
                {item.price}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
