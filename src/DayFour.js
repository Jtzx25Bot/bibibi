const isMonotone = pwd => {
  return pwd
    .toString()
    .split("")
    .every((elem, index, arr) => index === 0 || elem >= arr[index - 1]);
};

const hasDouble = pwd => {
  return pwd
    .toString()
    .split("")
    .some((elem, index, arr) => arr[index + 1] === elem);
};

const hasOnlyTwo = pwd => {
  return pwd
    .toString()
    .split("")
    .some(
      (elem, index, arr) =>
        elem === arr[index - 1] &&
        elem != arr[index - 2] &&
        elem != arr[index + 1]
    );
};

export const getResult = () => {
  let count = 0;
  for (let i = 235741; i <= 706948; i++) {
    if (isMonotone(i) && hasOnlyTwo(i)) {
      count++;
    }
  }
  return count;
};
