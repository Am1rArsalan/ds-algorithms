import { calSolution, calSolution2 } from "./index";
import { describe, assert, it, test } from "vitest";

describe("problem", () => {
  test("should return elements that indexes when sum of them is equal to target", () => {
    assert.deepEqual(calSolution([1, 2, 3, 7, 9], 11), [1, 4]);
    assert.deepEqual(calSolution([1, 2, 3, 4, 6, 9], 11), [1, 5]);
    assert.deepEqual(calSolution([1, 2, 3, 4, 5], 25), null);
    assert.deepEqual(calSolution([1, 6], 7), [0, 1]);
    assert.deepEqual(calSolution([1, 6], 11), null);
    assert.deepEqual(calSolution([], 5), null);
    assert.deepEqual(calSolution([5], 5), [0]);
  });

  it("second solution and the optimized one", () => {
    assert.deepEqual(calSolution2([1, 2, 3, 7, 9], 11), [1, 4]);
    assert.deepEqual(calSolution2([1, 2, 3, 4, 6, 9], 11), [1, 5]);
    assert.deepEqual(calSolution2([1, 2, 3, 4, 5], 25), null);
    assert.deepEqual(calSolution2([1, 6], 7), [0, 1]);
    assert.deepEqual(calSolution2([1, 6], 11), null);
    assert.deepEqual(calSolution2([], 5), null);
    assert.deepEqual(calSolution2([5], 5), [0]);
  });
});
