import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { STEP_NEXT, STEP_FIVE } from "../../constants/lang";
import { containerVariants, nextVariants, buttonVariants } from "./variants";

const Sauce = ({ selectSauce, meal }) => {
  const sauce = [
    "Soy Sauce",
    "Oyster Sauce",
    "Black Pepper Sauce",
    "Teriyaki Sauce",
    "Plain",
  ];

  return (
    <motion.div
      className="base container"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      //   transition={{ type: "spring", delay: 0.5 }}
    >
      <h3>{STEP_FIVE}</h3>
      <ul>
        {sauce &&
          sauce.map((sauce) => {
            let spanClass = meal.sauce === sauce ? "active" : "";
            return (
              <motion.li
                key={sauce}
                onClick={() => selectSauce(sauce)}
                whileHover={{ scale: 1.3, originX: 0, color: "#f8e112" }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <span className={spanClass}>{sauce}</span>
              </motion.li>
            );
          })}
      </ul>

      {meal.sauce && (
        <motion.div className="next" variants={nextVariants}>
          <Link to="/extra">
            <motion.button variants={buttonVariants} whileHover="hover">
              {STEP_NEXT}
            </motion.button>
          </Link>
        </motion.div>
      )}
    </motion.div>
  );
};

export default Sauce;
