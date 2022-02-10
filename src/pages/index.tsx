/* eslint-disable @next/next/link-passhref */
import type { NextPage } from "next";
import Projects from "../components/Body/Projects";
import Tech from "../components/Body/Tech";
// import Test from "../components/Body/test";
import Header from "../components/Header/Header";
import Hero from "../components/Hero/Hero";
import Pen from "../components/Pendiv/Pen";
import { Layout } from "../styles/GlobalComponents/Container.styled";

const Home: NextPage = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center">
      <Layout>
        <div className="w-full flex justify-center">
          <Header />
        </div>
        <Hero />
      </Layout>
      <Pen />
      <Layout>
        <Projects />
        <Tech />
        {/* <Test/> */}
      </Layout>
    </div>
  );
};

export default Home;
