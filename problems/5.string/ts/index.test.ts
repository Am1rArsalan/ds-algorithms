import {
  solution,
  solution2,
  optimizedSolution,
  optimizedSolution2,
  findMaxSumOfTwoSeq,
} from "./index";
import { describe, it, assert } from "vitest";

describe("problem 5", () => {
  it("solution", () => {
    assert.equal(solution("abccabb"), 3);
    assert.equal(solution("abcbdaac"), 4);
  });

  it("solution 2", () => {
    assert.equal(solution2("abccabb"), 3);
    assert.equal(solution2("abcbdaac"), 4);
  });

  it("optimized solution", () => {
    assert.equal(optimizedSolution("abccabb"), 3);
    assert.equal(optimizedSolution("abcbdaac"), 4);
  });

  it("optimized solution 2", () => {
    assert.equal(optimizedSolution2("abccabb"), 3);
    assert.equal(optimizedSolution2("abcbdaac"), 4);
  });

  it("sliding window", () => {
    //assert.equal(findMaxSumOfTwoSeq([1, 3, 7, 9, 2, 4]));
  });
});
