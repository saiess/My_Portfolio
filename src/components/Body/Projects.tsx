import { ProjectCard, ProjectInfo, ProjectPic } from "./project.styled";
// import Image from "next/image";
// import bi from "../../../public/assets/bi.png";
// import car from "./images/RentalCar.png";
// import gestion from "./images/gestion.gif";
import Link from "next/link";
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
              <ProjectInfo>
                <h1 className="text-slate-300 text-4xl pb-8 font-bold">
                  interactive Design Website Rental Car
                </h1>
                <p className="text-slate-300 text-lg mb-6 font-bold">
                  Description: <br />
                  an example of interactive design website for Renting various
                  kind of vehicles.
                  <br />
                  Technologies: <br />
                  Javascript | HTML5 | CSS3.
                </p>
                <Link href="https://saiess.github.io/Projet-rental-car-website/">
                  <a className="bg-orange-600 text-base py-2 px-4 rounded-lg">
                    View More
                  </a>
                </Link>
              </ProjectInfo>
              <ProjectCard>
                <ProjectPic src="/RentalCar.png" className="rotate-12" />
                {/* <Image src={car} alt="" className="rounded-3xl rotate-12"/> */}
              </ProjectCard>
            </div>
          </div>
          <div className="w-full flex flex-col justify-between text-6xl font-bold">
            <span className="text-orange-400 pb-4 pl-8 text-lg italic">
              ~ Project 2
            </span>

            <div className="w-full flex justify-between">
              <ProjectCard>
                <ProjectPic src="/vac.png" className="rotate-12" />
              </ProjectCard>
              <ProjectInfo>
                <h1 className="text-slate-300 text-4xl pb-8 font-bold">
                  Covid 19 Vaccination Campaign
                </h1>
                <p className="text-slate-300 text-xl mt-4 font-bold">
                  Description: <br />
                  Covid 19 Vaccination Campaign an automated system in the form
                  of a web application (Node Js: Api Rest/ React Js).
                  <br />
                  Technologies: <br />
                  ReactJs | Typescript | Tailwind CSS | NodeJs(express) |
                  MongoDB.
                </p>
                <Link href="https://github.com/saiess/Projet-Fil-Rouge-SWAPI-Laravel">
                  <a className="bg-orange-600 text-base py-2 px-4 rounded-lg">
                    View More
                  </a>
                </Link>
              </ProjectInfo>
            </div>
          </div>

          <div className="w-full flex flex-col justify-between text-6xl font-bold">
            <span className="text-orange-400 pb-4 pl-8 text-lg italic">
              ~ Project 3
            </span>

            <div className="w-full flex justify-between">
              <ProjectInfo>
                <h1 className="text-slate-300 text-4xl pb-8 font-bold">
                  Swapi Exchange goods Website
                </h1>
                <p className="text-slate-300 text-xl font-bold">
                  Description: <br />
                  The SWAPI project is simply a modernized barter website
                  application that allows users to trade items for something
                  they would like to have.
                  <br />
                  Technologies: <br />
                  Laravel | Javascript | SASS | CSS3 | HTL5 | Bootstrap | Mysql.
                </p>
                <Link href="https://github.com/saiess/vaccination-client">
                  <a className="bg-orange-600 text-base py-2 px-4 rounded-lg">
                    View More
                  </a>
                </Link>
              </ProjectInfo>

              <ProjectCard>
                <ProjectPic src="/swapi.png" className="rotate-12" />
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
