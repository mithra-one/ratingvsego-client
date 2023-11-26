export const getBallString = (rate) => {
  if (rate % 1 === 0) {
    if (rate % 10 === 1 && rate % 100 !== 11) {
      return "балл";
    } else if (
      [2, 3, 4].includes(rate % 10) &&
      ![12, 13, 14].includes(rate % 100)
    ) {
      return "балла";
    } else {
      return "баллов";
    }
  } else {
    return "балла";
  }
};
