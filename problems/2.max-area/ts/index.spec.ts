import { solution } from "./index";

// TODO : write description for tests
describe("test the problem", () => {
  describe("isValid problem", () => {
    test("should pass the test", () => {
      console.log("solution 1....");

      expect(solution([1, 2, 3, 4, 6, 8, 5]));
      expect(solution([1, 2, 2]));
      expect(solution([1, 2, 3]));
      expect(solution([1, 2]));
      expect(solution([]));
      expect(solution([1]));
      expect(solution([7, 1, 2, 3, 9]));
    });
  });
});
