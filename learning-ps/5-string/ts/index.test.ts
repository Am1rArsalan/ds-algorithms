import {
  solution,
  solution2,
  optimizedSolution,
  optimizedSolution2,
  findMaxSumOfTwoSeq,
} from "./index";

describe("problem 5", () => {
  test("solution", () => {
    expect(solution("abccabb"));
    expect(solution("abcbdaac"));
  });

  test("solution 2", () => {
    expect(solution2("abccabb"));
    expect(solution2("abcbdaac"));
  });

  test("optimized solution", () => {
    expect(optimizedSolution("abccabb"));
    expect(optimizedSolution("abcbdaac"));
  });

  test("optimized solution 2", () => {
    expect(optimizedSolution2("abccabb"));
    expect(optimizedSolution2("abcbdaac"));
  });

  test("sliding window", () => {
    expect(findMaxSumOfTwoSeq([1, 3, 7, 9, 2, 4]));
  });
});
