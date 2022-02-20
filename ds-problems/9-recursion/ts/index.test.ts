import { quickSort } from "./index";

describe("quick sort", () => {
  it("recursive quick sort", () => {
    let arr = [10, 80, 30, 90, 40, 50, 70];
    quickSort(arr, 0, arr.length - 1)
    expect(arr).toEqual([
      10, 30, 40, 50, 70, 80, 90,
    ]);
    arr = [7, 1, 3, 5, 2, 6, 4];
    quickSort(arr, 0, arr.length - 1)
    expect(arr).toEqual([1, 2, 3, 4, 5, 6, 7]);
  });
});
