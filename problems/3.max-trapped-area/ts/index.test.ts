import { findTrappedArea, findTrappedArea2 } from "./index";

describe("finding the trapped area between in given head", () => {
  describe("max trapped water question problem", () => {
    test("should pass the test", () => {
      expect(findTrappedArea([0, 1, 0, 2, 1, 0, 3, 1, 0, 1, 2])).toEqual(8);
    });
    test("optimized findTrappedArea 2", () => {
      expect(findTrappedArea2([0, 1, 0, 2, 1, 0, 3, 1, 0, 1, 2])).toEqual(8);
    });
  });
});
