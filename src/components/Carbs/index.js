import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { STEP_TWO, STEP_NEXT } from "../../constants/lang";
import { containerVariants, nextVariants, buttonVariants } from "./variants";
import { carbs } from "./carbs";

const Carbs = ({ selectCarbs, meal }) => {
  return (
    <motion.div
      className="base container"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      //   transition={{ type: "spring", delay: 0.5 }}
    >
      <h3>{STEP_TWO}</h3>
      <ul>
        {carbs &&
          carbs.map((carbs, index) => {
            let spanClass = meal.carbs === carbs.label ? "active" : "";
            return (
              <motion.li
                key={index}
                onClick={() => selectCarbs(carbs.label)}
                whileHover={{ scale: 1.3, originX: 0, color: "#f8e112" }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <img src={carbs.img} alt="" />
                <span className={spanClass}>{carbs.label}</span>
              </motion.li>
            );
          })}
      </ul>

      {meal.carbs && (
        <motion.div className="next" variants={nextVariants}>
          <Link to="/protein">
            <motion.button variants={buttonVariants} whileHover="hover">
              {STEP_NEXT}
            </motion.button>
          </Link>
        </motion.div>
      )}
    </motion.div>
  );
};

export default Carbs;
