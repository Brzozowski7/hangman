import { useDispatch, useSelector } from "react-redux";
import { goodChoice, badChoice } from "../../../redux/gameSlice/gameSlice";
import { Wrapper } from "./Key.styles";

interface KeyProps {
  keyValue: string;
}

export default function Key({ keyValue }: KeyProps) {
  const dispatch = useDispatch();
  const { gameOn, word, goodChoices, badChoices } = useSelector(
    ({ game }: IStore) => game
  );

  const handleClick = () => {
    if (
      !gameOn ||
      goodChoices.includes(keyValue) ||
      badChoices.includes(keyValue)
    ) {
      return;
    } else {
      if (word.includes(keyValue)) {
        dispatch(goodChoice(keyValue));
      } else {
        dispatch(badChoice(keyValue));
      }
    }
  };

  return (
    <Wrapper
      isBad={badChoices.includes(keyValue)}
      isGood={goodChoices.includes(keyValue)}
      onClick={handleClick}
    >
      {keyValue}
    </Wrapper>
  );
}
