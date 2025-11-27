import { FC, ReactNode } from "react";
import { Fade, Slide } from "react-awesome-reveal";

interface AnimationProps {
  children: ReactNode;
  type: "fadeIn" | "slideUp";
  duration?: number;
  delay?: number;
  className?: string;
}

const Animation: FC<AnimationProps> = ({
  children,
  type,
  duration = 1000,
  delay = 0,
  className,
}) => {
  if (type === "fadeIn") {
    return (
      <Fade duration={duration} delay={delay} triggerOnce className={className}>
        {children}
      </Fade>
    );
  }

  if (type === "slideUp") {
    return (
      <Slide
        direction="up"
        duration={duration}
        delay={delay}
        triggerOnce
        className={className}
      >
        {children}
      </Slide>
    );
  }

  return null;
};

export default Animation;
