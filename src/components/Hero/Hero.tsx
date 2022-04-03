/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { Heroleft, Inheroleft, Section } from "./Hero.styled";
import BgAnimation from "../BackgrooundAnimation/BackgroundAnimation";
import { useTrail, a } from "@react-spring/web";

const Trail: React.FC<{ open: boolean }> = ({ open, children }) => {
  const items = React.Children.toArray(children);
  const trail = useTrail(items.length, {
    config: { mass: 5, tension: 1000, friction: 200 },
    opacity: open ? 1 : 0,
    x: open ? 0 : 20,
    height: open ? 80 : 0,
    from: { opacity: 0, x: 20, height: 0 },
  });
  return (
    <div className="overflow-hidden">
      {trail.map(({ height, ...style }, index) => (
        <a.div key={index} style={style}>
          <a.div>{items[index]}</a.div>
        </a.div>
      ))}
    </div>
  );
};

const Hero: React.FC = () => {
  return (
    <Section>
      <Heroleft>
        <Inheroleft>
          <Trail open={true}>
            <span className="text-fuchsia-400 pb-4 text-base md:text-lg italic">
              ~ Introducing
            </span>
            <span className="pt-8"> </span>
            <span className="text-2xl md:text-5xl pt-8 text-slate-300 font-bold">
              Hello
            </span>
            <h1 className="text-6xl md:text-8xl pt-3 text-slate-300 font-bold">
              I'm Said Essalami.
            </h1>
            <p className="text-base md:text-xl pt-6 text-slate-300">
              Junior fullstack developer with experience in a range of
              technologies in the web development world, and a keen interest in
              front-end development. good customer contact and a great ability
              to listen to and adapt to the conditions of work, appreciates team
              work very much, seeking opportunities to leverage experiences and
              skills in Front-end Developement, Animation, Illustration, 3D,
              Product Design (UI/UX).
            </p>
          </Trail>
        </Inheroleft>
      </Heroleft>
      <BgAnimation />
    </Section>
  );
};

export default Hero;
