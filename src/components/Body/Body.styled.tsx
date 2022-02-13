import styled from "styled-components";

export const Card = styled.div`
  width: 24rem;
  height: 20rem;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  background-color: #161615;
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

export const ContactDiv = styled.div`
  width: 100%;
  height: 20rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #0e0e0e;
  margin-top: 4em;
  border-radius: 20px;
  padding: 1rem 1rem 1rem 1rem;
  border: thick double #2e2e2d;
  box-shadow: inset 2px 3px 5px #000000, 0px 1px 1px #333;
  &:hover {
    background-color: #0e0e0e;
    box-shadow: 4px 4px rgb(0 53 98 / 20%), 5px 4px rgb(234 88 12 / 20%),
      10px 10px rgb(234 88 12 / 10%), 5px 5px rgb(234 88 12 / 5%),
      5px 5px rgb(234 88 12 / 5%);
    border: none;
  }
  &:hover div {
    color: white;
    border: 1 solid white;
  }
`;

// Social Icons

export const ContactIcons = styled.a`
  transition: 0.3s ease;
  color: white;
  border-radius: 50px;
  padding: 8px;
  display: flex;
  &:hover {
    background-color: #212d45;
    transform: scale(1.2);
    cursor: pointer;
  }
`;

export const ContactImageDiv = styled.div`
  background-color: #ffffff21;
  width: 70%;
  height: 82%;
  border-radius: 50%;
  position: relative;
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  border: 2.2mm ridge rgba(234, 88, 12, 0.5);
`;

export const ContactPic = styled.img`
  width: 100%;
  border-radius: 50%;
  height: 100%;
`;

export const Dots = styled.div`
  width: 1em;
  border-radius: 50%;
  height: 1em;
`;
