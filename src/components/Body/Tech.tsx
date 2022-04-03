import React from "react";
import { Card } from "./Body.styled";
import { RiProjectorLine } from "react-icons/ri";
import { BiData, BiDesktop, BiCommand } from "react-icons/bi";

const Tech: React.FC = () => {
  return (
    <div className="w-full flex justify-center">
      <div className="md:w-4/5 flex flex-col mt-24">
        <div className="w-20 h-2 rounded-3xl bg-gradient-to-r from-cyan-500 to-orange-500" />
        <h1 className="text-3xl md:text-5xl my-6 text-fuchsia-600">
          Technologies
        </h1>
        <p className="md:text-3xl my-2 text-slate-300">
          I have worked with a range a technologies in the web development
          world. From Back-end To Front-end UI/UX Design.
        </p>
        <div className="grid xl:grid-cols-2 grid-cols-1 pt-6 gap-8 justify-items-center items-center justify-center">
          <Card>
            <div className="rounded-full w-28 h-28 text-5xl border relative flex justify-center items-center border-cyan-500 text-cyan-500 hover:text-white">
              <BiDesktop />
            </div>
            <span className="text-4xl font-bold">Front-End</span>
            <p className="text-center w-4/5">
              Html | CSS | Sass | Bootstrap | TailwindCSS | Styled components |
              JavaScript | TypeScript | ReactJS | VueJS | NextJs | React native
              (Mobile) | Redux.
            </p>
          </Card>
          <Card>
            <div className="rounded-full w-28 h-28 text-5xl border relative flex justify-center items-center border-cyan-500 text-cyan-500 hover:text-white">
              <BiData />
            </div>
            <span className="text-4xl font-bold">Back-End</span>
            <p className="text-center w-4/5">
              NodeJS | Express | MVC | Laravel | PHP | MySQL | MongoDB | NestJs.
            </p>
          </Card>
          <Card>
            <div className="rounded-full w-28 h-28 text-5xl border relative flex justify-center items-center border-cyan-500 text-cyan-500 hover:text-white">
              <RiProjectorLine />
            </div>
            <span className="text-4xl font-bold">UI / UX</span>
            <p className="text-center w-4/5">
              Adobe XD | Adobe Photoshop | Adobe Illustrator | Figma
            </p>
          </Card>
          <Card>
            <div className="rounded-full w-28 h-28 text-5xl border relative flex justify-center items-center border-cyan-500 text-cyan-500">
              <BiCommand />
            </div>
            <span className="text-4xl font-bold">Utils</span>
            <p className="text-center w-4/5">
              Conception UML | Méthodologie Scrum | Git | GitHub | REST API |
              Eslint | Prettier | Husky | Swagger | GraphQL.
            </p>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Tech;
