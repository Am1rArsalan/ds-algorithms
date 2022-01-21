import { calSolution, calSolution2 } from "./index";

// TODO : write description for tests
describe("test the problem", () => {
  describe("isValid problem", () => {
    test("should pass the test", () => {
      console.log("solution 1....");
      expect(calSolution([1, 2, 3, 4, 6, 9], 11)).toEqual([2, 9]);
      expect(calSolution([1, 2, 3, 4, 5], 25)).toEqual(null);
      expect(calSolution([1, 6], 7)).toEqual([1, 6]);
      expect(calSolution([1, 6], 11)).toEqual(null);
      // TODO :check this test case again
      expect(calSolution([5], 5)).toEqual([5]);
      expect(calSolution([], 5)).toEqual(null);
    });
  });

  describe("second solution and optimized one ", () => {
    test("second solution and the optimized one", () => {
      console.log("solution 2 ....");
      console.log(calSolution2([1, 2, 3, 4, 6, 9], 11));
      console.log(calSolution2([1, 2, 3, 4, 5], 25));
      console.log(calSolution2([1, 6], 7));
      console.log(calSolution2([1, 6], 11));
      console.log(calSolution2([5], 5));
      console.log(calSolution2([], 5));
    });
  });
});
