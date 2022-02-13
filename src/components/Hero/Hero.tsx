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
            <span className="text-fuchsia-400 pb-4 text-lg italic">
              ~ Introducing
            </span>
            <span className="pt-8"> </span>
            <span className="text-5xl pt-8 text-slate-300 font-bold">
              Hello
            </span>
            <h1 className="text-8xl pt-3 text-slate-300 font-bold">
              I'm Said Essalami.
            </h1>
            <p className="text-xl pt-6 text-slate-300">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam
              quae mollitia laboriosam consequuntur modi iure dolor repellendus
              enim aut! Eius quisquam harum veritatis mollitia, voluptas non
              voluptatem odit fugit eum.
            </p>
          </Trail>
        </Inheroleft>
      </Heroleft>
      {/* <Divpic>
        <Imghero src="./pi.png"/>
      </Divpic> */}
      <BgAnimation />
    </Section>
  );
};

export default Hero;
