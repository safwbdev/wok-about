import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { HOME_WELCOME, HOME_ORDER } from "../../constants/lang";
import { buttonVariants, containerVariants } from "./variants";

const Home = () => {
  return (
    <motion.div
      className="home container"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <h2>{HOME_WELCOME}</h2>
      <Link to="/size">
        <motion.button variants={buttonVariants} whileHover="hover">
          {HOME_ORDER}
        </motion.button>
      </Link>
    </motion.div>
  );
};

export default Home;
