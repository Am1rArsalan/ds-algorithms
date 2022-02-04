import { calSolution, calSolution2 } from "./index";

describe("test the problem", () => {
  test("should return elements that indexes when sum of them is equal to target", () => {
    expect(calSolution([1, 2, 3, 7, 9], 11)).toEqual([1, 4]);
    expect(calSolution([1, 2, 3, 4, 6, 9], 11)).toEqual([1, 5]);
    expect(calSolution([1, 2, 3, 4, 5], 25)).toEqual(null);
    expect(calSolution([1, 6], 7)).toEqual([0, 1]);
    expect(calSolution([1, 6], 11)).toEqual(null);
    expect(calSolution([], 5)).toEqual(null);
    expect(calSolution([5], 5)).toEqual([0]);
  });

  test("second solution and the optimized one", () => {
    expect(calSolution2([1, 2, 3, 7, 9], 11)).toEqual([1, 4]);
    expect(calSolution2([1, 2, 3, 4, 6, 9], 11)).toEqual([1, 5]);
    expect(calSolution2([1, 2, 3, 4, 5], 25)).toEqual(null);
    expect(calSolution2([1, 6], 7)).toEqual([0, 1]);
    expect(calSolution2([1, 6], 11)).toEqual(null);
    expect(calSolution2([], 5)).toEqual(null);
    expect(calSolution2([5], 5)).toEqual([0]);
  });
});
