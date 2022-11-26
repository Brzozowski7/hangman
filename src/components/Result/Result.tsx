import useCheckResult from "./useCheckResult";
import { StyledParagraph } from "./Result.styles";

export default function Result() {
  const result = useCheckResult();

  return <StyledParagraph result={result}>{result}</StyledParagraph>;
}
