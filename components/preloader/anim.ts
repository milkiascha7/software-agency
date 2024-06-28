export const expand = {
  initial: {
    top: 0,
  },
  enter: (i: any) => ({
    top: "100vh",
    transition: {
      duration: 0.5,
      delay: 0.09 * i,
      ease: [0.515, 0.91, 0.655, 1],
    },
    transitionEnd: { height: "0", top: "0" },
  }),
  exit: (i: any) => ({
    height: "100vh",
    transition: {
      duration: 0.5,
      delay: 0.09 * i,
      ease: [0.515, 0.91, 0.655, 1],
    },
  }),
};
export const opacity = {
  initial: {
    opacity: 0.5,
    transition: {
      duration: 5.2,
      delay: 0.9,
    },
  },
  enter: {
    transition: {
      duration: 5.2,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 1,
    },
  },
};
