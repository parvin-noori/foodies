import React from "react";
import Leaf from "../../assets/imgs/leaf.png";
import Spoon from "../../assets/imgs/spoon.png";
import { IoCartOutline } from "react-icons/io5";
import FoodPng from "../../assets/imgs/food.png";
import Banana from "../../assets/imgs/banana2.png";
import { motion } from "framer-motion";

const slideUp = (delay) => {
  return {
    hidden: {
      y: "100%",
      opacity: 0,
    },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        delay: delay,
      },
    },
  };
};

export default function Hero() {
  return (
    <main>
      <div className="container min-h-[600px] flex justify-center relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 place-items-center justify-between">
          {/* text content */}
          <div className=" mt-16 md:mt-0 space-y-3">
            <motion.h1
              variants={slideUp(0.5)}
              initial="hidden"
              whileInView="show"
              className="uppercase text-5xl  lg:text-7xl xl:text-8xl relative text-transparent text-outline font-bold"
            >
              yummi
              <img
                src={Leaf}
                alt="leaf"
                className="w-[50px] absolute right-0 top-0 md:right-[100px]"
              />
            </motion.h1>

            <motion.h1
              variants={slideUp(1)}
              initial="hidden"
              whileInView="show"
              className="uppercase text-5xl  lg:text-7xl xl:text-8xl font-bold"
            >
              Breakfast
            </motion.h1>
            <motion.p
              variants={slideUp(1.5)}
              initial="hidden"
              whileInView="show"
              className="text-sm"
            >
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </motion.p>
            <motion.button
              variants={slideUp(2)}
              initial="hidden"
              whileInView="show"
              className="btn-primary inline-block !mt-10"
            >
              <IoCartOutline className="me-2 inline" />
              order now
            </motion.button>
          </div>
          {/* img content  */}
          <div className="relative">
            <motion.img
              initial={{ opacity: 0, rotate: 20, x: 200, y: 100 }}
              whileInView={{ opacity: 1, rotate: 0, x: 0, y: 0 }}
              transition={{ duration: 0.8 }}
              src={FoodPng}
              alt="food"
              className="w-[450px] img-shadow"
            />
            <motion.img
              src={Spoon}
              initial={{ opacity: 0, rotate: 120, x: 200, y: 100 }}
              whileInView={{ opacity: 1, rotate: 75, x: 0, y: 0 }}
              transition={{ duration: 0.8 }}
              alt="spoon"
              className="w-[350px] absolute rotate-[75deg] -bottom-[120px] -left-[50px] img-shdow"
            />
            <motion.img
              src={Banana}
              initial={{ opacity: 0, rotate: 20, x: 200, y: 100 }}
              whileInView={{ opacity: 1, rotate: 0, x: 0, y: 0 }}
              transition={{ duration: 0.8 }}
              alt="banana"
              className="w-[400px] absolute -top-[30px] md:-right-[160px] -right-[130px] img-shadow"
            />
          </div>
        </div>
      </div>
      {/* background yellow  */}
      <motion.div
        initial={{ rotate: 60, y: 100, x: 200 }}
        whileInView={{ rotate: 40, opacity: 1, x: 0, y: 0 }}
        className="w-[2500px] h-[2500px] bg-lightYellow absolute rounded-3xl top-[-30%] left-[70%] z-0"
      ></motion.div>
    </main>
  );
}
