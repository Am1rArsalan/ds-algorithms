import {
  binarySearch,
  findIndexByRecursionBinarySearch,
  findDomainForGivenTarget,
} from "./index";

describe("binary search", () => {
  test("should find target in the sorted array and return the index ( binary search )", () => {
    const arr = [1, 2, 3, 4, 5, 6];
    expect(binarySearch([...arr], 5)).toEqual(4);
    expect(binarySearch([...arr], 6)).toEqual(5);
    expect(binarySearch([...arr], 3)).toEqual(2);
    expect(binarySearch([...arr], 8)).toEqual(-1);
  });
  test("should find target in the sorted array and return the index ( binary search )", () => {
    const arr = [1, 2, 3, 4, 5, 6];
    expect(findIndexByRecursionBinarySearch([...arr], 5)).toEqual(4);
    expect(findIndexByRecursionBinarySearch([...arr], 6)).toEqual(5);
    expect(findIndexByRecursionBinarySearch([...arr], 3)).toEqual(2);
    expect(findIndexByRecursionBinarySearch([...arr], 8)).toEqual(-1);
  });
  test("problem 2", () => {
    const arr = [1, 3, 3, 5, 5, 5, 8, 9];
    expect(findIndexByRecursionBinarySearch([...arr], 5)).toEqual([3, 5]);
  });
});