import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { stopGame } from "../../redux/gameSlice/gameSlice";
import { parts } from "../Gallows/Gallows.const";
import { Result } from "./Result.const";
import { compareArrays } from "./Result.utils";

const useCheckResult = () => {
  const [result, setResult] = useState<Result>(Result.PLAYING);
  const { word, goodChoices, badChoices } = useSelector(
    ({ game }: IStore) => game
  );
  const dispatch = useDispatch();

  const checkResult = () => {
    if (badChoices.length === parts.length) {
      setResult(Result.LOSE);
      dispatch(stopGame());
    } else if (compareArrays([...word], goodChoices)) {
      setResult(Result.WIN);
      dispatch(stopGame());
    }
  };

  useEffect(() => {
    checkResult();
  }, [goodChoices, badChoices]);

  useEffect(() => {
    setResult(Result.PLAYING);
  }, [word]);

  return result;
};

export default useCheckResult;
