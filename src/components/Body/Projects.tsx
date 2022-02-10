import React from "react";
import { ProjectCard } from "./project.styled";
// import Image from "next/image";
// import bi from '../../../public/assets/bi.png'
// import car from "./images/RentalCar.png";
// import gestion from './images/gestion.gif';
const Projects: React.FC = () => {
  return (
    <div className="w-full flex justify-center">
      <div className="w-4/5 flex flex-col mt-24">
        <div className="w-20 h-2 rounded-3xl bg-gradient-to-r from-cyan-500 to-orange-500" />
        <h1 className="text-5xl my-6 text-fuchsia-600">Projects</h1>
        <div className="flex flex-col pt-6 gap-40 justify-items-center items-center justify-center">
          <div className="w-full flex flex-col justify-between">
            <span className="text-orange-400 pb-4 pl-8 text-lg italic">
              ~ Project 1
            </span>

            <div className="w-full flex justify-between">
              <h1 className="text-slate-300 text-6xl font-bold">
                Rental Car Website
              </h1>
              <ProjectCard>
                {/* <Image src={car} alt="" className="w-full rounded-3xl" /> */}
              </ProjectCard>
            </div>
          </div>
          <div className="w-full flex flex-col justify-between text-6xl font-bold">
            <span className="text-orange-400 pb-4 pl-8 text-lg italic">
              ~ Project 2
            </span>

            <div className="w-full flex justify-between">
              <ProjectCard>
                {/* <Image src={gestion} alt="" className="w-full rounded-3xl" /> */}
              </ProjectCard>
              <h1 className="text-slate-300 text-center">
                Gestion de Livraison
              </h1>
            </div>
          </div>
          <div className="w-full flex flex-col justify-between text-6xl font-bold">
            <span className="text-orange-400 pb-4 pl-8 text-lg italic">
              ~ Project 3
            </span>

            <div className="w-full flex justify-between">
              <h1 className="text-slate-300 text-6xl font-bold">
                Gestion de Livraison
              </h1>
              <ProjectCard>
                {/* <Image src={bi} alt="" className="w-full rounded-3xl" /> */}
              </ProjectCard>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
