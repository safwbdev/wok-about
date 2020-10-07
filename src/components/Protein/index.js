import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { STEP_NEXT, STEP_THREE } from "../../constants/lang";
import { containerVariants, nextVariants, buttonVariants } from "./variants";
import { protein } from "./protein";

const Protein = ({ selectProtein, meal }) => {
  return (
    <motion.div
      className="base container"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      //   transition={{ type: "spring", delay: 0.5 }}
    >
      <h3>{STEP_THREE}</h3>
      <ul>
        {protein &&
          protein.map((protein) => {
            let spanClass = meal.protein === protein ? "active" : "";
            return (
              <motion.li
                key={protein}
                onClick={() => selectProtein(protein)}
                whileHover={{ scale: 1.3, originX: 0, color: "#f8e112" }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <span className={spanClass}>{protein}</span>
              </motion.li>
            );
          })}
      </ul>

      {meal.protein && (
        <motion.div className="next" variants={nextVariants}>
          <Link to="/veggies">
            <motion.button variants={buttonVariants} whileHover="hover">
              {STEP_NEXT}
            </motion.button>
          </Link>
        </motion.div>
      )}
    </motion.div>
  );
};

export default Protein;
