export const compareArrays = (arr1: string[], arr2: string[]) => {
  return arr1.every((element) => {
    if (arr2.includes(element)) {
      return true;
    }
    return false;
  });
};
