/* eslint-disable @next/next/link-passhref */
import type { NextPage } from "next";
import Header from "../components/Header/Header";
import Hero from "../components/Hero/Hero";
import Pen from "../components/Pendiv/Pen";
import { Layout } from "../styles/GlobalComponents/Container.styled";

const Home: NextPage = () => {
  return (
    <div className="w-full flex justify-center">
      <Layout>
        <div className="w-full flex justify-center">
          <Header />
        </div>
        <Hero />
      <Pen/>
      </Layout>
    </div>
  );
};

export default Home;
