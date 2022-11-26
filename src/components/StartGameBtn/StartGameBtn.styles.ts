import styled, { keyframes, css } from "styled-components";
import { pallete } from "../../misc/pallete";

const blink = keyframes`
  from {
    opacity: 0.2;
  }

  to {
    opacity:1;
  }
`;

export const StyledBtn = styled.button<{ gameOn: boolean }>`
  text-transform: uppercase;
  background-color: ${pallete.Grey};
  border: 2px solid black;
  border-radius: 5px;
  font-weight: 700;
  font-size: 20px;
  text-align: center;
  padding: 12px;
  cursor: pointer;
  animation: ${(props) =>
    !props.gameOn
      ? css`
          ${blink} 2s linear infinite;
        `
      : ""};
`;
