import styled from "styled-components";
import { pallete } from "../../misc/pallete";
import { Results } from "./Result.const";


export const Wrapper = styled.p<{
  result: string;
}>`
  color: ${(props) =>
    props.result === Results.WIN ? pallete.Green : pallete.Red};
`;
