import React from "react";
import { Divblock, Imgbody, Imghead, Imglink, Intodivblock, Pendiv } from "./Pen.styled";
// import penhead from "../../../public/penhead.png";
// import penbody from "../../../public/penbody.png";


const Pen: React.FC = () => {
  return (
    <Pendiv>
      <Divblock>
        <Intodivblock>
          <Imgbody src="./penbody.png" />
          <Imglink>
            <Imghead src="./penheadd.png" />
          </Imglink>
        </Intodivblock>
      </Divblock>
    </Pendiv>
  );
};

export default Pen;
