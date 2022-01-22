import { makeNumber, addTwoNumbers, addTwoList, makeListNode } from "./index";

describe("leet code problem ", () => {
  test("make number helper function test", () => {
    expect(makeNumber([1, 2, 4, 5])).toBe(5421);
  });

  test("test add two node function", () => {
    expect(
      addTwoNumbers(makeListNode([1, 2, 3]), makeListNode([2, 3, 4]))
    ).toBe(432 + 321);
    expect(
      addTwoNumbers(
        makeListNode([9, 9, 9, 9, 9, 9, 9]),
        makeListNode([9, 9, 9, 9])
      )
    ).toEqual(10009998);
  });

  test("test add two list and make new list", () => {
    expect(
      addTwoList(makeListNode([1, 2, 3]), makeListNode([2, 3, 4]))
    ).toEqual(makeListNode([3, 5, 7]));
    expect(
      addTwoList(
        makeListNode([9, 9, 9, 9, 9, 9, 9]),
        makeListNode([9, 9, 9, 9])
      )
    ).toEqual(makeListNode([8, 9, 9, 9, 0, 0, 0, 1]));
  });
});
