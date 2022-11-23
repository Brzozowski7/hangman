import useCheckResult from "./useCheckResult";
import { Wrapper } from "./Result.styles";

export default function Result() {
  const result = useCheckResult();

  return <Wrapper result={result}>{result}</Wrapper>;
}
