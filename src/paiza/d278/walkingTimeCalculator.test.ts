import { WalkingTimeCalculator } from "./index";

describe('徒歩時間の計算', () => {
  test.each`
    distance | result
    ${80} | ${1}
    ${160} | ${2}
    ${190} | ${2}
    ${350} | ${4}
  `('$distance m => $result min', ({ distance, result }) => {
    expect(WalkingTimeCalculator.calculateByDistance(distance)).toBe(result);
  });
});