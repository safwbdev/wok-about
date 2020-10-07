import React, { useEffect } from "react";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: {
    opacity: 0,
    x: "100vw",
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      mass: 0.4,
      damping: 8,
      when: "beforeChildren",
      staggerChildren: 0.4,
    },
  },
  exit: {
    x: "-100vw",
    transition: { ease: "easeInOut" },
  },
};
const childVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
};

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
      <h2>Thank you for orfering</h2>
      <motion.p variants={childVariants}>
        You ordered a {meal.size} meal with:
      </motion.p>
      <motion.p variants={childVariants}>{meal.carbs}</motion.p>
      <motion.p variants={childVariants}>{meal.protein}</motion.p>
      <motion.p variants={childVariants}>{meal.sauce}</motion.p>
      <motion.p variants={childVariants}>Extras:</motion.p>
      <motion.div variants={childVariants}>
        {meal.extras.map((topping) => (
          <div key={topping}>{topping}</div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Confirm;
