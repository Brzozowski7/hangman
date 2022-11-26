import styled from "styled-components";
import { pallete } from "../../misc/pallete";
import { Result } from "./Result.const";

export const StyledParagraph = styled.p<{
  result: Result
}>`
  color: ${(props) =>
    props.result === Result.WIN ? pallete.Green : pallete.Red};
`;
