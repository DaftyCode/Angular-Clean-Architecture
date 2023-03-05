export const randomIntFromInterval = (min: number, max: number) => Math.floor(Math.random() * (max - min + 1) + min);

export const generateRandomNumbers = (totalNumbers: number) => {
  const randomNumbers: number[] = [];
  for (let i = 0; i < totalNumbers; i++) {
    randomNumbers.push(randomIntFromInterval(1, 1000));
  }
  return randomNumbers;
};
