import {
  solution,
  solution2,
  optimizedSolution,
  optimizedSolution2,
  findMaxSumOfTwoSeq,
} from "./index";

describe("problem 5", () => {
  test("solution", () => {
    expect(solution("abccabb")).toEqual(3);
    expect(solution("abcbdaac")).toEqual(4);
  });

  test("solution 2", () => {
    expect(solution2("abccabb")).toEqual(3);
    expect(solution2("abcbdaac")).toEqual(4);
  });

  test("optimized solution", () => {
    expect(optimizedSolution("abccabb")).toEqual(3);
    expect(optimizedSolution("abcbdaac")).toEqual(4);
  });

  test("optimized solution 2", () => {
    expect(optimizedSolution2("abccabb")).toEqual(3);
    expect(optimizedSolution2("abcbdaac")).toEqual(4);
  });

  test("sliding window", () => {
    expect(findMaxSumOfTwoSeq([1, 3, 7, 9, 2, 4]));
  });
});
