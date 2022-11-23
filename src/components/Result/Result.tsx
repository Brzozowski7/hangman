import useCheckResult from "./useCheckResult";
import { Wrapper } from "./Result.styles";
import { Results } from "./Result.const";

export default function Result() {
  const result = useCheckResult() as Results;

  return <Wrapper result={result}>{result}</Wrapper>;
}
