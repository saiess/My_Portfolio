/* eslint-disable @next/next/link-passhref */
import React from "react";
import Link from "next/link";
import {
  Container,
  Div1,
  Div2,
  Div3,
  NavLink,
  SocialTalk,
} from "./Header.styled";
import { RiOpenArmFill } from "react-icons/ri";
// import {  AiOutlineArrowRight } from "react-icons/ai"
import { MdOutlineArrowRightAlt } from "react-icons/md";

const Header: React.FC = () => {
  return (
    <Container>
      <Div1>
        <Link href="/">
          <a className="flex items-center text-orange-500">
            <RiOpenArmFill size="2em" />
            <span className="text-xl pl-2 hover:underline">Saifolio</span>
          </a>
        </Link>
      </Div1>

      <Div2>
        <li className="list-none">
          <Link href="#projects">
            <NavLink>Projects</NavLink>
          </Link>
        </li>
        <li className="list-none">
          <Link href="#tech">
            <NavLink>Technologies</NavLink>
          </Link>
        </li>
        <li className="list-none">
          <Link href="#about">
            <NavLink>About</NavLink>
          </Link>
        </li>
      </Div2>
      <Div3>
        <SocialTalk href="mailto:saidessalami0@gmail.com">
          <p className="flex items-center">
            <span>Let s Talk</span>{" "}
            <MdOutlineArrowRightAlt className="ml-2 text-2xl" />{" "}
          </p>
        </SocialTalk>
      </Div3>
    </Container>
  );
};

export default Header;
