import React from "react";
import BannerPng from "../../assets/imgs/banner.png";
import { motion } from "framer-motion";
import { slideUp } from "../Hero/Hero";

export default function Banner() {
  return (
    <div className="container py-24">
      <div className="grid grid-cols-1  md:grid-cols-2 gap-14 place-items-center">
        {/* img section  */}
        <div className="relative">
          <motion.img
            initial={{ opacity: 0, x: -100, y: 100 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5, scale: { duration: 0.5 } }}
            whileHover={{ scale: 1.2, rotate: 15, x: 50, y: -50 }}
            src={BannerPng}
            alt="banner"
            className="lg:max-w-[350px] img-shadow w-full relative z-10 img-shadow"
          />
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="absolute w-[320px] h-[320px] md:w-[400px] md:h-[400px] rounded-full bg-lightYellow top-[50%] right-[50%] transform translate-x-[50%] -translate-y-[50%]"
          ></motion.div>
        </div>
        {/* text content section  */}
        <div className="lg:max-w-[400px] space-y-5">
          <motion.h1
            variants={slideUp(1)}
            initial="hidden"
            whileInView="show"
            className="text-6xl uppercase font-leagueGothic font-semibold"
          >
            the best yummi food in the town
          </motion.h1>
          <motion.p variants={slideUp(1.3)} initial="hidden" whileInView="show">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.{" "}
          </motion.p>
          <motion.button
            variants={slideUp(1.6)}
            initial="hidden"
            whileInView="show"
            className="btn-primary"
          >
            order now
          </motion.button>
        </div>
      </div>
    </div>
  );
}
