import { Transition, Variants } from "framer-motion";

const aosTransition: Transition = {
  type: "spring",
  stiffness: 60,
  damping: 20,
  mass: 1,
  delay: 0.3,
};

export const FadeUp: Variants = {
  hidden: { opacity: 0, y: 100 },
  show: {
    opacity: 1,
    y: 0,
    transition: aosTransition,
  },
};

export const FadeDown: Variants = {
  hidden: { opacity: 0, y: -100 },
  show: {
    opacity: 1,
    y: 0,
    transition: aosTransition,
  },
};

export const FadeRight: Variants = {
  hidden: { opacity: 0, x: -100 },
  show: {
    opacity: 1,
    x: 0,
    transition: aosTransition,
  },
};

export const FadeLeft: Variants = {
  hidden: { opacity: 0, x: 100 },
  show: {
    opacity: 1,
    x: 0,
    transition: aosTransition,
  },
};

export const FadeDownRight: Variants = {
  hidden: { opacity: 0, x: -150, y: -150 },
  show: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: aosTransition,
  },
};

export const FadeDownLeft: Variants = {
  hidden: { opacity: 0, x: 100, y: -100 },
  show: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: aosTransition,
  },
};

export const ZoomInUp: Variants = {
  hidden: { opacity: 0, y: 100, scale: 0.5 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: aosTransition,
  },
};

export const ZoomInLeft: Variants = {
  hidden: { opacity: 0, x: 100, scale: 0.5 },
  show: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: aosTransition,
  },
};

export const StaggerContainer: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};
