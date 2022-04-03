import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1rem;
  padding-top: 2rem;
  width: 100%;
`;

export const Div1 = styled.div`
  display: flex;
  flex-direction: row;
  align-content: center;
  align-items: center;
  width: 20%;
`;
export const Div2 = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 40%;

  @media (max-width: 1250px) {
    margin-top: 3rem;
    gap: 1rem;
  }
  @media (max-width: 768px) {
    margin-top: 6rem;
  }

`;
export const Div3 = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 30%;
  @media (max-width: 768px) {
    height: 60%;
    margin-top: 1.7rem;
  }
`;

// Navigation Links
export const NavLink = styled.a`
  font-size: 1.2rem;
  line-height: 32px;
  color: rgba(255, 255, 255, 0.75);
  transition: 0.4s ease;
  &:hover {
    color: #fff;
    opacity: 1;
    cursor: pointer;
    text-decoration: underline;
  }
  @media (max-width: 768px) {
    font-size: 0.8rem;
    margin: 0rem 0.5rem;
  }
`;

// Social Icons

export const SocialTalk = styled.a`
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

  @media (max-width: 768px) {
    font-size: 0.6rem;
  }
`;
