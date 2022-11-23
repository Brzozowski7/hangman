import { useSelector } from "react-redux";
import { Wrapper } from "./Letter.styles";

interface LetterProps {
  wordLetter: string;
}

export default function Letter({ wordLetter }: LetterProps) {
  const { goodChoices, word } = useSelector(({ game }: IStore) => game);

  return (
    <Wrapper>
      {(goodChoices.includes(wordLetter) || word === "welcome") && wordLetter}
    </Wrapper>
  );
}
