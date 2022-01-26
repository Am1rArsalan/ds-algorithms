import {
  makeNumber,
  getListLength,
  addTwoNumbers,
  addTwoList,
  makeList,
} from "./index";

describe("leet code problem ", () => {
  test("make number helper function test", () => {
    expect(makeNumber([1, 2, 4, 5])).toBe(5421);
  });

  test("test add two node function", () => {
    expect(addTwoNumbers(makeList([1, 2, 3]), makeList([2, 3, 4]))).toBe(
      432 + 321
    );
    expect(
      addTwoNumbers(makeList([9, 9, 9, 9, 9, 9, 9]), makeList([9, 9, 9, 9]))
    ).toEqual(10009998);
  });

  test("test list length", () => {
    expect(getListLength(makeList([1, 2, 3]))).toEqual(3);
  });

  test("test add two list and make new list with short lists", () => {
    expect(addTwoList(makeList([1, 2, 3]), makeList([2, 3, 4]))).toEqual(
      makeList([3, 5, 7])
    );

    expect(
      addTwoList(makeList([9, 9, 9, 9, 9, 9, 9]), makeList([9, 9, 9, 9]))
    ).toEqual(makeList([8, 9, 9, 9, 0, 0, 0, 1]));
  });

  test("test add two list and make new list with log lists", () => {
    expect(
      addTwoList(
        makeList([
          1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
          0, 0, 0, 0, 0, 0, 0, 1,
        ]),
        makeList([5, 6, 4])
      )
    ).toEqual(
      makeList([
        6, 6, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 1,
      ])
    );
  });
});
