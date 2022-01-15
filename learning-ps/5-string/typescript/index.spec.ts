import {
  solution,
  optimizedSolution,
  findMaxSumOfTwoSeq,
  optimizedSolution2,
} from "./main";

// todo : write description for tests
describe("test the problem", () => {
  describe("find the length of the longest substring without repeating characters", () => {
    test("solution", () => {
      expect(solution("abccabb")).toEqual(3);
      expect(solution("abcbdaac")).toEqual(4);
    });

    test("optimized solution 2", () => {
      expect(optimizedSolution("abccabb")).toEqual(3);
      expect(optimizedSolution("abcbdaac")).toEqual(4);
    });

    test("optimized solution 3 ", () => {
      expect(optimizedSolution2("abccabb"));
      expect(optimizedSolution2("abcbdaac"));
    });

    test("sliding window example test", () => {
      expect(findMaxSumOfTwoSeq([1, 3, 7, 9, 2, 4])).toEqual(16);
    });
  });
});
