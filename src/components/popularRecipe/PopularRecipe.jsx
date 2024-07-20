import React, { useState } from "react";
import { slideUp } from "../Hero/Hero";
import { motion } from "framer-motion";
import Food1 from "../../assets/imgs/food.png";
import Food2 from "../../assets/imgs/food2-plate.png";
import Food3 from "../../assets/imgs/banner.png";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, decreaseCart, removeFromCart } from "../../stores/cart";
import { IoTrashOutline } from "react-icons/io5";

const PopularRecipeData = [
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

export default function PopularRecipe() {

  const dispatch = useDispatch();

  const cartItems = useSelector((state) => state.cartItems);

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  const handleRemoveItem = (product) => {
    dispatch(removeFromCart(product));
  };

  const handleDecreaseItem = (product) => {
    dispatch(decreaseCart(product));
  };
  return (
    <section>
      <div className="container py-24">
        {/* heading section  */}
        <motion.h3
          variants={slideUp(0.5)}
          initial="hidden"
          whileInView={"show"}
          className="font-leagueGothic text-4xl text-center font-semibold uppercase py-8"
        >
          our popular recipe
        </motion.h3>
        {/* grid section  */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 place-items-center">
          {PopularRecipeData.map((item) => {
            const cartItem = cartItems.find(
              (product) => product.id === item.id
            );
            const quantity = cartItem?.cartQuantity;
            return (
              <div
                key={item.id}
                className="bg-white/50 shadow-xl rounded-xl p-3 text-center space-y-3 group"
              >
                <img
                  src={item.img}
                  alt={item.title}
                  className="img-shadow w-44 transition-all duration-700 group-hover:scale-x-110 group-hover:-translate-y-[50px] group-hover:translate-x-[10px] group-hover:rotate-[50deg]"
                />
                <div className="">
                  {quantity > 0 ? (
                    <div className="flex items-center gap-2 justify-around mb-3">
                      {quantity > 1 ? (
                        <button
                          className="bg-darkGreen text-white w-8 h-8 rounded-full"
                          onClick={() => handleDecreaseItem(item)}
                        >
                          -
                        </button>
                      ) : (
                        <button
                          className="bg-darkGreen text-white w-8 h-8 rounded-full flex items-center justify-center"
                          onClick={() => handleRemoveItem(item)}
                        >
                          <IoTrashOutline />
                        </button>
                      )}

                      <span>{quantity}</span>
                      <button
                        className="bg-darkGreen text-white w-8 h-8 rounded-full"
                        onClick={() => handleAddToCart(item)}
                      >
                        +
                      </button>
                    </div>
                  ) : (
                    <button
                      className="btn-primary opacity-100 group-hover:opacity-100 group-hover:mb-3"
                      onClick={() => handleAddToCart(item)}
                    >
                      buy now
                    </button>
                  )}

                  <p className="text-xl font-semibold">{item.title}</p>
                  <p className="text-xl font-bold text-yellow-500">
                    {item.price}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
