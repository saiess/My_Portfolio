import React, { useEffect, useMemo, useRef, useState } from "react";
import { Body } from "../../styles/GlobalComponents/Container.styled";
import Contact from "./Contact";
import Projects from "./Projects";
import Tech from "./Tech";

const BodyLayout: React.FC = () => {
  const targetRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  const callbackFunction = (entries: any) => {
    const [entry] = entries;
    setIsVisible(entry.isIntersecting);
  };

  const options = useMemo(() => {
    return {
      root: null,
      rootMargin: "0px",
      threshold: 0.1,
    };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(callbackFunction, options);
    const currentTarget = targetRef.current;
    if (currentTarget) observer.observe(currentTarget);

    return () => {
      if (currentTarget) observer.unobserve(currentTarget);
    };
  }, [targetRef, options]);

  return (
    <Body
      ref={targetRef}
      style={
        !isVisible
          ? {
              opacity: "0",
              transition: ".5s",
              transitionTimingFunction: "cubic-bezier(0,.87,1,.32)",
              // transitionTimingFunction: "cubic-bezier(0,.87,1,.32)",
            }
          : {
              opacity: "100",
              transition: ".5s",
              transitionTimingFunction: "cubic-bezier(0,.87,1,.32)",
              // transitionTimingFunction: "cubic-bezier(0,.87,1,.32)",
            }
      }
    >
      <Projects />
      <Tech />
      <Contact />
    </Body>
  );
};

export default BodyLayout;
