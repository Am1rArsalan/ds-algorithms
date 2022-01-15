import { solution, opSolution, opSolution2 } from "./index";

// todo : write description for tests
describe("test the problem", () => {
  describe("max trapped water question problem", () => {
    test("should pass the test", () => {
      solution([0, 1, 0, 2, 1, 0, 3, 1, 0, 1, 2]);
    });
    test("optimized solution", () => {
      opSolution([0, 1, 0, 2, 1, 0, 3, 1, 0, 1, 2]);
    });
    test("optimized solution 2 ", () => {
      opSolution2([0, 1, 0, 2, 1, 0, 3, 1, 0, 1, 2]);
    });
  });
});
