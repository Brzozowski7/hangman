import { Wrapper } from "./Gallows.styles";
import { parts } from "./Gallows.const";
import { useSelector } from "react-redux";

export default function Gallows() {
  const { badChoices, gameOn } = useSelector(({ game }: IStore) => game);

  const partsToShow = gameOn ? parts.slice(0, badChoices.length) : parts;

  return (
    <Wrapper>
      {partsToShow.map((GallowPart, index) => (
        <GallowPart key={index} />
      ))}
    </Wrapper>
  );
}
