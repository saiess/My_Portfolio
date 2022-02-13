import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1rem;
  padding-top: 2rem;
  width: 70vw;
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
`;
export const Div3 = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 30%;
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
`;
