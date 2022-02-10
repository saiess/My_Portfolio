import styled from "styled-components";

export const Card = styled.div`
  width: 24rem;
  height: 20rem;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  background-color: #111827;
  border-radius: 30px;
  padding: 1rem 0rem 1rem 0rem;
  box-shadow: rgba(0, 0, 0, 0.06) 0px 2px 4px 0px inset;
  &:hover {
    background-color: #13adc7;
    box-shadow: rgb(19, 173, 199, 1) 30px 2px 100px -30px,
      rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
      rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
  }
  &:hover div {
    color: white;
    border: 1 solid white;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset,
      rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;
  }
`;
