/* eslint-disable @next/next/link-passhref */
import type { NextPage } from "next";
import { useEffect, useMemo, useRef, useState } from "react";
import BodyLayout from "../components/Body/BodyLayout";
import Header from "../components/Header/Header";
import Hero from "../components/Hero/Hero";
import Pen from "../components/Pendiv/Pen";
import { Layout } from "../styles/GlobalComponents/Container.styled";

const Home: NextPage = () => {
  const targetRef = useRef(null);
  const [isFooter, setIsFooter] = useState(false);

  const callbackFunction = (entries: any) => {
    const [entry] = entries;
    setIsFooter(entry.isIntersecting);
    console.log(isFooter);
  };

  const options = useMemo(() => {
    return {
      root: null,
      rootMargin: "0px",
      threshold: 0.6,
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
    <div className="w-full flex flex-col items-center justify-center lololo">
      <Layout>
        <div className="w-full flex justify-center">
          <Header />
        </div>
        <Hero />
      </Layout>
      <Pen show={!isFooter} />
      <BodyLayout />
      <div style={{ height: "44em" }}></div>
      <div
        ref={targetRef}
        className="w-full flex justify-center items-center h-20 border-t border-gray-800"
      >
        <p className="text-slate-600 text-sm">
          Portfolio © 2022. All Rights Reserved{" "}
          <span className="text-red-600 font-bold">( Beta version )</span>.
        </p>
        <p></p>
      </div>
    </div>
  );
};

export default Home;
