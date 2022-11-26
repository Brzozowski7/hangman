interface IStore {
  game: {
    word: string;
    badChoices: string[];
    goodChoices: string[];
    gameOn: boolean;
  };
}
