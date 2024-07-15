import React from "react";
import Logo from "../../assets/imgs/logo.png";
import { IoCartOutline } from "react-icons/io5";
import { animate, motion } from "framer-motion";

const NavMenu = [
  {
    id: 1,
    title: "Home",
    path: "/",
    delay: 0.1,
  },
  {
    id: 2,
    title: "About",
    path: "/about",
    delay: 0.2,
  },
  {
    id: 3,
    title: "Menu",
    path: "/menu",
    delay: 0.3,
  },
  {
    id: 4,
    title: "Delivery",
    path: "/delivery",
    delay: 0.4,
  },
  {
    id: 5,
    title: "Contact us",
    path: "/contact",
    delay: 0.5,
  },
];

const slideDown = (delay) => {
  return {
    initial: {
      y: "-100%",
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        delay: delay,
      },
    },
  };
};

export default function Navbar() {
  return (
    <nav>
      <div className="container flex items-center font-leagueGothic justify-between">
        {/* logo section */}
        <motion.img
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          src={Logo}
          alt="logo"
          className="w-[140px]"
        />

        {/* menu section */}
        <div className="md:block hidden">
          <ul className="flex gap-8 text-2xl p-2">
            {NavMenu.map((item) => (
              <motion.li
                variants={slideDown(item.delay)}
                initial="initial"
                animate="animate"
                key={item.id}
                className="nav-menu"
                data-delay={item.delay}
              >
                <a href={item.path}>{item.title}</a>
              </motion.li>
            ))}
          </ul>
        </div>

        {/* button secion */}
        <motion.div variants={slideDown(1)} initial="initial" animate="animate">
          <button className="h-[40px] w-[40px] grid place-items-center rounded-full bg-dark text-white">
            <IoCartOutline />
          </button>
        </motion.div>
      </div>
    </nav>
  );
}
