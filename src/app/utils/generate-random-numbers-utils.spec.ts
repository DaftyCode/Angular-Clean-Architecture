import { randomIntFromInterval, generateRandomNumbers } from './generate-random-numbers-utils';

describe('randomIntFromInterval', () => {
  it('should return a random integer between min and max values', () => {
    const result = randomIntFromInterval(5, 10);

    expect(result).toBeGreaterThanOrEqual(5);
    expect(result).toBeLessThanOrEqual(10);
  });
});

describe('generateRandomNumbers', () => {
  it('should generate an array of random numbers with the specified total', () => {
    const totalNumbers = 5;
    const result = generateRandomNumbers(totalNumbers);

    expect(result.length).toBe(totalNumbers);
  });
});
