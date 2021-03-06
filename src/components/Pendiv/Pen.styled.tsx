import styled from "styled-components";

export const Pendiv = styled.div`
  position: sticky;
  top: 43vh;
  display: block;
  margin-right: auto;
  margin-left: auto;
  justify-content: center;
  margin-top: 11rem;
  width: 100%;
  height: 20em;
  pointer-events: none;
`;

export const Divblock = styled.div`
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 300px;
`;

export const Intodivblock = styled.div`
  position: relative;
  left: 0;
  top: 0;
  right: auto;
  bottom: 0;
  width: 80%;
  height: 161px;
  margin-right: auto;
  margin-left: auto;
  will-change: transform;
`;

export const Imglink = styled.a`
  position: absolute;
  top: 0;
  right: auto;
  bottom: auto;
  z-index: 100;
  width: 24%;
  transition: 1.4s;
  transition-timing-function: cubic-bezier(0, 0.98, 1, 0.01);
`;

export const Imgbody = styled.img`
  position: absolute;
  top: 0;
  right: auto;
  bottom: auto;
  width: 66%;
  border: 0;
  max-width: 100%;
  vertical-align: middle;
  display: inline-block;
  transform: translate3d(24.1326%, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg)
    rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);
  transform-style: preserve-3d;
  transition: 1.4s;
  transition-timing-function: cubic-bezier(0, 0.98, 1, 0.01);
`;

export const Imghead = styled.img`
  width: 100%;
  border: 0;
  max-width: 100%;
  vertical-align: middle;
  display: inline-block;
`;

export const Imgbody2 = styled.img`
  position: absolute;
  left: -7.2%;
  top: 0;
  right: auto;
  bottom: auto;
  width: 80%;
  border: 0;
  max-width: 100%;
  vertical-align: middle;
  display: inline-block;
  will-change: transform;
  transform: translate3d(24.1326%, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg)
    rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);
  transform-style: preserve-3d;
`;

export const Imghead2 = styled.img`
  width: 100%;
  border: 0;
  max-width: 100%;
  vertical-align: middle;
  display: inline-block;
`;
