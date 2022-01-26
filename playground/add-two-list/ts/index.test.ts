import {
  makeNumber,
  getListLength,
  addTwoNumbers,
  addTwoList,
  makeListNode,
} from "./index";

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

  test("test list length", () => {
    expect(getListLength(makeListNode([1, 2, 3]))).toEqual(3);
  });

  test("test add two list and make new list with short lists", () => {
    console.log(
      "result",
      JSON.stringify(
        addTwoList(
          makeListNode([9, 9, 9, 9, 9, 9, 9]),
          makeListNode([9, 9, 9, 9])
        ),
        null,
        2
      )
    );

    console.log(
      "result should be",
      JSON.stringify(makeListNode([8, 9, 9, 9, 0, 0, 0, 1]), null, 2)
    );
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

  test("test add two list and make new list with log lists", () => {
    //console.log(
    //JSON.stringify(
    //addTwoList(
    //makeListNode([
    //1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    //0, 0, 0, 0, 0, 0, 0, 1,
    //]),
    //makeListNode([5, 6, 4])
    //),
    //null,
    //2
    //)
    //);
    expect(
      addTwoList(
        makeListNode([
          1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
          0, 0, 0, 0, 0, 0, 0, 1,
        ]),
        makeListNode([5, 6, 4])
      )
    ).toEqual(
      makeListNode([
        6, 6, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 1,
      ])
    );
  });
});
