import Gallows from "../components/Gallows";
import Keyboard from "../components/Keyboard";
import Result from "../components/Result";
import StartGameBtn from "../components/StartGameBtn";
import WordDisplay from "../components/WordDisplay";
import { GlobalStyle, Wrapper, Heading } from "./App.styles";

function App() {
  return (
    <Wrapper>
      <GlobalStyle />
      <Heading>Hangman Game</Heading>
      <Gallows />
      <WordDisplay />
      <Keyboard />
      <StartGameBtn />
      <Result />
    </Wrapper>
  );
}

export default App;
