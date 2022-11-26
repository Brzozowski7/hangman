import { useDispatch, useSelector } from "react-redux";
import { getWord } from "../../redux/gameSlice/gameSlice";
import { StyledBtn } from "./StartGameBtn.styles";

export default function StartGameBtn() {
  const dispatch = useDispatch();
  const { gameOn } = useSelector(({ game }: IStore) => game);

  const handleClick = () => {
    dispatch(getWord());
  };

  return (
    <StyledBtn gameOn={gameOn} onClick={handleClick}>
      Get a word
    </StyledBtn>
  );
}
