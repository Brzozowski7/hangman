import { firstRow, secondRow, thirdRow } from "./Keyboard.const";
import Key from "./Key";
import { KeyboardRow, Wrapper } from "./Keyboard.styles";

export default function Keyboard() {
  return (
    <Wrapper>
      <KeyboardRow>
        {firstRow.map((item) => (
          <Key key={item} keyValue={item} />
        ))}
      </KeyboardRow>
      <KeyboardRow>
        {secondRow.map((item) => (
          <Key key={item} keyValue={item} />
        ))}
      </KeyboardRow>
      <KeyboardRow>
        {thirdRow.map((item) => (
          <Key key={item} keyValue={item} />
        ))}
      </KeyboardRow>
    </Wrapper>
  );
}
