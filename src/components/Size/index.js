import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { STEP_ONE, STEP_NEXT } from "../../constants/lang";
import { containerVariants, nextVariants, buttonVariants } from "./variants";

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
