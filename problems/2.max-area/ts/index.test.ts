import { solution, opSolution, opSolution2 } from "./index";

describe("test the problem", () => {
  test("should pass the test", () => {
    expect(solution([1, 2, 3, 4, 6, 8, 5])).toEqual(12);
    expect(solution([1, 2, 3])).toEqual(2);
    expect(solution([1, 2, 2])).toEqual(2);
    expect(solution([1, 2])).toEqual(1);
    expect(solution([])).toEqual(0);
    expect(solution([1])).toEqual(0);
    expect(solution([7, 1, 2, 3, 9])).toEqual(28);
  });
  test("should pass the test", () => {
    expect(opSolution([1, 2, 3, 4, 6, 8, 5])).toEqual(12);
    expect(opSolution([1, 2, 3])).toEqual(2);
    expect(opSolution([1, 2, 2])).toEqual(2);
    expect(opSolution([1, 2])).toEqual(1);
    expect(opSolution([])).toEqual(0);
    expect(opSolution([1])).toEqual(0);
    expect(opSolution([7, 1, 2, 3, 9])).toEqual(28);
  });

  test("should pass the test", () => {
    expect(opSolution2([1, 2, 3, 4, 6, 8, 5])).toEqual(12);
    expect(opSolution2([1, 2, 3])).toEqual(2);
    expect(opSolution2([1, 2, 2])).toEqual(2);
    expect(opSolution2([1, 2])).toEqual(1);
    expect(opSolution2([])).toEqual(0);
    expect(opSolution2([1])).toEqual(0);
    expect(opSolution2([7, 1, 2, 3, 9])).toEqual(28);
  });
});
