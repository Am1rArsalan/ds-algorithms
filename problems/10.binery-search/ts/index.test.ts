import {
  binarySearch,
  findIndexByRecursionBinarySearch,
  findDomainForGivenTarget,
  findDomainForGivenTargetWithoutBinarySearch,
} from "./index";
import { describe, it, assert } from "vitest";

describe("binary search", () => {
  it("should find target in the sorted array and return the index ( binary search )", () => {
    const arr = [1, 2, 3, 4, 5, 6];
    assert.equal(binarySearch([...arr], 5, 0, arr.length - 1), 4);
    assert.equal(binarySearch([...arr], 6, 0, arr.length - 1), 5);
    assert.equal(binarySearch([...arr], 3, 0, arr.length - 1), 2);
    assert.equal(binarySearch([...arr], 8, 0, arr.length - 1), -1);
  });

  it("should find target in the sorted array and return the index ( binary search )", () => {
    const arr = [1, 2, 3, 4, 5, 6];
    assert.equal(findIndexByRecursionBinarySearch([...arr], 5), 4);
    assert.equal(findIndexByRecursionBinarySearch([...arr], 6), 5);
    assert.equal(findIndexByRecursionBinarySearch([...arr], 3), 2);
    assert.equal(findIndexByRecursionBinarySearch([...arr], 8), -1);
  });

  it("problem 2 :o(n)", () => {
    const arr = [1, 3, 3, 5, 5, 5, 8, 9];
    assert.deepEqual(
      findDomainForGivenTargetWithoutBinarySearch([...arr], 5),
      [3, 5]
    );
  });

  it("problem 2:o(log(n))", () => {
    assert.deepEqual(
      findDomainForGivenTarget([1, 3, 3, 5, 5, 5, 8, 9], 5),
      [3, 5]
    );
    assert.deepEqual(findDomainForGivenTarget([1, 2, 3, 4, 5, 6], 4), [3, 3]);
    assert.deepEqual(findDomainForGivenTarget([1, 2, 3, 4, 5], 9), [-1, -1]);
  });
});
