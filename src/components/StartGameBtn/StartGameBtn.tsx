import { useDispatch, useSelector } from "react-redux";
import { getWord } from "../../redux/gameSlice/gameSlice";
import { Wrapper } from "./StartGameBtn.styles";

export default function StartGameBtn() {
  const dispatch = useDispatch();
  const { gameOn } = useSelector(({ game }: IStore) => game);

  const handleClick = () => {
    dispatch(getWord());
  };

  return (
    <Wrapper gameOn={gameOn} onClick={handleClick}>
      Get a word
    </Wrapper>
  );
}
