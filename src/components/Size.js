import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { STEP_ONE, STEP_NEXT } from "../constants/lang";

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
      delay: 0.5,
    },
  },
  exit: {
    x: "-100vw",
    transition: { ease: "easeInOut" },
  },
};
const nextVariants = {
  hidden: {
    x: "-100vw",
  },
  visible: {
    x: 0,
    transition: { type: "spring", stiffness: 120 },
  },
};
const buttonVariants = {
  hover: {
    scale: 1.1,
    textShadow: "0 0 8px rgb(255,255,255)",
    boxShadow: "0 0 8px rgb(255,255,255)",
    transition: {
      duration: 0.3,
      yoyo: Infinity,
    },
  },
};

const Size = ({ selectSize, meal }) => {
  const sizes = ["Small", "Medium", "Large"];

  return (
    <motion.div
      className="base container"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      //   transition={{ type: "spring", delay: 0.5 }}
    >
      <h3>{STEP_ONE}</h3>
      <ul>
        {sizes &&
          sizes.map((size) => {
            let spanClass = meal.size === size ? "active" : "";
            return (
              <motion.li
                key={size}
                onClick={() => selectSize(size)}
                whileHover={{ scale: 1.3, originX: 0, color: "#f8e112" }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <span className={spanClass}>{size}</span>
              </motion.li>
            );
          })}
      </ul>

      {meal.size && (
        <motion.div className="next" variants={nextVariants}>
          <Link to="/carbs">
            <motion.button variants={buttonVariants} whileHover="hover">
              {STEP_NEXT}
            </motion.button>
          </Link>
        </motion.div>
      )}
    </motion.div>
  );
};

export default Size;
