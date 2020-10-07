import React, { useEffect } from "react";
import { motion } from "framer-motion";
import {
  ORDER_EXTRA,
  ORDER_MESSAGE_1,
  ORDER_MESSAGE_2,
  ORDER_THANK,
} from "../../constants/lang";
import { containerVariants, childVariants } from "./variants";

const Confirm = ({ meal, setShowModal }) => {
  useEffect(() => {
    setTimeout(() => {
      setShowModal(true);
    }, 5000);
  }, [setShowModal]);

  return (
    <motion.div
      className="container order"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <h2>{ORDER_THANK}</h2>
      <motion.p variants={childVariants}>
        {ORDER_MESSAGE_1} {meal.size} {ORDER_MESSAGE_2}
      </motion.p>
      <motion.p variants={childVariants}>{meal.carbs}</motion.p>
      <motion.p variants={childVariants}>{meal.protein}</motion.p>
      <motion.p variants={childVariants}>{meal.veggies}</motion.p>
      <motion.p variants={childVariants}>{meal.sauce}</motion.p>
      <motion.p variants={childVariants}>{ORDER_EXTRA}</motion.p>
      <motion.div variants={childVariants}>
        {meal.extras.map((topping) => (
          <div key={topping}>{topping}</div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Confirm;
