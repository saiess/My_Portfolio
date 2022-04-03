import styled from "styled-components";

export const Section = styled.div`
  display: flex;
  padding: 1rem;
  padding-top: 2rem;
  margin-top: 6rem;
  width: 100%;
  height: 60vh;
  @media (max-width: 768px) {
    min-height: 100vh;
    flex-direction: column;
    align-items: center;
  }
`;

export const Heroleft = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
`;

export const Inheroleft = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media (max-width: 768px) {
  }
`;

export const Divpic = styled.div`
  position: relative;
  width: 10rem;
  height: 10.5rem;
  left: 21.3rem;
  top: 11.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  @media (max-width: 768px) {
  }
}


`;

export const Imghero = styled.img`
  width: 100%;
  height: 100%;
  transform: scaleX(-1);
`;
