import { findTrappedArea, findTrappedArea2 } from "./index";
import { describe, it, assert } from "vitest";

describe("finding the trapped area between in given head", () => {
  describe("max trapped water question problem", () => {
    it("should pass the test", () => {
      assert.equal(findTrappedArea([0, 1, 0, 2, 1, 0, 3, 1, 0, 1, 2]), 8);
    });
    it("optimized findTrappedArea 2", () => {
      assert.equal(findTrappedArea2([0, 1, 0, 2, 1, 0, 3, 1, 0, 1, 2]), 8);
    });
  });
});
