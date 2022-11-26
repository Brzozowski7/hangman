import { gameWords } from "./gameSlice.const";

export const getRandomWord = () => {
  const randomWord = gameWords[Math.floor(Math.random() * gameWords.length)];

  return randomWord;
};
