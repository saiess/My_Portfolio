import React from "react";
import { ProjectCard } from "./project.styled";
// import { Card } from "./Body.styled";
// import { RiProjectorLine } from "react-icons/ri";
// import { BiData, BiDesktop, BiCommand } from "react-icons/bi";

const Test: React.FC = () => {
  return (
    <div className="w-full flex justify-center">
      <div className="w-4/5 flex flex-col mt-24">
        <div className="w-20 h-2 rounded-3xl bg-gradient-to-r from-cyan-500 to-orange-500" />
        <h1 className="text-5xl my-6 text-fuchsia-600">Projects</h1>
        <span className="text-orange-400 pb-4 pl-8 text-lg italic">
          ~ Project 1
        </span>
        <div className="flex flex-col pt-6 gap-40 justify-items-center items-center justify-center">
          <div className="w-full flex justify-between">
            <h1 className="text-slate-300 text-6xl font-bold">
              Gestion de Livraison
            </h1>
            <ProjectCard></ProjectCard>
          </div>
          <div className="w-full flex justify-between text-6xl font-bold">
            <ProjectCard></ProjectCard>
            <h1 className="text-slate-300 text-center">Gestion de Livraison</h1>
          </div>
          <div className="w-full flex justify-between text-6xl font-bold">
            <h1 className="text-slate-300">Gestion de Livraison</h1>
            <ProjectCard></ProjectCard>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Test;
