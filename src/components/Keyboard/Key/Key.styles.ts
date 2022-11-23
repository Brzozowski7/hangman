import styled from "styled-components";
import { pallete } from "../../../misc/pallete";
import { guessKeyColor } from "./Key.utils";

export const Wrapper = styled.div<{ isBad: boolean; isGood: boolean }>`
  color: ${(props) =>
    props.isBad || props.isGood ? pallete.White : pallete.Black};
  text-transform: uppercase;
  background-color: ${(props) => guessKeyColor(props.isBad, props.isGood)};
  border: 2px solid black;
  border-radius: 5px;
  grid-column: span 2;
  font-size: 20px;
  text-align: center;
  width: 40px;
  height: 40px;
  cursor: pointer;
`;
