import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { STEP_NEXT, STEP_FOUR } from "../../constants/lang";
import { containerVariants, nextVariants, buttonVariants } from "./variants";
import { veggies } from "./veggies";
const Veggies = ({ selectVeggies, meal }) => {
  return (
    <motion.div
      className="base container"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      //   transition={{ type: "spring", delay: 0.5 }}
    >
      <h3>{STEP_FOUR}</h3>
      <ul>
        {veggies &&
          veggies.map((veggies, index) => {
            let spanClass = meal.veggies === veggies.label ? "active" : "";
            return (
              <motion.li
                key={index}
                onClick={() => selectVeggies(veggies.label)}
                whileHover={{ scale: 1.3, originX: 0, color: "#f8e112" }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <img src={veggies.img} alt="" />
                <span className={spanClass}>{veggies.label}</span>
              </motion.li>
            );
          })}
      </ul>

      {meal.veggies && (
        <motion.div className="next" variants={nextVariants}>
          <Link to="/sauce">
            <motion.button variants={buttonVariants} whileHover="hover">
              {STEP_NEXT}
            </motion.button>
          </Link>
        </motion.div>
      )}
    </motion.div>
  );
};

export default Veggies;
