import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { HOME_WELCOME, HOME_ORDER, HOME_INTRO } from "../../constants/lang";
import { buttonVariants, containerVariants } from "./variants";
// import Wok_icon from "../../constants/wok_icon";

const Home = () => {
  return (
    <motion.div
      className="home container"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      {/* <Wok_icon /> */}
      <h2>{HOME_WELCOME}</h2>
      <h4>{HOME_INTRO}</h4>
      <Link to="/size">
        <motion.button variants={buttonVariants} whileHover="hover">
          {HOME_ORDER}
        </motion.button>
      </Link>
    </motion.div>
  );
};

export default Home;
