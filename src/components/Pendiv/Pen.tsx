import React, { useState, useRef, useMemo, useEffect } from "react";
import {
  Divblock,
  Imgbody,
  Imghead,
  Imglink,
  Intodivblock,
  Pendiv,
} from "./Pen.styled";

type Props = {
  show: boolean;
};

const Pen: React.FC<Props> = ({ show }: Props) => {
  const targetRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(show);
  }, [show]);

  const callbackFunction = (entries: any) => {
    const [entry] = entries;
    setIsVisible(entry.isIntersecting);
  };

  const options = useMemo(() => {
    return {
      root: null,
      rootMargin: "0px",
      threshold: 1,
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
    <Pendiv ref={targetRef}>
      <Divblock>
        <Intodivblock>
          <Imgbody
            src="./penbody.png"
            style={!isVisible ? { left: "1%" } : { left: "80%" }}
          />
          <Imglink style={!isVisible ? { left: "13.8%" } : { left: "-26%" }}>
            <Imghead src="./penheadd.png" />
          </Imglink>
        </Intodivblock>
      </Divblock>
    </Pendiv>
  );
};

export default Pen;
