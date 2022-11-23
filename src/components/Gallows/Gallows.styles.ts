import styled from "styled-components";
import { pallete } from "../../misc/pallete";

export const Wrapper = styled.div`
  height: 150px;
  width: 150px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`;

export const LeftLeg = styled.div`
  height: 5px;
  width: 25px;
  background-color: ${pallete.Black};
  transform: rotate(-45deg);
  position: absolute;
  right: 0;
  top: 105px;
`;

export const RightLeg = styled.div`
  height: 5px;
  width: 30px;
  background-color: ${pallete.Black};
  transform: rotate(45deg) translateX(100%);
  position: absolute;
  right: 0;
  top: 80px;
`;

export const RightHand = styled.div`
  position: absolute;
  height: 5px;
  width: 25px;
  background-color: ${pallete.Black};
  position: absolute;
  transform: rotate(45deg) translate(100%);
  top: 45px;
  right: 0;
`;

export const LeftHand = styled.div`
  position: absolute;
  height: 5px;
  width: 25px;
  background-color: ${pallete.Black};
  position: absolute;
  transform: rotate(-45deg);
  top: 65px;
  right: 0;
`;

export const Torso = styled.div`
  height: 50px;
  width: 5px;
  background-color: ${pallete.Black};
  position: absolute;
  right: 0;
  top: 50px;
`;

export const Head = styled.div`
  height: 25px;
  width: 25px;
  border-radius: 50%;
  border: 4px solid ${pallete.Black};
  position: absolute;
  top: 25px;
  right: 0;
  transform: translateX(40%);
`;

export const BodyHolder = styled.div`
  height: 25px;
  width: 5px;
  background-color: ${pallete.Black};
  position: absolute;
  top: 0;
  right: 0;
`;

export const SupportBar = styled.div`
  position: absolute;
  height: 5px;
  width: 50px;
  background-color: ${pallete.Black};
  transform: rotate(-45deg) translateX(50%);
  position: absolute;
  top: 35px;
`;

export const UpperPart = styled.div`
  height: 5px;
  width: 75px;
  background-color: ${pallete.Black};
  transform: translateX(50%);
  position: absolute;
  top: 0;
`;

export const Stem = styled.div`
  height: 150px;
  width: 5px;
  background-color: ${pallete.Black};
  position: absolute;
  top: 0;
`;
export const RightBase = styled.div`
  height: 5px;
  width: 75px;
  background-color: ${pallete.Black};
  transform: rotate(-60deg) translateX(-50%);
  position: absolute;
  top: 150px;
`;

export const LeftBase = styled.div`
  height: 5px;
  width: 75px;
  background-color: ${pallete.Black};
  transform: rotate(60deg) translateX(50%);
  position: absolute;
  top: 150px;
`;
