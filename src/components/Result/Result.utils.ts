export const compareArrays = (arr1: string[], arr2: string[]) => {
  return arr1.every((element) => arr2.includes(element));
};
