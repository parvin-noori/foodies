import React from "react";
import BannerPng from "../../assets/imgs/banner.png";
import { motion } from "framer-motion";
import { slideUp } from "../Hero/Hero";

export default function TestiMonial() {
  return (
    <section>
      <div className="container py-24">
        <div className="grid grid-cols-1  md:grid-cols-2 gap-14 place-items-center">
          {/* text content section  */}
          <div className="lg:max-w-[400px] space-y-5">
            <motion.p
              variants={slideUp(0.4)}
              initial="hidden"
              whileInView="show"
              className="font-serif text-xl relative z-10"
            >
              "Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book."
            </motion.p>
            <div className="flex items-center gap-3">
              <motion.img
                variants={slideUp(0.8)}
                initial="initial"
                whileInView="show"
                src="https://picsum.photos/id/237/200/300"
                alt="avtar"
                className="w-14 h-14 rounded-full object-cover"
              ></motion.img>
              <motion.div
                variants={slideUp(1.2)}
                initial="hidden"
                whileInView="show"
              >
                <h2 className="text-xl font-bold">John Doe</h2>
                <p className="text-sm">Designation</p>
              </motion.div>
            </div>
          </div>
          {/* img section  */}
          <div className="relative">
            <motion.img
              initial={{ opacity: 0, x: -100, y: 100 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              transition={{
                duration: 0.6,
                delay: 0.5,
                scale: { duration: 0.5 },
              }}
              whileHover={{ scale: 1.2, rotate: 15, x: 50, y: -50 }}
              src={BannerPng}
              alt="banner"
              className="lg:max-w-[280px] img-shadow w-full relative z-10 img-shadow"
            />
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="absolute w-[320px] h-[320px]  rounded-full bg-lightYellow top-[50%] right-[50%] transform translate-x-[50%] -translate-y-[50%]"
            ></motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
