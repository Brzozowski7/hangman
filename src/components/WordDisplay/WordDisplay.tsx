import { useSelector } from "react-redux";
import Letter from "./Letter";
import { Wrapper } from "./WordDisplay.styles";

export default function WordDisplay() {
  const {word} = useSelector(({ game }: IStore) => game);

  return (
    <Wrapper>
      {[...word].map((item, index) => (
        <Letter key={index} wordLetter={item} />
      ))}
    </Wrapper>
  );
}
