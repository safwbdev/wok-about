export const containerVariants = {
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
export const buttonVariants = {
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
