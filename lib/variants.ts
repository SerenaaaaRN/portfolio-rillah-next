import { Transition, Variants } from "framer-motion";

const defaultTransition: Transition = {
  type: "tween",
  ease: "easeOut",
  duration: 1,
};

export const slowTransition = {
  duration: 2,
  ease: "easeOut" as const,
};

export const StaggerContainer: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

export const FadeUp: Variants = {
  hidden: { opacity: 0, y: 100 },
  show: {
    opacity: 1,
    y: 0,
    transition: defaultTransition,
  },
};

export const ZoomIn: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  show: {
    opacity: 1,
    scale: 1,
    transition: defaultTransition,
  },
};

export const FadeIn: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: defaultTransition,
  },
};

export const FadeRight: Variants = {
  hidden: { opacity: 0, x: -100 },
  show: {
    opacity: 1,
    x: 0,
    transition: defaultTransition,
  },
};

export const FadeLeft: Variants = {
  hidden: { opacity: 0, x: 100 },
  show: {
    opacity: 1,
    x: 0,
    transition: defaultTransition,
  },
};

export const FadeDown: Variants = {
  hidden: { opacity: 0, y: -50 },
  show: {
    opacity: 1,
    y: 0,
    transition: defaultTransition,
  },
};

export const FadeDownRight: Variants = {
  hidden: { opacity: 0, x: -100, y: -100 },
  show: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: defaultTransition,
  },
};

export const ZoomInLeft: Variants = {
  hidden: { opacity: 0, x: 200, y: 200, scale: 0.6 },
  show: {
    opacity: 1,
    x: 0,
    y: 0,
    scale: 1,
    transition: defaultTransition,
  },
};

export const ZoomInUp: Variants = {
  hidden: { opacity: 0, y: 100, scale: 0.6 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      ...defaultTransition,
      delay: i * 0.1,
    },
  }),
};
