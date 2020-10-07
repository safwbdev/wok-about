import React from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { MODAL_MESSAGE, MODAL_Yes } from "../../constants/lang";
import { backdropVariants, modal } from "./variants";

const Modal = ({ showModal, setShowModal, clearMeal }) => {
  return (
    <AnimatePresence exitBeforeEnter>
      {showModal && (
        <motion.div
          className="backdrop"
          variants={backdropVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
        >
          <motion.div className="modal" variants={modal}>
            <p>{MODAL_MESSAGE}</p>
            <Link to="/">
              <button
                onClick={() => {
                  setShowModal(false);
                  clearMeal();
                }}
              >
                {MODAL_Yes}
              </button>
            </Link>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
export default Modal;
