import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { STEP_ORDER, STEP_SIX } from "../constants/lang";

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

const Extra = ({ addExtra, meal }) => {
  let extras = ["Vegetables", "Tofu", "Mushrooms", "Protein", "Extra Sauce"];

  return (
    <motion.div
      className="toppings container"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <h3>{STEP_SIX}</h3>
      <ul>
        {extras.map((extra) => {
          let spanClass = meal.extras.includes(extra) ? "active" : "";
          return (
            <motion.li
              key={extra}
              onClick={() => addExtra(extra)}
              whileHover={{ scale: 1.3, originX: 0, color: "#f8e112" }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <span className={spanClass}>{extra}</span>
            </motion.li>
          );
        })}
      </ul>

      <Link to="/confirm">
        <motion.button variants={buttonVariants} whileHover="hover">
          {STEP_ORDER}
        </motion.button>
      </Link>
    </motion.div>
  );
};

export default Extra;
