import { createSlice } from "@reduxjs/toolkit";
import { getRandomWord } from "./gameSlice.utils";

const initialState = {
  word: "welcome",
  goodChoices: [] as string[],
  badChoices: [] as string[],
  gameOn: false,
};

export const gameSlice = createSlice({
  name: "game",
  initialState,
  reducers: {
    goodChoice: (state, action) => {
      state.goodChoices.push(action.payload);
    },
    badChoice: (state, action) => {
      state.badChoices.push(action.payload);
    },
    getWord: (state) => {
      state.word = getRandomWord();
      state.gameOn = true;
      state.badChoices = [];
      state.goodChoices = [];
    },
    stopGame: (state) => {
      state.gameOn = false;
    },
  },
});

export const { goodChoice, badChoice, getWord, stopGame } = gameSlice.actions;

export default gameSlice.reducer;
