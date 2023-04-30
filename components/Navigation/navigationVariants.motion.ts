export const NavigationItemVariants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { type: "spring" },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { type: "spring" },
    },
  },
};
