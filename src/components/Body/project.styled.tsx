import styled from "styled-components";

export const ProjectCard = styled.div`
  background-color: #ffffff21;
  height: 60%;
  transform: rotate(-12deg);
  border-radius: 30px;
  position: relative;
  z-index: 1;
  @media (max-width: 768px) {
    margin-top: 2rem;
    width: 100%;
  }
`;

export const ProjectInfo = styled.div`
  width: 50%;
  border-radius: 30px;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const ProjectPic = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 30px;
`;
