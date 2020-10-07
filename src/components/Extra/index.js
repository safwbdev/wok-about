import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { STEP_ORDER, STEP_SIX } from "../../constants/lang";
import { containerVariants, buttonVariants } from "./variants";
import { extras } from "./extras";
const Extra = ({ addExtra, meal }) => {
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
        {extras.map((extra, index) => {
          let spanClass = meal.extras.includes(extra.label) ? "active" : "";
          return (
            <motion.li
              key={index}
              onClick={() => addExtra(extra.label)}
              whileHover={{ scale: 1.3, originX: 0, color: "#f8e112" }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <img src={extra.img} alt="" />
              <span className={spanClass}>{extra.label}</span>
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
