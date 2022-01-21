import { makeNumber, addTwoNumbers, list, list2 } from "./index";

describe("leet code problem ", () => {
  test("make number helper function test", () => {
    expect(makeNumber([1, 2, 4, 5])).toBe(5421);
  });

  test("test add two node function", () => {
    expect(addTwoNumbers(list, list2)).toBe(5432 + 4321);
  });
});
