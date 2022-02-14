import React from "react";
import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillTwitterCircle,
} from "react-icons/ai";

import { MdOutlineAttachEmail, MdOutlinePhoneIphone } from "react-icons/md";

import {
  ContactDiv,
  ContactIcons,
  ContactImageDiv,
  ContactPic,
  Dots,
} from "./Body.styled";

const Contact: React.FC = () => {
  return (
    <div className="w-full flex justify-center">
      <div className="w-4/5 flex flex-col mt-24">
        <div className="w-20 h-2 rounded-3xl bg-gradient-to-r from-cyan-500 to-orange-500" />
        <h1 className="text-5xl my-6 text-fuchsia-600">Contact</h1>
        <p className="text-3xl my-2 text-slate-300">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
          dolorum distinctio quisquam corrupti ipsum ut quidem aut vitae
          molestiae quam..
        </p>
        <ContactDiv>
          <div className="w-2/6 h-full flex flex-col rounded-l-xl items-center justify-between">
            <div className="w-full flex justify-start rounded-l-xl">
              <Dots className="bg-orange-400 mr-2" />
              <Dots className="bg-fuchsia-600 mr-2" />
              <Dots className="bg-cyan-500" />
            </div>
            <div className="h-5/6 flex flex-col rounded-xl justify-center">
              <h1 className="text-3xl font-semibold">Said Essalami</h1>
              <span className="w-10 h-1 mb-8 rounded-3xl bg-gradient-to-r from-cyan-500 to-orange-500" />
              <p className="flex">
                <MdOutlineAttachEmail className="text-2xl mr-4" />
                <span className="text-base font-bold">
                  saidessalami0@gmail.com
                </span>
              </p>
              <p className="flex items-center">
                <MdOutlinePhoneIphone className="text-2xl mr-4" />
                <span className="text-base mt-3 font-bold">0645071218</span>
              </p>
            </div>
          </div>

          <div className="w-2/6 h-full flex flex-col items-center justify-center">
            <ContactImageDiv>
              <ContactPic src="/m.svg" />
            </ContactImageDiv>
          </div>

          <div className="w-2/6 h-full flex flex-col items-center justify-center rounded-r-xl">
            <ContactIcons href="http://github.com">
              <AiFillGithub size="2em" /> <span className="ml-2">GIthub</span>
            </ContactIcons>
            <ContactIcons href="http://linkedin.com">
              <AiFillLinkedin size="2em" /> <span className="ml-2">GIthub</span>
            </ContactIcons>
            <ContactIcons href="http://twitter.com">
              <AiFillTwitterCircle size="2em" />{" "}
              <span className="ml-2">Twitter</span>
            </ContactIcons>
          </div>
        </ContactDiv>
      </div>
    </div>
  );
};

export default Contact;
