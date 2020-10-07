export const backdropVariants = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 },
};

export const modal = {
  hidden: {
    y: "-110vh",
    opacity: 0,
  },
  visible: {
    y: "200px",
    opacity: 1,
    transition: {
      delay: 0.5,
    },
  },
};
