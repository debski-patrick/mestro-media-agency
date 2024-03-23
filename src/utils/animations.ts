import { Variants } from "framer-motion";

export const fadeSmallUpVariant = (duration: number = 0.5, delay: number = 0) => {
  const variant: Variants = {
    hide: {
      opacity: 0,
      y: 64,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration,
        delay,
      },
    },
  };

  return variant;
};
