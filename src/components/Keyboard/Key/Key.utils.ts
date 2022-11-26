import { pallete } from "../../../misc/pallete";

export const guessKeyColor = (isBad: boolean, isGood: boolean) => {
  if (isBad) {
    return pallete.Red;
  } else if (isGood) {
    return pallete.Green;
  } else return pallete.Grey;
};
